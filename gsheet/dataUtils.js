/* eslint-disable no-unused-vars */
// Generate UUID for unique identification
function generateUUID() {
	const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
	const uuid = template.replaceAll(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0
		const v = c == 'x' ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})

	return uuid
}

function isObjectEmpty(objectName) {
	return objectName && Object.keys(objectName).length === 0 && objectName.constructor === Object
}

function specialCharForJSON(inputText) {
	// Replace backslashes with double backslashes
	let text = inputText.replace(/\\/g, '\\\\')

	// Replace double quotes with escaped double quotes
	text = text.replace(/"/g, '\\"')

	// Replace new line charactesr with \n
	text = text.replace(/\n/g, '\\n')

	return text
}
/* eslint-enable no-unused-vars */
