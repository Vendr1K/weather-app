import React, {useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../utils/changeThemeVariables';


const storage = {
    setItem: (name, item) => {
      localStorage.setItem(name, JSON.stringify(item));
    },
    getItem: (name) => {
      const item = localStorage.getItem(name);
      if (item) {
        return JSON.parse(item);
      }
    },
};

export const ThemeProvider = ({children, ...props}) => {

    const [theme, setTheme] = useState(
        storage.getItem('app_theme') || 'light'
    );
    changeCssRootVariables(theme);

    function changeTheme (theme) {
        storage.setItem('app_theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }

    

    return (
    <ThemeContext.Provider value={{theme, changeTheme}} {...props}>
        {children}
    </ThemeContext.Provider>)
}