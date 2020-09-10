export type Head<XS> = XS extends [infer Y, ...infer _YS] ? Y : never;

export type Tail<XS> = XS extends [infer _Y, ...infer YS] ? YS : never;

export type Cons<X, XS> = XS extends unknown[] ? [X, ...XS] : never;
