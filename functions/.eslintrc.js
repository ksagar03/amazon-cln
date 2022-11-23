module.exports = {
  // parserOptions: {
  //   ecmaVersion: 8,
  // },
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    // "max-len": [
    //   "error",
    //   {
    //     "code": 60,
    //     "tabWidth": 2,
    //     "ignoreComments": true,
    //     "ignoreUrls": true,
    //     "ignoreStrings": true,
    //     "ignoreTemplateLiterals": true,
    //   },
    // ],
    quotes: ["error", "double"],
  },
};
