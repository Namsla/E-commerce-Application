import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page/homePage.tsx";
import SignIn from "./pages/sign-in/signIn.tsx";
import SignUp from "./pages/sign-up/signUp.tsx";
import { ProductsList } from "./pages/product-listing-page/product-listing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/productlisting",
    element: <ProductsList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
