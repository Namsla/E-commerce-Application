import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page/homePage.tsx";
import SignIn from "./pages/sign-in/signIn.tsx";
import SignUp from "./pages/sign-up/signUp.tsx";
import { ProductsList } from "./pages/product-listing-page/product-listing.tsx";
import { ProductDetail } from "./pages/product-details-page/product-detail.tsx";
import { Search } from "./components/Sections/search-bar/searchBar.tsx";
import { CartList } from "./pages/cart-page/cart-list.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <Search />,
  },

  { path: "/login", element: <SignIn /> },

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
    path: "/products",
    element: <ProductsList />,
  },

  {
    path: "/products/:id",
    element: <ProductDetail />,
  },

  {
    path: "/cart",
    element: <CartList />,
  },

  // search result can be found by going to the local host and do forward slash followed by products?q="search content or value"
  // // http://localhost:5173/products?q=react
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
