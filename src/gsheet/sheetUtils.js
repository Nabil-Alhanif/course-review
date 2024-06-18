// Function to get data from a specified sheet and return it as JSON
function getSheetData(sheet_name) {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet_name)
	if (!sheet) {
		// Return error if the sheet is not found
		return ContentService.createTextOutput(
			JSON.stringify({ error: `Sheet ${sheet_name} not found` })
		).setMimeType(ContentService.MimeType.JSON)
	}

	const data = sheet.getDataRange().getValues()
	const headers = data.shift()
	// Convert rows of data to objects with header keys
	const records = data.map((row) => {
		let record = {}
		headers.forEach((header, index) => {
			record[header] = row[index]
		})
		return record
	})
	// Return the data as JSON
	return ContentService.createTextOutput(JSON.stringify(records)).setMimeType(
		ContentService.MimeType.JSON
	)
}
