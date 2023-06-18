import React from 'react';
import classNames from 'classnames';
import { useUniqueId } from '../../hook/useUniqueId';

interface IInput {
  inputType: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text';
  size: 'lg' | 'md' | 'sm';
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

export const Input = ({
  inputType,
  size,
  placeholder,
  readOnly,
  disabled,
  defaultValue,
}: IInput) => {
  const uniqueId = useUniqueId();

  return (
    <label htmlFor={`input-${inputType}-${uniqueId}`}>
      <input
        type="text"
        id={`input-${inputType}-${uniqueId}`}
        className={classNames(
          'input',
          { [`input-${inputType}`]: true },
          { [`size-${size}`]: true }
        )}
        placeholder={typeof placeholder === 'string' ? placeholder : ''}
        disabled={disabled === true ? disabled : false}
        readOnly={readOnly === true ? readOnly : false}
        defaultValue={typeof defaultValue === 'string' ? defaultValue : ''}
      />
    </label>
  );
};
