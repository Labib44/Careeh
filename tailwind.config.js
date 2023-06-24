/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: { max: "767px" },
            md: { min: "768px", max: "991px" },
            lg: { min: "992px", max: "1200px" },
            xl: { min: "1201px", max: "1280px" },
            xxl: { min: "1281px", max: "1440px" },
            xxxl: { min: "1441px", max: "1536px" },
        },
        extend: {
            colors: {
                primary: "#FF6101",
                secondary: "#1A1A1A",
                accent: "#595959",
                neutral: "#515151",
            },
            backgroundImage:{
                "hero-image": "url('/src/assets/home/bgImage.jpeg')",
                "courier-banner":"url('/src/assets/courier/banner.jpg')"
            }
        },
    },
    plugins: [],
};
