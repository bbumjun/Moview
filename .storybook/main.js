module.exports = {
  stories: ["../src/**/*.stories.js", "../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config) => {
    // do mutation to the config

    return config;
  },
};
