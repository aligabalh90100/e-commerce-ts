import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import actGetCategories from "../store/categories/act/actGetCategories";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { loading, record, error } = useAppSelector(
    (state) => state.categoriesSlice
  );
  useEffect(() => {
    if (record.length) {
      return;
    }
    const proimse = dispatch(actGetCategories());

    return () => {
      proimse.abort();
    };
  }, [dispatch, record]);

  return { loading, record, error };
};

export default useCategories;
