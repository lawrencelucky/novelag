/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [],
    theme: {
        extend: {
            boxShadow: {},
            colors: {
                y2kblack: '#000000',
                y2kred: {
                    10: '#E94444',
                },
            },
            fontFamily: {
                primary: ['Inter', 'sans-serif'],
            },
        },
    },
};
