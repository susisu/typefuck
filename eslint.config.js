"use strict";

const { config, map } = require("@susisu/eslint-config");
const eslintConfigPrettier = require("eslint-config-prettier");
const globals = require("globals");

module.exports = [
  ...map(
    {
      files: ["**/*.ts"],
    },
    [
      config.tsTypeChecked,
      eslintConfigPrettier,
      {
        languageOptions: {
          ecmaVersion: 2022,
          sourceType: "module",
          parserOptions: {
            project: "./tsconfig.json",
          },
          globals: globals.es2021,
        },
        rules: {
          "@typescript-eslint/naming-convention": "off",
          "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
        },
      },
    ]
  ),
  ...map(
    {
      files: ["**/*.js"],
    },
    [
      config.js,
      eslintConfigPrettier,
      {
        languageOptions: {
          ecmaVersion: 2022,
          sourceType: "commonjs",
          globals: {
            ...globals.es2021,
            ...globals.node,
          },
        },
      },
    ]
  ),
];
