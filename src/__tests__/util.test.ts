import { Recurse } from "../util";
import { Assert, Equal } from "./util";

export type Test_Recurse_0 = Assert<Equal<Recurse<42>, 42>>;
export type Test_Recurse_1 = Assert<Equal<Recurse<{ __rec: 42 }>, 42>>;
export type Test_Recurse_2 = Assert<Equal<Recurse<{ __rec: { __rec: 42 } }>, 42>>;
export type Test_Recurse_3 = Assert<Equal<Recurse<{ __rec: { __rec: { __rec: 42 } } }>, 42>>;
export type Test_Recurse_4 = Assert<Equal<Recurse<{ __rec: { __rec: { __rec: { __rec: 42 } } } }>, 42>>;
