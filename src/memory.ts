import { Head, Tail, Append } from "./string";

/**
 * `Memory<L, H, R>` represents a snapshot of the memory.
 *
 * The memory can be thought as an infinite string of characters spreading to both left and right.
 * `H` is the character at the memory head.
 * `L` and `R` are the character strings that are on the left and right sides of the memory head.
 * When the memory head moves left / right and `L` / `R` is empty, it is expanded by appending \x00.
 */
export type Memory<L, H, R> = {
  left: L,
  head: H,
  right: R,
};

/**
 * `Read<M>` reads the character at the memory head.
 */
export type Read<M> = M extends Memory<infer _L, infer H, infer _R> ? H : never;

/**
 * `Writes<M, C>` writes a character `C` at the memory head.
 */
export type Write<M, C> = M extends Memory<infer L, infer _H, infer R> ? Memory<L, C, R> : never;

/**
 * `MoveL<M>` moves the memory head left.
 */
export type MoveL<M> = M extends Memory<infer L, infer H, infer R> ? (
  L extends ""
    ? Memory<"", "\x00", Append<H, R>>
    : Memory<Tail<L>, Head<L>, Append<H, R>>
) : never;

/**
 * `MoveR<M>` moves the memory head right.
 */
export type MoveR<M> = M extends Memory<infer L, infer H, infer R> ? (
  R extends ""
    ? Memory<Append<H, L>, "\x00", "">
    : Memory<Append<H, L>, Head<R>, Tail<R>>
) : never;
