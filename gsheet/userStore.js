/* Database Structure
 * user: {
 *     id: UUID
 *     name: String
 *     email: String
 * }
 */

/* eslint-disable no-unused-vars */

// Append a new user to the Users sheet
function appendNewUser(data) {
	const user_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.USERS)
	const user_list = user_sheet.getDataRange().getValues().slice(1)

	let user_exists = false

	// Check if the user already exists
	user_list.forEach((row) => {
		if (row[1] === data.name && row[2] === data.email) {
			user_exists = true
			data.id = row[0]
		}
	})

	if (user_exists) {
		Logger.log('User already exists with the same name and email')
	} else {
		data.id = generateUUID()

		// Deconstruct data to make sure everything is in the correct order
		let user = [data.id, data.name, data.email]

		// Insert new user into the Users sheet
		user_sheet.appendRow(user)
		Logger.log('Inserted new user data into Users sheet')
	}
}

function getUserById(targetId) {
	// Get the sheet for users
	const user_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.USERS)

	// Get the values of each row, remove the first row
	const user_list = user_sheet.getDataRange().getValues().slice(1)
}

/* eslint-enable no-unused-vars */
