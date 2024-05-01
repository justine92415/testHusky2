// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  ignores: ['node_modules', '**/dist/**' ,'**/connections/**'],
  files: ['src/**/*.ts'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/indent': ['error', 2],
    //在定義對象或陣列時，最後一項不能加逗號
    'comma-dangle': [2, 'never'],
    //在寫逗號時，逗號前面不需要加空格，而逗號後面需要新增空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    //使用=== !== 代替== != .
    eqeqeq: [2, 'allow-null'],
    "no-console": ["error", { "allow": ["warn", "error"] }]
  },
});