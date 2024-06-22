import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import axios from 'axios'
import { defineStore } from 'pinia'

const API_URL =
	'https://script.google.com/macros/s/AKfycbzC-fCdBpr00Qt7Dy2w6u66qEDQ5GDKUXEagKeSjpKF5Ex_WELXqjhbq-xPyjCA-ty3ug/exec'

const courseSchema = {
	type: 'object',
	properties: {
		id: { type: 'string', format: 'uuid' },
		faculty: { type: 'string' },
		code: { type: 'string' },
		title: { type: 'string' }
	},
	required: ['id', 'faculty', 'code', 'title']
}

const multiCourseSchema = {
	type: 'array',
	items: courseSchema
}

const ajv = new Ajv()
addFormats(ajv)

const validateCourse = ajv.compile(courseSchema)
const validateMultiCourse = ajv.compile(multiCourseSchema)

export const useCourseStore = defineStore({
	id: 'course',
	state: () => ({
		course: null,
		courses: [],
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
			this.error = null

			try {
				const response = await axios.get(API_URL, {
					params: { action: 'getCourses' }
				})

				// Validate the response data against the schema
				if (!validateMultiCourse(response.data)) {
					throw new Error('Invalid response format')
				}

				this.courses = response.data.sort((a, b) => a.code.localeCompare(b.code))
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		},

		async fetchCourseById(id) {
			this.course = null
			this.loading = true
			this.error = null

			try {
				const response = await axios.get(API_URL, {
					params: {
						action: 'getCourseById',
						targetId: id
					}
				})

				// Validate the response data against the schema
				if (!validateCourse(response.data)) {
					throw new Error('Invalid response format')
				}

				this.course = response.data
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		},

		async fetchCourseByCode(code) {
			this.course = null
			this.loading = true
			this.error = null

			try {
				const response = await axios.get(API_URL, {
					params: {
						action: 'getCourseByCode',
						targetCode: code
					}
				})

				// Validate the response data against the schema
				if (!validateCourse(response.data)) {
					throw new Error('Invalid response format')
				}

				this.course = response.data
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		}
	}
})
