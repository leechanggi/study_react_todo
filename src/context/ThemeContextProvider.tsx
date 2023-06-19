import React, { createContext, useState, useEffect, PropsWithChildren } from 'react';

export interface ITheme {
  theme: boolean;
  toggleThemeHandler: () => void;
}
export const ThemeContext = createContext<ITheme>({
  theme: false,
  toggleThemeHandler: () => null,
});

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const getLocalTheme = localStorage.getItem('THEME_DATA');
  const toStringTheme = (theme: boolean) => (theme === true ? 'dark' : 'light');
  const toBooleanTheme = (theme: string) => (theme === 'light' ? false : true);
  const toggleThemeHandler = () => {
    setTheme(prev => {
      localStorage.setItem('THEME_DATA', toStringTheme(!prev));
      document.body.setAttribute('data-theme', toStringTheme(!prev));
      return !prev;
    });
  };
  useEffect(() => {
    if (typeof getLocalTheme !== 'string') {
      setTheme(false);
      localStorage.setItem('THEME_DATA', toStringTheme(false));
      document.body.setAttribute('data-theme', toStringTheme(false));
    } else {
      setTheme(toBooleanTheme(getLocalTheme));
      document.body.setAttribute('data-theme', getLocalTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeHandler }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
