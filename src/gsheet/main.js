/* eslint-disable no-unused-vars */
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

	// Insert into Users sheet
	let user_obj = { id: null, name: reviewer_name, email: reviewer_email }
	appendNewUser(user_obj)

	// Insert into Courses sheet
	let course_obj = { id: null, faculty: course_faculty, number: course_number, title: course_title }
	appendNewCourse(course_obj)

	// Insert into Instructors sheet
	let instructor_obj = { id: null, name: instructor_name }
	appendNewInstructor(instructor_obj)

	// Insert into Reviews sheet
	let review_obj = {
		id: null,
		user_id: user_obj.id,
		course_id: course_obj.id,
		instructor_id: instructor_obj.id,
		reviewer_faculty: reviewer_faculty,
		reviewer_standing: reviewer_standing,
		instructor_rating: instructor_rating,
		workload: workload,
		difficulties: difficulties,
		recommended: recommended,
		description: description,
		tips: tips,
		timestamp: timestamp
	}
	appendNewReview(review_obj)
}
/* eslint-enable no-unused-vars */
