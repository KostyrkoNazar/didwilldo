module.exports = {
   settings: {
      react: {
         version: "detect"
      }
   },
   plugins: ["prettier", "react-hooks"],
   extends: [
      "plugin:@eslint/eslint-recommended",
      "plugin:@eslint/recommended",
      // "plugin:@typescript-eslint/recommended-requiring-type-checking",

      "plugin:react/recommended",
      "prettier",

      //Todo enable
      // "plugin:jsx-a11y/recommended",
   ],
   rules: {
      "prettier/prettier": "error",
      "react/prop-types": 0,

      //Todo enable rules bellow
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": 0,
   },
   overrides: [
      {
         files: ["*.js", "*.jsx"],
         excludedFiles: ["*.generated.md", "*.generated.tsx"]
      }
   ]
};
