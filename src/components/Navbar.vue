<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<nav>
		<div class="logo">
			<img src="../assets/logo.svg" alt="Vue" />
		</div>

		<div class="nav-link">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
			<RouterLink to="/reviews">Reviews</RouterLink>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	.logo {
		margin: 1rem 1rem;
		img {
			width: 2rem;
		}
	}
}
</style>
