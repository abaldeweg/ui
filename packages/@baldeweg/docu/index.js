#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = __importDefault(require("ejs"));
const fs_1 = require("fs");
const path_1 = require("path");
const template = "./templates/component.ejs";
const filename = "./components.md";
const componentsDir = './../ui/src/components';
/**
 * Renders an EJS template file with data from a JSON object and writes the output to a file.
 *
 * @param {object} data - The JSON object containing the data.
 * @param {string} template - The path to the EJS template file.
 * @param {string} filename - The path to the output file.
 * @returns {Promise<void>} A promise that resolves when the file is written successfully.
 */
const renderFile = (data, template, filename) => {
    return new Promise((resolve, reject) => {
        ejs_1.default.renderFile(template, { components: data.components }, {}, (err, str) => {
            if (err) {
                reject(err);
                return;
            }
            (0, fs_1.writeFile)(filename, str, (err) => {
                err ? reject(err) : resolve();
            });
        });
    });
};
/**
 * Recursively reads all JSON files from a directory and its subdirectories.
 *
 * @param {string} dirPath - The path to the directory to read.
 * @returns {Component[]} An array of component objects parsed from the JSON files.
 */
function readJsonFiles(dirPath) {
    const components = [];
    const files = (0, fs_1.readdirSync)(dirPath);
    files.forEach((file) => {
        const filePath = (0, path_1.join)(dirPath, file);
        const stat = (0, fs_1.statSync)(filePath);
        if (stat.isDirectory()) {
            components.push(...readJsonFiles(filePath));
        }
        else if (file.endsWith('.json')) {
            const jsonData = JSON.parse((0, fs_1.readFileSync)(filePath, 'utf8'));
            components.push(jsonData);
        }
    });
    return components;
}
/**
 * Generates component documentation from JSON files and renders it using EJS.
 */
function generate() {
    const componentsData = {
        $schema: 'components.schema.json',
        components: readJsonFiles(componentsDir),
    };
    const jsonString = JSON.stringify(componentsData, null, 2);
    renderFile(JSON.parse(jsonString), template, filename)
        .then(() => {
        console.log('\x1b[32m%s\x1b[0m', 'Documentation was rendered');
    })
        .catch((err) => {
        console.error('Error rendering documentation:', err);
        process.exit(1);
    });
}
generate();
