import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./styles/responsive.css";
import { PwaUpdateProvider } from "./context/PwaUpdateContext";
import UpdatePrompt from "./components/UpdatePrompt";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PwaUpdateProvider>
      <BrowserRouter>
        <App />
        <UpdatePrompt />
      </BrowserRouter>
    </PwaUpdateProvider>
  </React.StrictMode>
);
