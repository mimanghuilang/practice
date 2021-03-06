module.exports = {
    tabWidth: 2,
    semi: false,
    endOfLine: "crlf",
    printWidth: 100,
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
};
