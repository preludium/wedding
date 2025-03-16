/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [ "class" ],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      inter: [ 'Inter' ],
      weddingDay: [ 'WeddingDay' ],
      weatherSunday: [ 'WeatherSunday' ],
      calligrapher: [ 'Calligrapher' ],
      dhellia: [ 'Dhellia' ],
      PlayfairDisplay: [ 'Playfair Display' ],
      alice: [ 'Alice' ],
      sacramento: [ 'Sacramento' ],
      greatVibes: [ 'GreatVibes' ],
      alexBrush: [ 'AlexBrush' ],
      lora: [ 'Lora' ],
      allura: [ 'Allura' ],
      dancingScript: [ 'DancingScript' ],
      geist: [ 'Geist' ],
    },
    extend: {
      screens: {
        sm: { min: '576px' },
        '-sm': { max: '576px' },
        md: { min: '768px' },
        '-md': { max: '768px' },
        lg: { min: '992px' },
        '-lg': { max: '992px' },
        xl: { min: '1200px' },
        '-xl': { max: '1200px' }
      },
      boxShadow: {
        around: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
        'around-sm': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'floral': "url('assets/floral-background.png')",
        'hero': "url('assets/hero-background.png')",
        'hero-top': "url('assets/hero-top-background.png')",
        'background-flowers': "url('assets/background.png')",
        'background-2-flowers': "url('assets/background-2.png')",
        'background-3-flowers': "url('assets/background-3.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      height: {
        viewport: "calc(100vh - 60px)",
        'viewport-1/2': "calc(calc(100vh - 60px) / 2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [ require("tailwindcss-animate") ],
};
