import { Brainfuck } from "../vm";
import { Assert, Equal } from "./util";

type Program = [
  ",",                               // mem[0] = get();
  ">", ",",                          // mem[1] = get();
  "<", "[",                          // while (mem[0]) {
  ">", "[",                          //   while (mem[1]) {
  ">", "+", ">", "+", "<", "<", "-", //     mem[2]++; mem[3]++; mem[1]--;
  "]",                               //   }
  ">", "[",                          //   while (mem[2]) {
  "<", "+", ">", "-",                //     mem[1]++; mem[2]--;
  "]",                               //   }
  "<", "<", "-",                     //   mem[0]--;
  "]",                               // }
  ">", ">", ">", ".", ".", "."       // put(mem[3]); put(mem[3]); put(mem[3]);
];
type Input = [2, 3];
type Output = Brainfuck<Program, Input>;

export type Test_Brainfuck = Assert<Equal<Output, [6, 6, 6]>>;
