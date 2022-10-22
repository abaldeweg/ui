import { renderFile } from './generator'

renderFile(
  __dirname + '/templates/Component.ejs',
  './components.md',
)

console.log('Docu was rendered')
