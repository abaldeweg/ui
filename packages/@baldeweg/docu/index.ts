#!/usr/bin/env node

import ejs from 'ejs'
import { readdirSync, statSync, readFileSync, writeFile } from 'fs'
import { join } from 'path'

const componentsDir = './../ui/src/components'
const template = "./templates/component.ejs"
const filename = "./components.md"

interface Component {
  name: string;
  description?: string;
  props?: Prop[];
  slots?: Slot[];
  events?: Event[];
}

interface Prop {
  name: string;
  description?: string;
  type: string[];
  allowedValues?: string[];
  default?: string;
}

interface Slot {
  name: string;
  description?: string;
}

interface Event {
  name: string;
  description?: string;
}

/**
 * Renders an EJS template file with data from a JSON object and writes the output to a file.
 *
 * @param {object} data - The JSON object containing the data.
 * @param {string} template - The path to the EJS template file.
 * @param {string} filename - The path to the output file.
 * @returns {Promise<void>} A promise that resolves when the file is written successfully.
 */
const renderFile = (data: any, template: string, filename: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(template, { components: data.components }, {}, (err, str) => {
      if (err) {
        reject(err)
        return
      }
      writeFile(filename, str, (err) => {
        err ? reject(err) : resolve()
      })
    })
  })
}

/**
 * Recursively reads all JSON files from a directory and its subdirectories.
 *
 * @param {string} dirPath - The path to the directory to read.
 * @returns {Component[]} An array of component objects parsed from the JSON files.
 */
function readJsonFiles(dirPath: string): Component[] {
  const components: Component[] = []

  const files = readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = join(dirPath, file)
    const stat = statSync(filePath)

    if (stat.isDirectory()) {
      components.push(...readJsonFiles(filePath))
    } else if (file.endsWith('.json')) {
      const jsonData = JSON.parse(readFileSync(filePath, 'utf8')) as Component
      components.push(jsonData)
    }
  });

  return components
}

/**
 * Generates component documentation from JSON files and renders it using EJS.
 */
function generate(): void {
  const componentsData = {
    $schema: 'components.schema.json',
    components: readJsonFiles(componentsDir),
  }

  const jsonString = JSON.stringify(componentsData, null, 2)

  renderFile(JSON.parse(jsonString), template, filename)
    .then(() => {
      console.log('\x1b[32m%s\x1b[0m', 'Documentation was rendered')
    })
    .catch((err) => {
      console.error('Error rendering documentation:', err)
      process.exit(1)
    })
}

generate()
