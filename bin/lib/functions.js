const fs = require('fs')
const path = require('path')

/**
 * Synchronously check if path exists
 * @param p the path to check
 */
const exists = p => fs.existsSync(p)

/**
 * Synchronously get a list of directories in a dir
 * @param p the dir to read
 * @returns array A list of dir names
 */
const getDirectories = p => readDir(p).filter(f => isDir(path.join(p, f)))

/**
 * Synchronously get a list of directories in a dir
 * @param p the dir to read
 * @returns array A list of dir names
 */
const getDirectoriesFilter = (p, filter) =>
  getDirectories(p)
    .filter(dir => dir === filter)
    .map(item => path.join(p, item))

/**
 * Synchronously check if path is a dir
 * @param p the path to check
 */
const isDir = p => fs.lstatSync(p).isDirectory()

/**
 * Synchronously read the contents of a path
 * @param p the path to read
 * @returns array A list of file/dir names
 */
const readDir = p => fs.readdirSync(p)

/**
 * Synchronously remove a dir
 * @param p the dir to remove
 */
const rmDir = p => fs.rmdirSync(p)

/**
 * Synchronously remove a file
 * @param f the file to remove
 */
const rmFile = f => fs.unlinkSync(f)

/**
 * Synchronously remove a dir recursively
 * @param p the dir to remove
 */
const rmDirRecursive = p => {
  if (!exists(p)) return
  readDir(p)
    .map(dirs => path.join(p, dirs))
    .map(item => (isDir(item) ? rmDirRecursive(item) : rmFile(item)))
  rmDir(p)
}

const getProjectPath = () => {
  const projectName = '@colmena/colmena'
  const projectRoot = '../..'
  const projectPath = path.join(__dirname, projectRoot)

  const pjson = require(`${projectPath}/package.json`)

  if (!pjson || !pjson.name || pjson.name !== projectName) {
    console.log(`Could not find the ${projectName} project`)
    return process.exit(1)
  }
  return projectPath
}

const getLernaPaths = p => {
  const lerna = ['apps', 'modules', 'packages']

  const paths = []

  lerna.forEach(dir => {
    const dirPath = path.join(p, dir)
    const lernaDirs = getDirectories(dirPath).map(d => path.join(dirPath, d))
    paths.push(...lernaDirs)
  })

  return paths
}

const hasSubDir = (p, filter) =>
  p
    .map(dir => getDirectoriesFilter(dir, filter))
    .filter(item => item.length)
    .map(item => item[0])

/**
 * Clean the node_modules dir from a path
 */
const clean = () => {
  const p = getProjectPath()

  console.log(`[clean] Cleaning up project path ${p}`)

  const paths = [p, ...getLernaPaths(p)]

  hasSubDir(paths, 'node_modules').forEach(dir => {
    console.log(`[clean] Remove ${dir}`)
    rmDirRecursive(dir)
  })

  console.log('[clean] Done.')
}

module.exports = {
  clean,
}
