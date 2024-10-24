/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./../App";
import Home from "./../pages/Home/Home";
import SingleProduct from "./../pages/Home/SingleProduct";
import Registration from "../components/Registration";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "./../components/Login";
import Category from "../pages/Category";
import Orderlist from "../pages/Orderlist";
import Payout from "../pages/Payout";
import Wishlist from "./../pages/Wishtlist";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/orderlist",
        element: (
          <PrivateRoute>
            <Orderlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/payout",
        element: (
          <PrivateRoute>
            <Payout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
