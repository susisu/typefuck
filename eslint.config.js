import { config } from "@susisu/eslint-config";
import globals from "globals";

export default config(
  {
    tsconfigRootDir: import.meta.dirname,
  },
  {
    files: ["src/**/*.ts"],
    rules: {
      "@typescript-eslint/naming-convention": [
        "warn",
        // base (from @susisu/eslint-config)
        {
          selector: "variableLike",
          // allow PascalCase as it is commonly used for classes and React components
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "variable",
          // allow UPPER_CASE as it is commonly used for constants
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "memberLike",
          format: ["camelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          // classProperty and classMethod are excluded because they will not be affected by external systems or packages
          selector: ["objectLiteralProperty", "typeProperty", "objectLiteralMethod", "typeMethod"],
          // allow any common format because property and method names could be defined by external systems or packages
          format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: ["objectLiteralProperty", "typeProperty", "objectLiteralMethod", "typeMethod"],
          modifiers: ["requiresQuotes"],
          format: null,
        },
        {
          selector: "import",
          // allow any common format because import names could be defined by external packages
          format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        // extension
        {
          selector: ["typeProperty"],
          filter: { match: true, regex: "^__rec$" },
          format: null,
        },
      ],
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["*.js"],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
);
