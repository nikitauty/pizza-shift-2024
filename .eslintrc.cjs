const { eslint } = require('@nikitau/eslint');

module.exports = {
  ...eslint.react,
  root: true,
  ignorePatterns: ['vite.config.ts'],
  overrides: [
    ...eslint.react.overrides,
    {
      files: ['**/*.{ts,tsx}'],
      settings: {
        atomPostfix: '',
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      },
    },
  ],
};
