import React, { useState, PropsWithChildren } from 'react';
import { Button } from './Button';

interface INavigation {
  navData: string[];
  size: 'lg' | 'md' | 'sm';
  isActiveState: number;
  setIsActiveState: React.Dispatch<React.SetStateAction<number>>;
}

export const Navigation = ({
  navData,
  size,
  isActiveState,
  setIsActiveState,
  children,
}: PropsWithChildren<INavigation>) => {
  return (
    <div className="navigation">
      {navData.map((title, index) => {
        return (
          <Button
            type="button"
            styleType="navigation"
            key={index}
            children={title}
            size={size}
            isActive={isActiveState === index ? true : false}
            onClick={() => {
              setIsActiveState(index);
            }}
          />
        );
      })}
      {children}
    </div>
  );
};
