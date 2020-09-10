export type Recurse<T> =
  T extends { __rec: unknown }
    ? Recurse<RecurseSub<T>>
    : T;

type RecurseSub<T> =
    T extends { __rec: { __rec: infer U } } ? { __rec: RecurseSub<U> }
  : T extends { __rec: infer U } ? U
  : T;
