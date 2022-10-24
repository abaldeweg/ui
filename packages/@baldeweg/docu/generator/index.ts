import fs from 'fs'
import ejs from 'ejs'
import path from 'path'

const renderFile = async (src: string, template: string, filename: string) => {
  const data = await import(path.join(process.cwd(), src))
  ejs.renderFile(template, { components: data.components }, {}, (_err, str) => {
    fs.writeFile(filename, str, (err): void => {
      if (err) console.error(err)
    })
  })
}

export { renderFile }
