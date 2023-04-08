/** @type { import('@storybook/server-webpack5').StorybookConfig } */

const ARCHIVES_DIR = '../../../../test-archives/latest';
const config = {
  stories: [`${ARCHIVES_DIR}/*.stories.json`],
  addons: ['@storybook/addon-essentials', '../dist'],
  framework: {
    name: '@storybook/server-webpack5',
    options: {},
  },
  staticDirs: [`${ARCHIVES_DIR}/archive`],
};
export default config;
