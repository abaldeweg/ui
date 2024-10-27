#!/usr/bin/env node

const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const workspace = process.argv[2]

if (!workspace) {
  console.error('Workspace not provided. Usage: node tag.js <workspace>')
  process.exit(1)
}

askForVersion().then(version => {
  setVersion(version).then(() => {
    exec(`git add ${workspace}/*/package.json && git commit -m "bump version"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error committing changes: ${error}`)
        return
      }

      if (stderr) {
        console.error(`Error committing changes: ${error}`)
      }

      console.log(`Changes committed: ${stdout}`)
    })
  })
})

/**
 * Prompts the user for the version tag.
 *
 * @returns {Promise<string>} A promise that resolves with the version tag entered by the user.
 */
function askForVersion() {
  return new Promise(resolve => {
    readline.question("Version Tag: ", version => {
      readline.close()
      resolve(version)
    })
  })
}

/**
 * Sets the version in all package.json files within the specified workspace.
 *
 * @param {string} version The version to set.
 * @returns {Promise<void>} A promise that resolves when all package.json files have been updated.
 */
function setVersion(version) {
  return new Promise((resolve, reject) => {
    fs.readdir(workspace, (err, pkg) => {
      if (err) {
        console.error("Could not read packages directory:", err)
        reject(err)
        return
      }

      pkg.forEach(package => {
        const packagePath = path.join(workspace, package)

        if (fs.statSync(packagePath).isDirectory()) {
          const packageJsonPath = path.join(packagePath, 'package.json')

          fs.readFile(packageJsonPath, 'utf8', (err, data) => {
            if (err) {
              console.error(`Could not read package.json for ${package}:`, err)
              reject(err)
              return
            }

            try {
              const packageJson = JSON.parse(data)
              packageJson.version = version

              const jsonString = JSON.stringify(packageJson, null, 2) + '\n'

              fs.writeFile(packageJsonPath, jsonString, err => {
                if (err) {
                  console.error(`Could not write to package.json for ${package}:`, err)
                  reject(err)
                  return
                }

                console.log(`Updated version for ${package} to ${version}`)
              })
            } catch (parseErr) {
              console.error(`Could not parse package.json for ${package}:`, parseErr)
              reject(parseErr)
            }
          })
        }
      })

      resolve()
    })
  })
}
