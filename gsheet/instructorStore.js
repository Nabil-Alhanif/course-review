/* Database Structure
 * instructor: {
 *     id: UUID
 *     name: String
 * }
 */

/* eslint-disable no-unused-vars */

// Append a new instructor to the Instructors sheet
function appendNewInstructor(data) {
	const instructor_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
		SHEET_NAMES.INSTRUCTOR
	)
	const instructor_list = instructor_sheet.getDataRange().getValues().slice(1)

	let instructor_exists = false

	// Check if the instructor already exists
	instructor_list.forEach((row) => {
		if (row[1] == data.name) {
			instructor_exists = true
			data.id = row[0]
		}
	})

	if (instructor_exists) {
		Logger.log('Instructor already exists with the same name')
	} else {
		data.id = generateUUID()

		// Deconstruct data to make sure everything is in the correct order
		let instructor = [data.id, data.name]

		// Insert new instructor into the Instructors sheet
		instructor_sheet.appendRow(instructor)
		Logger.log('Inserted new instructor data into Instructors sheet')
	}
}

/* eslint-enable no-unused-vars */
