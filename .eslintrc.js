module.exports = {
  extends: [
    "react-app",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "space-before-function-paren": "off",
    "react/no-did-update-set-state": "off",
    "react/prefer-stateless-function": "warn",
    "jsx-a11y/aria-role": [
      "error",
      {
        ignoreNonDOM: true,
      },
    ],
    "react/prop-types": [
      2,
      {
        ignore: ["children", "location"],
      },
    ],
    "linebreak-style": "off",
    "global-require": "off",
    semi: "warn",
    "arrow-body-style": "off",
    "max-len": [
      "error",
      {
        code: 100,
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
