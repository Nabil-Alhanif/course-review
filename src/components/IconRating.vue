<script setup>
import { ref, defineProps } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps({
	rating: {
		type: Number,
		required: true
	},
	maxRating: {
		type: Number,
		default: 5,
		required: false
	},
	svgPath: {
		type: String,
		required: true
	}
})

// Generate a unique ID for each instance of StarRating
const gradientId = ref(`half-filled-${uuidv4()}`)

const getOffset = (star) => {
	const filled = props.rating - star + 1
	if (filled >= 1) return 100
	if (filled <= 0) return 0
	return Math.round(filled * 100 * 100) / 100
}
</script>

<template>
	<div class="mt-0.5 flex items-center ml-3">
		<div v-for="star in maxRating" :key="star" class="relative star-wrapper">
			<svg
				class="w-4 h-4 me-1"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 22 20"
			>
				<defs>
					<linearGradient :id="gradientId + '-' + star">
						<stop :offset="getOffset(star) + '%'" stop-color="var(--start-color)" />
						<stop :offset="getOffset(star) + '%'" stop-color="var(--end-color)" />
					</linearGradient>
				</defs>
				<path :fill="'url(#' + gradientId + '-' + star + ')'" :d="svgPath" />
			</svg>
		</div>
		<p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
			{{ rating.toFixed(2) }} out of {{ maxRating }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
$yellow: #fbbf24;
$gray: #d1d5db;

.star-wrapper {
	position: relative;
	--start-color: #{$yellow};
	--end-color: #{$gray};
}
</style>
