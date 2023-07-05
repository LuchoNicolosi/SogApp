const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds',
            outputPath: 'static/sounds',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
});
