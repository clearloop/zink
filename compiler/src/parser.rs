//! Zink parser

use crate::{Error, Result};
use std::iter::IntoIterator;
use wasmparser::{
    Data, DataKind, Export, ExternalKind, Import, Operator, Payload, SectionLimited, TypeRef,
    ValidPayload, Validator,
};
use zingen::{DataSet, Exports, Func, Functions, Imports};

/// WASM module parser
#[derive(Default)]
pub struct Parser<'p> {
    pub imports: Imports,
    pub data: DataSet,
    pub funcs: Functions<'p>,
    pub exports: Exports,
}

impl<'p> Parser<'p> {
    /// Parse WASM module.
    pub fn parse(&mut self, wasm: &'p [u8]) -> Result<()> {
        let mut validator = Validator::new();

        // Compile functions.
        for payload in wasmparser::Parser::new(0).parse_all(wasm) {
            let payload = payload?;
            let valid_payload = validator.payload(&payload)?;

            match &payload {
                Payload::ImportSection(reader) => self.imports = Self::imports(reader),
                Payload::DataSection(reader) => self.data = Self::data(reader)?,
                Payload::ExportSection(reader) => self.exports = Self::exports(reader)?,
                _ => {}
            }

            if let ValidPayload::Func(to_validator, body) = valid_payload {
                self.funcs
                    .add(to_validator.into_validator(Default::default()), body);
            }
        }

        Ok(())
    }

    /// Parse data section.
    pub fn data(reader: &SectionLimited<Data>) -> Result<DataSet> {
        let mut dataset = DataSet::default();
        let mut iter = reader.clone().into_iter();
        while let Some(Ok(data)) = iter.next() {
            if let DataKind::Active {
                memory_index: _,
                offset_expr,
            } = data.kind
            {
                // [i32.const offset call_indirect]
                let mut reader = offset_expr.get_binary_reader();
                let Operator::I32Const { value: offset } = reader.read_operator()? else {
                    return Err(Error::InvalidDataOffset);
                };

                dataset.insert(offset, data.data.into());
            }
        }

        Ok(dataset)
    }

    /// Parse export section
    pub fn exports(reader: &SectionLimited<Export>) -> Result<Exports> {
        let mut exports = Exports::default();
        let mut iter = reader.clone().into_iter();
        while let Some(Ok(Export {
            name,
            kind: ExternalKind::Func,
            index,
        })) = iter.next()
        {
            exports.add(index, name);
        }

        Ok(exports)
    }

    /// Parse import section.
    pub fn imports(reader: &SectionLimited<Import>) -> Imports {
        // TODO: use real index from WASM. (#122)
        let mut index = 0;

        let mut imports = Imports::default();
        let mut iter = reader.clone().into_iter();
        while let Some(Ok(Import {
            module,
            name,
            ty: TypeRef::Func(_),
        })) = iter.next()
        {
            if let Ok(func) = Func::try_from((module, name)) {
                tracing::trace!("imported function: {}::{} at {index}", module, name);
                imports.insert(index, func);
                index += 1;
            }
        }

        imports
    }
}

impl<'p> TryFrom<&'p [u8]> for Parser<'p> {
    type Error = Error;

    fn try_from(wasm: &'p [u8]) -> Result<Self> {
        let mut parser = Self::default();
        parser.parse(wasm)?;
        Ok(parser)
    }
}