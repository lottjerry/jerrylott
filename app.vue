<template>
	<div>
		<v-app>
			<v-app-bar>
				<v-app-bar-title> Hello </v-app-bar-title>
				<v-spacer />
				<v-btn @click="toggleTheme">
					<v-icon v-if="mode === 'myTheme'">ph:sun</v-icon>
					<v-icon v-else>ph:moon</v-icon>
					toggle theme</v-btn
				>
			</v-app-bar>
			<v-main>
				<v-container>
					<v-text-field name="name" label="Name" id="id"></v-text-field>
				</v-container>
			</v-main>
		</v-app>
	</div>
</template>

<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme();
let mode = ref()

const toggleTheme = () => {
	theme.global.name.value = theme.global.current.value.dark
		? 'myTheme'
		: 'dark';
	mode = theme.global.name.value
};

</script>
