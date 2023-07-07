<template>
	<v-app>
		<header>
			<Navbar />
		</header>
		<main class="custom-margin">
			<slot />
		</main>
	</v-app>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style>
.custom-margin {
	margin: 2% 7.5% 2% 15%;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
