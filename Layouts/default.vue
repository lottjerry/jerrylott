<template>
	<v-app>
		<header>
			<Navbar />
		</header>
		<main>
			<slot />
		</main>
	</v-app>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style>

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
