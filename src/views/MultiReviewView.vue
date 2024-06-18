<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useReviewStore } from '../stores/review'

const { reviews, loading, loaded, error } = storeToRefs(useReviewStore())
const { fetchReviews } = useReviewStore()

fetchReviews()
</script>

<template>
	<main>
		<p v-if="loading">Loading...</p>
		<p v-if="error">
			{{ error.message }}
		</p>
		<div v-for="review in reviews" v-if="reviews" :key="review.id">
			<p>{{ review.course_number }} - {{ review.course_title }}</p>
			<p>Instructor: {{ review.instructor }}</p>
			<p>{{ review.description }}</p>
			<p>{{ review.tips }}</p>
		</div>
	</main>
</template>
