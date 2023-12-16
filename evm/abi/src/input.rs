//! Input of solidity ABI.

use core::{convert::Infallible, str::FromStr};

/// Input of solidity ABI.
#[derive(Clone, Debug, Default)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct Input {
    /// Name of the input.
    pub name: String,
    /// Type of the input.
    pub ty: Param,
}

/// The canonical type of the parameter.
#[derive(Clone, Debug, Default)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum Param {
    /// A 32-bit integer.
    Int32,
    /// A 64-bit integer.
    Int64,
    /// A 32-bit unsigned integer.
    UInt32,
    /// A 64-bit unsigned integer.
    UInt64,
    /// An unknown type.
    #[default]
    Unknown,
}

impl From<&str> for Param {
    fn from(s: &str) -> Self {
        match s {
            "i32" | "int32" => Param::Int32,
            "i64" | "int64" => Param::Int64,
            "u32" | "uint32" => Param::UInt32,
            "usize" | "u64" | "uint64" => Param::UInt64,
            _ => Param::Unknown,
        }
    }
}

impl FromStr for Param {
    type Err = Infallible;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        Ok(Self::from(s))
    }
}

impl AsRef<str> for Param {
    fn as_ref(&self) -> &str {
        match self {
            Param::Int32 => "int32",
            Param::Int64 => "int64",
            Param::UInt32 => "uint32",
            Param::UInt64 => "uint64",
            Param::Unknown => "unknown",
        }
    }
}

#[cfg(feature = "syn")]
impl From<&Box<syn::Type>> for Param {
    fn from(ty: &Box<syn::Type>) -> Self {
        use quote::ToTokens;

        let ident = ty.into_token_stream().to_string();
        Self::from(ident.as_str())
    }
}
