const SHEET_NAMES = {
	USERS: 'Users',
	COURSES: 'Courses',
	PROFESSORS: 'Professors',
	REVIEWS: 'Reviews'
}

function getSheetData(sheetName) {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
	if (!sheet) {
		return ContentService.createTextOutput(
			JSON.stringify({ error: `Sheet ${sheetName} not found` })
		).setMimeType(ContentService.MimeType.JSON)
	}

	const data = sheet.getDataRange().getValues()
	const headers = data.shift()
	const records = data.map((row) => {
		let record = {}
		headers.forEach((header, index) => {
			record[header] = row[index]
		})
		return record
	})
	return ContentService.createTextOutput(JSON.stringify(records)).setMimeType(
		ContentService.MimeType.JSON
	)
}

function doGet(e) {
	const action = e.parameter.action
	switch (action) {
		case 'getSheetData':
			const sheetName = e.parameter.sheetName
			return getSheetData(sheetName)
		default:
			return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid action' }))
	}
}

// Generate UUID for unique identification
function generateUUID() {
	const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
	const uuid = template.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0
		const v = c == 'x' ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
	return uuid
}

function appendNewUser(user_id, user_name, user_email) {
	// Check if user already exists
	const user_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.USERS)
	const user_data = user_sheet.getDataRange().getValues()

	let user_exists = false

	for (let i = 1; i < user_data.length; i++) {
		if (user_data[i][1] === user_name && user_data[i][2] === user_email) {
			user_exists = true
			break
		}
	}

	if (!userExists) {
		// Insert into Users sheet
		userSheet.appendRow([userId, name, email])
		Logger.log('Inserted new user data into Users sheet')
	} else {
		Logger.log('User already exists with the same name and email')
	}
}

// Process form submission
function onFormSubmit(e) {
	const responses = e.namedValues

	const timestamp = responses['Timestamp'][0]
	const reviewer_name = responses['Name'][0]
	const reviewer_email = responses['Email'][0]
	const course_faculty = responses['Course-Faculty'][0]
	const course_number = responses['Course-Number'][0]
	const course_title = responses['Course-Title'][0]
	const reviewer_faculty = responses['Reviewer-Faculty'][0]
	const reviewer_standing = responses['Reviewer-Standing'][0]
	const instructor_name = responses['Instructor-Name'][0]
	const instructor_rating = responses['Instructor-Rating'][0]
	const workload = responses['Workload'][0]
	const recommended = responses['Reconmmended'][0]
	const description = responses['Description'][0]
	const tips = responses['Tips'][0]

	// Generate unique IDs
	const user_id = generateUUID()
	const course_id = generateUUID()
	const professor_id = generateUUID()
	const review_id = generateUUID()

	// Insert into Users sheet
	appendNewUser([user_id, reviewer_name, reviewer_email])
}
