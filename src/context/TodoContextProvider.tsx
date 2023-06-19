import React, { createContext, useEffect, PropsWithChildren } from 'react';
import { useImmer } from 'use-immer';

export type TData = {
  id: string;
  title: string;
  state: boolean;
};

export interface Ilist {
  list: TData[];
  createList: ({ id, title, state }: TData) => void;
  removeList: (id: string) => void;
  updateState: (id: string, state: boolean) => void;
}

export const TodoContext = createContext<Ilist>({
  list: [],
  createList: () => null,
  removeList: () => null,
  updateState: () => null,
});

const TodoContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [list, updatelist] = useImmer<TData[]>([]);
  const getlist = localStorage.getItem('DATA_LIST');

  const createList = ({ id, title, state }: TData) => {
    updatelist(list => {
      return [...list, { id, title, state }];
    });
  };

  const removeList = (id: string) => {
    updatelist(list => {
      const findIndexListId = list.findIndex((d: TData) => d.id === id);
      list.splice(findIndexListId, 1);
    });
  };

  const updateState = (id: string, state: boolean) => {
    updatelist(list => {
      const findIndexListId = list.findIndex((d: TData) => d.id === id);
      list[findIndexListId].state = state;
    });
  };

  useEffect(() => {
    if (typeof getlist !== 'string') {
      localStorage.setItem('DATA_LIST', JSON.stringify([]));
    } else {
      updatelist(JSON.parse(getlist));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  useEffect(() => {
    localStorage.setItem('DATA_LIST', JSON.stringify(list));
  }, [list]);

  return (
    <TodoContext.Provider value={{ list, createList, removeList, updateState }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
