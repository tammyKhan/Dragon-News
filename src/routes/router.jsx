import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <div>News Layout!</div>,
  },
  {
    path: "/auth",
    element: <div>Login</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;