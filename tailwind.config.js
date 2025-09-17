/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                main_bg: "#B13BFF",
            }
        },
    },
    plugins: [],
};
