module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'no-return-await': 0,
  },
};
