import type { Equal } from "./testutils.js";
import { describe, it, assert } from "./testutils.js";
import type { Brainfuck } from "./vm.js";
import type { Recurse } from "./utils.js";

describe("Brainfuck", () => {
  it("runs a simple calculation", () => {
    // mem[0] = get();
    // mem[1] = get();
    // while (mem[0]) {
    //   while (mem[1]) {
    //     mem[2]++; mem[3]++; mem[1]--;
    //   }
    //   while (mem[2]) {
    //     mem[1]++; mem[2]--;
    //   }
    //   put(mem[3]);
    //   mem[0]--;
    // }
    type Program = ",>,<[>[>+>+<<-]>[<+>-]>.<<<-]";
    type Input = "\x03\x02";
    type Output = Brainfuck<Program, Input>;
    assert<Equal<Output, "\x02\x04\x06">>();
  });

  it("runs reverse echo", () => {
    type Program = ">,[>,]<[.<]";
    type Input = "Hello, world!";
    type Output = Brainfuck<Program, Input>;
    assert<Equal<Output, "!dlrow ,olleH">>();
  });

  it("runs every combination of a program and input if given as unions", () => {
    type Program = ",[.,]" | ">,[>,]<[.<]";
    type Input = "Hello, world!" | "Bye";
    type Output = Brainfuck<Program, Input>;
    assert<Equal<Output, "Hello, world!" | "!dlrow ,olleH" | "Bye" | "eyB">>();
  });

  it("continues to run programs for at least 10,000 steps", () => {
    type Repeat<S extends string, N extends number> = Recurse<RepeatSub<S, N, "", []>>;
    type RepeatSub<S extends string, N extends number, R extends string, L extends unknown[]> =
      L["length"] extends N ? R : { __rec: RepeatSub<S, N, `${R}${S}`, [...L, unknown]> };

    type Program = ">,[>,]<[.<]";
    type Input = Repeat<"ABCD", 1250>;
    type Output = Brainfuck<Program, Input>;
    type Expected = Repeat<"DCBA", 1250>;
    assert<Equal<Output, Expected>>();
  });
});
