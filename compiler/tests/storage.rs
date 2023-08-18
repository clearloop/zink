//! storage tests
#![cfg(test)]

use anyhow::Result;
use zint::{Bytes32, InstructionResult, EVM, U256};

mod common;

#[test]
fn load() -> Result<()> {
    let bytecode = common::load("storage", "load")?;
    let key = 0;
    let value = 42;
    let info = EVM::run(&bytecode, &value.to_bytes32());

    assert_eq!(info.instr, InstructionResult::Return);
    assert_eq!(info.ret, []);
    assert_eq!(info.storage.get(&U256::from(key)), Some(&U256::from(value)));

    Ok(())
}

#[ignore]
#[test]
fn basic() -> Result<()> {
    let bytecode = common::load("storage", "basic")?;
    let info = EVM::run(&bytecode, &42.to_bytes32());

    assert_eq!(info.instr, InstructionResult::Return);
    assert_eq!(info.ret, 42.to_bytes32());

    Ok(())
}
