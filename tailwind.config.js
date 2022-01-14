module.exports = {
  content: [
    './src/components/Header.js',
    './src/components/Banner.js'
  ],
  // purge: ['./src/components/Header.js'],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
