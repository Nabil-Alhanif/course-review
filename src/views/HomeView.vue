<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useReviewStore } from '@/stores/review'

// Access the pinia store
const { reviews, loading, loaded, error } = storeToRefs(useReviewStore())
const { getMajorList, getCourseByMajor } = storeToRefs(useReviewStore())
const { fetchReviews } = useReviewStore()

// Reactive data for the component
const selectedMajor = ref('')
const filteredCourses = ref([])

// Function to filter creatures by type
const filterCoursesByMajor = (major) => {
	selectedMajor.value = major
	filteredCourses.value = getCourseByMajor.value(major)
}

// Fetch the reviews
fetchReviews()
</script>

<template>
	<main>
		<p v-if="loading">Loading...</p>
		<p v-if="error">{{ error.message }}</p>
		<div v-if="reviews">
			<h1>Major List</h1>
			<ul>
				<li v-for="major in getMajorList" :key="major" @click="filterCoursesByMajor(major)">
					{{ major }}
				</li>
			</ul>

			<h2>Courses List Of {{ selectedMajor }}</h2>
			<ul>
				<li v-for="(course, index) in filteredCourses" :key="index">{{ course }}</li>
			</ul>
		</div>
	</main>
</template>
