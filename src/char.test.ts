import type { Equal } from "./__tests__/utils";
import { describe, it, assert } from "./__tests__/utils";
import type { Incr, Decr } from "./char";

describe("Incr", () => {
  it("incements a character", () => {
    assert<Equal<Incr<"\x00">, "\x01">>();
    assert<Equal<Incr<"\x7F">, "\x80">>();
    assert<Equal<Incr<"\xFF">, "\x00">>();
  });

  it("returns 0x00 if a character is out of range", () => {
    assert<Equal<Incr<"あ">, "\x00">>();
  });
});

describe("Decr", () => {
  it("decrements a character", () => {
    assert<Equal<Decr<"\x00">, "\xFF">>();
    assert<Equal<Decr<"\x80">, "\x7F">>();
    assert<Equal<Decr<"\xFF">, "\xFE">>();
  });

  it("returns 0x00 if a character is out of range", () => {
    assert<Equal<Decr<"あ">, "\x00">>();
  });
});
