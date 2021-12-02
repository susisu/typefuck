"use strict";

module.exports = {
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      extends: ["@susisu/eslint-config/preset/ts-types", "prettier"],
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      env: {
        es6: true,
      },
      rules: {
        "max-len": ["warn", 120],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
        "eslint-comments/no-unused-disable": "error",
      },
    },
    {
      files: ["*.js"],
      extends: [
        "@susisu/eslint-config/preset/es",
        "plugin:eslint-comments/recommended",
        "prettier",
      ],
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: "script",
      },
      env: {
        es6: true,
        node: true,
      },
      rules: {
        "eslint-comments/no-unused-disable": "error",
      },
    },
  ],
};
