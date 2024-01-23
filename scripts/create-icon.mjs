import fs from 'fs'
import path from 'path'
import startCase from 'lodash/startCase.js'
import camelCase from 'lodash/camelCase.js'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ICONS_DIR = path.join(__dirname, '../src/components/atoms/Icon/')

const name = process.argv[2]
const namePascal = startCase(camelCase(name)).replace(/ /g, '')

const svgPath = path.join(__dirname, `../node_modules/@material-design-icons/svg/round/${name}.svg`)

const getSVG = (outline = false) => `import React from 'react'
import ReactComponent from '@material-design-icons/svg/${outline ? 'outlined' : 'round'}/${name}.svg?react'
import Icon from '.'

const ${namePascal}${outline ? 'Outline': ''}Icon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ${namePascal}${outline ? 'Outline': ''}Icon
`.replace(/\r\n/g, "\n")

const updateIconList = async () => {
  const exportStr = 'export default '
  const iconListPath = path.join(ICONS_DIR, 'icons.ts')
  const data = fs.readFileSync(iconListPath).toString()
  const icons = JSON.parse(data.replace(exportStr, ''))
  icons.push(namePascal, `${namePascal}Outline`)

  const set = new Set(icons)
  fs.writeFileSync(iconListPath, 
    `${exportStr} ${JSON.stringify(Array.from(set), null, ' ')}`.replace(/\r\n/g, "\n"), {})
}

if (fs.existsSync(svgPath)) {
  const componentPath = path.join(ICONS_DIR, `${namePascal}.tsx`)
  const componentOutlinePath = path.join(ICONS_DIR, `${namePascal}Outline.tsx`)
  fs.writeFileSync(componentPath, getSVG(), {
    
  })
  fs.writeFileSync(componentOutlinePath, getSVG(true))
  updateIconList()
  console.error('x1b[31m%s\x1b[0m', `Svg file created: ${componentPath}`)
} else {
  console.error('x1b[31m%s\x1b[0m', `Svg file not found: ${svgPath}`)
}
