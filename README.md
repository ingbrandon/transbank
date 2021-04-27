# Getting Started with Create React App

npx create-react-app name-my-app --template typescript
In the project directory, you can run:

## Config eslint and prettier

Install Prettier
npm install --save-dev prettier

As per the docs, we can expose a JSON file called **.prettierrc** to put our configuration within.
A basic .prettierrc setting is the following:

``` json
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80
}
```

Install eslint with Prettier
npm install --save-dev eslint-config-prettier eslint-plugin-prettier

Lastly, we need to make an adjustment to the  **.eslintrc**.
``` json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "no-console": 1,       // Means warning
    "prettier/prettier": 2 // Means error
  }
}
```