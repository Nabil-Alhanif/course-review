<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<!-- <header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">

			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/reviews">Reviews</RouterLink>
			</nav>
		</div>
	</header> -->
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
	</main>

	<RouterView />
</template>

<style scoped></style>
