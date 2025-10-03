import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import "./index.css"; // 👈 make sure Tailwind is still applied

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-screen">
      {" "}
      {/* 👈 keeps full height */}
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
