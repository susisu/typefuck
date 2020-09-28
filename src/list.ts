/**
 * `Head<XS>` returns the first element of a list `XS`.
 */
export type Head<XS> = XS extends [infer Y, ...infer _YS] ? Y : never;

/**
 * `Tail<XS>` returns a slice of a list `XS` with the first element removed.
 */
export type Tail<XS> = XS extends [infer _Y, ...infer YS] ? YS : never;

/**
 * `Cons<X, XS>` appends a new element `X` to the head of a list `XS`.
 */
export type Cons<X, XS> = XS extends unknown[] ? [X, ...XS] : never;
