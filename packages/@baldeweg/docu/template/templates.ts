import ejs from 'ejs'
import prettier from 'prettier'
import { type ComponentInfo } from '../doc'

const template = __dirname + "/component.ejs";

/**
 * Renders a file using EJS and returns the formatted markdown string.
 * @param {any} components - The data to be passed to the EJS template.
 * @returns {Promise<string>} - A promise that resolves with the formatted markdown string.
 */
export const renderMarkdown = (components: ComponentInfo[]): Promise<string> => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(template, { components }, {}, async (err, str) => {
      if (err) {
        reject(err);
        return;
      }
      const md = await prettier.format(str, { parser: 'markdown' });
      resolve(md);
    });
  });
};
