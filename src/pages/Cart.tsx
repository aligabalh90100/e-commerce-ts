import Heading from "../components/common/Heading/Heading";
import CartItem from "../components/ecommerce/cartItem/CartItem";
import CartTotalPrice from "../components/ecommerce/cartTotalPrice/CartTotalPrice";
import Loading from "../components/feedback/Loading/Loading";
import LottiesHandler from "../components/feedback/LottieHandler/LottiesHandler";
import useCart from "../hooks/useCart";

const Cart = () => {
  const {
    changeQunatityHandler,
    loading,
    error,
    priceData,
    product,
    productInfo,
    accessToken,
    orderLoading,
  } = useCart();

  return (
    <>
      <Heading title="Cart" />
      <Loading error={error} loading={loading} type="cart">
        {productInfo.length ? (
          <>
            {product.map((el) => (
              <CartItem
                key={el.id}
                {...el}
                changeQunatityHandler={changeQunatityHandler}
              />
            ))}
            <CartTotalPrice
              totalItem={priceData}
              userAccessToken={accessToken}
            />
          </>
        ) : orderLoading == "succeeded" ? (
          <LottiesHandler
            type="success"
            message="Your order has been placed successfully"
          />
        ) : (
          <LottiesHandler type="empty" message="Your cart is empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
