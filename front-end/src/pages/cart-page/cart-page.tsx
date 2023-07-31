import { CartEmpty } from "./empty-cart";
import { CartList } from "./cart-list";
import Header1 from "../../components/Nams-Layout/header";
import Footer1 from "../../components/Nams-Layout/footer";
import { useCart } from "../../context/CartContext";

export const CartPage = () => {
  const { cartList } = useCart();

  return (
    <>
      <Header1 />
      <div className="dark:bg-gray-800 flex flex-col items-center">
        <main> {cartList.length ? <CartList /> : <CartEmpty />}</main>
      </div>
      <Footer1 />
    </>
  );
};
