//! Memory operations

#[link(wasm_import_module = "memory")]
extern "C" {
    /// Read memory at the given offset with size.
    pub fn read_at(offest: u32, size: u32);

    /// Write memory at the given offset with size.
    pub fn write_at(offest: u32, size: u32);
}