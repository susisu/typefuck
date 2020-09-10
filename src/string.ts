export type Head<S> = S extends `${infer C}${infer R}` ? C : never;

export type Tail<S> = S extends `${infer _C}${infer R}` ? R : never;

export type Append<S, T> = S extends string ? T extends string ? `${S}${T}` : never : never;
