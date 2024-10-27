#!/usr/bin/env node

const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

askForVersion().then(version => {
  setVersion(version)
})

function askForVersion() {
  return new Promise(resolve => {
    readline.question("Version Tag: ", version => {
      readline.close()
      resolve(version)
    })
  })
}

function setVersion(version) {
  const packagesDir = 'packages/@baldeweg'

  fs.readdir(packagesDir, (err, pkg) => {
    if (err) {
      console.error("Could not read packages directory:", err)
      return
    }

    pkg.forEach(package => {
      const packagePath = path.join(packagesDir, package)

      if (fs.statSync(packagePath).isDirectory()) {
        const packageJsonPath = path.join(packagePath, 'package.json')

        fs.readFile(packageJsonPath, 'utf8', (err, data) => {
          if (err) {
            console.error(`Could not read package.json for ${package}:`, err)
            return
          }

          try {
            const packageJson = JSON.parse(data)
            packageJson.version = version

            const jsonString = JSON.stringify(packageJson, null, 2) + '\n'

            fs.writeFile(packageJsonPath, jsonString, err => {
              if (err) {
                console.error(`Could not write to package.json for ${package}:`, err)
                return
              }
              console.log(`Updated version for ${package} to ${version}`)
            })
          } catch (parseErr) {
            console.error(`Could not parse package.json for ${package}:`, parseErr)
          }
        })
      }
    })
  })
}
