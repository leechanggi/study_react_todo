import React, { createContext, useState, PropsWithChildren } from 'react';

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
  const toggleThemeHandler = () => setTheme(theme => !theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeHandler }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
