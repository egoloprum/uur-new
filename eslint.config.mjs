import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

// Import your custom plugins
import boundariesPlugin from 'eslint-plugin-boundaries'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

export default defineConfig([
  // 1. Next.js recommended configurations (core-web-vitals + TypeScript)
  ...nextVitals,
  ...nextTs,

  // 2. Global ignores (override defaults from eslint-config-next)
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // optionally add node_modules (already ignored by default, but explicit is fine)
    'node_modules/**'
  ]),

  // 3. Your custom rules and plugins
  {
    plugins: {
      boundaries: boundariesPlugin,
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      // General
      'no-console': 'warn',

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],

      // Import rules
      'import/no-internal-modules': [
        'error',
        {
          allow: [
            '**/index',
            '**/?(*.)+(container|page|api)',
            '**/shared/**',
            '**/features/**',
            '**/entities/**',
            '**/widgets/**',
            'next/**',
            '@hookform/resolvers/zod'
          ]
        }
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],

      // Feature‑Sliced Design boundaries
      'boundaries/element-types': [
        2,
        {
          default: 'disallow',
          message: 'FSD: {{ fromType }} не может импортировать {{ toType }}',
          rules: [
            {
              from: ['app'],
              allow: ['entities', 'features', 'widgets', 'shared']
            },
            { from: ['widgets'], allow: ['entities', 'features', 'shared'] },
            { from: ['features'], allow: ['entities', 'shared'] },
            { from: ['entities'], allow: ['entities', 'shared'] },
            { from: ['shared'], allow: ['shared'] }
          ]
        }
      ],

      // Prettier (must be last to avoid conflicts)
      'prettier/prettier': 'error'
    },
    settings: {
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**/*.{js,jsx,ts,tsx}' },
        { type: 'entities', pattern: 'src/entities/**/*.{js,jsx,ts,tsx}' },
        { type: 'features', pattern: 'src/features/**/*.{js,jsx,ts,tsx}' },
        { type: 'widgets', pattern: 'src/widgets/**/*.{js,jsx,ts,tsx}' },
        { type: 'shared', pattern: 'src/shared/**/*.{js,jsx,ts,tsx}' }
      ]
    }
  }
])
