const path = require('path');

module.exports = {
  entry:{ 
    depth: './src/depth.js',
    empty: './src/empty.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
};