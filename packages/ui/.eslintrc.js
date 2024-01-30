/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@projectx/eslint-config/nextjs.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
