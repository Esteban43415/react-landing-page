/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", ],
    theme: {
        fontFamily: {
            'roboto': ['Roboto Condensed', 'sans-serif'],
            'STD': ['Std', 'sans-serif'],
            'Skia': ['Skia', 'sans-serif'],
            'Spongebob': ['Spongebob', 'sans-serif'],
        },
        screens: {
            '4sm': { 'min': '320px', 'max': '425px' },

            '3sm': { 'min': '320px', 'max': '480px' },
            // => @media (min-width: 320px and max-width: 480px) { ... }

            '2sm': { 'min': '480px', 'max': '640px' },
            // => @media (min-width: 480px and max-width: 640px) { ... }

            'sm': { 'min': '640px', 'max': '768px' },
            // => @media (min-width: 640px and max-width: 768px) { ... }

            'md': { 'min': '768px', 'max': '1024px' },
            // => @media (min-width: 768px and max-width: 1024px) { ... }

            'lg': { 'min': '1024px', 'max': '1280px' },
            // => @media (min-width: 1024px and max-width: 1280px) { ... }

            'xl': { 'min': '1280px', 'max': '2560px' },
            // => @media (min-width: 1280px and max-width: 2560px) { ... }

            '2xl': { 'min': '2560px' },

            'pc': { 'min': '1024px', 'max': '2560px' },

            'tab': { 'min': '768px', 'max': '1024px' },

            'mob': { 'min': '360px', 'max': '768px' },

            'xmob': { 'max': '360px' },
            'all': { 'min': '0px' },
            'mob3' : {'max':'768px'}


        },
        extend: {

            backgroundImage: {
                'd-t-y': 'linear-gradient(180deg, rgba(14,97,138,0.74) 0%, rgba(17,123,176,0.74) 35%, rgba(255,142,0,0.74) 100%)',
            },

            boxShadow: {
                'info': '10px 10px 40px 5px black',
                'btnA': 'inset 0 0 0 0 #083d56',
                'btnB': 'inset 0 -100px 0 0 #083d56',
            },

            colors: {
                'dark-blue': '#08223a',
                'second-color': '#ffb000'
            },

            transitionProperty: {
                'borderCard': 'border',
            },
            transitionTimingFunction: {
                'cube': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            },
            transitionDuration: {
                'borderCube': '0.15s',
            },




        },
    },
    plugins: [],
}