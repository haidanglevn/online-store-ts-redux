import { useAppSelector } from "../app/hooks";
import Product from "./Product";

const Cart = () => {
  // useSelector will be here
  const cartItems = useAppSelector((state) => state.products.cart);
  console.log("Cart items: ", cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Cart;
