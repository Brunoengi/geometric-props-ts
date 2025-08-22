import { glob } from 'glob'
import { rename, readFile, writeFile } from 'fs/promises'
import path from 'path'

/**
 * Renames file extensions in a given directory.
 * @param {string} directory The directory to search in.
 * @param {string} from The original extension.
 * @param {string} to The new extension.
 */
async function renameExtensions (directory, from, to) {
  const files = await glob(`${directory}/**/*.${from}`)
  for (const file of files) {
    const newFile = path.join(path.dirname(file), `${path.basename(file, `.${from}`)}.${to}`)
    await rename(file, newFile)
    console.log(`Renamed: ${file} -> ${newFile}`)
  }
}

/**
 * Removes the .js extension from import/export paths in declaration files.
 * @param {string} directory The directory to search for .d.ts files.
 */
async function fixDeclarationFileExtensions (directory) {
  const files = await glob(`${directory}/**/*.d.ts`)
  for (const file of files) {
    const content = await readFile(file, 'utf-8')
    // Regex to find import/export paths ending in .js and remove the extension
    const updatedContent = content.replace(/(from\s+['"]\..*?)\.js(['"])/g, '$1$2')
    if (content !== updatedContent) {
      await writeFile(file, updatedContent, 'utf-8')
      console.log(`Fixed .d.ts extensions in: ${file}`)
    }
  }
}

async function main () {
  try {
    await renameExtensions('dist/esm', 'js', 'mjs')
    await renameExtensions('dist/cjs', 'js', 'cjs')
    await fixDeclarationFileExtensions('dist/types')
    console.log('Post-build steps completed successfully.')
  } catch (error) {
    console.error('Error during post-build steps:', error)
    process.exit(1)
  }
}

main()