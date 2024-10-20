import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./components/Auth/AuthProvider";
import Router from "./Route/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
