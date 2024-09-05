import { createRoot } from "react-dom/client";
import "./index.css";
import "./globalSytle.scss";
import App from "./App";
import CustomTheme from "@/providers/ThemeProvider/CustomTheme";
import { Provider } from "react-redux";
import { store } from "./stores";
import GetCurrentUserProvider from "./providers/GetCurrentUserProvider";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <CustomTheme>
    <Provider store={store}>
      <GetCurrentUserProvider>
        <App />
      </GetCurrentUserProvider>
    </Provider>
  </CustomTheme>
  // </StrictMode>
);
