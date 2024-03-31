const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

function resolveAlias(aliases) {
  const alias = {};
  for (const key in aliases) {
    alias[key] = path.relative($.paths.webpack.context, path.resolve(aliases[key]));
  }
  return alias;
}

module.exports = merge(
  $.tasks.js,
  $.tasks.styles,
  $.tasks.fonts,
  $.tasks.images,
  {
    entry: $.paths.webpack.entries,
    output: {
      path: path.resolve($.paths.webpack.dest),
      publicPath: `${path.relative($.paths.build, $.paths.webpack.dest)}/`,
      filename: '[name]/index.js'
    },
    resolve: {
      alias: resolveAlias($.paths.alias),
      extensions: ['.js', '.scss', '.css', '.mjs'],
      modules: ['node_modules', $.paths.webpack.context, $.paths.build],
    },
    optimization: {
      namedChunks: true,
      splitChunks: {
        name: 'common',
        chunks: 'all',
        minChunks: 2,
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
    ],
  },
);
