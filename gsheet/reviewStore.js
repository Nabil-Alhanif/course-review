/* Database Structure
 * review: {
 *     id: UUID
 *     user_id: UUID
 *     course_id: UUID
 *     instructor_id: UUID
 *     reviewer_faculty: String
 *     reviewer_standing: String
 *     instructor_rating: Integer
 *     workload: Integer
 *     difficulties: Integer
 *     recommended: String
 *     description: String
 *     tips: String
 *     timestamp: Timestamp
 * }
 */

/* eslint-disable no-unused-vars */

// Append a new review to the Reviews sheet
function appendNewReview(data) {
	const review_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAMES.REVIEWS)
	const review_list = review_sheet.getDataRange().getValues()

	let review_exists = false

	// Check if the review already exists
	review_list.slice(1).forEach((row) => {
		if (
			row[0] === data.id &&
			row[1] === data.user_id &&
			row[2] === data.course_id &&
			row[3] === data.instructor_id
		) {
			review_exists = true
			review.id = row[0]
		}
	})

	// Deconstruct data to make sure everything is in the correct order
	let review = [
		data.id,
		data.user_id,
		data.course_id,
		data.instructor_id,
		data.reviewer_faculty,
		data.reviewer_standing,
		data.instructor_rating,
		data.workload,
		data.difficulties,
		data.recommended,
		data.description,
		data.tips,
		data.timestamp
	]

	if (review_exists) {
		Logger.log('Review already exists with the same ID, user, course, and instructor')
	} else {
		data.id = generateUUID()
		// Append new review to the Reviews sheet
		review_sheet.appendRow(review)
		Logger.log('Inserted new review data into Reviews sheet')
	}
}

/* eslint-enable no-unused-vars */
