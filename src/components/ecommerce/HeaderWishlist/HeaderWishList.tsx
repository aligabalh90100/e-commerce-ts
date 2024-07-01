// import styles from "./style.module.css";
// import WhistList from "../../../assets/svg/wishlist.svg?react";

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../../store/hook";

// const HeaderWishlist = () => {
//   const [isAnimate, setIsAnimate] = useState(false);
//   const navigate = useNavigate();
//   const totalItems: number = useAppSelector(
//     (state) => state.wishlistSlice.itemsId
//   ).length;
//   // let totalItems = 0;
//   useEffect(() => {
//     if (!totalItems) {
//       return;
//     }
//     setIsAnimate(true);

//     const debounce = setTimeout(() => {
//       setIsAnimate(false);
//     }, 600);

//     return () => clearTimeout(debounce);
//   }, [totalItems]);
//   return (
//     <div className={`${styles.container}`} onClick={() => navigate("wishlist")}>
//       <WhistList title="cart icon" />
//       <p className="fw-medium fs-6">WhistList</p>

//       {totalItems > 0 && (
//         <div
//           className={`${styles.totalNum} ${
//             isAnimate ? styles.pumpQunatity : ""
//           }`}
//         >
//           {totalItems}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderWishlist;

import { useEffect } from "react";
import WishListIcon from "../../../assets/svg/wishlist.svg?react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import HeaderUseable from "../Header-Cart-Wishlist/HeaderUseable";
import actGetWishlist from "../../../store/wishlist/act/actGetWishlist";

const HeaderWishlist = () => {
  const { accessToken } = useAppSelector((state) => state.authSlice);
  const totalItems = useAppSelector(
    (state) => state.wishlistSlice.itemsId
  ).length;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist());
    }
  }, [accessToken]);
  return (
    <HeaderUseable
      page="wishlist"
      SvgIcon={WishListIcon}
      title="Wishlist"
      totalQuantity={totalItems}
    />
  );
};

export default HeaderWishlist;
