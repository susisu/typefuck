import { config } from "@susisu/eslint-config";
import globals from "globals";

export default config({}, [
  {
    files: ["src/**/*.ts"],
    rules: {
      "@typescript-eslint/naming-convention": [
        // a better exention mechanism is needed
        ...config.tsTypeChecked().rules["@typescript-eslint/naming-convention"],
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
]);
