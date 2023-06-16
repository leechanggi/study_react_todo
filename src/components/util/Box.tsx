import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import { MdDarkMode } from 'react-icons/md';
import { Navigation } from './Navigation';
import { Button } from './Button';
import { ListWithSelector } from './ListWithSelector';
import { InputTextWithButton } from './InputTextWithButton';

export const Box = () => {
  const { theme, toggleThemeHandler } = useContext(ThemeContext);

  const toStringtheme = (theme: boolean) => {
    if (theme === true) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', toStringtheme(theme));
  }, [theme]);

  return (
    <div className="box">
      <div className="box_header">
        <Button type="button" styleType="icon" size="md" onClick={toggleThemeHandler}>
          <MdDarkMode size={24} color="var(--main-color)" title="다크 테마로 변경하기" />
        </Button>
        <Navigation toggle={true} navData={['All', 'Active', 'Completed']} size="md" />
      </div>
      <div className="box_content">
        <ListWithSelector delList={true} listData={['React.Js', 'Typescript']} />
      </div>
      <div className="box_footer">
        <InputTextWithButton />
      </div>
    </div>
  );
};
