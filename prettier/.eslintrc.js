module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    "prettier/prettier": ["error", {}, {
        "usePrettierrc": true,
        "withNodeModules":false
    }]
  }
}
