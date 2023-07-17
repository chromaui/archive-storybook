const { CHROMATIC_ARCHIVE_LOCATION = 'test-archives/latest' } = process.env;

const ARCHIVES_DIR = `../../../../${CHROMATIC_ARCHIVE_LOCATION}`;

/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  stories: [`${ARCHIVES_DIR}/*.stories.json`],
  addons: ['@storybook/addon-essentials', '../dist'],
  framework: {
    name: '@storybook/server-webpack5',
    options: {},
  },
  staticDirs: [`${ARCHIVES_DIR}/archive`],
};
module.exports = config;
