import React, { PropsWithChildren } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { TData } from '../../context/TodoContextProvider';
import Checkbox from './Checkbox';
import { Button } from './Button';

export interface IListWithSelector {
  delList: boolean;
  handelRemoveList?: (id: string) => void;
  handleChecked?: (id: string, state: boolean) => void;
  list: TData[];
}

export const ListWithSelector = ({
  delList,
  handelRemoveList,
  handleChecked,
  list,
}: PropsWithChildren<IListWithSelector>) => {
  return (
    <ul className="list">
      {list.map(item => (
        <li className="list_item selector" key={item.id}>
          <Checkbox
            type="checkbox"
            checked={item.state}
            children={item.title}
            uniqueId={item.id}
            handleChecked={handleChecked}
          />
          {delList === true && (
            <Button
              type="button"
              onClick={() => {
                typeof handelRemoveList !== 'undefined' && handelRemoveList(item.id);
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
