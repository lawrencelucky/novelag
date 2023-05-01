/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [],
    theme: {
        extend: {
            boxShadow: {
                10: '0px 1px 2px 0px #1018280D, 0px -1.2000000476837158px 0px 0px #3949AB21 inset',
                20: '0px -2px 0px 0px #139A56 inset',
                30: '0px 0.6396276354789734px 1.2792552709579468px 0px #1018280D',
            },
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
