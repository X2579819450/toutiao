module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'eslintno-trailing-spaces': 'off',
    'eslintspace-before-function-paren': 'off',
    'space-before-function-paren': 'off',
    'vue/valid-v-slot': 'off',
    'eslinteol-last': 'off'
  }
}
