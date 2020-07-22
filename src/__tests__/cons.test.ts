import { Nil, Cons, Car, Cdr, ToConsList, FromRevConsList } from "../cons";
import { Assert, Equal } from "./assert";

export type Test_Car_0 = Assert<Equal<Car<Nil>, never>>;
export type Test_Car_1 = Assert<Equal<Car<Cons<42, Nil>>, 42>>;
export type Test_Car_2 = Assert<Equal<Car<Cons<42, Cons<84, Nil>>>, 42>>;

export type Test_Cdr_0 = Assert<Equal<Cdr<Nil>, never>>;
export type Test_Cdr_1 = Assert<Equal<Cdr<Cons<42, Nil>>, Nil>>;
export type Test_Cdr_2 = Assert<Equal<Cdr<Cons<42, Cons<84, Nil>>>, Cons<84, Nil>>>;

export type Test_ToConsList_0 = Assert<Equal<ToConsList<[]>, Nil>>;
export type Test_ToConsList_1 = Assert<Equal<ToConsList<[42, 84]>, Cons<42, Cons<84, Nil>>>>;

export type Test_FromRevConsList_0 = Assert<Equal<FromRevConsList<Nil>, []>>;
export type Test_FromRevConsList_1 = Assert<Equal<FromRevConsList<Cons<42, Cons<84, Nil>>>, [84, 42]>>;
