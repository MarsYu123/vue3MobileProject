module.exports = {
  parser: 'vue-eslint-parser',
  plugins: [ '@typescript-eslint' ],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    '@unocss'
  ],
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': [ 'warn', { allow: [ 'error', 'warn' ] } ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-void': 0,
    camelcase: 0,
    eqeqeq: 1,
    'no-unused-expressions': 0,
    'no-useless-return': 0,
    'no-duplicate-imports': 0,
    'no-useless-escape': 0,
    'no-control-regex': 0,
    'promise/param-names': 0,
    'import/no-duplicates': 0,
    'operator-linebreak': [ 'warn', 'before' ],
    'multiline-ternary': [ 'warn', 'always-multiline' ],
    quotes: [ 1, 'single', 'avoid-escape' ],
    semi: [ 1, 'never' ],
    'vue/multi-word-component-names': 0,
    'comma-dangle': [ 2, 'never' ], // 对象字面量项尾是否允许有逗号
    // 逗号前后是否需要空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 对象字面量中冒号的前后空格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 关键字前后空格
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 括号内使用空格
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    // 函数圆括号之前有一个空格
    'space-before-function-paren': [ 'error', 'always' ],
    'vue/max-attributes-per-line': [ 'warn', {
      'singleline': {
        'max': 3
      },
      'multiline': {
        'max': 1
      }
    } ],
    'vue/no-v-html': 0,
    '@typescript-eslint/no-explicit-any': 0, // 不允许使用any
    '@typescript-eslint/no-var-requires': 0, // 不推荐使用requires
    '@typescript-eslint/ban-ts-comment': 0, // 不推荐使用@ts-ignore
    'vue/no-setup-props-destructure': 0 // 不推荐解构props
  }
}
