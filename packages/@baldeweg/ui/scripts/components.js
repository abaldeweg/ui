#!/usr/bin/env node

import { readdirSync, writeFileSync } from 'fs'
import path from 'path'

const componentsDir = './src/components/'

const getComponentData = (dir) => {
  return readdirSync(path.join(componentsDir, dir), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.vue') && dirent.name.startsWith('B'))
    .map(dirent => {
      return {
        name: dirent.name.slice(1, -4),
        directory: dir.slice(1)
      }
    })
}

const listComponents = () => {
  const directories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => getComponentData(dirent.name))
    .flat()

  writeFileSync('./src/components.json', JSON.stringify(directories, null, 2) + '\n')
}

listComponents()
