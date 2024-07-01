import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import actGetCartProducts from "../store/cart/act/actGetProducts";
import { CartActions } from "../store/cart/CartSlice";
import { orderActions } from "../store/orders/orderSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error, productInfo } = useAppSelector(
    (state) => state.CartSlice
  );
  const { accessToken } = useAppSelector((state) => state.authSlice);
  const { loading: orderLoading } = useAppSelector((state) => state.orderSlice);

  useEffect(() => {
    dispatch(actGetCartProducts());
    return () => {
      dispatch(CartActions.productFullInfoClean());
      dispatch(orderActions.clearPlaceOrderState());
    };
  }, [dispatch]);
  const product = productInfo.map((el) => ({
    ...el,
    qunatity: items[`${el.id}`],
  }));
  const priceData = product.map((item) => ({
    price: item.price,
    quantity: item.qunatity,
  }));

  const changeQunatityHandler = useCallback((quantity: number, id: number) => {
    dispatch(CartActions.cartItemChangeQuantity({ id, quantity }));
  }, []);

  return {
    changeQunatityHandler,
    loading,
    error,
    priceData,
    product,
    productInfo,
    accessToken,
    orderLoading,
  };
};

export default useCart;
