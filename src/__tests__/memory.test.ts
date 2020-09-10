import { Memory, Read, Write, MoveL, MoveR } from "../memory";
import { Assert, Equal } from "./assert";

type Mem0 = Memory<"", "\x42", "">;
type Mem1 = Memory<"\x41", "\x42", "\x43">;

export type Test_Read_0 = Assert<Equal<Read<Mem0>, "\x42">>;
export type Test_Read_1 = Assert<Equal<Read<Mem1>, "\x42">>;

export type Test_Write_0 = Assert<Equal<Write<Mem0, "\x84">, Memory<"", "\x84", "">>>;
export type Test_Write_1 = Assert<Equal<Write<Mem1, "\x84">, Memory<"\x41", "\x84", "\x43">>>;

export type Test_MoveL_0 = Assert<Equal<MoveL<Mem0>, Memory<"", "\x00", "\x42">>>;
export type Test_MoveL_1 = Assert<Equal<MoveL<Mem1>, Memory<"", "\x41", "\x42\x43">>>;

export type Test_MoveR_0 = Assert<Equal<MoveR<Mem0>, Memory<"\x42", "\x00", "">>>;
export type Test_MoveR_1 = Assert<Equal<MoveR<Mem1>, Memory<"\x42\x41", "\x43", "">>>;
