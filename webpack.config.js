module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
        {
            test: /\.(gif|jpe?g|png|ico)$/,
            loader: 'url-loader?limit=10000'
          },
          {
            test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
            loader: 'url-loader?limit=10000'
          },
            { test: /\.css$/, loader: "style-loader!css-loader" }
          ]
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
