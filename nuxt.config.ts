import vuetify from 'vite-plugin-vuetify';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'nuxt-icon',
		'@nuxtjs/google-fonts',
		async (options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) =>
				config.plugins.push(
					vuetify({
						styles: { configFile: 'assets/settings.scss' },
					})
				)
			);
		},
	],
	css: ['vuetify/styles'],
	typescript: { shim: false },
	build: { transpile: ['vuetify'] },
	vite: { ssr: { noExternal: ['vuetify'] } },
	googleFonts: {
		families: {
			Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
		download: false,
		useStylesheet: true,
	},
});
