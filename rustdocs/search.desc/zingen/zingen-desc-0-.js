searchState.loadedDescShard("zingen", 0, "Code generation library for zink.\nFailed to parse function ABI.\nLow level assembler implementation for EVM.\nMaximum size of a evm bytecode in bytes.\nFailed to parse WASM with binary reader.\nThe block control stack frame.\nCode generation buffer.\nFailed to push more data to the buffer.\nCode section for EVM.\nContract constructor.\nThe control stack.\nHolds the necessary metadata to support the smission of …\nThe type of the control stack frame.\nFailed to pop control stack frame.\nData not found in data section.\nCode generator for EVM dispatcher.\nFailed to register program counter to function index.\nFailed to merge jump table.\nThe else control stack frame.\nContains the error value\nCodegen error\nFailed to find ext function index in jump table.\nFailed to find function index in jump table.\nFailed to find function index in jump table.\nThe code generation abstraction.\nFailed to find host function in compiler.\nThe if control stack frame.\nFailed to find imported function by index in jump table.\nInitial storage of contracts\nFailed to get data from the provided offset.\nFailed to get data from the provided offset.\nFailed to get frame info of the given depth.\nFailed to mark else block for if block.\nFailed parse function signature.\nFailed to get local with given index.\nFailed to get the offset of the given memory pointer.\nFailed to construct program counter for jump.\nFailed to parse function selector.\nJump table implementation.\nFailed to patch jump destination.\nFailed to define local variable since the index is out of …\nFailed to get local variables.\nA local slot.\nSolidity’s implementation uses 16 slots for locals. ref: …\nThe loop control stack frame.\nEVM MacroAssembler.\nFailed to index data on memory.\nContains the success value\nCodegen result\nFailed to find function selectors.0\nFailed to index data on stack.\nFailed to pop stack.\nFailed to increment stack pointer.\nFailed to decrement stack pointer.\nFailed to queue host functions.\nABI for the current function\nAbi of this function,\nLow level assembler implementation for EVM.\nCode buffer\nLow level assembler.\nBacktrace support for the code generation.\nThe backtrace.\nBuffer of the assembler.\nCode section.\nCode generators\nData structures for control flow emission.\nControl stack frames.\nWASM environment\nWASM environment.\nFunction table.\nModule functions\nFunction table.\nGas counter.\nThe type contained by this local slot.\nIf this function is the main function.\nJump table implementation.\nJump table.\nWASM local slot.\nThe defined locals for a function.\nMacroAssembler used by the code generation.\nThe macro assembler.\nCode generator.\nMemory pointer for byte offset.\nThe offset of the code section\nThe program counter offset at the beginning of if.\nOriginal stack pointer.\nCodegen results\nThe return values of the block.\nStack pointer, maximum 1024 items.\nStack pointer of the local slot.\nStack frames for control flow.\nJump table\nThe jump table.\nThe function type.\nThe type of the control stack frame.\nThe type of this local slot.\nPre-visitor for parsing WASM.\nThis module is the central place for machine code emission.\nWASM related primitives.\nLow level assembler implementation for EVM.\nEmit ADD\nEmit ADDMOD\nEmit ADDRESS\nEmit AND\nEmit BALANCE\nEmit BLOCKHASH\nEmit BYTE\nEmit CALL\nEmit CALLCODE\nEmit CALLDATACOPY\nEmit CALLDATALOAD\nEmit CALLDATASIZE\nEmit CALLER\nEmit CALLVALUE\nEmit CODECOPY\nEmit CODESIZE\nEmit COINBASE\nEmit CREATE\nEmit CREATE2\nEmit DELEGATECALL\nEmit DIFFICULTY\nEmit DIV\nEmit DUP1\nEmit DUP10\nEmit DUP11\nEmit DUP12\nEmit DUP13\nEmit DUP14\nEmit DUP15\nEmit DUP16\nEmit DUP2\nEmit DUP3\nEmit DUP4\nEmit DUP5\nEmit DUP6\nEmit DUP7\nEmit DUP8\nEmit DUP9\nEmit EQ\nEmit EXP\nEmit EXTCODECOPY\nEmit EXTCODESIZE\nEmit GAS\nEmit GASLIMIT\nEmit GASPRICE\nEmit GT\nEmit INVALID\nEmit ISZERO\nEmit JUMP\nEmit JUMPDEST\nEmit JUMPI\nEmit KECCAK256\nEmit LOG0\nEmit LOG1\nEmit LOG2\nEmit LOG3\nEmit LOG4\nEmit LT\nEmit MLOAD\nEmit MOD\nEmit MSIZE\nEmit MSTORE\nEmit MSTORE8\nEmit MUL\nEmit MULMOD\nEmit NOT\nEmit NUMBER\nEmit OR\nEmit ORIGIN\nEmit PC\nEmit POP\nEmit PUSH0\nEmit PUSH1\nEmit PUSH10\nEmit PUSH11\nEmit PUSH12\nEmit PUSH13\nEmit PUSH14\nEmit PUSH15\nEmit PUSH16\nEmit PUSH17\nEmit PUSH18\nEmit PUSH19\nEmit PUSH2\nEmit PUSH20\nEmit PUSH21\nEmit PUSH22\nEmit PUSH23\nEmit PUSH24\nEmit PUSH25\nEmit PUSH26\nEmit PUSH27\nEmit PUSH28\nEmit PUSH29\nEmit PUSH3\nEmit PUSH30\nEmit PUSH31\nEmit PUSH32\nEmit PUSH4\nEmit PUSH5\nEmit PUSH6\nEmit PUSH7\nEmit PUSH8\nEmit PUSH9\nEmit RETURN\nEmit RETURNDATACOPY\nEmit RETURNDATASIZE\nEmit REVERT\nEmit SAR\nEmit SDIV\nEmit SELFDESTRUCT\nEmit SGT\nEmit SHL\nEmit SHR\nEmit SIGNEXTEND\nEmit SLOAD\nEmit SLT\nEmit SMOD\nEmit SSTORE\nEmit STATICCALL\nEmit STOP\nEmit SUB\nEmit SWAP1\nEmit SWAP10\nEmit SWAP11\nEmit SWAP12\nEmit SWAP13\nEmit SWAP14\nEmit SWAP15\nEmit SWAP16\nEmit SWAP2\nEmit SWAP3\nEmit SWAP4\nEmit SWAP5\nEmit SWAP6\nEmit SWAP7\nEmit SWAP8\nEmit SWAP9\nEmit TIMESTAMP\nEmit XOR\nBuffer of the assembler.\nBuffer of the assembler.\nMutable buffer of the assembler.\nDecrement memory pointer\nDecrement stack pointer\nEmit a byte.\nEmit a single opcode.\nEmit n bytes.\nReturns the argument unchanged.\nGas counter.\nIncrement the gas counter.\nIncrement memory pointer\nIncrement stack pointer\nCalls <code>U::from(self)</code>.\nMemory pointer for byte offset.\nStack pointer, maximum 1024 items.\nBacktrace implementation for the code generation.\nReturns the argument unchanged.\nCompiled instructions.\nCalls <code>U::from(self)</code>.\nPops the last instruction from the backtrace.\nPop the last <code>n</code> operands from the backtrace.\nPushes a new instruction set to the backtrace.\nTable for the code section.\nContract constructor.\nCode generator for EVM dispatcher.\nCode generation implementation.\nCode section for EVM.\nExternal function in code section.\nThe bytecode of the external function.\nGet the bytecode of the code section.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the functions in the code section.\nFunction table.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new code section.\nGet the current offset of the code section.\nThe offset of the code section\nGet the offset of a function.\nShift the code section.\nStack output.\nStack input.\nAdd a function to the code section.\nContract constructor.\nInitial storage of contracts\nConcat the constructor code.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCode generator.\nReturns the offset of runtime bytecode.\npreset storage for the contract\nCode generator for EVM dispatcher.\nABI for the current function\nCode buffer\nEmit selector to buffer.\nWASM environment\nEmit return of ext function.\nEmit compiled code to the given buffer.\nReturns the argument unchanged.\nModule functions\nCalls <code>U::from(self)</code>.\nCreate dispatcher with functions.\nJump table\nThe code generation abstraction.\nThe begeinning of a block construct. A sequence of …\nBranch to a given label in an enclosing construct.\nPerforms a conditional branch if i32 is non-zero.\nA jump table which jumps to a label in an enclosing …\nThe call instruction calls a function specified by its …\nThe call indirect instruction calls a function indirectly …\nMarks an else block of an if.\nHandle the end of instructions for different situations.\nThis instruction gets the value of a variable.\nThis instruction sets the value of a variable.\nThe beginning of an if construct with an implicit block.\nThis instruction gets the value of a variable.\nLocal get from calldata.\nLocal get for variables.\nThis instruction sets the value of a variable.\nThis _local_tee is like _local_set, but it also returns …\nA block with a label which may be used to form loops.\nPerform nothing in EVM bytecode.\nThe select instruction selects one of its first two …\nMark as invalid for now.\nAbi of this function,\nThe backtrace.\nCall imported functions\nCall internal functions\nControl stack frames.\nEmit function locals\nEmit function operators.\nWASM environment.\nFinish code generation.\nReturns the argument unchanged.\nHandle the return of a call.\nHandle the popping of a frame.\nHandle jumpdest.\nHandle the end of the function.\nCalls <code>U::from(self)</code>.\nIf this function is the main function.\nThe defined locals for a function.\nLog a message with topics.\nParse log data from the bytecode.\nThe macro assembler.\nCreate a new code generator.\nThe jump table.\nThe function type.\nThe block control stack frame.\nThe control stack.\nHolds the necessary metadata to support the smission of …\nThe type of the control stack frame.\nThe else control stack frame.\nThe if control stack frame.\nThe loop control stack frame.\nThe total depth of the control stack.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the label of the control stack frame at given depth.\nMark the else block of an if.\nCreate a new control stack frame.\nThe program counter offset at the beginning of if.\nOriginal stack pointer.\nGet the offset of the original program counter.\nPop a control stack frame.\nPush a control stack frame.\nGet the result type of the control stack frame.\nThe return values of the block.\nGet the return type of the control stack frame at given …\nStack frames for control flow.\nGet the type of the control stack frame at given depth.\nThe type of the control stack frame.\nExternal function.\nJump to function.\nJump types\nJump to the given label, the label here is the original …\noffset to the program counter.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nIf the target is a label.\nIf the target is fixed to offset of the program counter.\nProgram counter handlers.\nProgram Relocations\nJump Table\nGet the offset of the program counter for relocation.\nRelocate program counter to buffer.\nJump table implementation.\nRegister a function.\nRegister program counter to the function table.\nCode section.\nRegister the start of the program counter of the code …\nRegister a external function.\nReturns the argument unchanged.\nFunction table.\nCalls <code>U::from(self)</code>.\nJump table.\nRegister a label.\nMerge two jump tables.\nRegister a label.\nRelocate program counter to all registered labels.\nShift program counter for functions.\nShift program counter for labels.\nShift target program counter for labels.\nShift program counter for all items.\nShift the program counter of targets with given ptr and …\nShift the target program counters.\nGet the target of a jump.\nA local slot.\nThe type of a local slot.\nSolidity’s implementation uses 16 slots for locals. ref: …\nA function parameter.\nA local variable.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet local from index.\nGet mutate local from index.\nThe type contained by this local slot.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf the locals are empty.\nGet the length of locals\nCreate a new local slot.\nGet the lower significant bytes of the byte offset of a …\nPush a local slot.\nStack pointer of the local slot.\nGet the type of this local slot.\nThe type of this local slot.\nGet the value type of this local slot.\nEVM MacroAssembler.\nInfo for memory position.\nAbsolute value\nCeiling operator\nsign-agnostic count leading zero bits\nConvert a signed 32-bit integer to a (32-bit/64-bit) float\nConvert an unsigned 32-bit integer to a (32-bit/64-bit) …\nConvert a signed 32-bit integer to a (32-bit/64-bit) float\nConvert a unsigned 32-bit integer to a (32-bit/64-bit) …\nIf z1 and z2 have the same sign, return z1, otherwise …\nsign-agnostic count leading zero bits\nThe drop instruction simply throw away a single operand.\nSimple not operator\nPush a 32-bit float value on the stack.\nTruncate a 64-bit float to a signed 32-bit integer.\nConvert a 32-bit float to a signed 32-bit integer.\nPush a 64-bit float value on the stack.\nTruncate a 64-bit float to an unsigned 32-bit integer.\nConvert a 64-bit float to a signed 64-bit integer.\nFloor operator\nGreater than or equal comparison.\nGreater than comparison.\nPush a 32-bit integer value on the stack.\nConvert a signed 32-bit integer to a 32-bit float.\nwrap a 64-bit integer to a 32-bit integer.\nPush a 64-bit integer value on the stack.\nExtend a signed 32-bit integer to a 64-bit integer.\nExtend an unsigned 32-bit integer to a 64-bit integer.\nConvert a signed 64-bit integer to a 64-bit float.\nGreater than or equal comparison.\nLoad n bytes to extend self as another number type.\nLoad 2 bytes to extend self as another number type.\nLoad 4 bytes to extend self as another number type.\nLoad 1 byte to extend self as another number type.\nless than comparison.\nMaximum of two values\nThe memory grow instruction grows memory by a given delta …\nThe memory size instruction returns the current size of …\nMinimum of two values\nSign-agnostic compare unequal.\nRound to nearest integer, ties to even.\nNegation\nsign-agnostic count number of one bits\nReturn zero or more values from the function.\nsign-agnostic rotate left\nsign-agnostic rotate right\nGreater than or equal comparison.\nGreater than and equal comparison.\nGreater than or equal comparison.\nFunction <code>sload</code> from EVM which is not available in WASM.\nless than or equal comparison.\nSquare root\nFunction <code>sstore</code> from EVM which is not available in WASM.\nStore n bytes in memory.\nWrap self to i16 and store 2 bytes\nWrap self to i32 and store 4 bytes\nWrap self to i8 and store 1 byte\nSub two numbers.\nRound to nearest integer towards zero\nTruncate a 32-bit float to an integer\nTruncate a 64-bit float to an integer\nLow level assembler.\nHandle the return of a call.\nDuplicate stack item by target index.\nEmbedded Function implementations\nFloat Instructions\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn with nothing.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nHandle the end of the main function.\nMemory Instructions\nStore data in memory with at current memory byte pointer.\nStore data in memory at offset.\nWrite bytes to memory.\nGet byte offset of the memory pointer.\nMemory offset.\nGet the current program counter offset.\nPlace n bytes on stack.\nReturn handlers\nShift the program counter to the bottom or the top of the …\nMemory size\nGet the stack pointer.\nStack Instructions\nSwap memory by target index.\nFailed to parse function ABI.\nFailed to parse WASM with binary reader.\nFailed to push more data to the buffer.\nFailed to pop control stack frame.\nData not found in data section.\nFailed to register program counter to function index.\nFailed to merge jump table.\nContains the error value\nCodegen error\nFailed to find ext function index in jump table.\nFailed to find function index in jump table.\nFailed to find function index in jump table.\nFailed to find host function in compiler.\nFailed to find imported function by index in jump table.\nFailed to get data from the provided offset.\nFailed to get data from the provided offset.\nFailed to get frame info of the given depth.\nFailed to mark else block for if block.\nFailed parse function signature.\nFailed to get local with given index.\nFailed to get the offset of the given memory pointer.\nFailed to construct program counter for jump.\nFailed to parse function selector.\nFailed to patch jump destination.\nFailed to define local variable since the index is out of …\nFailed to get local variables.\nFailed to index data on memory.\nContains the success value\nCodegen result\nFailed to find function selectors.0\nFailed to index data on stack.\nFailed to pop stack.\nFailed to increment stack pointer.\nFailed to decrement stack pointer.\nFailed to queue host functions.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA pre-visitor that validates the WASM and then visits it.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\ncall instructions\nControl flow visitors\nCase handlers\nA macro to define unsupported WebAssembly operators.\nLocal instructions\nSystem instructions\nImplement arithmetic operators for types.\ncheck equal of two addresses\nData section conversion\nEmit ABI to the compiler.\nA struct that holds the environment wasm module.\nEVM assemble operations.\nWASM export section\nFunction with validator.\nWASM Functions by indexes.\nEVM built-in function.\nWASM import section\nNo operations, this only covers <code>push_$ty</code> at the moment.\nOutput buffer\nGet the offset of this type in the lowest significant …\nWASM type size for the stack representation of EVM.\nWASM ABI\nFunction body.\nDataset in code generation\nWASM data slots\nWASM exports\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFunction handler\nHost functions\nWASM imports\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf the function is <code>emit_abi</code>.\nIf the present function index is the main function\nLoad abi from function\nLoad abis from functions\nQuery exported function from selector.\nGet all function selectors\nSize in bytes.\nConvert self to the lowest significant bytes.\nFunction validator.\nThe alignment mask for 32 bytes (32 - 1).\nOutput buffer\nGet the offset of this type in the lowest significant …\nWASM type size for the stack representation of EVM.\nAlignment the size of this type to bytes32 for the stack …\nAlignment the size of this type to bytes32 for the stack …\nSize in bytes.\nConvert self to the lowest significant bytes.\nData section conversion\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nLoad data from offset and size\nFunction with validator.\nWASM Functions by indexes.\nAdd function to the list.\nFunction body.\nRemove all selector functions\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet function index.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet all functions\nGet the function signature.\nFunction validator.\ncheck equal of two addresses\nEmit ABI to the compiler.\nEVM assemble operations.\nEVM built-in function.\nNo operations, this only covers <code>push_$ty</code> at the moment.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nStack input size.\nStack output size.")