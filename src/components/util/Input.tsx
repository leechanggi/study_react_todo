import React from 'react';
import classNames from 'classnames';
import { useUniqueId } from '../../hook/useUniqueId';

interface IInput {
  inputType: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text';
  size: 'lg' | 'md' | 'sm';
  name: string;
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  form?: any;
  updateForm?: React.Dispatch<React.SetStateAction<any>>;
}

export const Input = ({
  inputType,
  name,
  size,
  placeholder,
  readOnly,
  disabled,
  defaultValue,
  form,
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
        defaultValue={typeof defaultValue === 'string' ? defaultValue : ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (typeof form !== 'undefined' && typeof updateForm !== 'undefined') {
            const { name, value } = e.currentTarget;
            updateForm({ ...form, [name]: value });
          }
        }}
      />
    </label>
  );
};
