import { Nil, Cons, Car, Cdr } from "./cons";

export type Memory<L, H, R,> = {
  left: L,
  head: H,
  right: R,
};

export type Read<M> = M extends Memory<infer _L, infer H, infer _R> ? H : never;

export type Write<M, B> = M extends Memory<infer L, infer _H, infer R> ? Memory<L, B, R> : never;

export type MoveL<M> = M extends Memory<infer L, infer H, infer R> ? (
  L extends Nil
    ? Memory<Nil, 0x0, Cons<H, R>>
    : Memory<Cdr<L>, Car<L>, Cons<H, R>>
) : never;

export type MoveR<M> = M extends Memory<infer L, infer H, infer R> ? (
  R extends Nil
    ? Memory<Cons<H, L>, 0x0, Nil>
    : Memory<Cons<H, L>, Car<R>, Cdr<R>>
) : never;
