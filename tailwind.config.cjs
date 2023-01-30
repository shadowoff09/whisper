const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
				tanker: ['Tanker', 'sans-serif'],
			}
		},
	},

	plugins: [require('flowbite/plugin'), require('daisyui')]
};

module.exports = config;
