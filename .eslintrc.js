module.exports = {
  ignorePatterns: [
    '**/public/**',
    '**/.cache/**',
    '**/static/**',
    '**/content/**',
  ],
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:testing-library/react',
    'plugin:react-hooks/recommended',
    'airbnb/hooks',
    'airbnb',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        es6: true,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
        'prettier',
      ],
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'testing-library',
        'graphql',
        'prettier',
      ],
      rules: {
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/function-component-definition': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/jsx-boolean-value': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'no-shadow': 'off',
        "no-console": "off",
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        "@typescript-eslint/restrict-template-expressions": "off",
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', '**/tsconfig.json'],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      env: {
        browser: true,
        es6: true,
      },
      extends: ['prettier'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': 'off',
        "no-console": "off",
      },
      plugins: [
        'testing-library',
        'react',
        'react-hooks',
        'graphql',
        'prettier',
      ],
    },
  ],
}
