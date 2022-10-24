#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
const args = process.argv.slice(2);
(0, generator_1.renderFile)(args[0], args[1], args[2]);
console.log('Docu was rendered');
