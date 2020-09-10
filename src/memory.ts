import { Head, Tail, Append } from "./string";

export type Memory<L, H, R,> = {
  left: L,
  head: H,
  right: R,
};

export type Read<M> = M extends Memory<infer _L, infer H, infer _R> ? H : never;

export type Write<M, B> = M extends Memory<infer L, infer _H, infer R> ? Memory<L, B, R> : never;

export type MoveL<M> = M extends Memory<infer L, infer H, infer R> ? (
  L extends ""
    ? Memory<"", "\x00", Append<H, R>>
    : Memory<Tail<L>, Head<L>, Append<H, R>>
) : never;

export type MoveR<M> = M extends Memory<infer L, infer H, infer R> ? (
  R extends ""
    ? Memory<Append<H, L>, "\x00", "">
    : Memory<Append<H, L>, Head<R>, Tail<R>>
) : never;
