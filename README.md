# @susisu/typefuck
[![CI](https://github.com/susisu/typefuck/workflows/CI/badge.svg)](https://github.com/susisu/typefuck/actions?query=workflow%3ACI)

Type-level [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) interpreter in TypeScript

``` shell
npm i @susisu/typefuck
# or
yarn add @susisu/typefuck
```

## Example
``` typescript
import { Brainfuck } from "@susisu/typefuck";

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
  ">", ".",                          //   put(mem[3]);
  "<", "<", "<", "-",                //   mem[0]--;
  "]",                               // }
];
type Input = [3, 2];
type Output = Brainfuck<Program, Input>;
// Output = [2, 4, 6]
```

## License

[MIT License](http://opensource.org/licenses/mit-license.php)

## Author

Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
