#!/usr/bin/env node

import { renderFile } from './generator'

const args = process.argv.slice(2)

console.log(args)

renderFile(
  args[0],
  args[1],
  args[2]
)

console.log('Docu was rendered')
