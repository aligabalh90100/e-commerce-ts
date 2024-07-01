import { Form, Button } from "react-bootstrap";
import styles from "./style.module.css";
import { ChangeEvent, memo, useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hook";
import { CartActions } from "../../../store/cart/CartSlice";

const { cartItem, product, productImg, productInfo, cartItemSelection, popUp } =
  styles;

type CartProps = {
  img: string;
  max: number;
  price: number;
  title: string;
  qunatity: number;
  id?: number;
  changeQunatityHandler: (id: number, qunatity: number) => void;
};
const CartItem = memo(
  ({
    img,
    max,
    price,
    title,
    qunatity,
    id,
    changeQunatityHandler,
  }: CartProps) => {
    const [isAnimate, setIsAnimate] = useState(false);
    const dispatch = useAppDispatch();
    const renderOptions = Array(max)
      .fill(0)
      .map((_, i) => {
        return (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        );
      });

    const onChangeQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
      const qunatity = +event.target.value;
      changeQunatityHandler(qunatity, id as number);
    };
    // remove item from cart
    const handleRemoveCartItem = () => {
      dispatch(CartActions.removeCartItem(id));
    };
    // animate Price
    useEffect(() => {
      setIsAnimate(true);
      const debounce = setTimeout(() => {
        setIsAnimate(false);
      }, 500);

      return () => {
        clearTimeout(debounce);
      };
    }, [qunatity]);

    return (
      <div className={cartItem}>
        <div className={product}>
          <div className={productImg}>
            <img src={img} alt={title} />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <h3 className={`${isAnimate ? popUp : ""}`}>
              {qunatity && (price * qunatity).toFixed(2)} EGP
            </h3>
            <Button
              variant="secondary"
              style={{ color: "white", width: "100px" }}
              className="mt-auto"
              onClick={handleRemoveCartItem}
            >
              Remove
            </Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select
            onChange={onChangeQuantity}
            value={qunatity}
            aria-label="Default select example"
          >
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);
export default CartItem;
