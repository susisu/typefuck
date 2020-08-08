import { Memory, Read, Write, MoveL, MoveR } from "../memory";
import { Assert, Equal } from "./assert";

type Mem0 = Memory<[], 42, []>;
type Mem1 = Memory<[41], 42, [43]>;

export type Test_Read_0 = Assert<Equal<Read<Mem0>, 42>>;
export type Test_Read_1 = Assert<Equal<Read<Mem1>, 42>>;

export type Test_Write_0 = Assert<Equal<Write<Mem0, 84>, Memory<[], 84, []>>>;
export type Test_Write_1 = Assert<Equal<Write<Mem1, 84>, Memory<[41], 84, [43]>>>;

export type Test_MoveL_0 = Assert<Equal<MoveL<Mem0>, Memory<[], 0, [42]>>>;
export type Test_MoveL_1 = Assert<Equal<MoveL<Mem1>, Memory<[], 41, [42, 43]>>>;

export type Test_MoveR_0 = Assert<Equal<MoveR<Mem0>, Memory<[42], 0, []>>>;
export type Test_MoveR_1 = Assert<Equal<MoveR<Mem1>, Memory<[42, 41], 43, []>>>;
