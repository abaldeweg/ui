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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMarkdown = void 0;
const ejs_1 = __importDefault(require("ejs"));
const prettier_1 = __importDefault(require("prettier"));
const template = __dirname + "/component.ejs";
/**
 * Renders a file using EJS and returns the formatted markdown string.
 * @param {any} components - The data to be passed to the EJS template.
 * @returns {Promise<string>} - A promise that resolves with the formatted markdown string.
 */
const renderMarkdown = (components) => {
    return new Promise((resolve, reject) => {
        ejs_1.default.renderFile(template, { components }, {}, (err, str) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                reject(err);
                return;
            }
            const md = yield prettier_1.default.format(str, { parser: 'markdown' });
            resolve(md);
        }));
    });
};
exports.renderMarkdown = renderMarkdown;
