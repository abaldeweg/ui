#!/usr/bin/env node

'use strict'

const fs = require('fs')
const ejs = require('ejs')
const { components } = require('./../json/components.json')

const renderFile = (template, filename) => {
  ejs.renderFile(template, { components }, {}, (_err, str) => {
    fs.writeFile(filename, str, (err) => {
      if (err) console.error(err)
    })
  })
}

renderFile(
  __dirname + '/templates/Component.ejs',
  './components.md',
)

console.log('Docu was rendered')
