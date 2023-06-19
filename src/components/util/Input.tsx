import React from 'react';
import classNames from 'classnames';
import { useUniqueId } from '../../hook/useUniqueId';

interface IInput {
  inputType: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text';
  size: 'lg' | 'md' | 'sm';
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string | number | readonly string[];
  updateForm?: React.Dispatch<React.SetStateAction<any>>;
}

export const Input = ({
  inputType,
  name,
  size,
  placeholder,
  readOnly,
  disabled,
  value,
  updateForm,
}: IInput) => {
  const uniqueId = useUniqueId();

  return (
    <label htmlFor={`input-${inputType}-${uniqueId}`}>
      <input
        type="text"
        name={name}
        id={`input-${inputType}-${uniqueId}`}
        className={classNames(
          'input',
          { [`input-${inputType}`]: true },
          { [`size-${size}`]: true }
        )}
        placeholder={typeof placeholder === 'string' ? placeholder : ''}
        disabled={disabled === true ? disabled : false}
        readOnly={readOnly === true ? readOnly : false}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (typeof value !== 'undefined' && typeof updateForm !== 'undefined') {
            const { name, value } = e.currentTarget;
            updateForm({ [name]: value });
          }
        }}
      />
    </label>
  );
};
