/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			screens: {
				smallphone: "320px",
				phone: "390px",
				smalltablet: "760px",
				tablet: "1020px",
			},
			colors: {
				primary: "#f3c614",
				secondary: "#353535",
				white: "#fff",
				black: "#000",
			},
		},
	},
	plugins: [],
};
