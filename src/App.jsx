import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import MyAccount from "./Pages/MyAccount";
import ForgetPassword from "./Pages/ForgetPassword";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path:"/",
      element:<AppLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/contact",
          element:<Contact />
        },
        {
          path:"/blog",
          element:<Blog />
        },
        {
          path:"/my-account",
          element:<MyAccount />
        },
        {
          path:"/forget-pass",
          element:<ForgetPassword />
        },
        {
          path:"*",
          element:<PageNotFound />
        },
      ]
    },
    {
      path:"*",
      element:<PageNotFound />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
