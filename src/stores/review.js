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
		//
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
