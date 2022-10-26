module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
