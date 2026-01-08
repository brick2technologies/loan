import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoanModalProvider } from "./context/LoanModalContext";
import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoanModalProvider >
        <App />
      </LoanModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);


