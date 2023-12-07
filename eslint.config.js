import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    'plugin:unicorn/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'airbnb/hooks',
  ),
  ...compat.plugins('prettier'),
  eslintConfigPrettier,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'react/prop-types': 0,
      'import/prefer-default-export': 'off',
      'react/jsx-no-bind': 'off',
      'react/jsx-boolean-value': 'off',
      'unicorn/filename-case': 'off',
      'prettier/prettier': 'warn',
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
    },
  },
  {
    ignores: ['dist', 'vite.config.js'],
  },
];
