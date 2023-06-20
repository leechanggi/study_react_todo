import React, { PropsWithChildren, useState, useEffect } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { TData } from '../../context/TodoContextProvider';
import Checkbox from './Checkbox';
import { Button } from './Button';

export interface IListWithSelector {
  list: TData[];
  deleteList: boolean;
  isActiveState: number;
  handleDelete?: (id: string) => void;
  handleChecked?: (id: string, state: boolean) => void;
}

export const ListWithSelector = ({
  list,
  deleteList,
  isActiveState, // 0 전체, 1 진행중, 2 완료
  handleDelete,
  handleChecked,
}: PropsWithChildren<IListWithSelector>) => {
  const [sortedData, setSortedData] = useState<TData[]>(list);

  useEffect(() => {
    switch (isActiveState) {
      case 1:
        setSortedData(list.filter(item => item.state === false));
        break;
      case 2:
        setSortedData(list.filter(item => item.state === true));
        break;
      default:
        setSortedData(list);
        break;
    }
  }, [isActiveState, list]);

  return (
    <ul className="list">
      {sortedData.map(item => (
        <li className="list_item selector" key={item.id}>
          <Checkbox
            type="checkbox"
            checked={item.state}
            children={item.title}
            uniqueId={item.id}
            handleChecked={handleChecked}
          />
          {deleteList === true && (
            <Button
              type="button"
              onClick={() => {
                typeof handleDelete !== 'undefined' && handleDelete(item.id);
              }}
              styleType="icon"
              size="sm"
            >
              <BsFillTrash3Fill size={21} color="var(--main-color)" title={`${item} 항목 삭제`} />
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};
