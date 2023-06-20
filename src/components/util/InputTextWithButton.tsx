import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { TData } from '../../context/TodoContextProvider';

interface IInputTextWithButton {
  handelCreateList: ({ id, title, state }: TData) => void;
}

interface IForm {
  title: string;
}

export const InputTextWithButton = ({ handelCreateList }: IInputTextWithButton) => {
  const [form, setForm] = useState<IForm>({ title: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = form.title.trim();
    const uniqueId = Number(Math.random() * (16 ** 9 - 16 * 8) + 16 * 8)
      .toString(16)
      .substring(0, 8);
    setForm({ title: '' });
    if (title === '') {
      alert('해야 할 일을 입력하세요!');
      return false;
    }
    handelCreateList({ id: uniqueId, title, state: false });
  };

  return (
    <form className="form style-line" onSubmit={handleSubmit}>
      <Input
        inputType="text"
        size="md"
        placeholder="해야 할 일을 추가해 보세요!👍"
        name="title"
        value={form.title}
        updateForm={setForm}
      />
      <Button type="submit" styleType="primary" size="md" children="Add" />
    </form>
  );
};
