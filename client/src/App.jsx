import { Route, Routes } from "react-router";
import { useState } from "react";

import Layout from "./components/Layout";
import SignInPage from "./components/pages/SignInPage";
import SignupPage from "./components/pages/SignupPage";
import MainPage from "./components/pages/MainPage";
import CartPage from "./components/pages/CartPage"; // добавь страницу корзины
import axiosInstance from "./service/axiosInstance";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const signupHandler = async (formData) => {
    const response = await axiosInstance.post("/auth/signup", formData);
    setUser(response.data.user);
  };

  const handleLogin = async (formData) => {
    const response = await axiosInstance.post("/auth/signin", formData);
    setUser(response.data.user);
  };

  const logoutHandler = async () => {
    await axiosInstance.delete("/auth/signout");
    setUser(null);
  };

  const addToCart = (item) => setCart((prev) => [...prev, item]);
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const onOrderComplete = () => {
    setCart([]);
  };

  return (
    <Routes>
      <Route
        element={
          <Layout user={user} logoutHandler={logoutHandler} cart={cart} />
        }
      >
        <Route
          path="/signup"
          element={<SignupPage signupHandler={signupHandler} />}
        />
        <Route
          path="/signin"
          element={<SignInPage handleLogin={handleLogin} />}
        />
        <Route path="/" element={<MainPage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              onOrderComplete={onOrderComplete}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
