/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': {'max': '767px'},
            'md': {'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px'},
        },
        extend: {
            colors: {
                primary: "#0F172A",
                secondary:"#38BDF8"
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
