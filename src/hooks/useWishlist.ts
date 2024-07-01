import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import actGetWishlist from "../store/wishlist/act/actGetWishlist";
import { wishlistActions } from "../store/wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { prdouctsInfo, error, loading } = useAppSelector(
    (state) => state.wishlistSlice
  );

  const cartItems = useAppSelector((state) => state.CartSlice.items);

  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
      dispatch(wishlistActions.productFullInfoClean());
    };
  }, []);

  const records = prdouctsInfo.map((el) => ({
    ...el,
    qunatity: cartItems[el.id as number],
    isLiked: true,
  }));
  return { loading, error, records };
};

export default useWishlist;
