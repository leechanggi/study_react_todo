import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import { TodoContext } from '../../context/TodoContextProvider';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Navigation } from './Navigation';
import { Button } from './Button';
import { ListWithSelector } from './ListWithSelector';
import { InputTextWithButton } from './InputTextWithButton';

export const Box = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { list, createList, removeList, updateState } = useContext(TodoContext);

  return (
    <div className="box">
      <div className="box_header">
        <Button type="button" styleType="icon" size="md" onClick={toggleTheme}>
          {theme === true ? (
            <MdLightMode size={24} color="var(--main-color)" title="라이트 테마로 변경하기" />
          ) : (
            <MdDarkMode size={24} color="var(--main-color)" title="다크 테마로 변경하기" />
          )}
        </Button>
        <Navigation toggle={true} navData={['전체', '진행중', '완료']} size="md" />
      </div>
      <div className="box_content">
        <ListWithSelector
          delList={true}
          handelRemoveList={removeList}
          handleChecked={updateState}
          list={list}
        />
      </div>
      <div className="box_footer">
        <InputTextWithButton handelCreateList={createList} />
      </div>
    </div>
  );
};
