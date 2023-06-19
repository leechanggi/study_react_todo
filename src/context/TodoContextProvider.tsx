import React, { createContext, useEffect, PropsWithChildren } from 'react';
import { useImmer } from 'use-immer';

export type TData = {
  id: string;
  title: string;
  state: boolean; // false: 진행중, true: 완료
};

export interface IListData {
  listData: TData[];
  createListData: ({ id, title, state }: TData) => void;
  removeListData: (id: string) => void;
  postListDataState: (id: string, state: boolean) => void;
}

export const TodoContext = createContext<IListData>({
  listData: [],
  createListData: () => null,
  removeListData: () => null,
  postListDataState: () => null,
});

const TodoContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [listData, updateListData] = useImmer<TData[]>([]);
  const getListData = localStorage.getItem('LIST_DATA');

  const createListData = ({ id, title, state }: TData) => {
    updateListData(list => {
      return [...list, { id, title, state }];
    });
  };

  const removeListData = (id: string) => {
    updateListData(list => {
      const findIndexListId = list.findIndex((d: TData) => d.id === id);
      list.splice(findIndexListId, 1);
    });
  };

  const postListDataState = (id: string, state: boolean) => {
    updateListData(list => {
      const findIndexListId = list.findIndex((d: TData) => d.id === id);
      list[findIndexListId].state = state;
    });
  };

  useEffect(() => {
    if (typeof getListData !== 'string') {
      localStorage.setItem('LIST_DATA', JSON.stringify([]));
    } else {
      updateListData(JSON.parse(getListData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('LIST_DATA', JSON.stringify(listData));
  }, [listData]);

  return (
    <TodoContext.Provider value={{ listData, createListData, removeListData, postListDataState }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
