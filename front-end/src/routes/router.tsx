import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page/homePage";
import SignIn from "../pages/sign-in/signIn";
import SignUp from "../pages/sign-up/signUp";
import ProductDetails from "../pages/product-details-page/product-detail";
import WishList from "../pages/product-wishlist-page/product-wishlist";
import Cart from "../pages/cart-page/cart-page";
import Error from "../pages/error-page/error";
import ProductListing from "../pages/product-listing-page/product-listing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/prouctlisting",
    element: <ProductListing />,
  },
  {
    path: "/productdetails",
    element: <ProductDetails />,
  },
  {
    path: "/productwishlist",
    element: <WishList />,
  },
  {
    path: "/shoppingcart",
    element: <Cart />,
  },
  {
    path: "/errorpage",
    element: <Error />,
  },
]);
