//! Zink storage implementation.

use crate::{ffi, Asm};
pub use {
    array::StorageArray,
    kv::Storage,
    mapping::{Mapping, MappingKey},
};

mod array;
mod kv;
mod mapping;

/// Interface for the value of kv based storage
pub trait StorageValue: Asm {
    /// Load from storage
    fn sload() -> Self;
}

impl StorageValue for i32 {
    fn sload() -> Self {
        unsafe { ffi::asm::sload_i32() }
    }
}

impl StorageValue for u32 {
    fn sload() -> Self {
        unsafe { ffi::asm::sload_u32() }
    }
}

/// Sub index of storage
pub trait StorageIndex {
    /// Increment the index
    fn increment();

    /// Load index to stack
    fn load();
}
