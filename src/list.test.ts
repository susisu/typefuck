import type { Equal } from "./testutils";
import { describe, it, assert } from "./testutils";
import type { Head, Tail, Cons } from "./list";

describe("Head", () => {
  it("gets the first element of a list", () => {
    assert<Equal<Head<[42]>, 42>>();
    assert<Equal<Head<[42, 84]>, 42>>();
  });

  it("returns never if an empty list is given", () => {
    assert<Equal<Head<[]>, never>>();
  });
});

describe("Tail", () => {
  it("removes the first element of a list", () => {
    assert<Equal<Tail<[42]>, []>>();
    assert<Equal<Tail<[42, 84]>, [84]>>();
  });

  it("returns never if an empty list is given", () => {
    assert<Equal<Tail<[]>, never>>();
  });
});

describe("Cons", () => {
  it("appends an element to the head of a list", () => {
    assert<Equal<Cons<42, []>, [42]>>();
    assert<Equal<Cons<42, [84]>, [42, 84]>>();
  });
});
