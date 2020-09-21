# @susisu/typefuck
[![Build Status](https://travis-ci.com/susisu/typefuck.svg?branch=master)](https://travis-ci.com/susisu/typefuck)

Type-level [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) interpreter in TypeScript

``` shell
npm i @susisu/typefuck
# or
yarn add @susisu/typefuck
```

## Example
``` typescript
import { Brainfuck } from "@susisu/typefuck";

type Program = ">,[>,]<[.<]";
type Input = "Hello, world!";
type Output = Brainfuck<Program, Input>; // = "!dlrow ,olleH"
```

## License
[MIT License](http://opensource.org/licenses/mit-license.php)

## Author
Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
