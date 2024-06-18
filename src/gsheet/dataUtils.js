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

// Append a new user to the Users sheet
function appendNewUser(user_id, user_name, user_email) {
	const user_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.USERS)
	const user_list = user_sheet.getDataRange().getValues()

	// Check if the user already exists using filter
	const user_exists = user_list
		.slice(1)
		.some((row) => row[1] === user_name && row[2] === user_email)

	if (user_exists) {
		Logger.log('User already exists with the same name and email')
	} else {
		// Insert new user into the Users sheet
		user_sheet.appendRow([user_id, user_name, user_email])
		Logger.log('Inserted new user data into Users sheet')
	}
}

// Append a new course to the Courses sheet
function appendNewCourse(course_id, course_faculty, course_number, course_title) {
	const course_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.COURSES)
	const course_list = course_sheet.getDataRange().getValues()

	// Check if the course already exists using filter
	const course_exists = course_list
		.slice(1)
		.some((row) => row[1] === course_faculty && row[2] === course_number && row[3] === course_title)

	if (course_exists) {
		Logger.log('Course already exists within the same faculty')
	} else {
		// Insert new course into the Courses sheet
		course_sheet.appendRow([course_id, course_faculty, course_number, course_title])
		Logger.log('Inserted new course data into Courses sheet')
	}
}

// Append a new instructor to the Instructors sheet
function appendNewInstructor(instructor_id, instructor_name) {
	const instructor_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
		SHEET_NAMES.INSTRUCTOR
	)
	const instructor_list = instructor_sheet.getDataRange().getValues()

	// Check if the instructor already exists using filter
	const instructor_exists = instructor_list.slice(1).some((row) => row[1] === instructor_name)

	if (instructor_exists) {
		Logger.log('Instructor already exists with the same name')
	} else {
		// Insert new instructor into the Instructors sheet
		instructor_sheet.appendRow([instructor_id, instructor_name])
		Logger.log('Inserted new instructor data into Instructors sheet')
	}
}

// Append a new review to the Reviews sheet
function appendNewReview(
	review_id,
	user_id,
	course_id,
	instructor_id,
	user_faculty,
	user_standing,
	instructor_rating,
	workload,
	difficulties,
	recommended,
	description,
	tips,
	timestamp
) {
	const review_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.REVIEWS)
	const review_list = review_sheet.getDataRange().getValues()
	// Check if the review already exists
	const review_exists = review_list
		.slice(1)
		.some(
			(row) =>
				row[0] === review_id &&
				row[1] === user_id &&
				row[2] === course_id &&
				row[3] === instructor_id
		)

	if (review_exists) {
		Logger.log('Review already exists with the same ID, user, course, and instructor')
	} else {
		// Append new review to the Reviews sheet
		review_sheet.appendRow([
			review_id,
			user_id,
			course_id,
			instructor_id,
			user_faculty,
			user_standing,
			instructor_rating,
			workload,
			difficulties,
			recommended,
			description,
			tips,
			timestamp
		])
		Logger.log('Inserted new review data into Reviews sheet')
	}
}
