<template>
	<span ref="typer" :class="['typer', className]"></span>
</template>

<script>
export default {
	props: {
		className: {
			type: String,
			default: '',
		},
		colors: {
			type: String,
			required: true,
      default: '',
		},
		words: {
			type: Array,
			required: true,
		},

		delay: {
			type: Number,
			default: 70,
		},
		deleteDelay: {
			type: Number,
			default: 3000,
		},
	},
	mounted() {
		const Typer = window.Typer;

		if (Typer) {
			this.initTyper();
		} else {
			this.loadTyperScript().then(() => {
				this.initTyper();
			});
		}
	},
	beforeUnmount() {
		this.stopTyper();
	},
	methods: {
		loadTyperScript() {
			return new Promise((resolve, reject) => {
				const typerScript = document.createElement('script');
				typerScript.src = 'https://unpkg.com/typer-dot-js@0.1.0/typer.js';
				typerScript.async = true;
				typerScript.defer = true;
				typerScript.onload = resolve;
				typerScript.onerror = reject;
				document.head.appendChild(typerScript);
			});
		},
		initTyper() {
			const { typer } = this.$refs;
			this.typerInstance = new window.Typer(typer, {
				words: this.words,
				colors: this.colors,
				delay: this.delay,
				deleteDelay: this.deleteDelay,
			});
			this.typerInstance.start();
		},
		stopTyper() {
			if (this.typerInstance) {
				this.typerInstance.stop();
			}
		},
	},
};
</script>
