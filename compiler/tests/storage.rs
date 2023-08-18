//! storage tests
#![cfg(test)]

use anyhow::Result;
use zint::{Bytes32, InstructionResult, EVM};

mod common;

#[ignore]
#[test]
fn basic() -> Result<()> {
    let bytecode = common::load("storage", "basic")?;
    let info = EVM::run(&bytecode, &42.to_bytes32());

    assert_eq!(info.instr, InstructionResult::Return);
    assert_eq!(info.ret, 42.to_bytes32());

    Ok(())
}
