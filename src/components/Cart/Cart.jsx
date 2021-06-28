import { useGlobalContext } from "../../context/GlobalState";
import CartColumns from "./CartColumns";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import Title from "../Title";

const Cart = () => {
  const { cart } = useGlobalContext();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section>
      <Title name="your" title="cart" />
      <CartColumns />
      <CartList cart={cart} />
      <CartTotals cart={cart} />
    </section>
  );
};

export default Cart;
