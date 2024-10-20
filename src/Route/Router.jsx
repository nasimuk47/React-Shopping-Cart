/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./../App";
import Home from "./../pages/Home/Home";
import SingleProduct from "./../pages/Home/SingleProduct";
import Registration from "../components/Registration";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:id",
        element: (
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/Registration",
        element: <Registration />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
