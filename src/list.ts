import { Recurse } from "./util";

export type Nil = [];

export type Cons<X, XS> = XS extends unknown[] ? [X, ...XS] : never;

export type Car<XS> = XS extends [infer Y, ...infer _YS] ? Y : never;

export type Cdr<XS> = XS extends [infer _Y, ...infer YS] ? YS : never;

export type Reverse<XS> = XS extends unknown[] ? Recurse<ReverseSub<XS, []>> : never;

type ReverseSub<XS extends unknown[], YS extends unknown[]> =
    XS extends Nil ? YS
  : XS extends [infer Z, ...infer ZS] ? { __rec: ReverseSub<ZS, [Z, ...YS]> }
  : never;
