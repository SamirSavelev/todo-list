import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
