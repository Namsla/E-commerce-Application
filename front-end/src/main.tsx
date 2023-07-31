import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/sign-in/signIn.tsx";
import SignUp from "./pages/sign-up/signUp.tsx";
import { ProductsList } from "./pages/product-listing-page/product-listing.tsx";
import { ProductDetail } from "./pages/product-details-page/product-detail.tsx";
// import { Search } from "./components/Sections/search-bar/searchBar.tsx";
import App from "./App.tsx";
import { CartPage } from "./pages/cart-page/cart-page.tsx";
import Protected from "./routes/protected-routes.tsx";
import { CartList } from "./pages/cart-page/cart-list.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },

  {
    path: "/shoppinglist",
    element: (
      <Protected>
        <CartList />
      </Protected>
    ),
  },

  // search result can be found by going to the local host and do forward slash followed by products?q="search content or value"
  // // http://localhost:5173/products?q=react
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
