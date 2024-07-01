import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import CartSlice from "./cart/CartSlice";
import wishlistSlice from "./wishlist/wishlistSlice";
import modalSlice from "./ModalSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/authSlice";
import orderSlice from "./orders/orderSlice";

const cartPresistConfig = { key: "cart", storage, whiteList: ["items"] };
const wishlistPresistConfig = {
  key: "wishlist",
  storage,
  whiteList: ["itemsId"],
};
const authPresistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accressToken"],
};
const roodtReucer = combineReducers({
  categoriesSlice,
  productsSlice,
  modalSlice,
  orderSlice,
  authSlice: persistReducer(authPresistConfig, authSlice),
  wishlistSlice: persistReducer(wishlistPresistConfig, wishlistSlice),
  CartSlice: persistReducer(cartPresistConfig, CartSlice),
});

// presistreudcer take configuratin and implment in the root reducer

// store with persist
const store = configureStore({
  reducer: roodtReucer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// store without presist
// const store = configureStore({
//   reducer: { categoriesSlice, productsSlice, CartSlice },
// });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
