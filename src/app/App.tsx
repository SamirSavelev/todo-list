import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./providers/ThemeProvider";

export const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
