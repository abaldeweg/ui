#!/usr/bin/env node

import { Command } from 'commander';
import { listComponents } from './scan';

const program = new Command();
program
  .option('-d, --componentsDir <path>', 'Specify the components directory', './src/components')
  .option('-f, --filename <name>', 'Specify the filename', 'index.ts');

const options = program.opts();

listComponents(options.componentsDir, options.filename);
console.log(`\x1b[32m✅ File generated successfully!\x1b[0m`);
