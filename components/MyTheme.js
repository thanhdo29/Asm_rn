import React, { createContext, useContext, useState } from 'react'
import { View } from 'react-native';
const ThemeContext = createContext();

export const MyTheme = ({ children }) => {

    const [theme, setTheme] = useState('purple');
    const toggleTheme = () => {
        setTheme(theme === "purple" ? "black" : "purple");
    }

    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

