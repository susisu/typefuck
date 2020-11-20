import { Incr, Decr } from "../char";
import { Assert, Equal } from "./assert";

export type Test_Incr_0 = Assert<Equal<Incr<"\x00">, "\x01">>;
export type Test_Incr_1 = Assert<Equal<Incr<"\x7F">, "\x80">>;
export type Test_Incr_2 = Assert<Equal<Incr<"\xFF">, "\x00">>;
export type Test_Incr_3 = Assert<Equal<Incr<"あ">, "\x00">>;

export type Test_Decr_0 = Assert<Equal<Decr<"\x00">, "\xFF">>;
export type Test_Decr_1 = Assert<Equal<Decr<"\x80">, "\x7F">>;
export type Test_Decr_2 = Assert<Equal<Decr<"\xFF">, "\xFE">>;
export type Test_Decr_3 = Assert<Equal<Decr<"あ">, "\x00">>;
