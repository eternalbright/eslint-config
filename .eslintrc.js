module.exports = {
  env: { node: true },
  extends: 'airbnb-typescript/base',
  parserOptions: { project: './tsconfig.json' },
  plugins: [
    'import',
    'sort-keys',
  ],
  root: true,
  rules: {
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: [
          'PropertyDefinition[decorators]',
          'TSIntersectionType',
          'TSTypeParameterInstantiation',
          'TSUnionType',
        ],
      },
    ],
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: 'never',
      },
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          ['parent', 'sibling'],
          'index',
          'object',
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            group: 'external',
            pattern: '@**/**',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [
          '@**/**',
        ],
      },
    ],
    'max-len': [
      'error',
      120,
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
        },
        ImportDeclaration: { multiline: true },
        ObjectExpression: {
          minProperties: 3,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 3,
          multiline: true,
        },
      },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],
    'sort-keys/sort-keys-fix': 'error',
  },
};
