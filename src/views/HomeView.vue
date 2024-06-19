<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCourseStore } from '@/stores/course'
import CourseCard from '@/components/CourseCard.vue'

const courseStore = useCourseStore()
const { courses, loading, error } = storeToRefs(courseStore)
const { fetchCourses } = courseStore


fetchCourses()

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

		<p v-if="loading">Loading...</p>
		<p v-if="error">
			{{ error.message }}
		</p>
		<div v-if="courses">
			<div class="course-grid">
				<div v-for="course in courses">
					<CourseCard
						:course_faculty="course.faculty"
						:course_code="course.code"
						:course_title="course.title"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.course-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
}
</style>
