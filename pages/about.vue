<template>
	<div class="mx-10 pt-15 pb-5">
		<v-container class="border">
			<v-row class="border justify-center">
				<v-img
					:width="100"
					aspect-ratio="1/1"
					src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/user-default.png"
					alt="user-default"
					height="64"
					class="mb-2"
				></v-img>
			</v-row>
			<v-row class="border justify-center text-h3 font-weight-bold"
				>about me</v-row
			>
			<v-row class="border mt-16 justify-center text-h6">MY INTRODUCTION</v-row>
			<v-row class="border justify-center mt-16">
				<v-card class="d-flex pa-10 ma-2" max-width="60%">
					<v-container class="border pa-10">
						<v-row class="mb-5 border text-h5 font-weight-medium">{{
							intro.title
						}}</v-row>
						<v-row class="pa-2 mt-8 border text-h6">
							{{ intro.text }}
						</v-row>
						<v-row class="justify-center">
							<v-btn
								append-icon="ph:download-bold"
								color="primary"
								height="60"
								rounded="lg"
								class="font-weight-bold mt-16"
							>
								Download Resume
							</v-btn></v-row
						>
					</v-container>
					<v-container class="border">
						<v-row class="ma-2">
							<v-col
								v-for="(stat, index) in stats"
								:key="index"
								class="border pa-5"
								cols="6"
							>
								<v-row>
									<v-img
										:width="100"
										aspect-ratio="1/1"
										:src="stat.icon"
										height="64"
										class="mb-2"
									></v-img>
								</v-row>
								<v-row class="text-h5 font-weight-bold justify-center">{{
									stat.title
								}}</v-row>
								<v-row class="justify-center">{{ stat.subtitle }}</v-row>
								<v-row class="justify-center">{{ stat.subtitle2 }}</v-row>
							</v-col>
						</v-row>
					</v-container>
				</v-card>
			</v-row>
			<v-row>
				<v-container class="mt-16 border pa-10 w-75">
					<v-row class="border text-h6 mb-16 justify-center"
						>SKILLS AND TECHNOLOGIES</v-row
					>
					<!-- :cols="skill.cols" <-- for custom cols -->
					<v-row class="border justify-center">
						<v-col
							v-for="(skill, index) in skills"
							:key="index"
							class="border mx-2 my-3"
							cols="2"
						>
							<v-row
								><v-img
									:src="skill.icon"
									:width="100"
									aspect-ratio="1/1"
									height="48"
									class=""
								></v-img
							></v-row>
							<v-row class="justify-center">
								<h4>{{ skill.title }}</h4></v-row
							>
						</v-col></v-row
					></v-container
				>
			</v-row>
		</v-container>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const intro = ref({
	title: 'FREELANCE FULL STACK DEVELOPER',
	text: 'I am a dedicated developer, with not only a passion for web and software development, but also art and graphic design.',
});

const stats = ref([
	{
		icon: 'https://img.icons8.com/arcade/64/developer.png',
		title: '04+',
		subtitle: 'Years',
		subtitle2: 'of Experience',
	},
	{
		icon: 'https://img.icons8.com/arcade/64/test-passed.png',
		title: '03+',
		subtitle: 'Completed',
		subtitle2: 'Projects',
	},
	{
		icon: 'https://img.icons8.com/arcade/64/students.png',
		title: '06+',
		subtitle: 'Years',
		subtitle2: 'of College',
	},
	{
		icon: 'https://img.icons8.com/arcade/64/diploma.png',
		title: '02+',
		subtitle: 'Completed',
		subtitle2: 'Degrees and Minor',
	},
]);

const skills = ref([
	{
		icon: 'https://img.icons8.com/color/48/html-5--v1.png',
		title: 'HTML',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/css3.png',
		title: 'CSS',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/javascript--v1.png',
		title: 'JS',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/typescript.png',
		title: 'TS',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/sass.png',
		title: 'SCSS',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/tailwindcss.png',
		title: 'Tailwind',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/nuxt-jc.png',
		title: 'Nuxt',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/vue-js.png',
		title: 'Vue',
		cols: '',
	},
	{
		icon: 'https://img.icons8.com/officel/48/react.png',
		title: 'React',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/nodejs.png',
		title: 'Node',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/officel/48/express-js.png',
		title: 'Express',
		cols: '3',
	},
	{
		icon: 'https://img.icons8.com/color/48/mysql-logo.png',
		title: 'MySQL',
		cols: '',
	},
	{
		icon: 'https://img.icons8.com/color/48/mongodb.png',
		title: 'MongoDB',
		cols: '',
	},
	{
		icon: 'https://img.icons8.com/color/48/prisma-orm.png',
		title: 'Prisma',
		cols: '',
	},
	{
		icon: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*2TDREss7Pa_F5Z6CsHeD_w.jpeg',
		title: 'Feathers',
		cols: '',
	},
	{
		icon: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*J3G3akaMpUOLegw0p0qthA.png',
		title: 'Rest API',
		cols: '',
	},
	{
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png',
		title: 'GraphQL',
		cols: '',
	},
	{
		icon: 'https://w7.pngwing.com/pngs/238/408/png-transparent-apollo-graphql-compact-hd-logo.png',
		title: 'Apollo',
		cols: '',
	},
	{
		icon: 'https://img.icons8.com/color/48/git.png',
		title: 'Git',
		cols: '',
	},
	{
		icon: 'https://img.icons8.com/color/48/figma--v1.png',
		title: 'Figma',
		cols: '',
	},
	{
		icon: 'https://play-lh.googleusercontent.com/QcfhlXm32JDnj3WM2-TSL78ad99x4slovX4OzCSLSPU3uRN-mGXpKyM_yeXiewhz0Lk',
		title: 'Ibis Paint',
		cols: '',
	},
	{
		icon: 'https://img.icons8.com/color/48/firebase.png',
		title: 'Firebase',
		cols: '',
	},
	{
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1200px-Netlify_logo_%282%29.svg.png',
		title: 'Netlify',
		cols: '',
	},
	{
		icon: 'https://img.icons8.com/fluency/48/github.png',
		title: 'GitHub',
		cols: '',
	},
	{
		icon: 'https://img.icons8.com/color/48/docker.png',
		title: 'Docker',
		cols: '',
	},
]);
</script>
