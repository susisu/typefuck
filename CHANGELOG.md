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
