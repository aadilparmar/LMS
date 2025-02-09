/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'course-details-heading-small':['',''],
        'course-details-heading-large':['',''],
        'home-heading-small':['28px','36px'],  
        'home-heading-large':['48px','56px'],
        'default':['15px','21px'],
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}