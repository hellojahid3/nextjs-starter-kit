import { defineConfig, globalIgnores } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintConfigPrettier from 'eslint-config-prettier';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

/**
 * Import sorting groups
 */
const importSortGroups = [
  ['^\\u0000'],
  ['^react', '^next', '^@?\\w'],
  [
    '^(@|components)(/.*|$)',
    '^\\.\\.(?!/?$)',
    '^\\.\\./?$',
    '^\\./(?=.*/)(?!/?$)',
    '^\\.(?!/?$)',
    '^\\./?$',
    '^.+\\.s?(css|scss)$',
  ],
];

export default defineConfig([
  /**
   * 1. Ignore build outputs and dependencies
   */
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'node_modules/**',
    'coverage/**',
    '.vercel/**',
    '.turbo/**',
    'next-env.d.ts',
    '*.min.js',
  ]),

  /**
   * 2. Next.js base configs
   */
  ...nextVitals,
  ...nextTs,

  /**
   * 3. Shared rules for all source files
   */
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      /**
       * TypeScript
       */
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],

      /**
       * Import sorting
       */
      'simple-import-sort/imports': ['error', { groups: importSortGroups }],
      'simple-import-sort/exports': 'error',

      /**
       * Production hygiene
       */
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
    },
  },

  /**
   * 5. Ignore config files
   */
  {
    files: ['*.config.{js,mjs,cjs,ts}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  /**
   * 6. Prettier last to override formatting rules
   */
  eslintConfigPrettier,
]);
