const conf = require('./config');
/* Check other configs on the config folder */
module.exports = {
  mode: conf.mode,
  head: conf.head,
  loading: { color: '#3B8070' },
  dev: conf.isDev,
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      const ruleFind = (r, k) => r.test.toString().includes(k);
      for (const [key, value] of Object.entries(conf.extraRules)) {
        delete config.module.rules.find((e) => ruleFind(e, key));
        config.module.rules.push(value);
      }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: conf.shouldPreload
    }
  },
  modules: ['~/modules/axiosModule', '~/modules/loggerModule'],
  axios: {
    https: true,
    host: 'blogxd.local',
    prefix: 'api',
    headers: [{ scope: 'post', name: 'Content-Type', value: 'application/json' }]
  },
  logger: {
    enabled: conf.isDev,
    colors: conf.isDev
  }
};
