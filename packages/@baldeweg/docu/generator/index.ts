import fs from 'fs'
import ejs from 'ejs'
import path from 'path'

const renderFile = (src: string, template: string, filename: string) => {
  return new Promise<void>((resolve, reject) => {
    import(path.join(process.cwd(), src)).then((data) => {
      ejs.renderFile(template, { components: data.components }, {}, (_err, str) => {
        fs.writeFile(filename, str, (err): void => {
          err ? reject(err) : resolve()
        })
      })
    })
  })
}

export { renderFile }
