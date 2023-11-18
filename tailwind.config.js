/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                bgPrimary: "var(--color-bg-primary)",
                bgSecondary: "var(--color-bg-secondary)",
                bgTertiary: "var(--color-bg-tertiary)",
                controlSecondary: "var(--color-control-secondary)",
                textPrimary: "var(--color-text-primary)",
                textSecondary: "var(--color-text-secondary)",
                textAccent: "var(--color-text-accent)",
            },
            fontFamily: {
                manrope: ["Manrope"],
            },
        },
    },
    plugins: [],
}
