#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { parse } from 'vue-docgen-api'
import { globSync } from 'glob'

// Configuration
const COMPONENTS_DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../src/components')

/**
 * Extract component information from Vue files
 * @returns {Promise<Object>} A promise that resolves to an object containing component information
 */
async function extractComponentInfo() {
  const componentFiles = globSync(`${COMPONENTS_DIR}/**/*.vue`)
  const componentsInfo = {}
  let componentCount = 0

  for (const filePath of componentFiles) {
    try {
      const componentName = path.basename(filePath, '.vue')

      if (componentName.startsWith('Example') || componentName === 'AppComponent') {
        continue
      }

      console.log(`Processing component: ${componentName}`)
      componentCount++

      const info = await parse(filePath)

      const props = (info.props || []).map(prop => {
        let typeArray = prop.type?.name ? (Array.isArray(prop.type.name) ? prop.type.name : [prop.type.name]) : [];

        typeArray = typeArray.flatMap(type => {
          if (typeof type === 'string' && type.includes('|')) {
            return type.split('|');
          }
          return type;
        });

        typeArray = typeArray.map(type => type.charAt(0).toUpperCase() + type.slice(1));

        let defaultValue = prop.defaultValue?.value;
        if (typeof defaultValue === 'string') {
          if ((defaultValue.startsWith("'") && defaultValue.endsWith("'")) ||
            (defaultValue.startsWith('"') && defaultValue.endsWith('"'))) {
            defaultValue = defaultValue.slice(1, -1);
          }
        }

        if (defaultValue === 'true') defaultValue = true;
        if (defaultValue === 'false') defaultValue = false;

        return {
          name: prop.name,
          type: typeArray,
          default: defaultValue,
          allowedValues: prop.values
        };
      })

      const events = (info.events || []).map(event => ({
        name: event.name,
      }))

      const slots = (info.slots || []).map(slot => ({
        name: slot.name,
      }))

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

      componentsInfo[componentName] = componentInfo

      fs.writeFileSync(componentJsonPath, JSON.stringify(componentInfo, null, 2) + '\n')
    } catch (error) {
      console.error(`Error processing component ${filePath}: ${error.message}`)
    }
  }

  console.log(`Total components processed: ${componentCount}`)

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
