<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
	course_faculty: {
		type: String,
		required: false
	},
	course_code: {
		type: String,
		required: true
	},
	course_title: {
		type: String,
		required: true
	}
})
</script>

<template>
	<RouterLink to="/course">
		<div class="kartu">
      <p>{{course_code}}</p>
			<div class="gambar">1</div>
			<div class="course-name">product</div>
			<br />
			description
			<br />
			10.99
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
