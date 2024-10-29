#!/usr/bin/env node

import ejs from 'ejs'
import { readdirSync, statSync, readFileSync, writeFile } from 'fs'
import { join } from 'path'

const componentsDir = './../ui/src/components'
const template = "./component.ejs"
const outputFilename = "./components.md"

/**
 * Interface representing a component property.
 */
interface Prop {
  name: string;
  description?: string;
  type: string[];
  allowedValues?: string[];
  default?: string;
  example?: string
}

/**
 * Interface representing a component slot.
 */
interface Slot {
  name: string;
  description?: string;
}

/**
 * Interface representing a component event.
 */
interface Event {
  name: string;
  description?: string;
}

/**
 * Interface representing a component.
 */
interface Component {
  name: string;
  description?: string;
  props?: Prop[];
  slots?: Slot[];
  events?: Event[];
}

/**
 * Renders an EJS template file with data from a JSON object and writes the output to a file.
 *
 * @param {object} components - The JSON object containing the component data.
 * @returns {Promise<void>} A promise that resolves when the file is written successfully.
 */
const renderFile = (components: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(template, { components }, {}, (err, str) => {
      if (err) {
        reject(err)
        return
      }
      writeFile(outputFilename, str, (err) => {
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
const readJsonFiles = (dirPath: string): Component[] => {
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
  })

  return components
}

/**
 * Generates component documentation from JSON files and renders it using EJS.
 */
const generateDocumentation = (): void => {
  renderFile(readJsonFiles(componentsDir))
    .then(() => {
      console.log('\x1b[32m%s\x1b[0m', 'Documentation was rendered')
    })
    .catch((err) => {
      console.error('Error rendering documentation:', err)
      process.exit(1)
    })
}

generateDocumentation()
