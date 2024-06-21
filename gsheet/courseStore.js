/* Database Structure
 * user: {
 *     id: UUID
 *     faculty: String
 *     code: String
 *     title: String
 * }
 */

/* eslint-disable no-unused-vars */

// Append a new user to the Users sheet

// Append a new course to the Courses sheet
function appendNewCourse(data) {
	const course_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.COURSES)
	const course_list = course_sheet.getDataRange().getValues()

	let course_exists = false

	// Check if the course already exists
	course_list.slice(1).forEach((row) => {
		if (row[1] === data.faculty && row[2] === data.code && row[3] === data.title) {
			course_exists = true
			data.id = row[0]
		}
	})

	if (course_exists) {
		Logger.log('Course already exists within the same faculty')
	} else {
		data.id = generateUUID()

		// Deconstruct data to make sure everything is in the correct order
		let course = [data.id, data.faculty, data.code, data.title]

		// Insert new course into the Courses sheet
		course_sheet.appendRow(course)
		Logger.log('Inserted new course data into Courses sheet')
	}
}

/* eslint-enable no-unused-vars */
