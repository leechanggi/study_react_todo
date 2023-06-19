import React, { useState, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface ICheckbox {
  type: 'checkbox' | 'radio';
  checked: boolean;
  uniqueId: string;
  handleChecked?: (id: string, state: boolean) => void;
}

export default function Checkbox({
  type,
  checked,
  uniqueId,
  handleChecked,
  children,
}: PropsWithChildren<ICheckbox>) {
  const [check, setCheck] = useState(checked);

  return (
    <label
      className={classNames({ [`${type}-label`]: true })}
      htmlFor={`${type}-${uniqueId}`}
      data-checked={check}
    >
      <input
        type={type}
        id={`${type}-${uniqueId}`}
        className={classNames({ [`${type}-input`]: true })}
        checked={check}
        onChange={e => {
          if (typeof handleChecked !== 'undefined') {
            handleChecked(uniqueId, e.target.checked);
            setCheck(e.target.checked);
          }
        }}
      />
      {children}
    </label>
  );
}
