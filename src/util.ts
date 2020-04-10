export type Recurse<T, H extends "__hack" = "__hack"> =
  T extends { __rec: unknown }
    ? { [H0 in H]: Recurse<RecurseSub<T>> }[H]
    : T;

type RecurseSub<T> =
    T extends { __rec: { __rec: infer U } } ? { __rec: RecurseSub<U> }
  : T extends { __rec: infer U } ? U
  : T;
