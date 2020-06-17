const fs = require('fs')
const path = require('path')
const opentype = require('opentype.js')

const fontFormats = ['.ttf', '.otf']
const fontsPath = path.join(__dirname, './src/assets', 'fonts')
const filenames = fs.readdirSync(fontsPath)

filenames.forEach((filename) => {
  const extension = path.extname(filename)

  if (!fontFormats.includes(extension)) {
    return
  }

  const fontPath = path.join(fontsPath, filename)
  const font = opentype.loadSync(fontPath)

  const newFilename = font.names.postScriptName.en + extension
  const newFontPath = path.join(fontsPath, newFilename)

  const relativeFontPath = path.relative(__dirname, fontPath)
  const relativeNewFontPath = path.relative(__dirname, newFontPath)

  if (filename === newFilename) {
    console.log(`${relativeFontPath} is already named correctly.`)
  } else {
    fs.renameSync(fontPath, newFontPath)

    console.log(`Renamed ${relativeFontPath} to ${relativeNewFontPath}.`)
  }
});
