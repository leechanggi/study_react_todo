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
  const toggleThemeHandler = () => {
    setTheme(theme => !theme);
  };

  // const toStringTheme = (theme: boolean) => {
  //   if (theme === true) {
  //     return 'dark';
  //   } else {
  //     return 'light';
  //   }
  // };

  // useEffect(() => {
  //   const getLocalTheme = localStorage.getItem('theme');
  //   if (typeof getLocalTheme === 'string') {
  //     document.body.setAttribute('data-theme', getLocalTheme);
  //   } else {
  //     localStorage.setItem('theme', toStringTheme(theme));
  //     document.body.setAttribute('data-theme', toStringTheme(theme));
  //   }
  //   return () => {};
  // }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeHandler }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
