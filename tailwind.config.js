module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary
        cyanClr: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        // Secondary
        redClr: 'hsl(0, 87%, 67%)',
        btnHover: 'hsl(179, 58%, 75%)',
        //Neutral
        grayClr: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        Poppins: ['Poppins', ' sans-serif'],
      },
      backgroundImage: {
        hero: "url('/src/images/illustration-working.svg')",
        'shorten-bg-mobile': "url('/src/images/bg-shorten-mobile.svg')",
        'shorten-bg-desktop': "url('/src/images/bg-shorten-desktop.svg')",
        'boost-bg-mobile': "url('/src/images/bg-boost-mobile.svg')",
        'boost-bg-desktop': "url('/src/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
