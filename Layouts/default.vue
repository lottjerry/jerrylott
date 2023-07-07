<template>
	<v-app>
		<v-card>
			<v-layout>
				<v-navigation-drawer width="175">
					<div class="d-flex justify-end pa-1">
						<v-btn @click="toggleTheme" variant="text" size="avatar">
							<v-icon v-if="mode === 'myTheme'">ph:moon</v-icon>
							<v-icon v-else>ph:sun</v-icon>
						</v-btn>
					</div>
					<v-container>
						<v-avatar size="avatar">
							<img
								src="../assets/img/home-img.jpg"
								alt="Jerry Lott"
								height="150"
							/>
						</v-avatar>
					</v-container>
					<v-divider></v-divider>
					<div class="text-center text-h6 font-weight-bold">Jerry Lott</div>
					<v-divider></v-divider>
					<v-list density="compact" nav class="mt-5">
						<NuxtLink to="/">
							<v-list-item
								prepend-icon="ph:house-thin"
								title="Home"
								value="home"
								rounded="xl"
								class="mb-5"
							></v-list-item
						></NuxtLink>
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
				</v-navigation-drawer>

				<v-main style="height: 100vh" class="ma-5"
					><!-- Page Content -->
					<div>
						<slot /></div
				></v-main>
			</v-layout>
		</v-card>
	</v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme();
let mode = ref();

const toggleTheme = () => {
	theme.global.name.value = theme.global.current.value.dark
		? 'myTheme'
		: 'dark';
	mode = theme.global.name.value;
};
</script>

<style lang="scss" scoped></style>
