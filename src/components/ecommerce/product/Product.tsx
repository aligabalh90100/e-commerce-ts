import { Button, Spinner } from "react-bootstrap";
import styles from "./style.module.css";
import { TProduct } from "../../../types/types";
import { useAppDispatch } from "../../../store/hook";
import { CartActions } from "../../../store/cart/CartSlice";
import { memo, useEffect, useState } from "react";
import Like from "../../../assets/svg/like.svg?react";
import LikeFill from "../../../assets/svg/like-fill.svg?react";
import actLikeToggle from "../../../store/wishlist/act/actLikeToggle";

import { modalActions } from "../../../store/ModalSlice";
import PopUp from "../../common/PopUp";
import { useNavigate } from "react-router-dom";

const Product = memo(
  ({ id, img, title, price, max, qunatity, isLiked }: TProduct) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // const { accessToken } = useAppSelector((state) => state.authSlice);
    const currentRemaningQunatity = max - (qunatity ?? 0);
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (!isClicked) {
        return;
      }
      const debounce = setTimeout(() => {
        setIsClicked(false);
      }, 300);
      return () => {
        clearTimeout(debounce);
      };
    }, [isClicked]);

    const likeToggleHandler = () => {
      let accessToken = JSON.parse(
        localStorage.getItem("persist:auth") || ""
      ).accessToken;
      if (accessToken == "null") {
        // localStorage.setItem("redirected", "true");
        // return navigate("/login");
        dispatch(modalActions.toggleModel());
        return;
      }

      if (!isLoading) {
        setIsLoading(true);
        dispatch(actLikeToggle(id as number)).catch(() => setIsLoading(false));

        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }
    };
    return (
      <div className={styles.product}>
        <div className={styles.wishlistBtn} onClick={likeToggleHandler}>
          {isLoading ? (
            <Spinner animation="border" size="sm" variant="primary" />
          ) : isLiked ? (
            <LikeFill />
          ) : (
            <Like />
          )}
        </div>
        <div className={styles.productImg}>
          <img src={img} alt={title} />
        </div>
        <h2>{title}</h2>
        <h3>{price.toFixed(2)} EGP</h3>
        <p className={styles.maximumNotice}>
          {currentRemaningQunatity == 0
            ? "You reached your limit!"
            : `You can add ${currentRemaningQunatity} item${
                currentRemaningQunatity > 1 ? "s" : ""
              }`}
        </p>
        <Button
          variant="info"
          style={{ color: "white" }}
          disabled={isClicked || currentRemaningQunatity === 0}
          onClick={() => {
            setIsClicked(true);
            let accessToken = JSON.parse(
              localStorage.getItem("persist:auth") || ""
            ).accessToken;
            if (accessToken == "null") {
              localStorage.setItem("redirected", "true");
              navigate("/login");
              return;
            }
            dispatch(CartActions.addToCart(id));
          }}
        >
          {isClicked ? (
            <>
              <Spinner animation="border" size="sm" /> Loading...
            </>
          ) : (
            "Add to cart"
          )}
        </Button>
        <PopUp
          header="Login Required"
          actionButton="Go To Login Page"
          text=" You need to login first to add items to your wishlist"
          navigationLink="/login"
        />
      </div>
    );
  }
);

export default Product;
