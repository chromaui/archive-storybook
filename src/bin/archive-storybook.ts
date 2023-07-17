#!/usr/bin/env node

import { execSync } from 'child_process';
import { resolve, dirname } from 'path';

const configDir = 'node_modules/@chromaui/archive-storybook/config';
const binPath = resolve(dirname(require.resolve('@storybook/cli/package.json')), './bin/index.js');
execSync(`node ${binPath} dev -c ${configDir}`, { stdio: 'inherit' });
