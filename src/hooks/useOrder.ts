import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { TProduct } from "../types/types";
import { modalActions } from "../store/ModalSlice";
import actGetOrders from "../store/orders/act/actGetOrders";
import { orderActions } from "../store/orders/orderSlice";

const useOrder = () => {
  const { orderList, loading, error } = useAppSelector(
    (state) => state.orderSlice
  );
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);
  const viewOrderDetails = (id: number) => {
    const orderDetails = orderList.find((order) => order.id == id);
    const selectedOrderItems = orderDetails?.items ?? [];
    disptach(modalActions.toggleListOrder());
    setSelectedProduct([...selectedOrderItems]);
  };
  const disptach = useAppDispatch();
  useEffect(() => {
    const promise = disptach(actGetOrders());

    return () => {
      promise.abort();
      disptach(orderActions.clearPlaceOrderState());
    };
  }, []);

  return { orderList, viewOrderDetails, selectedProduct, loading, error };
};

export default useOrder;
