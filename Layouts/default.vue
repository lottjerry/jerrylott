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

<style lang="scss" scoped>
.custom-margin {
	margin-left: 10%;
}
</style>
