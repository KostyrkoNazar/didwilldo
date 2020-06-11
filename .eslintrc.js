module.exports = {
   env: {
      browser: true,
      node: true,
      amd: true,
      es6: true,
   },
   parserOptions: {
      ecmaVersion: 9,
      sourceType: "module",
      ecmaFeatures: {
         modules: true,
         jsx: true
      }
   },
   plugins: ["react-hooks", "prettier"],
   extends: ["eslint:recommended", "plugin:react/recommended", "prettier", ],
   rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-multiple-empty-lines": [2, { max: 2 }],
   },
};
