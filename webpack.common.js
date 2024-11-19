const path = require('path');

module.exports = {
  entry: {
    app: './assets/js/tutorials.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './assets/js/tutorials.js',
  },
};
