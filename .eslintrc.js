module.exports = {
  "parser": "@lightscript/eslint-plugin",
  "plugins": ["@lightscript/eslint-plugin"],
  "extends": [
    "airbnb",
    "plugin:@lightscript/recommended",
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true
  },
  rules: {
    "function-paren-newline": "off", // will throw error if not disabled
    indent: "off", // will throuw error if not disabled
  }
}
