import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import searchSlice from "./searchSlice";
import userSlice from "./userSlice";
import favoriteSlice from "./favoriteSlice";

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistProductConfig = {
  key: "search",
  storage,
};

const persistUserConfig = {
  key: "user",
  storage,
};

const persistFavoriteConfig = {
  key: "favorite",
  storage,
}

const persistedCartReducer = persistReducer(persistCartConfig, cartSlice);
const persistedProductReducer = persistReducer(
  persistProductConfig,
  searchSlice
);
const persistedUserReducer = persistReducer(persistUserConfig, userSlice);
const persistedFavoriteReducer = persistReducer(persistFavoriteConfig, favoriteSlice);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    search: persistedProductReducer,
    user: persistedUserReducer,
    favorite: persistedFavoriteReducer
  },
  devTools: true,
});

export const persistor = persistStore(store);
