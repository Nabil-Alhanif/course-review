<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
	course: {
		type: Object,
		default: () => ({
			faculty: 'Unknown Faculty',
			code: 'Unknown Code',
			title: 'Unknown Title'
		}),
		required: true
	},
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
					</div>
					<div class="mb-2 flex items-center w-3/12">
						<svg
							class="w-4 h-4 text-yellow-300 me-1"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 20"
						>
							<path
								d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
							/>
						</svg>
						<svg
							class="w-4 h-4 text-yellow-300 me-1"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 20"
						>
							<path
								d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
							/>
						</svg>
						<svg
							class="w-4 h-4 text-yellow-300 me-1"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 20"
						>
							<path
								d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
							/>
						</svg>
						<svg
							class="w-4 h-4 text-yellow-300 me-1"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 20"
						>
							<path
								d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
							/>
						</svg>
						<svg
							class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 20"
						>
							<path
								d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
							/>
						</svg>
					</div>
					<div class="mb-2 w-2/12 font-semibold">Difficulty: {{ review.difficulties }}</div>
					<div class="mb-2 w-2/12 font-semibold">Workload: {{ review.workload }}</div>
				</div>

				<p class="mb-3 font-normal text-gray-700 dark:text-gray-700">
					the prof is the shit! gotta register asap dude, you wont regret it but idk tho its math
					after all. what do you expect. georngorengoerb er g erg er g er reggerger ertger
					gergergerg ergergerg efrerfwd awefawefwefw fearferf eargferg erferf erfea rfearf aerf aerx
				</p>

				<p>[ some other stat ]</p>
			</div>

			<div>
				<div class="object-center">
					<h5 class="font-bold text-gray-900 mb-2 text-xl">Reviewer Info:</h5>
					<div>
						<table class="flex-col">
							<tr>
								<td>Faculty:</td>
								<td>{{ review.reviewer_faculty }}</td>
							</tr>
							<tr>
								<td>Standing:</td>
								<td>{{ review.reviewer_standing }}</td>
							</tr>
							<tr>
								<td>Recommended:</td>
								<td>{{ review.recommended }}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
