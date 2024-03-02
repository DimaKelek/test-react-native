module.exports = {
  env: {
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "unused-imports",
    "react-hooks",
  ],
  rules: {
    "no-console": "warn",
    "no-var": "error",
    "no-debugger": "warn",
    "no-multiple-empty-lines": "error",
    "space-in-parens": "error",
    "no-useless-return": "error",
    "arrow-body-style": "off",
    "no-undef": "off",

    // React rules
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "react/jsx-no-duplicate-props": "warn",
    // TS rules
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { fixStyle: "inline-type-imports" },
    ],
    // React hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "prettier/prettier": "error",
    "unused-imports/no-unused-imports": "off",
    "unused-imports/no-unused-vars": "warn",
    "linebreak-style": ["error", "unix"],
    "import/prefer-default-export": "off",
  },
};
