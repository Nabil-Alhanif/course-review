<script setup>
import { computed } from 'vue'

import StarRating from '@/components/StarRating.vue'

const props = defineProps({
	review: {
		type: Object,
		default: () => ({
			id: '0',
			user_id: '0',
			course_id: '0',
			instructor_id: '0',
			instructor_name: 'Unknown Instructor',
			reviewer_faculty: 'Unknown Faculty',
			reviewer_standing: 'Unknown Standing',
			instructor_rating: 1,
			workload: 1,
			difficulties: 1,
			recommended: 'Yes',
			description: 'No description',
			tips: 'No tips',
			timestamp: '-'
		})
	}
})

const renderedDesc = computed(() => {
	let formatted = props.review.description.replace(/\n/g, '<br>')
	return `<p>${formatted}</p>`
})

const renderedTips = computed(() => {
	let formatted = props.review.tips.replace(/\n/g, '<br>')
	return `<p>${formatted}</p>`
})
</script>

<template>
	<div class="bg-white rounded-lg shadow-lg dark:bg-gray-100">
		<div class="p-5 flex">
			<div class="w-9/12 mr-3">
				<div class="flex">
					<div class="w-3/12">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
								{{ review.instructor_name }}
							</h5>
						</a>
						<StarRating :rating="review.instructor_rating" />
					</div>
					<div class="mt-1 w-2/12 font-semibold">Difficulty: {{ review.difficulties }}</div>
					<div class="mt-1 w-2/12 font-semibold">Workload: {{ review.workload }}</div>
					<div class="mt-1 w-2/12 font-semibold">Recommended: {{ review.recommended }}</div>
				</div>
				<hr class="mt-2 mb-2" />

				<h1>About the course:</h1>
				<div class="mb-3 font-normal text-gray-700 dark:text-gray-700" v-html="renderedDesc"></div>

				<h1>Tips to excel:</h1>
				<div class="mb-3 font-normal text-gray-700 dark:text-gray-700" v-html="renderedTips"></div>
			</div>

			<div>
				<div class="object-center">
					<h5 class="font-bold text-gray-900 mb-2 text-xl">Reviewer Info:</h5>
					<div>
						<table class="flex-col">
							<tr>
								<td>Faculty</td>
								<td>:</td>
								<td>{{ review.reviewer_faculty }}</td>
							</tr>
							<tr>
								<td>Standing</td>
								<td>:</td>
								<td>{{ review.reviewer_standing }}</td>
							</tr>
							<tr>
								<td>Date of review</td>
								<td>:</td>
								<td>{{ review.timestamp }}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
