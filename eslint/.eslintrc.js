module.exports = {
  root: true,
  // 忽略文件
  // ignorePatterns: ["notest.js", "**/vendor/*.js"],
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
