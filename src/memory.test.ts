import type { Equal } from "./testutils.js";
import { describe, it, assert } from "./testutils.js";
import type { Memory, Read, Write, MoveL, MoveR } from "./memory.js";

describe("Read", () => {
  it("reads a character at the current position", () => {
    type Mem = Memory<"\x41", "\x42", "\x43">;
    assert<Equal<Read<Mem>, "\x42">>();
  });
});

describe("Write", () => {
  it("writes a character to the current position", () => {
    type Mem = Memory<"\x41", "\x42", "\x43">;
    assert<Equal<Write<Mem, "\x84">, Memory<"\x41", "\x84", "\x43">>>();
  });
});

describe("MoveL", () => {
  it("moves the current position to the left", () => {
    type Mem = Memory<"\x41", "\x42", "\x43">;
    assert<Equal<MoveL<Mem>, Memory<"", "\x41", "\x42\x43">>>();
  });

  it("fills 0x00 if no character is available in the memory", () => {
    type Mem = Memory<"", "\x42", "\x43">;
    assert<Equal<MoveL<Mem>, Memory<"", "\x00", "\x42\x43">>>();
  });
});

describe("MoveR", () => {
  it("moves the current position to the right", () => {
    type Mem = Memory<"\x41", "\x42", "\x43">;
    assert<Equal<MoveR<Mem>, Memory<"\x42\x41", "\x43", "">>>();
  });

  it("fills 0x00 if no character is available in the memory", () => {
    type Mem = Memory<"\x41", "\x42", "">;
    assert<Equal<MoveR<Mem>, Memory<"\x42\x41", "\x00", "">>>();
  });
});
