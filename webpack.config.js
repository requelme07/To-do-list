const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
          
            loader: 'style-loader'
          },
          {
            
            loader: 'css-loader'
          },
          {
            
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};