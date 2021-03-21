module.exports = {
  stories: ["../stories/**/*.stories.js", "../src/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async (config) => {
    // do mutation to the config

    return config;
  },
};
