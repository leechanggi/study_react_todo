import React, { PropsWithChildren } from 'react';
import { Button } from './Button';

interface INavigation {
  navData: string[];
  toggle?: boolean;
  size: 'lg' | 'md' | 'sm';
}

export const Navigation = ({ toggle, navData, size, children }: PropsWithChildren<INavigation>) => {
  return (
    <div className="navigation" data-toggle={toggle === true ? true : false}>
      {navData.map((title, index) => {
        return (
          <Button type="button" styleType="navigation" key={index} children={title} size={size} />
        );
      })}
      {children}
    </div>
  );
};
