/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Palette
                'golden_orange': { DEFAULT: '#f59e0b', 100: '#312002', 200: '#624004', 300: '#935f06', 400: '#c47f08', 500: '#f59e0b', 600: '#f7b23b', 700: '#f9c56c', 800: '#fbd99d', 900: '#fdecce' },
                'charcoal': { DEFAULT: '#50514f', 100: '#101010', 200: '#20201f', 300: '#2f302f', 400: '#3f403f', 500: '#50514f', 600: '#727371', 700: '#959694', 800: '#b9b9b8', 900: '#dcdcdb' },
                'ash_grey': { DEFAULT: '#cbd4c2', 100: '#293022', 200: '#525f44', 300: '#7a8f66', 400: '#a3b394', 500: '#cbd4c2', 600: '#d6ddcf', 700: '#e0e6db', 800: '#ebeee7', 900: '#f5f7f3' },
                'snow': { DEFAULT: '#fffcff', 100: '#650065', 200: '#ca00ca', 300: '#ff30ff', 400: '#ff95ff', 500: '#fffcff', 600: '#fffbff', 700: '#fffcff', 800: '#fffdff', 900: '#fffeff' },
                'cerulean': { DEFAULT: '#247ba0', 100: '#071820', 200: '#0e313f', 300: '#16495f', 400: '#1d617e', 500: '#247ba0', 600: '#31a0d0', 700: '#64b8dc', 800: '#98d0e8', 900: '#cbe7f3' },

                // Mode clair
                "light-text": "#50514f", // charcoal.DEFAULT
                "light-background": "#fffcff", // snow.DEFAULT
                "light-primary": "#f59e0b", // golden_orange.DEFAULT
                "light-secondary": "#cbd4c2", // ash_grey.DEFAULT
                "light-accent": "#247ba0", // cerulean.DEFAULT

                // États mode clair
                "light-error": "#d16666",
                "light-success": "#68a67d",
                "light-warning": "#f7b23b", // golden_orange.600
                "light-info": "#31a0d0", // cerulean.600
                "light-muted": "#727371", // charcoal.600

                // Mode sombre
                "dark-text": "#fffcff", // snow.DEFAULT
                "dark-background": "#101010", // charcoal.100
                "dark-primary": "#f59e0b", // golden_orange.DEFAULT
                "dark-secondary": "#cbd4c2", // ash_grey.DEFAULT
                "dark-accent": "#247ba0", // cerulean.DEFAULT

                // États mode sombre
                "dark-error": "#e88a8a",
                "dark-success": "#7bc896",
                "dark-warning": "#f9c56c", // golden_orange.700
                "dark-info": "#64b8dc", // cerulean.700
                "dark-muted": "#959694", // charcoal.700
            },
        }

    },
    plugins: [],
    safelist: [
        // Backgrounds for light mode (used in ColorCard and elsewhere)
        "bg-light-text",
        "bg-light-background",
        "bg-light-primary",
        "bg-light-secondary",
        "bg-light-accent",
        "bg-light-error",
        "bg-light-success",
        "bg-light-warning",
        "bg-light-info",
        "bg-light-muted",
        // Text colors for light mode
        "text-light-text",
        "text-light-primary",
        // Dark mode prefixed classes for background colors
        "dark:bg-dark-text",
        "dark:bg-dark-background",
        "dark:bg-dark-primary",
        "dark:bg-dark-secondary",
        "dark:bg-dark-accent",
        "dark:bg-dark-error",
        "dark:bg-dark-success",
        "dark:bg-dark-warning",
        "dark:bg-dark-info",
        "dark:bg-dark-muted",
        // Dark mode prefixed classes for text colors
        "dark:text-dark-text",
        "dark:text-dark-primary",
        // Hover states
        "hover:bg-light-primary",
        "dark:hover:bg-dark-primary",
    ],
};