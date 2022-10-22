#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFile = void 0;
const fs_1 = __importDefault(require("fs"));
const ejs_1 = __importDefault(require("ejs"));
const components_json_1 = require("../json/components.json");
const renderFile = (template, filename) => {
    ejs_1.default.renderFile(template, { components: components_json_1.components }, {}, (_err, str) => {
        fs_1.default.writeFile(filename, str, (err) => {
            if (err)
                console.error(err);
        });
    });
};
exports.renderFile = renderFile;
