import { config } from "@susisu/oxlint-config";

export default config({
  options: {
    typeAware: true,
    reportUnusedDisableDirectives: "warn",
  },
  categories: {
    correctness: "error",
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "all",
        vars: "all",
        varsIgnorePattern: "^_",
        ignoreClassWithStaticInitBlock: false,
        ignoreRestSiblings: true,
        ignoreUsingDeclarations: true,
        reportUsedIgnorePattern: true,
        reportVarsOnlyUsedAsTypes: true,
      },
    ],
    "unicorn/no-hex-escape": "off",
  },
});
