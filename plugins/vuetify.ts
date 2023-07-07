import { createVuetify, ThemeDefinition } from 'vuetify';
import { md3 } from 'vuetify/blueprints';

const myTheme = {
	dark: false,
	colors: {
		background: '#FFFFFF',
		surface: '#FFFFFF',
		primary: '#02e328',
		'primary-darken-1': '#3700B3',
		secondary: '#03DAC6',
		'secondary-darken-1': '#018786',
		error: '#B00020',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FB8C00',
	},
};

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		ssr: true,
		blueprint: md3,
		defaults: {
			VTextField: {
				variant: 'outlined',
				color: 'primary',
			},
		},
		theme: {
			defaultTheme: 'dark',
			themes: {
				myTheme,
			},
		},
		icons: {
			defaultSet: 'custom',
			aliases,
			sets: {
				custom,
			},
		},
	});

	app.vueApp.use(vuetify);
});
