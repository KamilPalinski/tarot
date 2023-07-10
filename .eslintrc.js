module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'react-app',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'testing-library'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    'jsx-a11y/label-has-for': 0,
    'default-case': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/jsx-curly-newline': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'import/extensions': [0, 'never'],
    'react/jsx-wrap-multilines': ['error', { 'declaration': false, 'assignment': false }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        tabWidth: 2,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'parent', ['index', 'internal', 'sibling']],
        'newlines-between': 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'if', 'switch'] },
    ],
    'brace-style': ["error", "1tbs", { "allowSingleLine": false }],
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debug': 'warn',
    'testing-library/prefer-wait-for': 'warn',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
    'jest-dom/prefer-checked': 'warn',
    'jest-dom/prefer-empty': 'warn',
    'jest-dom/prefer-enabled-disabled': 'warn',
    'jest-dom/prefer-focus': 'warn',
    'jest-dom/prefer-required': 'warn',
    'jest-dom/prefer-to-have-attribute': 'warn',
    'jest-dom/prefer-to-have-text-content': 'error'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },

    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'parent', ['index', 'internal', 'sibling']],
        'newlines-between': 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'if', 'switch'] },
    ],
    'brace-style': ["error", "1tbs", { "allowSingleLine": false }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: '*.types.ts',
      rules: {
        camelcase: 0,
      },
    },
  ],
};