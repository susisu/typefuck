import { Recurse } from "./util";

export type Nil = null;

export type Cons<X, XS> = [X, XS];

export type Car<XS> = XS extends Cons<infer Y, infer _YS> ? Y : never;

export type Cdr<XS> = XS extends Cons<infer _Y, infer YS> ? YS : never;

export type ToConsList<XS extends unknown[]> =
    XS extends [] ? Nil
  : ((...xs: XS) => unknown) extends (y: infer Y, ...ys: infer YS) => unknown ? [Y, ToConsList<YS>]
  : never;

export type FromRevConsList<XS, YS extends unknown[] = []> = Recurse<FromRevConsListSub<XS, YS>>;

type FromRevConsListSub<XS, YS extends unknown[] = []> =
  XS extends Nil
    ? YS
    : { __rec: FromRevConsListSub<Cdr<XS>, Unshift<Car<XS>, YS>> };

type Unshift<X, XS extends unknown[]> =
  ((x: X, ...xs: XS) => unknown) extends (...ys: infer YS) => unknown ? YS : never;
