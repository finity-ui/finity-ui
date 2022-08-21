module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano:
      process.env.NPM_ENV === 'production' ? { preset: 'default' } : false,
  },
};
