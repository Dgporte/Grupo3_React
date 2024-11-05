import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GeralProvider } from "./context/GeralContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeralProvider>
      <App />
    </GeralProvider>
  </StrictMode>
);
