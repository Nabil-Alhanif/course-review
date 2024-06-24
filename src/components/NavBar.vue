<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<nav>
		<div class="navbar-container">
			<RouterLink to="/" class="navbar-logo">
				<img src="../assets/logo.svg" alt="Vue" />
			</RouterLink>

			<ul class="navbar-menu">
				<li class="navbar-item">
					<RouterLink to="/" class="navbar-link">Home</RouterLink>
				</li>
				<li class="navbar-item">
					<RouterLink to="/about" class="navbar-link">About</RouterLink>
				</li>
				<li class="navbar-item">
					<RouterLink to="/reviews" class="navbar-link">Reviews</RouterLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	.navbar-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 1rem 1rem;

		position: relative;

		.navbar-logo {
			img {
				width: 2rem;
			}
		}

		.navbar-menu {
			display: flex;
			float: right;

			.navbar-item {
				margin-left: 1rem;

				.navbar-link {
					font-weight: bold;
				}

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
}
</style>
