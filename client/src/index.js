import React from "react";
import ReactDOM from "react-dom/client";  
import AppRoutes from "./routes/Routes"; 

import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));  // Create a root element

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
