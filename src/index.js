import React from "react";
import ReactDOM from "react-dom/";
import "./index.css";
// import App from "./App";
// import AppData from "./AssignemtWk2D2/AppData";
// import GroceryDisplay from "./AssignemtWk2D2/GroceryDisplay";
// import GroceryClass from "./AssignemtWk2D2/GroceryClass";
import EmployeeData from "./AssignmentWk2D3/EmployeeData";

ReactDOM.render(
  <React.StrictMode>
    {/* <AppData /> */}
    {/* <App /> */}
    {/* <GroceryDisplay /> */}
    {/* <GroceryClass /> */}
    <EmployeeData />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
