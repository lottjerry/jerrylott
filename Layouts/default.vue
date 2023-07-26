<template>
	<v-app>
		<!-- HEADER -->
		<header>
			<!-- NAVIGATION DRAWER -->
			<v-navigation-drawer width="175" theme="dark" v-model="drawer">
				<div class="d-flex justify-end pa-1">
					<div
						@click="toggleTheme"
						variant="text"
						size="avatar"
						class="custom-toggle text-primary"
					>
						<v-icon v-if="theme.global.name.value === 'myTheme'"
							>ph:moon</v-icon
						>
						<v-icon v-else>ph:sun</v-icon>
					</div>
				</div>
				<div class="d-flex justify-center">
					<v-avatar size="avatar">
						<img
							src="../assets/img/home-img.jpg"
							alt="Jerry Lott"
							height="150"
						/>
					</v-avatar>
				</div>
				<div class="text-center text-h6 font-weight-bold pb-3">Jerry Lott</div>

				<v-divider></v-divider>
				<v-list density="compact" class="d-flex justify-center">
					<v-btn
						variant="text"
						size="avatar"
						class="mr-5"
						href="https://www.linkedin.com/in/jerrylott/"
						target="_blank"
						rel="noopener"
					>
						<v-icon>ph:linkedin-logo-duotone</v-icon>
					</v-btn>
					<v-btn
						variant="text"
						size="avatar"
						href="https://github.com/lottjerry"
						target="_blank"
						rel="noopener"
					>
						<v-icon>ph:github-logo-duotone</v-icon>
					</v-btn>
				</v-list>
				<v-divider></v-divider>
				<v-list density="compact" nav class="mt-5">
					<NuxtLink to="/">
						<v-list-item
							prepend-icon="ph:house-thin"
							title="Home"
							value="home"
							rounded="xl"
							class="mb-5"
						></v-list-item>
					</NuxtLink>
					<NuxtLink to="/about"
						><v-list-item
							prepend-icon="ph:user-thin"
							title="About"
							value="about"
							rounded="xl"
							class="mb-5"
						></v-list-item
					></NuxtLink>
				</v-list>
				<template v-slot:append>
					<p class="text-center text-subtitle-2 py-2">
						&copy; Jerry Lott. All rights reserved.
					</p>
				</template>
			</v-navigation-drawer>

			<!-- NAVIGATION APP BAR -->
			<v-app-bar
				class="hidden-lg-and-up"
				theme="dark"
				density="compact"
				:class="{ 'main-content-pushed': drawer }"
			>
				<v-app-bar-nav-icon
					@click="drawer = !drawer"
					density="comfortable"
				></v-app-bar-nav-icon>
				<v-toolbar-title>Jerry</v-toolbar-title>
			</v-app-bar>
		</header>

		<!-- MAIN -->
		<main>
			<slot />
		</main>
	</v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
import { ref } from 'vue';

const drawer = ref(false);
const theme = useTheme();

const toggleTheme = () => {
	theme.global.name.value = theme.global.current.value.dark
		? 'myTheme'
		: 'dark';
};
</script>

<style>
/* Styles for the drawer and main content go here */

.main-content-pushed {
	margin-left: 175px; /* Adjust the value to match the drawer width */
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

.dark-background {
	background-color: black !important;
}
</style>
