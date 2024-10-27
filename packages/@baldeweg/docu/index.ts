#!/usr/bin/env node

import fs from 'fs'
import ejs from 'ejs'
import path from 'path'

const args = process.argv.slice(2)
const [src, template, filename] = args

/**
 * Renders an EJS template file with data from a JSON object and writes the output to a file.
 *
 * @param {string} src - The path to the JSON object containing the data.
 * @param {string} template - The path to the EJS template file.
 * @param {string} filename - The path to the output file.
 * @returns {Promise<void>} A promise that resolves when the file is written successfully.
 */
const renderFile = (src: string, template: string, filename: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    import(path.join(process.cwd(), src))
      .then((data) => {
        ejs.renderFile(template, { components: data.components }, {}, (err, str) => {
          if (err) {
            reject(err)
            return
          }
          fs.writeFile(filename, str, (err) => {
            err ? reject(err) : resolve()
          })
        })
      })
      .catch(reject)
  })
}

renderFile(src, template, filename)
  .then(() => {
    console.log('Documentation was rendered')
  })
  .catch((err) => {
    console.error('Error rendering documentation:', err)
    process.exit(1)
  })
