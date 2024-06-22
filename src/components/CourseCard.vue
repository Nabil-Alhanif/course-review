<script setup>
import { computed } from 'vue'
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
	}
})

const formatted_code = computed(() => {
	return props.course.code.replace(/(\D)(\d)/, '$1 $2')
})
</script>

<template>
	<RouterLink :to="`/course/${course.code}`">
		<div
			class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
		>
			<img
				class="rounded-t-lg justify-center items-center bg-red-600 h-48 w-full object-cover"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFq5wKktyhpmM9hOT06s-vEDuTaP_W_v0lw&s"
				alt=""
			/>

			<div class="p-5">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{{ formatted_code }}
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{{ course.title }}
				</p>
			</div>
		</div>
	</RouterLink>
</template>

<style lang="scss" scoped>
.kartu {
	width: 404px;
	height: 366px;
	border: 2px solid;
	border-color: black;
}

.gambar {
	width: 401px;
	height: 244px;
	background-color: red;
}

.kartu:hover {
	box-shadow: 3px 3px 5px;
}
</style>
