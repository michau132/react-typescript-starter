module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": process.env.NODE_ENV === 'production' ? 2 : 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "indent": "off",
    "@typescript-eslint/indent": ["warn", 2],
    "semi": "off",
    "@typescript-eslint/semi": ["warn"],
    "object-curly-spacing": ["warn", "always"],
    "ignoreParameters": true,
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  settings: {
    react: {
      version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
}
console.log(process.env.NODE_ENV)
