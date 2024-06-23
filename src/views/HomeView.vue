<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCourseStore } from '@/stores/course'
import CourseCard from '@/components/CourseCard.vue'

const courseStore = useCourseStore()
const { courses, loading } = storeToRefs(courseStore)

const error = ref(null)

const fetchCourses = async () => {
	error.value = null
	try {
		await courseStore.fetchCourses()
	} catch (err) {
		error.value = err
	}
}

onMounted(() => {
	fetchCourses()
})
</script>

<template>
	<main>
		<div
			className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  text-center items-center content-center justify-center bg-red-200 flex flex-col"
		>
			<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
				BIM at UBC
			</span>
			<div className="lg:text-xl md:text-lg text-base font-semibold text-gray-700">
				Course <span className="italic underline font-bold text-cyan-500">Review</span>
			</div>
		</div>

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

		<div className="w-full flex  justify-center items-center relative " v-if="courses">
			<div className="items-center justify-center flex">
				<div
					class="md:grid md:grid-cols-3 gap-3 md:w-5/6 w-full space-y-4 md:space-y-0 justify-center items-center"
				>
					<div class="max-w-sm block" v-for="course in courses" :key="course.id">
						<CourseCard :course="course" />
					</div>
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
