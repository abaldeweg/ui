#!/usr/bin/env node

'use strict'

const ejs = require('ejs')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { kebabCase, camelCase, upperFirst, snakeCase } = require('lodash')

const name = kebabCase(process.argv[2]) || 'component'
const component = 'B' + upperFirst(camelCase(name))
const filename = 'B' + upperFirst(camelCase(name)) + '.vue'
const data = {
  name: name,
  cssClass: snakeCase(name),
  component: component,
}

const renderFile = (source, dir) => {
  ejs.renderFile(source, data, {}, (_err, str) => {
    mkdirp(dir).then(() => {
      fs.writeFile(dir + '/' + filename, str, (error) => {
        if (error) console.error(error)
      })
    })
  })
}

renderFile(__dirname + '/templates/component', './src/components/' + component)
renderFile(__dirname + '/templates/view', './src/views')

console.log('Add the new component to the Index view.')
console.log('Add the new component to the router')
console.log('Export and register the component in index.js.')
