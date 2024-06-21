import { execSync } from 'child_process'
import path from 'path'
import { writeFileSync } from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const claspDir = path.join(process.env.BASEDIR, '/gsheet')

const generateClaspConfig = () => {
	const claspConfig = {
		scriptId: process.env.CLASP_SCRIPT_ID,
		deploymentId: process.env.CLASP_DEPLOYMENT_ID,
		rootDir: claspDir
	}

	writeFileSync(path.join(claspDir, '/.clasp.json'), JSON.stringify(claspConfig, null, 2))

	console.log('clasp.json has been generated succesfully.')
}

const pull = () => {
	console.log('Pulling code from Google Apps Script...')
	execSync('clasp pull', { stdio: 'inherit', cwd: claspDir })
}

const push = () => {
	console.log('Pushing code to Google Apps Script...')
	execSync('clasp push', { stdio: 'inherit', cwd: claspDir })
}

const deploy = () => {
	console.log('Deploying to Google Apps Script...')
	execSync(`clasp deploy --deploymentId ${process.env.CLASP_DEPLOYMENT_ID}`, {
		stdio: 'inherit',
		cwd: claspDir
	})
}

const args = process.argv.slice(2)
if (args.length === 0) {
	console.error('You need to specify at least one command: config, pull, push, or deploy')
	process.exit(1)
}

const command = args[0]

switch (command) {
	case 'config':
		generateClaspConfig()
		break
	case 'pull':
		pull()
		break
	case 'push':
		generateClaspConfig()
		push()
		break
	case 'deploy':
		generateClaspConfig()
		push()
		deploy()
		break
	default:
		console.error('Unknown command:', command)
		console.error('Available commands: config, pull, push, deploy')
		process.exit(1)
}
