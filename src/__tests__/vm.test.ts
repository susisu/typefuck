import { Brainfuck } from "../vm";
import { Assert, Equal } from "./assert";

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
