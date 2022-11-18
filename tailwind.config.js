/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': {'max': '767px'},
            'md': {'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px'},
        },
        extend: {
            colors:{
                header:"#F2F2F2",
                accent:"#757575"
            }
        },
    },
    plugins: [require("daisyui")],
};
