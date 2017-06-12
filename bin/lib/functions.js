const fs = require('fs')
const path = require('path')

const pJoin = (p, f) => path.join(p, f)

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
const getDirectories = p => readDir(p).filter(f => isDir(pJoin(p, f)))

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
    .map(dirs => pJoin(p, dirs))
    .map(item => (isDir(item) ? rmDirRecursive(item) : rmFile(item)))
  rmDir(p)
}

/**
 * Clean the node_modules dir from a path
 * @param p the dir to remove
 */
const clean = p =>
  getDirectories(p)
    .filter(dir => dir === 'node_modules')
    .map(dir => pJoin(p, dir))
    .map(dir => {
      console.log(`[!] Removing ${dir}`)
      rmDirRecursive(dir)
    })

module.exports = {
  pJoin,
  clean,
}
