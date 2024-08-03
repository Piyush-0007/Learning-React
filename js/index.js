import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import About from "../components/About";
import Error from "../components/Error"
import Error2 from "../components/Error2"
import Header from "../components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ReactApp = ({Component}) => {
  return (
    <>
      <Header />
      <Component />
    </>
  );
};  

const ReactAppRouter = createBrowserRouter([
  {
    path: "/",
    element : <ReactApp Component={Body}/>,
    errorElement: <Error/>
    
  },
  {
    path: "/about",
    element : <ReactApp Component={About}/>,
    errorElement: <Error2/>
  }, 
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={ReactAppRouter} />);
