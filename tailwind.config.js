export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E9D5FF",
          DEFAULT: "#C084FC",
          dark: "#A855F7"
        },
        background: "#FAF7FF",
        accent: {
          green: "#10B981"
        },
        rotate: {
          360: "360deg"
        }
      }
    }
  },
  plugins: [],
}
