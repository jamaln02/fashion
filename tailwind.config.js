/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navColor: "#EBEDEF",
        herored: "#E55353",
        heroh2: "#364252",
        btnincr: "#00BB64",
        signup: "#C0C0C0",
        inplin: "#868686",
        footer: "#000015",
      },
      backgroundImage: {
        hero: "url(./src/assets/hero-1.png)",
        about: "url(./src/assets/about-us.jpg)",
      },
    },
  },
  plugins: [],
});
