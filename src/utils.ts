/**
 * `Recurse<T>` is a utility to compute recursive types.
 *
 * TypeScript compiler has a tight limit on recursion depth in types.
 * `Recurse<T>` avoids this limit and computes types in logarithmic order of recursion depth.
 *
 * ref. https://susisu.hatenablog.com/entry/2020/09/12/214343
 */
export type Recurse<T> = T extends { __rec: unknown } ? Recurse<RecurseSub<T>> : T;

type RecurseSub<T> =
  T extends { __rec: never } ? never
  : T extends { __rec: { __rec: infer U } } ? { __rec: RecurseSub<U> }
  : T extends { __rec: infer U } ? U
  : T;
