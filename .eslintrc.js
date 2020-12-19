module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}

// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//   },
//   extends: ['plugin:react/recommended', 'airbnb'],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  // },
//   plugins: [
//     'react',
//     'react-hooks',
//   ],
//   rules: {
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'warn',
//   },
// };
