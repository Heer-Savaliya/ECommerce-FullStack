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
import PrivateRoute from "./Routes/PrivateRoute";

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
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ),
        },
        {
          path: "/about",
          element: (
            <PrivateRoute>
              <About />
            </PrivateRoute>
          ),
        },
        {
          path: "/contact",
          element: (
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          ),
        },
        {
          path: "/blog",
          element: (
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          ),
        },
        {
          path: "/my-account",
          element: (
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          ),
        },
        {
          path: "/forget-pass",
          element: (
            <PrivateRoute>
              <ForgetPassword />
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: (
            <PrivateRoute>
              <PageNotFound />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
