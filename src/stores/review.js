import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useReviewStore = defineStore({
	id: 'review',
	state: () => ({
		reviews: [],
		review: null,
		loading: false,
		loaded: false,
		error: null
	}),
	getters: {
		getDeptList: (state) => {
			// Okay so don't use this one, but I'll keep it here
			const depts = state.reviews.map((reviews) => reviews.course_number)
			return [...new Set(depts)]
		},
		getMajorList: (state) => {
			const majors = state.reviews.map((reviews) => reviews.course_number.split(' ')[0])
			return [...new Set(majors)].sort()
		},
		getCourseByMajor: (state) => (major) => {
			const reviewOfMajor = state.reviews.filter((reviews) =>
				reviews.course_number.startsWith(major)
			)
			const courses = reviewOfMajor.map((reviewOfMajor) => reviewOfMajor.course_number)
			return [...new Set(courses)].sort()
		}
	},
	actions: {
		async fetchReviews() {
			this.reviews = []
			this.loading = true
			this.loaded = false

			try {
				this.reviews = await fetch(
					'https://script.google.com/macros/s/AKfycbyrg-NT4JUquXkugv0JOEPx-0sDUbF3FVe433ymhpjCIP9F8hxIXaEKq0StBb3M43HF/exec'
				).then((response) => response.json())
			} catch (error) {
				this.error = error
			} finally {
				this.loaded = true
				this.loading = false
			}
		}
	}
})
