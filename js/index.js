import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import Header from "../components/Header";




const ReactApp = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<ReactApp />);
