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
function appendNewUser(user) {
	const user_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.USERS)
	const user_list = user_sheet.getDataRange().getValues()

	let user_exists = false

	// Check if the user already exists
	user_list.slice(1).forEach((row) => {
		if (row[1] === user.name && row[2] === user.email) {
			user_exists = true
			user.id = row[0]
		}
	})

	if (user_exists) {
		Logger.log('User already exists with the same name and email')
	} else {
		user.id = generateUUID()
		// Insert new user into the Users sheet
		user_sheet.appendRow(Object.values(user))
		Logger.log('Inserted new user data into Users sheet')
	}
}

// Append a new course to the Courses sheet
function appendNewCourse(course) {
	const course_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.COURSES)
	const course_list = course_sheet.getDataRange().getValues()

	let course_exists = false

	// Check if the course already exists
	course_list.slice(1).forEach((row) => {
		if (row[1] === course.faculty && row[2] === course.number && row[3] === course.title) {
			course_exists = true
			course.id = row[0]
		}
	})

	if (course_exists) {
		Logger.log('Course already exists within the same faculty')
	} else {
		course.id = generateUUID()
		// Insert new course into the Courses sheet
		course_sheet.appendRow(Object.values(course))
		Logger.log('Inserted new course data into Courses sheet')
	}
}

// Append a new instructor to the Instructors sheet
function appendNewInstructor(instructor) {
	const instructor_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
		SHEET_NAMES.INSTRUCTOR
	)
	const instructor_list = instructor_sheet.getDataRange().getValues()

	let instructor_exists = false

	// Check if the instructor already exists
	instructor_list.slice(1).forEach((row) => {
		if (row[1] == instructor.name) {
			instructor_exists = true
			instructor.id = row[0]
		}
	})

	if (instructor_exists) {
		Logger.log('Instructor already exists with the same name')
	} else {
		instructor.id = generateUUID()
		// Insert new instructor into the Instructors sheet
		instructor_sheet.appendRow(Object.values(instructor))
		Logger.log('Inserted new instructor data into Instructors sheet')
	}
}

// Append a new review to the Reviews sheet
function appendNewReview(review) {
	const review_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.REVIEWS)
	const review_list = review_sheet.getDataRange().getValues()

	let review_exists = false

	// Check if the review already exists
	review_list.slice(1).forEach((row) => {
		if (
			row[0] === review.id &&
			row[1] === review.user_id &&
			row[2] === review.course_id &&
			row[3] === review.instructor_id
		) {
			review_exists = true
			review.id = row[0]
		}
	})

	if (review_exists) {
		Logger.log('Review already exists with the same ID, user, course, and instructor')
	} else {
		review.id = generateUUID()
		// Append new review to the Reviews sheet
		review_sheet.appendRow(Object.values(review))
		Logger.log('Inserted new review data into Reviews sheet')
	}
}
