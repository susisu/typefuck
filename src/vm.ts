import { Nil, Cons, Head, Tail, Reverse } from "./list";
import { Memory, Read, Write, MoveL, MoveR } from "./memory";
import { Token } from "./token";
import { Byte, Incr, Decr } from "./byte";
import { Recurse } from "./util";

export type State<P, M, I, O, R, K> = {
  program: P,
  memory: M,
  input: I,
  output: O,
  return: R,
  skip: K,
};

export type Init<P = Nil, I = Nil> = State<P, Memory<Nil, 0x0, Nil>, I, Nil, Nil, Nil>;

export type Next<S> = S extends State<infer P, infer M, infer I, infer O, infer R, infer K> ? (
  K extends Nil
    ? NextProc<P, M, I, O, R>
    : NextSkip<P, M, I, O, R, K>
) : never;

type NextProc<P, M, I, O, R> = P extends Cons<infer T, infer Q> ? (
    T extends "+" ? State<Q, Write<M, Incr<Read<M>>>, I, O, R, Nil>
  : T extends "-" ? State<Q, Write<M, Decr<Read<M>>>, I, O, R, Nil>
  : T extends ">" ? State<Q, MoveR<M>, I, O, R, Nil>
  : T extends "<" ? State<Q, MoveL<M>, I, O, R, Nil>
  : T extends "," ? I extends Nil
    ? never
    : State<Q, Write<M, Head<I>>, Tail<I>, O, R, Nil>
  : T extends "." ? State<Q, M, I, Cons<Read<M>, O>, R, Nil>
  : T extends "[" ? Read<M> extends 0x0
    ? State<Q, M, I, O, R, Cons<Nil, Nil>>
    : State<Q, M, I, O, Cons<P, R>, Nil>
  : T extends "]" ? R extends Nil
    ? never
    : State<Head<R>, M, I, O, Tail<R>, Nil>
  : State<Q, M, I, O, R, Nil>
) : never;

type NextSkip<P, M, I, O, R, K> = P extends Cons<infer T, infer Q> ? (
    T extends "[" ? State<Q, M, I, O, R, Cons<Nil, K>>
  : T extends "]" ? State<Q, M, I, O, R, Tail<K>>
  : State<Q, M, I, O, R, K>
) : never;

export type Run<S> = Recurse<RunSub<S>>;

type RunSub<S> = S extends State<infer P, infer _M, infer _I, infer O, infer R, infer K> ? (
  P extends Nil
    ? (R extends Nil ? K extends Nil ? O : never : never)
    : { __rec: RunSub<Next<S>> }
) : never;

export type Brainfuck<P extends Token[] = [], I extends Byte[] = []> = Reverse<Run<Init<P, I>>>;
