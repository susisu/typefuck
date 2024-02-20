import type { Equal } from "./__tests__/utils";
import { describe, it, assert } from "./__tests__/utils";
import type { Recurse } from "./util";
import type { Brainfuck } from "./vm";

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

  it("continues to run programs at least 4,000 steps", () => {
    type Repeat<S extends string, N extends number> = Recurse<RepeatSub<S, N, "", []>>;
    type RepeatSub<S extends string, N extends number, R extends string, L extends unknown[]> =
      L["length"] extends N ? R : { __rec: RepeatSub<S, N, `${R}${S}`, [...L, unknown]> };

    type Reverse<S extends string> = Recurse<ReverseSub<S, "">>;
    type ReverseSub<S extends string, R extends string> =
      S extends "" ? R
      : S extends `${infer A}${infer B}` ? { __rec: ReverseSub<B, `${A}${R}`> }
      : never;

    type Program = ">,[>,]<[.<]";
    type Input = Repeat<"ABCD", 1000>;
    type Output = Brainfuck<Program, Input>;
    type Expected = Reverse<Input>;
    assert<Equal<Output, Expected>>();
  });
});
