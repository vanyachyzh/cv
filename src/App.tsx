import { useState } from "react"
import { twMerge } from "tailwind-merge"
import "./App.css"

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    return (
        <div className={twMerge(isDarkTheme && "dark")}>
            <div className="bg-bgPrimary text-textPrimary transition-colors duration-300">
                Hello
            </div>
            <button
                className="bg-bgSecondary text-textSecondary"
                onClick={() => setIsDarkTheme((prev) => !prev)}
            >
                Switch
            </button>
        </div>
    )
}

export default App
