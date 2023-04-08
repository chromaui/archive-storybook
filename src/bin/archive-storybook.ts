import { execSync } from 'child_process';

// TODO -- is there a better way to do this?
const configDir = 'node_modules/@chromaui/archive-storybook/config';

execSync(`npx sb dev -c ${configDir}`);
