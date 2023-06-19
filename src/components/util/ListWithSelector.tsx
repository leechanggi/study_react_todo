import React, { PropsWithChildren } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { TData } from '../../context/TodoContextProvider';
import Checkbox from './Checkbox';
import { Button } from './Button';

export interface IListWithSelector {
  delList: boolean;
  handleDelList?: (id: string) => void;
  handlePostState?: (id: string, state: boolean) => void;
  listData: TData[];
}

export const ListWithSelector = ({
  delList,
  handleDelList,
  handlePostState,
  listData,
}: PropsWithChildren<IListWithSelector>) => {
  return (
    <ul className="list">
      {listData.map(item => (
        <li className="list_item selector" key={item.id}>
          <Checkbox
            type="checkbox"
            checked={item.state}
            children={item.title}
            uniqueId={item.id}
            handlePostState={handlePostState}
          />
          {delList === true && (
            <Button
              type="button"
              onClick={() => {
                typeof handleDelList !== 'undefined' && handleDelList(item.id);
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
