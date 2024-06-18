// A scrfpt to automatically generate clasp config file
import path from 'path'
import dotenv from 'dotenv'
import { writeFileSync } from 'fs'

dotenv.config()

const baseDir = process.env.BASEDIR

const claspConfig = {
  scriptId: process.env.CLASP_SCRIPT_ID,
  rootDir: path.join(baseDir, '/src/database')
}

writeFileSync(
  path.join(baseDir, 'src/database/.clasp.json'),
  JSON.stringify(claspConfig, null, 2)
)

console.log('clasp.json has been generated succesfully.')
