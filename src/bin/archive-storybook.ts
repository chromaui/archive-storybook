#!/usr/bin/env node

import { execSync } from 'child_process';

// TODO -- is there a better way to do this?
const configDir = 'node_modules/@chromaui/archive-storybook/config';

execSync(`npx @storybook/cli@latest dev -c ${configDir}`, { stdio: 'inherit' });
