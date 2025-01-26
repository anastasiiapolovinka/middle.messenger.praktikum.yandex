module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  plugins: ["stylelint-scss", "stylelint-order"],
  ignoreFiles: ["node_modules/**/*", "dist/**/*", ".vite/**/*"],
  rules: {
    "color-no-invalid-hex": true,
    "selector-class-pattern": null,
  },
};
