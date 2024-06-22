import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import axios from 'axios'
import { defineStore } from 'pinia'
import { isObjectEmpty } from '@/utils'

const API_URL =
	'https://script.google.com/macros/s/AKfycbzC-fCdBpr00Qt7Dy2w6u66qEDQ5GDKUXEagKeSjpKF5Ex_WELXqjhbq-xPyjCA-ty3ug/exec'

const reviewSchema = {
	type: 'object',
	properties: {
		id: { type: 'string', format: 'uuid' },
		user_id: { type: 'string', format: 'uuid' },
		course_id: { type: 'string', format: 'uuid' },
		instructor_id: { type: 'string', format: 'uuid' },
		reviewer_faculty: { type: 'string' },
		reviewer_standing: { type: 'string' },
		instructor_rating: { type: 'integer' },
		workload: { type: 'integer' },
		difficulties: { type: 'integer' },
		recommended: { type: 'string', enum: ['Yes', 'No', 'Maybe'] },
		description: { type: 'string' },
		tips: { type: 'string' },
		timestamp: { type: 'string', format: 'date-time' }
	},
	required: [
		'id',
		'user_id',
		'course_id',
		'instructor_id',
		'reviewer_faculty',
		'reviewer_standing',
		'instructor_rating',
		'workload',
		'difficulties',
		'recommended',
		'description',
		'tips',
		'timestamp'
	]
}

const multiReviewSchema = {
	type: 'array',
	items: reviewSchema
}

const ajv = new Ajv()
addFormats(ajv)

const validateMultiReview = ajv.compile(multiReviewSchema)

function sortReviewsByDate(reviews) {
	return reviews.slice().sort((a, b) => {
		// Convert timestamp into Date object
		const dateA = new Date(a.timestamp)
		const dateB = new Date(b.timestamp)

		// Sort from newest to oldest
		return dateB - dateA
	})
}

export const useReviewStore = defineStore({
	id: 'review',
	state: () => ({
		reviews: [],
		loading: false,
		error: null
	}),
	getters: {
		// All of this are deprecated, but I'll leave it be for now
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
			this.error = null

			try {
				const response = await axios.get(API_URL, {
					params: { action: 'getReviews' }
				})

				// Validate the rseponse data against the schema
				if (!validateMultiReview(response.data)) {
					throw new Error('Invalid response format')
				}

				this.reviews = sortReviewsByDate(response.data)
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		},

		// Can return multiple reviews
		async fetchReviewsById(params) {
			this.reviews = []
			this.loading = true
			this.error = null

			try {
				if (isObjectEmpty(params)) {
					throw new Error('ID is empty!')
				}

				const response = await axios.get(API_URL, {
					params: {
						action: 'getReviewsById',
						...params
					}
				})

				// Validate the response data against the schema
				if (!validateMultiReview(response.data)) {
					throw new Error('Invalid response format')
				}

				this.reviews = sortReviewsByDate(response.data)
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		}
	}
})
