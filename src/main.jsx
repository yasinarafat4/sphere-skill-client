import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="lg:max-w-screen-xl mx-auto">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
