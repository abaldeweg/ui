#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { parse } from 'vue-docgen-api'
import { globSync } from 'glob'

const COMPONENTS_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../src/components')

/**
 * Get all component files that match the pattern
 * @returns {string[]} Array of file paths
 * @throws {Error} If globbing fails
 */
function getComponentFiles() {
  try {
    return globSync(`${COMPONENTS_DIR}/**/B*.vue`)
  } catch (error) {
    throw new Error(`Failed to find component files: ${error.message}`)
  }
}

/**
 * Process a single component file
 * @param {string} filePath - Path to the Vue component file
 * @returns {Promise<void>} A promise that resolves when processing is complete
 * @throws {Error} If parsing or writing fails
*/
async function processComponentFile(filePath) {
  const componentName = path.basename(filePath, '.vue')

  try {
    console.log(`Processing component ${componentName}`)

    const info = await parse(filePath)
    const componentDir = path.dirname(filePath)
    const componentJsonPath = path.join(componentDir, `${componentName}.json`)

    const componentInfo = {
      name: componentName,
      props: info.props,
      slots: info.slots,
      events: info.events,
    }

    fs.writeFileSync(componentJsonPath, JSON.stringify(componentInfo, null, 2) + '\n')
  } catch (error) {
    console.error(`Error processing component ${componentName}: ${error.message}`)
    process.exit(1)
  }
}

/**
 * Extract component information from Vue files
 * @returns {Promise<number>} Number of processed files
 */
async function extractComponentInfo() {
  const componentFiles = getComponentFiles()

  for (const filePath of componentFiles) {
    await processComponentFile(filePath)
  }

  return componentFiles.length
}

/**
 * Generate the component documentation JSON file
 * @returns {Promise<void|Error>} A promise that resolves when documentation is generated
 */
async function generateComponentDocs() {
  try {
    const results = await extractComponentInfo()

    console.log(`✅ Successfully processed ${results} component files.`)
    process.exit(0)
  } catch (error) {
    console.error('❌ Error during generation:', error)
    process.exit(1)
  }
}

generateComponentDocs()
