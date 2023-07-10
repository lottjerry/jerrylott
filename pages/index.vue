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
					<Typer
						:data-colors="'#03DAC6'"
						:data-words="'Full-Stack Developer, Designer, Tech Enthusiast'"
						:data-delay="70"
						:data-delete-delay="3000"
					></Typer>
				</p>
			</div>
		</v-img>
	</div>
</template>

<script setup>
import Typer from '@/components/Typer.vue';
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
