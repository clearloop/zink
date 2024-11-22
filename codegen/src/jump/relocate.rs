//! Program Relocations

use crate::{
    jump::{relocate, JumpTable},
    wasm::ToLSBytes,
    Buffer, Error, Result, BUFFER_LIMIT,
};
use opcodes::ShangHai as OpCode;

impl JumpTable {
    /// Relocate program counter to all registered labels.
    ///
    /// *WARNING*: This function should only be called once in the compiler.
    /// considering move it to the compiler.
    pub fn relocate(&mut self, buffer: &mut Buffer) -> Result<()> {
        // pre-calculate and shift targets
        self.shift_targets()?;
        tracing::trace!("code section offset: 0x{:x}", self.code.offset());

        // relocate functions
        while let Some((pc, jump)) = self.jump.pop_first() {
            tracing::debug!("run relocation for {jump}");
            let mut target = self.target(&jump)?;
            
            if jump.is_offset() {
                self.relocate_offset(pc, &mut target)?;
            }

            let offset = relocate::pc(buffer, pc, target)?;
            self.shift_label_pc(pc, offset as u16)?;
        }

        buffer.extend_from_slice(&self.code.finish());
        Ok(())
    }

    /// relocate the target of offset jump
    fn relocate_offset(&self, pc: u16, target: &mut u16) -> Result<()> {
        // NOTE: If the target is offset the return data is
        // the offset instead of the PC.
        *target += pc;

        // check the original pc of the offset is greater than 0xff
        if pc > 0xff {
            *target += 1;
        }

        // check if the offset of the embedded call is greater than 0xff
        if let Some((_, next_target)) = self.jump.first_key_value() {
            if next_target.is_call() && self.target(next_target)? > 0xff {
                *target += 1
            }
        }

        Ok(())
    }
}

// /// Get the offset of the program counter for relocation.
// pub fn offset(pc: u16) -> Result<u16> {
//     let mut offset = 0;
//
//     // Update the target program counter
//     {
//         // The maximum size of the PC is 2 bytes, whatever PUSH1 or PUSH32
//         // takes 1 more byte.
//         offset += 1;
//
//         // Update the program counter for the edge cases.
//         //
//         // Start from 0xff, the lowest significant bytes of the target
//         // program counter will take 2 bytes instead of 1 byte.
//         //
//         // | PC   | PC BYTES | TARGET PC |
//         // |------|----------|-----------|
//         // | 0xfe | 1        |      0xff |
//         // | 0xff | 2        |    0x0101 |
//         offset += if pc > 0xfe { 2 } else { 1 }
//     }
//
//     // Check PC range.
//     if pc + offset > BUFFER_LIMIT as u16 {
//         return Err(Error::InvalidPC((pc + offset) as usize));
//     }
//
//     Ok(offset)
// }

/// Relocate program counter to buffer.
fn pc(buffer: &mut Buffer, original_pc: u16, target_pc: u16) -> Result<usize> {
    let original_pc = original_pc as usize;
    let mut new_buffer: Buffer = buffer[..original_pc].into();
    let rest_buffer: Buffer = buffer[original_pc..].into();

    let pc_offset = target_pc.to_ls_bytes();
    if pc_offset.len() == 1 {
        new_buffer.push(OpCode::PUSH1.into());
    } else {
        new_buffer.push(OpCode::PUSH2.into());
    }

    tracing::trace!(
        "push bytes: 0x{} at 0x{}",
        hex::encode(&pc_offset),
        hex::encode(original_pc.to_ls_bytes())
    );
    new_buffer.extend_from_slice(&pc_offset);
    new_buffer.extend_from_slice(&rest_buffer);

    // Check buffer size.
    if new_buffer.len() > BUFFER_LIMIT {
        return Err(Error::BufferOverflow(new_buffer.len()));
    }

    *buffer = new_buffer;
    Ok(1 + pc_offset.len())
}
