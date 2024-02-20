"use strict";

const { config } = require("@susisu/eslint-config");
const globals = require("globals");

module.exports = config({}, [
  {
    files: ["src/**/*.ts"],
    rules: {
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
]);
