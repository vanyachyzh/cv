import "./App.css"

import Contacts from "./components/Contacts"
import Profile from "./components/Profile"
import Summary from "./components/Summary"

function App() {
    // const [isDarkTheme, setIsDarkTheme] = useState(false)
    return (
        <div className="bg-bgPrimary">
            <div className="grid grid-cols-12 max-w-[1240px] py-10 m-auto">
                <div className="flex flex-col gap-4 col-span-4">
                    <Profile />
                    <Summary />
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

export default App
