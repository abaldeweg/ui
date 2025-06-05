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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractComponentInfo = void 0;
const path_1 = __importDefault(require("path"));
const vue_docgen_api_1 = require("vue-docgen-api");
const glob_1 = require("glob");
/**
 * Extract component information from Vue files
 * @returns {Promise<ComponentInfo[]>} - Array of component information
 */
const extractComponentInfo = (dir) => __awaiter(void 0, void 0, void 0, function* () {
    const componentFiles = (0, glob_1.globSync)(`${dir}/**/B*.vue`);
    const componentsInfo = [];
    for (const filePath of componentFiles) {
        const componentName = path_1.default.basename(filePath, '.vue');
        const info = yield (0, vue_docgen_api_1.parse)(filePath);
        componentsInfo.push({
            name: componentName,
            props: info.props,
            slots: info.slots,
            events: info.events,
        });
    }
    componentsInfo.sort((a, b) => a.name.localeCompare(b.name));
    return componentsInfo;
});
exports.extractComponentInfo = extractComponentInfo;
