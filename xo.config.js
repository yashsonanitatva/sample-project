module.exports = {
  prettier: true,
  ignores: [".next/", "ios/", "out/", "docs/", "node_modules"],
  rules: {
    "no-console": "error",
    "import/no-unresolved": 0,
    "import/no-unassigned-import": 0,
    "@typescript-eslint/no-confusing-void-expression": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: [
          "next-env.d.ts",
          "ci-pilot\\.config",
          "README",
          "CHANGELOG",
          "update-number\\.ts",
        ],
      },
    ],
  },
};
