#!/usr/bin/env node

'use strict'

const ejs = require('ejs')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { camelCase, upperFirst, snakeCase } = require('lodash')

const name = process.argv[2] || 'component'

const component = 'B' + upperFirst(camelCase(name))
const className = snakeCase(name)

const renderFile = (source, dir) => {
  ejs.renderFile(source, {className, component}, {}, (_err, str) => {
    mkdirp(dir).then(() => {
      fs.writeFile(dir + '/' + component + '.vue', str, (err) => {
        if (err) console.error(err)
      })
    })
  })
}

renderFile(__dirname + '/templates/component.ejs', './src/components/' + component)
renderFile(__dirname + '/templates/view.ejs', './src/views')

console.log('Add the new component to the Index view.')
console.log('Add the new component to the router')
console.log('Export and register the component in components/index.js.')
