#!/usr/bin/env node

'use strict'

const fs = require('fs')
const ejs = require('ejs')
const components = require('./../json/components.json')

const renderFile = (source, dir, extension) => {
  ejs.renderFile(source, { components: components.components }, {}, (_err, str) => {
    fs.writeFile(dir + extension, str, (err) => {
      if (err) console.error(err)
    })
  })
}

renderFile(
  __dirname + '/templates/Component.ejs',
  './components',
  '.md'
)

console.log('Docu was rendered')
