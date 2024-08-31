import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./globalSytle.scss";
import App from "./App";
import CustomTheme from "@/providers/ThemeProvider/CustomTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomTheme>
      <App />
    </CustomTheme>
  </StrictMode>
);
