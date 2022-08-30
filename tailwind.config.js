/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", ],
    theme: {
        screens: {

            '3sm': { 'min': '320px', 'max': '480px' },
            // => @media (min-width: 320px and max-width: 480px) { ... }

            '2sm': { 'min': '480px', 'max': '640px' },
            // => @media (min-width: 480px and max-width: 640px) { ... }

            'sm': { 'min': '640px', 'max': '768px' },
            // => @media (min-width: 640px and max-width: 767px) { ... }

            'md': { 'min': '768px', 'max': '1024px' },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            'lg': { 'min': '1024px', 'max': '1280px' },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            'xl': { 'min': '1280px', 'max': '2560px' },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            '2xl': { 'min': '2560px' },

        },
        extend: {

            backgroundImage: {
                'd-t-y': 'linear-gradient(180deg, rgba(14,42,71,0.74) 40%, rgba(21,64,109,0.74) 65%, rgba(255,142,0,0.7440156482514881) 100%)'
            },

            boxShadow: {
                'info': '10px 10px 40px 5px black',
            },

            colors: {
                'dark-blue': '#08223a',
                'second-color': '#ffb000'
            },

            transitionProperty: {
                'borderCard': 'border',
            },
            transitionTimingFunction: {
                'cube': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            },
            transitionDuration: {
                'borderCube': '0.15s',
            },




        },
    },
    plugins: [],
}