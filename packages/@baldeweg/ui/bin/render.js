#!/usr/bin/env node
/* eslint-disable no-undef */

'use strict'

const fs = require('fs')
const ejs = require('ejs')
const mkdirp = require('mkdirp')
const { camelCase, upperFirst, snakeCase } = require('lodash')

const name = process.argv[2] || 'component'

const component = 'B' + upperFirst(camelCase(name))
const className = snakeCase(name)

const renderFile = (source, dir, extension) => {
  ejs.renderFile(source, { className, component }, {}, (_err, str) => {
    mkdirp(dir).then(() => {
      fs.writeFile(dir + '/' + component + extension, str, (err) => {
        if (err) console.error(err)
      })
    })
  })
}

renderFile(
  __dirname + '/templates/Component.ejs',
  './src/components/' + component,
  '.vue'
)
renderFile(__dirname + '/templates/View.ejs', './src/views', 'View.vue')
renderFile(
  __dirname + '/templates/Test.ejs',
  './src/components/__tests__/',
  '.spec.js'
)

console.log('Add the new component to the Index view.')
console.log('Add the new component to the router')
console.log('Export and register the component in components/index.js.')
