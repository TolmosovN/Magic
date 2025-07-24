import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router"

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
 <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>