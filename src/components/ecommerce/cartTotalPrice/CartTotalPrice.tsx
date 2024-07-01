import { useEffect, useState } from "react";
import style from "./style.module.css";
import { Button } from "react-bootstrap";
import PopUp from "../../common/PopUp";
import { useAppDispatch } from "../../../store/hook";
import { modalActions } from "../../../store/ModalSlice";
import actPlaceOrder from "../../../store/orders/act/actPlaceOrder";
import { CartActions } from "../../../store/cart/CartSlice";

type TotalPrice = {
  totalItem: { quantity: number; price: number }[];
  userAccessToken: string | null;
};
const CartTotalPrice = ({ totalItem, userAccessToken }: TotalPrice) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  let TotalPrice = totalItem.reduce((accumlator, el) => {
    return accumlator + el.price * el.quantity;
  }, 0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setIsAnimate(true);
    setTimeout(() => {
      setIsAnimate(false);
    }, 500);

    // return () => {
    //   clearTimeout(debounce);
    // };
  }, [totalItem]);
  function handleOrder() {
    setLoading(true);
    dispatch(actPlaceOrder(TotalPrice))
      .unwrap()
      .then(() => {
        dispatch(CartActions.clearCartAfterOrder());
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }
  return (
    <>
      <div className={style.container}>
        <span>Subtotal</span>
        <span className={isAnimate ? style.popUp : ""}>{TotalPrice}</span>
      </div>
      {userAccessToken && (
        <div className={style.container}>
          <Button
            variant="info"
            style={{ color: "white", marginLeft: "auto" }}
            onClick={() => {
              dispatch(modalActions.toggleModel());
            }}
          >
            Place Order
          </Button>
          <PopUp
            header="Placing Order"
            actionButton="Confirm"
            text={`Your Order Subtotal is : ${TotalPrice.toFixed(2)} EGP`}
            backdop="static"
            actionFunction={handleOrder}
            loading={loading}
            error={error}
          />
        </div>
      )}
    </>
  );
};

export default CartTotalPrice;
