//! Zink library for developing smart contracts for blockchains.

#![no_std]

mod event;
pub mod evm;
mod primitive;
mod storage;

pub use self::{event::Event, storage::Storage};
pub use zink_codegen::{storage, Event};

// Panic hook implementation
#[cfg(not(test))]
#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    loop {}
}
