import type { Equal } from "./__tests__/utils.js";
import { describe, it, assert } from "./__tests__/utils.js";
import type { Head, Tail, Concat } from "./string.js";

describe("Head", () => {
  it("gets the first character of a string", () => {
    assert<Equal<Head<"\x42">, "\x42">>();
    assert<Equal<Head<"\x42\x84">, "\x42">>();
  });

  it("returns never if an empty string is given", () => {
    assert<Equal<Head<"">, never>>();
  });
});

describe("Tail", () => {
  it("removes the first character of a string", () => {
    assert<Equal<Tail<"\x42">, "">>();
    assert<Equal<Tail<"\x42\x84">, "\x84">>();
  });

  it("returns never if an empty string is given", () => {
    assert<Equal<Tail<"">, never>>();
  });
});

describe("Concat", () => {
  it("concatenates two strings", () => {
    assert<Equal<Concat<"\x42", "">, "\x42">>();
    assert<Equal<Concat<"\x42", "\x84">, "\x42\x84">>();
    assert<Equal<Concat<"", "\x42">, "\x42">>();
    assert<Equal<Concat<"\x84", "\x42">, "\x84\x42">>();
  });
});
