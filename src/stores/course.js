import { defineStore } from 'pinia'

export const useCourseStore = defineStore({
	id: 'course',
	state: () => ({
		courses: [],
		course: null,
		loading: false,
		error: null
	}),
	getters: {
		//
	},
	actions: {
		async fetchCourses() {
			this.courses = []
			this.loading = true

			try {
				this.courses = await fetch(
					'https://script.google.com/macros/s/AKfycbzC-fCdBpr00Qt7Dy2w6u66qEDQ5GDKUXEagKeSjpKF5Ex_WELXqjhbq-xPyjCA-ty3ug/exec?action=getSheetData&sheetName=Courses'
				).then((response) => response.json())
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		}
	}
})
