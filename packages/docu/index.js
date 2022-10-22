"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
(0, generator_1.renderFile)(__dirname + '/templates/Component.ejs', './components.md');
console.log('Docu was rendered');
