// Handle GET requests
function doGet(e) {
	const action = e.parameter.action
	switch (action) {
	case 'getSheetData': {
		const sheet_name = e.parameter.sheetName
		return getSheetData(sheet_name)
	}
	default: {
		return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid action' }))
	}
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
	const difficulties = responses['Difficulties'][0]
	const recommended = responses['Recommended'][0]
	const description = responses['Description'][0]
	const tips = responses['Tips'][0]

	// Generate unique IDs
	const user_id = generateUUID()
	const course_id = generateUUID()
	const instructor_id = generateUUID()
	const review_id = generateUUID()

	// Insert into Users sheet
	appendNewUser(user_id, reviewer_name, reviewer_email)

	// Insert into Courses sheet
	appendNewCourse(course_id, course_faculty, course_number, course_title)

	// Insert into Instructors sheet
	appendNewInstructor(instructor_id, instructor_name)

	// Insert into Reviews sheet
	appendNewReview(
		review_id,
		user_id,
		course_id,
		instructor_id,
		reviewer_faculty,
		reviewer_standing,
		instructor_rating,
		workload,
		difficulties,
		recommended,
		description,
		tips,
		timestamp
	)
}
