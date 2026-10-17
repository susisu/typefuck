export declare function describe(name: string, body: () => void): void;
export declare function it(name: string, body: () => void): void;
// oxlint-disable-next-line typescript/no-unnecessary-type-parameters
export declare function assert<T extends true>(): T;

export type Equal<X, Y> =
  // oxlint-disable-next-line typescript/no-unnecessary-type-parameters
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
