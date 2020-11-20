import { Head, Tail, Cons } from "../list";
import { Assert, Equal } from "./assert";

export type Test_Head_0 = Assert<Equal<Head<[]>, never>>;
export type Test_Head_1 = Assert<Equal<Head<[42]>, 42>>;
export type Test_Head_2 = Assert<Equal<Head<[42, 84]>, 42>>;

export type Test_Tail_0 = Assert<Equal<Tail<[]>, never>>;
export type Test_Tail_1 = Assert<Equal<Tail<[42]>, []>>;
export type Test_Tail_2 = Assert<Equal<Tail<[42, 84]>, [84]>>;

export type Test_Cons_0 = Assert<Equal<Cons<42, []>, [42]>>;
export type Test_Cons_1 = Assert<Equal<Cons<42, [84]>, [42, 84]>>;
