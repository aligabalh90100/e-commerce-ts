// import styles from "./HeaderCart.module.css";
// import Logo from "../../../assets/svg/cart.svg?react";
// import { useAppSelector } from "../../../store/hook";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HeaderCart = () => {
//   const [isAnimate, setIsAnimate] = useState(false);
//   const navigate = useNavigate();
//   const { items } = useAppSelector((state) => state.CartSlice);
//   let TotalItemsInCart = Object.values(items).reduce((cur, value) => {
//     return cur + value;
//   }, 0);
//   useEffect(() => {
//     if (!TotalItemsInCart) {
//       return;
//     }
//     setIsAnimate(true);
//     const debounce = setTimeout(() => {
//       setIsAnimate(false);
//     }, 600);

//     return () => clearTimeout(debounce);
//   }, [items]);

//   return (
//     <div
//       className={`${styles.container} d-flex gap-2`}
//       onClick={() => navigate("cart")}
//     >
//       <Logo title="cart icon" />
//       <p className="fw-medium fs-6">Cart</p>

//       {TotalItemsInCart > 0 && (
//         <div
//           className={`${styles.totalNum} ${
//             isAnimate ? styles.pumpQunatity : ""
//           }`}
//         >
//           {TotalItemsInCart}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeaderCart;

import Logo from "../../../assets/svg/cart.svg?react";
import { useAppSelector } from "../../../store/hook";
import HeaderUseable from "../Header-Cart-Wishlist/HeaderUseable";

const HeaderCart = () => {
  const { items } = useAppSelector((state) => state.CartSlice);
  let TotalItemsInCart = Object.values(items).reduce((cur, value) => {
    return cur + value;
  }, 0);

  return (
    <HeaderUseable
      SvgIcon={Logo}
      page="cart"
      title="Cart"
      totalQuantity={TotalItemsInCart}
    />
  );
};

export default HeaderCart;
