use crate::{ffi, storage::StorageValue, Asm};

/// Account address
#[repr(C)]
#[derive(Clone, Copy)]
pub struct U256(
    #[cfg(target_family = "wasm")] i32,
    #[cfg(not(target_family = "wasm"))] [u8; 32],
);

impl U256 {
    /// Returns empty address
    #[cfg(not(target_family = "wasm"))]
    pub const fn empty() -> Self {
        U256([0; 32])
    }
}

impl Asm for U256 {
    fn push(self) {
        unsafe { ffi::asm::push_u256(self) }
    }

    #[cfg(not(target_family = "wasm"))]
    fn bytes32(&self) -> [u8; 32] {
        self.0
    }
}

impl StorageValue for U256 {
    fn sload() -> Self {
        unsafe { ffi::asm::sload_u256() }
    }
}
