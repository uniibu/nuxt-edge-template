const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: '{{ mode }}',
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  isDev,
  extraRules: {
    inline: {
      test: /\.inline$/,
      use: [
        {
          'loader': 'vue-style-loader',
          'options': {
            'sourceMap': false
          }
        },
        {
          'loader': 'css-loader',
          'options': {
            'sourceMap': false,
            'minimize': true,
            'importLoaders': 1,
            'alias': {
              '/assets': resolve(__dirname, '..', 'assets'),
              '/static': resolve(__dirname, '..', 'static')
            }

          }
        },
        {
          'loader': 'postcss-loader',
          'options': {
            'sourceMap': false,
            'useConfigFile': false
          }
        }
      ]
    }
  },
  shouldPreload: (file) => {
    return ['.js'].includes(extname(file));
  }
};
