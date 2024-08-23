const { stylelint } = require('@nikitau/stylelint');

/** @type {import('stylelint').Config} */
module.exports = {
  ...stylelint,
  overrides: [
    {
      files: ['**/*.{css}'],
      rules: {
        'custom-property-pattern': [
          '^--([a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$',
          {
            message: 'Expected custom property name to be kebab-case',
          },
        ],
      },
    },
  ],
};
