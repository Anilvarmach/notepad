/* eslint-disable react/prop-types */
// ThemeContext.js
import { createContext, useState } from 'react';

// Create a context
export const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
