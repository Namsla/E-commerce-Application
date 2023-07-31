import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <div className="dark:bg-dark py-8 ">
      <div className="text-xl text-center max-w-4xl p-8 mx-auto dark:text-slate-100 dark:bg-gray-800 border dark:border-slate-700 rounded">
        <div className="my-5 pb-8">
          <p className="bi bi-cart text-green-600 text-7xl mb-5 pb-8"></p>
          <p>Oops! Your cart looks empty!</p>
          <p>Add eBooks to your cart from our store collection.</p>
        </div>
        <div className="py-8">
          <Link
            to="/products"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            Continue Shopping <i className="ml-2 bi bi-cart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
