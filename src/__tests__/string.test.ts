import { Head, Tail, Append } from "../string";
import { Assert, Equal } from "./assert";

export type Test_Head_0 = Assert<Equal<Head<"">, never>>;
export type Test_Head_1 = Assert<Equal<Head<"\x42">, "\x42">>;
export type Test_Head_2 = Assert<Equal<Head<"\x42\x84">, "\x42">>;

export type Test_Tail_0 = Assert<Equal<Tail<"">, never>>;
export type Test_Tail_1 = Assert<Equal<Tail<"\x42">, "">>;
export type Test_Tail_2 = Assert<Equal<Tail<"\x42\x84">, "\x84">>;

export type Test_Append_0 = Assert<Equal<Append<"\x42", "">, "\x42">>;
export type Test_Append_1 = Assert<Equal<Append<"\x42", "\x84">, "\x42\x84">>;
export type Test_Append_2 = Assert<Equal<Append<"", "\x42">, "\x42">>;
export type Test_Append_3 = Assert<Equal<Append<"\x84", "\x42">, "\x84\x42">>;
