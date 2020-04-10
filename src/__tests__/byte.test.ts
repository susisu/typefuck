import { Incr, Decr } from "../byte";
import { Assert, Equal } from "./util";

export type Test_Incr_0 = Assert<Equal<Incr<0x00>, 0x01>>;
export type Test_Incr_1 = Assert<Equal<Incr<0x7F>, 0x80>>;
export type Test_Incr_2 = Assert<Equal<Incr<0xFF>, 0x00>>;

export type Test_Decr_0 = Assert<Equal<Decr<0x00>, 0xFF>>;
export type Test_Decr_1 = Assert<Equal<Decr<0x80>, 0x7F>>;
export type Test_Decr_2 = Assert<Equal<Decr<0xFF>, 0xFE>>;
