import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "#3DA9FC", // Светлый оттенок основного цвета
          dark: "#0355A6",  // Темный оттенок основного цвета
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          light: "#FF8F8F", // Светлый оттенок кораллового
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          cyan: "hsl(var(--accent-cyan))",
          light: "#7EEADC", // Светлый оттенок мятного
          dark: "#26A69A",  // Темный оттенок мятного
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: "#0F2C5C", // Темно-синий для заголовков
        coral: "#FF6B6B", // Коралловый для акцентов
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at 10% 20%, rgba(0, 132, 255, 0.1), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79, 209, 197, 0.05), transparent 50%)",
        "gradient-primary": "linear-gradient(90deg, #0084FF, #4FD1C5)",
        "gradient-coral": "linear-gradient(90deg, #FF6B6B, #FF9F80)",
        "dot-pattern": "radial-gradient(rgba(15, 44, 92, 0.1) 1px, transparent 1px)",
        "hero-pattern": "url('/hero-pattern.svg')",
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.07)',
        'button': '0 4px 10px rgba(0, 132, 255, 0.25)',
        'coral': '0 4px 10px rgba(255, 107, 107, 0.25)',
      },
      fontSize: {
        'hero-button': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'hero-button-md': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'hero-button-lg': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '15': '15px 15px',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addComponents }) {
      // Добавляем кастомные компоненты
      addComponents({
        '.card-style': {
          'backgroundColor': 'white',
          'borderRadius': '0.5rem',
          'boxShadow': '0 4px 20px rgba(0, 0, 0, 0.07)',
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-4px)',
            'boxShadow': '0 6px 25px rgba(0, 0, 0, 0.09)',
          },
        },
        '.btn-shine': {
          'position': 'relative',
          'overflow': 'hidden',
          '&::after': {
            'content': '""',
            'position': 'absolute',
            'top': '-50%',
            'left': '-50%',
            'width': '200%',
            'height': '200%',
            'backgroundColor': 'rgba(255, 255, 255, 0.2)',
            'transform': 'rotate(30deg)',
            'transition': 'transform 0.6s',
          },
          '&:hover::after': {
            'transform': 'rotate(30deg) translate(50%, -50%)',
          },
        },
      })
    }
  ],
} satisfies Config

export default config
