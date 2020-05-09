module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'standard',
  ],
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'no-unused-vars':
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'pre-production' ||
      process.env.NODE_ENV === 'staging'
        ? 'warn'
        : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
        mocha: true,
      },
    },
  ],
};