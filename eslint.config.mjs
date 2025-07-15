// @ts-check

import { configs } from "@js-soft/eslint-config-ts";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default tseslint.config(globalIgnores(["**/dist", "**/scripts", "**/coverage", "**/.dev", "**/node_modules", "eslint.config.mjs", "*.gen.js", "demo"]), {
    extends: [configs.base, configs.jest],
    languageOptions: {
        parserOptions: {
            project: ["./tsconfig.eslint.json", "./tsconfig.json", "./test/tsconfig.json"]
        }
    },
    files: ["**/*.ts"],
    rules: {}
});
