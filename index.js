import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantBody from "./src/component/RestaurantBody";
import Contact from "./src/component/contact/Contact";
import Errors from "./src/component/Errors";
import FoodDetails from "./src/component/FoodDetails/FoodDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errors />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <RestaurantBody />,
      },
      {
        path: "/restaurant/:id",
        element: <FoodDetails />

      },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={appRouter} />
);
