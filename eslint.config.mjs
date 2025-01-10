import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Instantiate FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Use compat.extends to load the configuration
const eslintConfig = {
  extends: compat.extends("next/core-web-vitals"),
};

export default eslintConfig;
