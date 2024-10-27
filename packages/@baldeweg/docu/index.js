#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = __importDefault(require("ejs"));
const fs_1 = require("fs");
const path_1 = require("path");
const componentsDir = './../ui/src/components';
const template = "./component.ejs";
const outputFilename = "./components.md";
/**
 * Renders an EJS template file with data from a JSON object and writes the output to a file.
 *
 * @param {object} components - The JSON object containing the component data.
 * @returns {Promise<void>} A promise that resolves when the file is written successfully.
 */
const renderFile = (components) => {
    return new Promise((resolve, reject) => {
        ejs_1.default.renderFile(template, { components }, {}, (err, str) => {
            if (err) {
                reject(err);
                return;
            }
            (0, fs_1.writeFile)(outputFilename, str, (err) => {
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
const readJsonFiles = (dirPath) => {
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
};
/**
 * Generates component documentation from JSON files and renders it using EJS.
 */
const generateDocumentation = () => {
    renderFile(readJsonFiles(componentsDir))
        .then(() => {
        console.log('\x1b[32m%s\x1b[0m', 'Documentation was rendered');
    })
        .catch((err) => {
        console.error('Error rendering documentation:', err);
        process.exit(1);
    });
};
generateDocumentation();
