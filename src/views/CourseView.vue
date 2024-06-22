<script setup>
import ReviewCard from '@/components/ReviewCard.vue'
</script>

<template>
	<div class="flex flex-col bg-white">
		<main class="flex flex-col pt-4 px-20 w-full max-md:px-5 max-md:max-w-full">
			<section class="max-md:max-w-full">
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
								MATH 101
							</h2>
							<p class="mt-2 text-xl font-semibold max-md:max-w-full">
								Integral calculus with applications to physical sciences and engineering
							</p>

							<!-- ratings -->
							<div class="mt-4 flex justify-center items-center">
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
								<p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4 out of 5</p>
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

			<section class="mt-20 max-md:mt-10 max-md:max-w-full">
				<h3
					class="text-2xl leading-9 font-medium text-slate-700 text-center mb-10 border-b-[1px] p-4"
				>
					See what other students have to say
				</h3>
				<div class="mt-4 max-md:max-w-full space-y-6 mb-20">
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
				</div>
			</section>
		</main>
	</div>
</template>

<style></style>
