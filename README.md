# @susisu/typefuck

[![CI](https://github.com/susisu/typefuck/workflows/CI/badge.svg)](https://github.com/susisu/typefuck/actions?query=workflow%3ACI)

Type-level [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) interpreter in TypeScript

``` shell
npm i @susisu/typefuck
# or
yarn add @susisu/typefuck
```

## Example

[Playground](https://www.typescriptlang.org/play#code/JYWwDg9gTgLgBDAnmApnA3nAQlAhsAOwDMBXAYwGs4BfOIqCEOAIgAEBnE94TgeiVSlKzANwAoMQLQAFBgHM8TALwsAfABoA2hoC6AHk0A6PTtGTkaAJIEwJeCuYAJFABsXEdXADu0FwBMAQjMpOAB5O1t7bDxCIQo9WQgFXBBPa0jVcV5eOFyAPQB+MSA)

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
