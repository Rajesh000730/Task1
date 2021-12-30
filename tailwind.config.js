module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'movies': "url('/src/components/movies.jpg')",
        'profile': "url('/src/components/steve.jpeg')",
      }
    },
  },
  plugins: [],
}
