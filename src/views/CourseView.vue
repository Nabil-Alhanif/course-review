<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCourseStore } from '@/stores/course'
import { useReviewStore } from '@/stores/review'

import StarRating from '@/components/StarRating.vue'
import ReviewCard from '@/components/ReviewCard.vue'

const route = useRoute()
const courseStore = useCourseStore()
const reviewStore = useReviewStore()

courseStore.fetchCourseByCode(route.params.code)

watch(
	() => courseStore.course,
	(loadedCourse) => {
		if (loadedCourse) {
			reviewStore.fetchReviewsById({ courseId: loadedCourse.id })
		}
	},
	{ immediate: true }
)

const formattedCode = computed(() => {
	return courseStore.course.code.replace(/(\D)(\d)/, '$1 $2')
})

const averageDifficulty = computed(() => {
	if (reviewStore.reviews.length === 0) return null
	const totalDifficulty = reviewStore.reviews.reduce((acc, review) => acc + review.difficulties, 0)
	return totalDifficulty / reviewStore.reviews.length
})

const averageWorkload = computed(() => {
	if (reviewStore.reviews.length === 0) return null
	const totalWorkload = reviewStore.reviews.reduce((acc, review) => acc + review.workload, 0)
	return totalWorkload / reviewStore.reviews.length
})
</script>

<template>
	<div class="flex flex-col bg-white">
		<main class="flex flex-col pt-4 px-20 w-full max-md:px-5 max-md:max-w-full">
			<p v-if="courseStore.loading">Loading course information....</p>
			<p v-else-if="courseStore.error">{{ courseStore.error.message }}</p>
			<section v-else-if="courseStore.course" class="max-md:max-w-full">
				<div class="flex gap-5 max-md:flex-col max-md:gap-0">
					<div class="flex flex-col w-[56%] max-md:ml-0 max-md:w-full items-center justify-center">
						<img
							loading="lazy"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFq5wKktyhpmM9hOT06s-vEDuTaP_W_v0lw&s"
							alt="imge"
							class="w-60 h-60 items-center justify-center rounded-lg"
						/>
					</div>

					<div class="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
						<div
							class="flex flex-col justify-center font-medium leading-[150%] text-zinc-500 max-md:mt-10 max-md:max-w-full"
						>
							<h2 class="text-4xl font-semibold leading-10 text-black max-md:max-w-full">
								{{ formattedCode }}
							</h2>
							<p class="mt-2 text-xl font-semibold max-md:max-w-full">
								{{ courseStore.course.title }}
							</p>

							<div v-if="averageDifficulty !== null">
								<p>Difficulty</p>
								<StarRating :rating="averageDifficulty.toFixed(2)" />
							</div>

							<div v-if="averageDifficulty !== null">
								<p>Workload</p>
								<StarRating :rating="averageWorkload.toFixed(2)" />
							</div>

							<button
								class="justify-center items-center px-6 py-3.5 mt-6 text-base text-white bg-gradient-to-r to-emerald-600 from-sky-400 rounded-lg shadow-sm max-md:px-5 max-md:max-w-full"
							>
								Submit a review
							</button>
						</div>
					</div>
				</div>
			</section>

			<p v-if="!courseStore.course">Waiting for course to be loaded...</p>
			<p v-else-if="reviewStore.loading">Loading reviews...</p>
			<p v-else-if="reviewStore.error">{{ error.message }}</p>
			<section v-else-if="reviewStore.reviews" class="mt-20 max-md:mt-10 max-md:max-w-full">
				<h3
					class="text-2xl leading-9 font-medium text-slate-700 text-center mb-10 border-b-[1px] p-4"
				>
					See what other students have to say
				</h3>

				<div
					v-for="review in reviewStore.reviews"
					:key="review.id"
					class="mt-4 max-md:max-w-full space-y-6 mb-20"
				>
					<ReviewCard :review="review" />
				</div>
			</section>
		</main>
	</div>
</template>

<style></style>
