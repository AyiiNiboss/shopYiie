import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import ProductPage from "./Pages/products.jsx";
import DetailProductPage from "./Pages/detailProducts.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index.js";
import CartPage from "./Pages/cart.jsx";
import { PersistGate } from "redux-persist/integration/react";
import CheckoutPage from "./Pages/checkout.jsx";
import SettingPage from "./Pages/setting.jsx";
import FavoritePage from "./Pages/favorite.jsx";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products/category/:categories",
    element: <ProductPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
  {
    path: "/favorite",
    element: <FavoritePage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
