import React from 'react';
import { Button } from './Button';
import { Input } from './Input';

export const InputTextWithButton = () => {
  return (
    <form className="form style-line" onSubmit={() => false}>
      <Input inputType="text" size="md" placeholder="Add Todo" />
      <Button type="submit" styleType="primary" size="md">
        Add
      </Button>
    </form>
  );
};
