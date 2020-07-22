import { Cons, Car, Cdr, Reverse } from "../list";
import { Assert, Equal } from "./assert";

export type Test_Cons_0 = Assert<Equal<Cons<42, []>, [42]>>;
export type Test_Cons_1 = Assert<Equal<Cons<42, [84]>, [42, 84]>>;

export type Test_Car_0 = Assert<Equal<Car<[]>, never>>;
export type Test_Car_1 = Assert<Equal<Car<[42]>, 42>>;
export type Test_Car_2 = Assert<Equal<Car<[42, 84]>, 42>>;

export type Test_Cdr_0 = Assert<Equal<Cdr<[]>, never>>;
export type Test_Cdr_1 = Assert<Equal<Cdr<[42]>, []>>;
export type Test_Cdr_2 = Assert<Equal<Cdr<[42, 84]>, [84]>>;

export type Test_Reverse_0 = Assert<Equal<Reverse<[]>, []>>;
export type Test_Reverse_1 = Assert<Equal<Reverse<[42, 84]>, [84, 42]>>;
