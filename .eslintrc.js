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

    // will throw error if not disabled
    // console.log! 'hello world'
    "function-paren-newline": "off",
    indent: "off",

    // will throw error if not disabled
    // if true or false: console.log('hello')
    "space-infix-ops": "off",

    // will throw error if not disabled
    // (() -> console.log())()
    "arrow-spacing": "off",

    // will stop working without throwing any errors if not disabled
    // if a:
    //   console.log('a')
    // elif b:
    //   console.log('b')
    "keyword-spacing": "off",

  }
}
