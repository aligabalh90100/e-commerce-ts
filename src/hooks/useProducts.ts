import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect } from "react";
import actGetProductByCatPrefix from "../store/products/act/actGetProductByCatPrefix";
import { productAction } from "../store/products/productsSlice";

const useProducts = () => {
  const { prefix } = useParams();

  const dispatch = useAppDispatch();
  const { record, loading, error } = useAppSelector(
    (state) => state.productsSlice
  );
  const cartItem = useAppSelector((state) => state.CartSlice.items);
  const wishlistItemsId = useAppSelector(
    (state) => state.wishlistSlice.itemsId
  );

  const fullProductInfo = record.map((el) => ({
    ...el,
    qunatity: cartItem[el.id as number],
    isLiked: wishlistItemsId.includes(el.id as number),
  }));

  useEffect(() => {
    const promise = dispatch(actGetProductByCatPrefix(prefix as string));
    return () => {
      dispatch(productAction.cleanUp());
      promise.abort();
    };
  }, [dispatch, prefix]);
  return { loading, error, fullProductInfo, prefix };
};

export default useProducts;
