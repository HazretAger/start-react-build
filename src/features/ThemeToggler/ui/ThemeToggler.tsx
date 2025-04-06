import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react";
import Toggler from "../../../shared/ui/Toggler/Toggler";

const ThemeToggler = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    const handleChange = () => setIsDark(!isDark);

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return <Toggler value={isDark} icon={isDark ? <Moon color="#171A1C" size="20" /> : <Sun color="#171A1C" size="20" />} handler={handleChange} />
}

export default ThemeToggler;