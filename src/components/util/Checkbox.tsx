import React, { useState, PropsWithChildren } from 'react';
import classNames from 'classnames';
import useUniqueId from '../../hook/useUniqueId';

interface ICheckbox {
  type: 'checkbox' | 'radio';
}

export default function Checkbox({ type, children }: PropsWithChildren<ICheckbox>) {
  const [checked, setchecked] = useState(false);

  const uniqueId = useUniqueId();

  return (
    <label
      className={classNames({ [`${type}-label`]: true })}
      htmlFor={`${type}-${uniqueId}`}
      data-checked={checked}
    >
      <input
        type={type}
        id={`${type}-${uniqueId}`}
        className={classNames({ [`${type}-input`]: true })}
        checked={checked}
        onChange={() => setchecked(prev => !prev)}
      />
      {children}
    </label>
  );
}
