const path = require('path')

module.exports = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // manually resolve packages from other repos so that vercel builds properly
    if (configType === 'PRODUCTION') {
      config.resolve.alias['r3f-perf'] = path.resolve(__dirname, '../packages/r3f-perf/')
    }
    // Return the altered config
    return config
  },
}
