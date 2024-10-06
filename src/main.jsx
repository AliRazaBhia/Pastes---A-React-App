import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./Store.js";
import { Provider } from "react-redux";
import { ToastBar, Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>
);
