import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import About from "../components/About";
import Error from "../components/Error"
import Error2 from "../components/Error2"
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ReactApp = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};  

const ReactAppRouter = createBrowserRouter([
  {
    path: "/",
    element : <ReactApp />,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About/>
      }
    ],
    errorElement: <Error/>
    
  },
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={ReactAppRouter} />);
