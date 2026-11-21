import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['drupal/dcpas_chatbot/js/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.browser,
        Drupal: 'readonly',
        drupalSettings: 'readonly',
        once: 'readonly',
      },
    },
  },
];
