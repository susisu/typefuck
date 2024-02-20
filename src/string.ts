/**
 * `Head<S>` returns the first character of a string `S`.
 */
export type Head<S> = S extends `${infer C}${infer _R}` ? C : never;

/**
 * `Tail<S>` returns a slice of a string `S` with the first character removed.
 */
export type Tail<S> = S extends `${infer _C}${infer R}` ? R : never;

/**
 * `Concat<S, T>` concatenates a string `S` to another string `T`.
 */
export type Concat<S, T> =
  S extends string ?
    T extends string ?
      `${S}${T}`
    : never
  : never;
