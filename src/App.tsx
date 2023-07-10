import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContextProvider';
import TodoContextProvider from './context/TodoContextProvider';
import { Box } from './components/util/Box';
import './style/App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HOME</div>,
    errorElement: <div>NOT FOUND</div>,
  },
  {
    path: '/todo',
    element: (
      <TodoContextProvider>
        <Box />
      </TodoContextProvider>
    ),
  },
]);

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
