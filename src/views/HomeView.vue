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
		<h1
		className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"
		>
			<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
				BIM at UBC
			</span>
			<div className="text-xl font-semibold text-gray-700">
				Course <span className="italic underline  font-bold text-cyan-500"> Review</span>
			</div>
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
