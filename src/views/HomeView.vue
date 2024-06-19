<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useReviewStore } from '@/stores/review'
import CourseCard from '@/components/CourseCard.vue'
import CourseView from './CourseView.vue'

// Access the pinia store
const { reviews, loading, loaded, error } = storeToRefs(useReviewStore())
const { getMajorList, getCourseByMajor } = storeToRefs(useReviewStore())
const { fetchReviews } = useReviewStore()

// Reactive data for the component
const selectedMajor = ref('')
const filteredCourses = ref([])

// Function to filter courses by major
const filterCoursesByMajor = (major) => {
	selectedMajor.value = major
	filteredCourses.value = getCourseByMajor.value(major)
}

// Fetch the reviews
fetchReviews()
</script>

<template>
	<main>
		<h1 class="title">
			BIM at UBC <br />
			Course Review
		</h1>
		<div>
			<form action="" class="main-search">
				<input
					id="course-name"
					type="text"
					name="course-name"
					placeholder="Course Name"
					class="main-search-text"
				/>
			</form>
		</div>

		<div>
			<h2>Heading 2</h2>

			<table>
				<tbody>
					<tr>
						<td>
							<CourseCard />
						</td>
						<td>
							<CourseCard />
						</td>
						<td>
							<CourseCard />
						</td>
					</tr>
					<tr>
						<td>
							<CourseCard />
						</td>
						<td>
							<CourseCard />
						</td>
						<td>
							<CourseCard />
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div>
			<h2>Heading 2</h2>

			<table>
				<tbody>
					<tr>
						<td rowspan="2">
							<div>
								<div class="gambar2">1</div>
								<br />
								product <br />
								description <br />
								10.99
							</div>
						</td>
						<td>
							<div>
								<div class="gambar3">2</div>
								<br />
								product <br />
								description <br />
								10.99
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div>
								<br />
								<div class="gambar3">2</div>
								<br />
								product <br />
								description <br />
								10.99
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<p v-if="loading">Loading...</p>
		<p v-if="error">
			{{ error.message }}
		</p>
		<div v-if="reviews">
			<h1>Major List</h1>
			<ul>
				<li v-for="major in getMajorList" :key="major" @click="filterCoursesByMajor(major)">
					{{ major }}
				</li>
			</ul>

			<h2>Courses List Of {{ selectedMajor }}</h2>
			<ul>
				<li v-for="(course, index) in filteredCourses" :key="index">
					{{ course }}
				</li>
			</ul>
		</div>
	</main>
</template>
