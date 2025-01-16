/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: '#b37dff',
                secondary: '#ff5454',
                accent: '#76f7ae',
                warning: '#ffe959',
                light: '#fffbf4',
                dark: '#212121'
            },
            fontFamily: {
                Adam: ['Adam', 'sans-serif'],
                Unbounded: ['Unbounded', 'sans-serif'],
                France: ['France', 'sans-serif'],
                Roboto: ['Roboto Mono', 'sans-serif'],
            },
            zIndex: {
                '900': '900',
            },
            boxShadow: {
                '5xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            boxShadow: {
                light: '8px 8px 0px 0px #000',
                dark: '8px 8px 0px 0px #000',
                darkInput: '4px 4px 0px 0px #000',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};