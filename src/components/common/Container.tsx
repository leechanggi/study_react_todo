import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoContextProvider from "../../context/TodoContextProvider";

import { Box } from "../util/Box";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>HOME</p>,
    errorElement: <p>Not Found</p>,
  },
  {
    path: "/todo",
    element: (
      <TodoContextProvider>
        <Box />
      </TodoContextProvider>
    ),
  },
]);

export default function Container() {
  return (
    <div id="container">
      <TodoContextProvider>
        <RouterProvider router={router} />
      </TodoContextProvider>
    </div>
  );
}
