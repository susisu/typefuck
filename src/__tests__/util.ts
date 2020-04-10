export type Equal<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;
export type Assert<T extends true> = T;
