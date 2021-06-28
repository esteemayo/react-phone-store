import CartItem from "./CartItem";

const CartList = ({ cart }) => {
  return (
    <div className="container-fluid">
      {cart &&
        cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
    </div>
  );
};

export default CartList;
