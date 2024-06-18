// A scrfpt to automatically generate clasp config file
import path from 'node:path'
import dotenv from 'dotenv'
import { writeFileSync } from 'node:fs'

dotenv.config()

const baseDir = process.env.BASEDIR

const claspConfig = {
	scriptId: process.env.CLASP_SCRIPT_ID,
	rootDir: path.join(baseDir, '/src/gsheet')
}

writeFileSync(
	path.join(baseDir, 'src/gsheet/.clasp.json'),
	JSON.stringify(claspConfig, null, 2)
)

console.log('clasp.json has been generated succesfully.')
