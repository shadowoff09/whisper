const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				satoshi: ['Satoshi', 'sans-serif'],
				tanker: ['Tanker', 'sans-serif'],
				'space-mono' : ['Space Mono', 'monospace']
			}
		},
	},

	plugins: [require('flowbite/plugin'), require('daisyui')]
};

module.exports = config;
