#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { parse } from 'vue-docgen-api'
import glob from 'glob'

// Configuration
const COMPONENTS_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../src/components')

/**
 * Convert a string to kebab-case
 * @param {string} str - The string to convert
 * @returns {string} Kebab-case string
 */
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Extract information from all components
 * @returns {Promise<Object>} Component information
 */
async function extractComponentInfo() {
  // Find all Vue component files
  const componentFiles = glob.sync(`${COMPONENTS_DIR}/**/*.vue`)
  const componentsInfo = {}

  console.log(`Found ${componentFiles.length} component files to process`)

  for (const filePath of componentFiles) {
    try {
      const componentName = path.basename(filePath, '.vue')

      // Skip files starting with "Example" or named "AppComponent"
      if (componentName.startsWith('Example') || componentName === 'AppComponent') {
        continue
      }

      console.log(`Processing component: ${componentName}`)

      // Parse component with vue-docgen-api
      const info = await parse(filePath)

      // Extract props
      const props = (info.props || []).map(prop => {
        // Convert type to array and capitalize first letter of each type
        let typeArray = prop.type?.name ? (Array.isArray(prop.type.name) ? prop.type.name : [prop.type.name]) : [];

        // Handle pipe-separated types (like "String|Number")
        typeArray = typeArray.flatMap(type => {
          if (typeof type === 'string' && type.includes('|')) {
            return type.split('|');
          }
          return type;
        });

        // Capitalize first letter of each type
        typeArray = typeArray.map(type => type.charAt(0).toUpperCase() + type.slice(1));

        // Process default value - convert string booleans to actual booleans and remove extra quotes
        let defaultValue = prop.defaultValue?.value;

        // Remove surrounding quotes if they exist
        if (typeof defaultValue === 'string') {
          if ((defaultValue.startsWith("'") && defaultValue.endsWith("'")) ||
              (defaultValue.startsWith('"') && defaultValue.endsWith('"'))) {
            defaultValue = defaultValue.slice(1, -1);
          }
        }

        // Convert string booleans to actual booleans
        if (defaultValue === 'true') defaultValue = true;
        if (defaultValue === 'false') defaultValue = false;

        return {
          name: prop.name,
          type: typeArray,
          default: defaultValue,
          allowedValues: prop.values
        };
      })

      // Extract events
      const events = (info.events || []).map(event => ({
        name: event.name,
        description: event.description
      }))

      // Extract slots
      const slots = (info.slots || []).map(slot => ({
        name: slot.name,
        description: slot.description
      }))

      // Check for existing component config file
      let existingDescription = null
      const componentDir = path.dirname(filePath)
      const componentJsonPath = path.join(componentDir, `${componentName}.json`)

      try {
        if (fs.existsSync(componentJsonPath)) {
          const existingConfig = JSON.parse(fs.readFileSync(componentJsonPath, 'utf8'))
          if (existingConfig.description) {
            existingDescription = existingConfig.description
          }
        }
      } catch (error) {
        console.warn(`Could not read existing config for ${componentName}: ${error.message}`)
      }

      // Process component description - prioritize existing description if available
      const description = existingDescription ||
                         (info.description ? info.description.trim() : undefined);

      const componentInfo = {
        "$schema": "./../component.schema.json",
        name: componentName,
        description: description,
        props: props.length > 0 ? props : undefined,
        slots: slots.length > 0 ? slots : undefined,
        events: events.length > 0 ? events : undefined,
      }

      // Store component info for global docs
      componentsInfo[componentName] = componentInfo

      // Write individual component JSON file
      fs.writeFileSync(componentJsonPath, JSON.stringify(componentInfo, null, 2) + '\n')
      console.log(`Component JSON written to ${componentJsonPath}`)
    } catch (error) {
      console.error(`Error processing component ${filePath}: ${error.message}`)
    }
  }

  return componentsInfo
}

/**
 * Generate the component documentation JSON file
 * @returns {Promise<void|Error>} A promise that resolves when documentation is generated
 */
async function generateComponentDocs() {
  try {
    console.log('Starting component documentation generation...')
    const componentsInfo = await extractComponentInfo()

    const output = {
      components: componentsInfo,
      generatedAt: new Date().toISOString()
    }

    return Promise.resolve()
  } catch (error) {
    console.error(`Failed to generate component documentation: ${error.message}`)
    return Promise.reject(error)
  }
}

generateComponentDocs()
  .then(() => {
    console.log('✅ Documentation generated successfully!')
    process.exit(0)
  })
  .catch(error => {
    console.error('❌ Error during generation:', error)
    process.exit(1)
  })
