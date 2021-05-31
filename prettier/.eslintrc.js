module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['prettier'],
  extends: [
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    "prettier/prettier": "error"
  }
}
