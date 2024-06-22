import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import axios from 'axios'
import { defineStore } from 'pinia'

const API_URL =
	'https://script.google.com/macros/s/AKfycbzC-fCdBpr00Qt7Dy2w6u66qEDQ5GDKUXEagKeSjpKF5Ex_WELXqjhbq-xPyjCA-ty3ug/exec'

const instructorSchema = {
	type: 'object',
	properties: {
		id: { type: 'string', format: 'uuid' },
		name: { type: 'string' }
	},
	required: ['id', 'faculty']
}

const multiInstructorSchema = {
	type: 'array',
	items: instructorSchema
}

const ajv = new Ajv()
addFormats(ajv)

const validateInstructor = ajv.compile(instructorSchema)
const validateMultiInstructor = ajv.compile(multiInstructorSchema)

export const useInstructorStore = defineStore({
	id: 'instructor',
	state: () => ({
		instructor: null,
		instructors: [],
		loading: false,
		error: null
	}),
	getters: {
		//
	},
	actions: {
		async fetchInstructors() {
			this.instructors = []
			this.loading = true
			this.error = null

			try {
				const response = await axios.get(API_URL, {
					params: { action: 'getInstructors' }
				})

				// Validate the response data against the schema
				if (!validateMultiInstructor(response.data)) {
					throw new Error('Invalid response format')
				}

				this.instructors = response.data.sort((a, b) => a.code.localeCompare(b.code))
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		},

		async fetchInstructorById(id) {
			this.instructor = null
			this.loading = true
			this.error = null

			try {
				const response = await axios.get(API_URL, {
					params: {
						action: 'getInstructorById',
						targetId: id
					}
				})

				// Validate the response data against the schema
				if (!validateInstructor(response.data)) {
					throw new Error('Invalid response format')
				}

				this.instructor = response.data
			} catch (error) {
				this.error = error
			} finally {
				this.loading = false
			}
		}
	}
})
