import React from 'react';
import TodoContextProvider from '../../context/TodoContextProvider';

import { Box } from '../util/Box';

export default function Container() {
  return (
    <div id="container">
      <TodoContextProvider>
        <Box />
      </TodoContextProvider>
    </div>
  );
}
