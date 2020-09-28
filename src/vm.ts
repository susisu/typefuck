import { Memory, Read, Write, MoveL, MoveR } from "./memory";
import { Incr, Decr } from "./char";
import { Head as SHead, Tail as STail, Append } from "./string";
import { Head, Tail, Cons } from "./list";
import { Recurse } from "./util";

/**
 * `State<P, M, I, O, R, K>` represents a state of the VM.
 *
 * `P` is the program (character string) that the VM is running.
 * `M` is the current snapshot of the memory.
 * `I` is the input (character string) to the VM.
 * `O` is the output (character string) of the VM.
 * `R` is a list that holds copies of the program to which the VM returns back during loops.
 * `K` is a counter (list) to determine whether the VM should run or skip the next instruction of
 * the program.
 */
export type State<P, M, I, O, R, K> = {
  program: P,
  memory: M,
  input: I,
  output: O,
  return: R,
  skip: K,
};

/**
 * `Init<P, I>` initializes a state with a program `P` and an input `I`.
 */
export type Init<P, I> = State<P, Memory<"", "\x00", "">, I, "", [], []>;

/**
 * `Next<S>` runs the program one step and returns the next state.
 */
export type Next<S> = S extends State<infer P, infer M, infer I, infer O, infer R, infer K> ? (
  K extends []
    ? NextProc<P, M, I, O, R>
    : NextSkip<P, M, I, O, R, K>
) : never;

type NextProc<P, M, I, O, R> = P extends `${infer T}${infer Q}` ? (
    T extends "+" ? State<Q, Write<M, Incr<Read<M>>>, I, O, R, []>
  : T extends "-" ? State<Q, Write<M, Decr<Read<M>>>, I, O, R, []>
  : T extends ">" ? State<Q, MoveR<M>, I, O, R, []>
  : T extends "<" ? State<Q, MoveL<M>, I, O, R, []>
  : T extends "," ? I extends ""
    ? State<Q, Write<M, "\x00">, I, O, R, []>
    : State<Q, Write<M, SHead<I>>, STail<I>, O, R, []>
  : T extends "." ? State<Q, M, I, Append<O, Read<M>>, R, []>
  : T extends "[" ? Read<M> extends "\x00"
    ? State<Q, M, I, O, R, [unknown]>
    : State<Q, M, I, O, Cons<P, R>, []>
  : T extends "]" ? R extends []
    ? never
    : State<Head<R>, M, I, O, Tail<R>, []>
  : State<Q, M, I, O, R, []>
) : never;

type NextSkip<P, M, I, O, R, K> = P extends `${infer T}${infer Q}` ? (
    T extends "[" ? State<Q, M, I, O, R, Cons<unknown, K>>
  : T extends "]" ? State<Q, M, I, O, R, Tail<K>>
  : State<Q, M, I, O, R, K>
) : never;

/**
 * `Run<S>` runs the program and returns the final output.
 */
export type Run<S> = Recurse<RunSub<S>>;

type RunSub<S> = S extends State<infer P, infer _M, infer _I, infer O, infer R, infer K> ? (
  P extends ""
    ? (R extends [] ? K extends [] ? O : never : never)
    : { __rec: RunSub<Next<S>> }
) : never;

/**
 * `Brainfuck<P, I>` runs a program `P` with an input `I`.
 */
export type Brainfuck<P extends string, I extends string = ""> = Run<Init<P, I>>;
