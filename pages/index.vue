<template>
	<div class="transparent">
		<v-img cover height="100vh">
			<div
				class="d-flex flex-column fill-height justify-center align-center text-white custom-padding"
			>
				<p class="text-h5">Hi, I am</p>
				<p class="text-h2 font-weight-bold mb-4">Jerry Lott</p>
				<p class="text-h5">
					I am a
					<span
						class="typer"
						id="first-typer"
						data-words="Full-Stack Developer, Designer, Tech Enthusiast"
						data-colors="#03DAC6"
						data-delay="70"
						data-delete-delay="3000"
					></span>
					<span class="cursor" data-owner="first-typer"></span>
				</p>
			</div>
		</v-img>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
	const typerScript = document.createElement('script');
	typerScript.src = 'https://unpkg.com/typer-dot-js@0.1.0/typer.js';
	typerScript.async = true;
	typerScript.defer = true;
	document.head.appendChild(typerScript);
});
</script>

<style>
.transparent {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(../assets/img/hero-img.png);
	background-repeat: no-repeat;
	background-size: cover;
}

.custom-padding {
	padding-top: 15%;
}
</style>
