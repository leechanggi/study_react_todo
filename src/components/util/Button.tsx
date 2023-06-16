import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface IButton {
  type: 'button' | 'submit' | 'reset';
  styleType: 'primary' | 'navigation' | 'icon';
  size: 'lg' | 'md' | 'sm';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

export const Button = ({
  type,
  styleType,
  size,
  isActive,
  children,
  onClick,
}: PropsWithChildren<IButton>) => {
  return (
    <button
      className={classNames(
        'button',
        { [`style-type-${styleType}`]: true },
        { [`size-${size}`]: true },
        { isActive: isActive === true }
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
