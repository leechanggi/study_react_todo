import React, { PropsWithChildren } from 'react';
import Checkbox from './Checkbox';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { Button } from './Button';

interface IListWithSelector {
  delList?: boolean;
  listData: string[];
}

export const ListWithSelector = ({ delList, listData }: PropsWithChildren<IListWithSelector>) => {
  return (
    <ul className="list">
      {listData.map((item, index) => (
        <li className="list_item selector" key={index}>
          <Checkbox type="checkbox" children={item} />
          {delList && (
            <Button type="button" styleType="icon" size="sm">
              <BsFillTrash3Fill size={21} color="var(--main-color)" title={`${item} 항목 삭제`} />
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};
