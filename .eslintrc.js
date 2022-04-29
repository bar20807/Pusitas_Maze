module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 0,
    'space-before-blocks': ['error', { functions: 'always', keywords: 'never', classes: 'never' }],
    'eol-last': ['error', 'never'],
    'react/prop-types': "off",
    "no-useless-constructor": 0,
  },
  parser: "@babel/eslint-parser"
}
