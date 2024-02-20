import { config } from "@susisu/eslint-config";
import globals from "globals";

export default config({}, [
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
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
]);
