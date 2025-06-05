#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const doc_1 = require("./doc");
const templates_1 = require("./template/templates");
const fs_1 = require("fs");
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .option('-c, --componentsDir <path>', 'Path to the components directory', './src/components')
    .option('-f, --filename <name>', 'Output filename for the documentation', './components.md')
    .parse(process.argv);
const options = program.opts();
/**
 * Main function to extract component information and render documentation.
 * @returns {Promise<void>}
 */
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const componentsInfo = yield (0, doc_1.extractComponentInfo)(options.componentsDir);
    const md = yield (0, templates_1.renderMarkdown)(componentsInfo);
    yield fs_1.promises.writeFile(options.filename, md);
    console.log(`\x1b[32m✅ Successfully generated documentation for ${componentsInfo.length} components.\x1b[0m`);
    process.exit(0);
});
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
