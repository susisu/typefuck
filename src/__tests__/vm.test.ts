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
type Program = ",>,<[>[>+>+<<-]>[<+>-]>.<<<-]";
type Input = [3, 2];
type Output = Brainfuck<Program, Input>;

export type Test_Brainfuck = Assert<Equal<Output, [2, 4, 6]>>;
