//! Zinkc result

/// Zinkc errors
#[derive(Debug, thiserror::Error)]
pub enum Error {
    /// Failed to do sth.
    #[error(transparent)]
    Anyhow(#[from] anyhow::Error),
    /// Failed to parse WASM with binary reader.
    #[error(transparent)]
    BinaryReader(#[from] wasmparser::BinaryReaderError),
    /// Failed to push more data to the buffer.
    #[error("Buffer overflow: {0}, the limit of the binary buffer is 0x6000.")]
    BufferOverflow(usize),
    /// Failed in code generation.
    #[error(transparent)]
    Codegen(#[from] zingen::Error),
    /// Failed parse function signature.
    #[error("Invalid function signature")]
    InvalidFunctionSignature,
    /// Failed to parse WASM with leb128 reader.
    #[error(transparent)]
    Leb128(#[from] leb128::read::Error),
}

/// Zinkc result
pub type Result<T> = std::result::Result<T, Error>;
