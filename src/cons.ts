import { Recurse } from "./util";

export type Nil = null;

export type Cons<X, XS> = [X, XS];

export type Car<XS> = XS extends Cons<infer Y, infer _YS> ? Y : never;

export type Cdr<XS> = XS extends Cons<infer _Y, infer YS> ? YS : never;

export type ToConsList<XS extends unknown[]> =
    XS extends [] ? Nil
  : XS extends [infer Y, ...infer YS] ? [Y, ToConsList<YS>]
  : never;

export type FromRevConsList<XS, YS extends unknown[] = []> = Recurse<FromRevConsListSub<XS, YS>>;

type FromRevConsListSub<XS, YS extends unknown[]> =
  XS extends Nil
    ? YS
    : { __rec: FromRevConsListSub<Cdr<XS>, [Car<XS>, ...YS]> };
