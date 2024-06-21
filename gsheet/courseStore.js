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
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.COURSES)
	const rows = sheet.getDataRange().getValues()

	const existingCourse = rows.find(
		(row) => row[1] === data.faculty && row[2] === data.code && row[3] === data.title
	)

	if (existingCourse) {
		data.id = existingCourse[0]
		Logger.log('Course already exists within the same faculty')
	} else {
		data.id = generateUUID()

		// Deconstruct data to make sure everything is in the correct order
		const newCourse = [data.id, data.faculty, data.code, data.title]

		// Insert new course into the Courses sheet
		sheet.appendRow(newCourse)
		Logger.log('Inserted new course data into Courses sheet')
	}
}

// This is just a wrapper function
function getCourses() {
	return getSheetData('Courses')
}

function getCourseById(targetId) {
	// Get the sheet for users
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.COURSES)

	if (!sheet) {
		// Return error if user sheet is not found
		return ContentService.createTextOutput(
			JSON.stringify({
				error:
					'Courses sheet not found!\nThis is not an intended behaviour, please inform the developers immediately!'
			})
		).setMimeType(ContentService.MimeType.JSON)
	}

	// Get the values of each row, remove the first row
	const rows = sheet.getDataRange().getValues()
	const headers = rows.shift()

	// Find the course with the same id
	const course = rows.find((row) => row[0] === targetId)

	if (!course) {
		return ContentService.createTextOutput(
			JSON.stringify({ error: 'Course not found!' })
		).setMimeType(ContentService.MimeType.JSON)
	}

	const courseData = headers.reduce((obj, header, index) => {
		obj[header] = course[index]
		return obj
	}, {})

	// Return the data as JSON
	return ContentService.createTextOutput(JSON.stringify(courseData)).setMimeType(
		ContentService.MimeType.JSON
	)
}
/* eslint-enable no-unused-vars */
