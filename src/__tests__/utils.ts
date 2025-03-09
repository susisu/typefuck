export declare function describe(name: string, body: () => void): void;
export declare function it(name: string, body: () => void): void;
export declare function assert<T extends true>(): T;

export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
