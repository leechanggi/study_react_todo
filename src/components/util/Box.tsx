import React from 'react';
import { MdDarkMode } from 'react-icons/md';

export const Box = () => {
  return (
    <div className="box">
      <div className="box_header">
        <button className="box_header_button" type="button">
          <MdDarkMode size={24} color="#ffc457" title="다크 테마로 변경하기" />
        </button>
        <div className="box_header-navi">
          <button type="button">All</button>
          <button type="button">Active</button>
          <button type="button">Completed</button>
        </div>
      </div>
      <div className="box_content"></div>
      <div className="box_footer"></div>
    </div>
  );
};
