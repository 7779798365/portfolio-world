module.exports = [
  {
    linterOptions: { reportUnusedDisableDirectives: true },

    languageOptions: {
      parser: require("@babel/eslint-parser"),
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: { presets: ["@babel/preset-react"] }
      },
      globals: { window: "readonly", document: "readonly" }
    },

    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks")
    },

    settings: { react: { version: "detect" } },

    rules: {
      "react/prop-types": "off",
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  }
];
