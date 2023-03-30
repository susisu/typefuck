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
import type { Brainfuck } from "@susisu/typefuck";

type Program = ">,[>,]<[.<]";
type Input = "Hello, world!";
type Output = Brainfuck<Program, Input>; // = "!dlrow ,olleH"
```

## License
[MIT License](http://opensource.org/licenses/mit-license.php)

## Author
Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
