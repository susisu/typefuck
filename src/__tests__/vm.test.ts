import type { Recurse } from "../util";
import type { Brainfuck } from "../vm";
import type { Assert, Equal } from "./assert";

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
type Program_0 = ",>,<[>[>+>+<<-]>[<+>-]>.<<<-]";
type Input_0 = "\x03\x02";
type Output_0 = Brainfuck<Program_0, Input_0>;
export type Test_Brainfuck_0 = Assert<Equal<Output_0, "\x02\x04\x06">>;

type Program_1 = ">,[>,]<[.<]";
type Input_1 = "Hello, world!";
type Output_1 = Brainfuck<Program_1, Input_1>;
export type Test_Brainfuck_1 = Assert<Equal<Output_1, "!dlrow ,olleH">>;

type Program_2 = ",[.,]" | ">,[>,]<[.<]";
type Input_2 = "Hello, world!" | "Bye";
type Output_2 = Brainfuck<Program_2, Input_2>;
export type Test_Brainfuck_2 = Assert<
  Equal<Output_2, "Hello, world!" | "!dlrow ,olleH" | "Bye" | "eyB">
>;

type Repeat<S extends string, N extends number> = Recurse<RepeatSub<S, N, "", []>>;
type RepeatSub<
  S extends string,
  N extends number,
  R extends string,
  L extends unknown[],
> = L["length"] extends N ? R : { __rec: RepeatSub<S, N, `${R}${S}`, [...L, unknown]> };

type Reverse<S extends string> = Recurse<ReverseSub<S, "">>;
// prettier-ignore
type ReverseSub<S extends string, R extends string> =
    S extends "" ? R
  : S extends `${infer A}${infer B}` ? { __rec: ReverseSub<B, `${A}${R}`> }
  : never;

type Program_3 = ">,[>,]<[.<]";
type Input_3 = Repeat<"ABCD", 1000>;
type Output_3 = Brainfuck<Program_3, Input_3>;
type Expected_3 = Reverse<Input_3>;
export type Test_Brainfuck_3 = Assert<Equal<Output_3, Expected_3>>;
