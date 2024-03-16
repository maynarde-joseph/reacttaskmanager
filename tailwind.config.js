/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern1":
          "url('https://www.imperva.com/products/wp-content/uploads/sites/11/2023/05/bg.png')",
        "hero-pattern2":
          "url('https://hiddenlayer.com/wp-content/uploads/HiddenLayer-Homepage-%E2%80%93-Slide-5.jpg')",
        "hero-pattern3":
          "url('https://d2ik0kd8ivv1yl.cloudfront.net/media/2022/05/background.png')",
        "hero-pattern4":
          "url('https://www.imperva.com/products/wp-content/uploads/sites/11/2022/05/waf-gartner-magic-quadrant-bg.jpg')",
        "hero-pattern5":
          "url('https://static.vecteezy.com/system/resources/previews/020/562/192/original/abstract-contour-wireframe-retro-futuristic-background-vector.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#18222f",
        page: "#2b3441",
        card: "#47566a",
        "card-hover": "#4f5e74",
        "default-text": "#f1f3f5",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",
      },
    },
  },
  plugins: [],
};
