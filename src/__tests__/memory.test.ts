import { Memory, Read, Write, MoveL, MoveR } from "../memory";
import { Nil, Cons } from "../cons";
import { Assert, Equal } from "./util";

type Mem0 = Memory<Nil, 42, Nil>;
type Mem1 = Memory<Cons<41, Nil>, 42, Cons<43, Nil>>;

export type Test_Read_0 = Assert<Equal<Read<Mem0>, 42>>;
export type Test_Read_1 = Assert<Equal<Read<Mem1>, 42>>;

export type Test_Write_0 = Assert<Equal<Write<Mem0, 84>, Memory<Nil, 84, Nil>>>;
export type Test_Write_1 = Assert<Equal<Write<Mem1, 84>, Memory<Cons<41, Nil>, 84, Cons<43, Nil>>>>;

export type Test_MoveL_0 = Assert<Equal<MoveL<Mem0>, Memory<Nil, 0, Cons<42, Nil>>>>;
export type Test_MoveL_1 = Assert<Equal<MoveL<Mem1>, Memory<Nil, 41, Cons<42, Cons<43, Nil>>>>>;

export type Test_MoveR_0 = Assert<Equal<MoveR<Mem0>, Memory<Cons<42, Nil>, 0, Nil>>>;
export type Test_MoveR_1 = Assert<Equal<MoveR<Mem1>, Memory<Cons<42, Cons<41, Nil>>, 43, Nil>>>;
