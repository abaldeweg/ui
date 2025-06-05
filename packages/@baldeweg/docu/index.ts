#!/usr/bin/env node

import { extractComponentInfo } from './doc';
import { renderMarkdown } from './template/templates';
import { promises as fs } from 'fs';
import { Command } from 'commander';

const program = new Command();program
  .option('-c, --componentsDir <path>', 'Path to the components directory', './src/components')
  .option('-f, --filename <name>', 'Output filename for the documentation', './components.md')
  .parse(process.argv);
const options = program.opts();

/**
 * Main function to extract component information and render documentation.
 * @returns {Promise<void>}
 */
const main = async (): Promise<void> => {
  const componentsInfo = await extractComponentInfo(options.componentsDir);
  const md = await renderMarkdown(componentsInfo);

  await fs.writeFile(options.filename, md);
  console.log(`\x1b[32m✅ Successfully generated documentation for ${componentsInfo.length} components.\x1b[0m`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
