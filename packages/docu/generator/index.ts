#!/usr/bin/env node

import fs from 'fs'
import ejs from 'ejs'
import { components } from '../json/components.json'

const renderFile = (template: string, filename: string) => {
  ejs.renderFile(template, { components }, {}, (_err, str) => {
    fs.writeFile(filename, str, (err): void => {
      if (err) console.error(err)
    })
  })
}

export { renderFile }
