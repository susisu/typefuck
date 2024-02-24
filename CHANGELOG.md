## 0.5.0 (2024-02-24)

- The package is now ESM/CJS dual (it's type only, though)
- Some internal refactoring

## 0.4.0 (2023-08-26)

- Union inputs are now handled distributively
  - e.g. `Brainfuck<P1 | P2, I1 | I2> = Brainfuck<P1, I1> | Brainfuck<P1, I2> | Brainfuck<P2, I1> | Brainfuck<P2, I2>`

## 0.3.2 (2023-07-21)

- Include source files in the distribution
- Some internal updates (use type-only imports etc.)

## 0.3.1 (2022-08-31)

- No changes, except few minor and internal updates
  - Apply Prettier
  - Upgrade devDependencies

## 0.3.0 (2020-11-20)

### Features

- `Brainfuck<Program, Input>` now takes string literal types
  - You can simply write `Brainfuck<",+.", "A">` instead of `Brainfuck<[",", "+", "."], [65]>`
- Reading input by `,` will not fail
  - When reading beyond EOF, it reads a null character `"\x00"` (previously stopped running)

### Bug fixes

- Ensure returning `never` type when some error ocurred

### Breaking changes

- Drop support for TypeScript &lt; 4.1
- Change argument kinds of `Brainfuck<Program, Input>` (see Features)
- Change behavior of `,` (see Features)

## 0.2.0 (2020-08-29)

### Breaking changes

- Drop support for TypeScript &lt; 4.0

## 0.1.0 (2020-04-12)

- First release
