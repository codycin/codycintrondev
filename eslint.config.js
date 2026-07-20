import eslint from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: [".wrangler", "dist", "node_modules"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2023 },
    },
    plugins: { "jsx-a11y": jsxA11y },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      "jsx-a11y/anchor-ambiguous-text": "off",
    },
  },
  {
    files: ["**/*.config.{js,ts}", "vite.config.ts"],
    languageOptions: { globals: globals.node },
  },
);
