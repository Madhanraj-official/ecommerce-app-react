// Utility functions to handle theme management
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

// Define the types for the context value
interface ThemeContextType {
    theme: "light-high-contrast" | "light" | 'dark' | 'dark-high-contrast' | 'dark-medium-contrast' | 'light-medium-contrast';
    setTheme: (theme: "light-high-contrast" | 'light' | 'dark' | 'dark-high-contrast' | 'dark-medium-contrast' | 'light-medium-contrast') => void;
}

// Create the context to access the theme globally
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};


const setBodyTheme = (theme: string): void => {
    // Remove any existing theme classes
    document.body.classList.remove('light-high-contrast', 'light', 'dark', 'dark-high-contrast', 'dark-medium-contrast', 'light-medium-contrast');

    // Add the selected theme class to the body
    document.body.classList.add(theme);
};

const getStoredTheme = (): "light-high-contrast" | 'light' | 'dark' | 'dark-high-contrast' | 'dark-medium-contrast' | 'light-medium-contrast' => {
    try {

        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme: string | null = localStorage.getItem('theme');
        const theme = storedTheme as "light-high-contrast" | 'light' | 'dark' | 'dark-high-contrast' | 'dark-medium-contrast' | 'light-medium-contrast';
        return storedTheme ? theme : systemPrefersDark ? 'dark' : 'light-high-contrast';


    } catch (e) {
        console.error('Error accessing localStorage:', e);
        return 'light-high-contrast'; // Default to light-high-contrast if localStorage is unavailable
    }
};

const saveThemeToLocalStorage = (theme: 'light' | 'light-high-contrast' | 'dark' | 'dark-high-contrast' | 'dark-medium-contrast' | 'light-medium-contrast'): void => {
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        console.error('Error saving theme to localStorage:', e);
    }
};

// Define the theme provider props type
interface ThemeProviderProps {
    children: ReactNode;
}

// Provide the theme to the rest of the app
export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<'light' | 'light-high-contrast' | 'dark' | 'dark-high-contrast' | 'dark-medium-contrast' | 'light-medium-contrast'>(getStoredTheme());

    useEffect(() => {
        // Set the theme when it changes
        setBodyTheme(theme);
        saveThemeToLocalStorage(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
