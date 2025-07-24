import { Route, Routes, useNavigate } from "react-router";

import Layout from "./components/pages/Layout";
import SignInPage from "./components/pages/SignInPage";
import SignupPage from "./components/pages/SignupPage";
import MainPage from "./components/pages/MainPage";
import CartPage from "./components/pages/CartPage"; // добавь страницу корзины
import axiosInstance from "./service/axiosInstance";
import { useEffect, useState } from "react";
import ProfilePage from "./components/pages/ProfilePage";
import CartPage from "./components/pages/CartPage1";
import ProtectedRoute from "./components/HOCs/ProtectedRoute";


import axios from "axios";
function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const [accessToken, setAccessToken] = useState("");
    const [mtgcards, setMtgcards] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios("/api/cards")
      .then(({ data }) => setMtgcards(data))
      .catch(console.error);
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .post("/auth/refresh")
      .then(({ data }) => setUser(data.user))
      .catch(console.error);
  }, []);

  const signupHandler = async (formData) => {
    const response = await axiosInstance.post("/auth/signup", formData);
    setUser(response.data.user);
  };

  const handleLogin = async (formData) => {
    const response = await axiosInstance.post("/auth/signin", formData);
    setUser(response.data.user);
    navigate("/");
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


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('111');
    
    const data = Object.fromEntries(new FormData(e.target));
    const userIdData = { ...data, userId: user.id , isSold: false};
    const res = await axiosInstance.post("/cards", userIdData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    e.target.reset();
    setMtgcards([...mtgcards, res.data]);
    navigate("/profile");
  };
  const addToCart = (item) => setCart((prev) => [...prev, item]);
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));
  const onOrderComplete = () => setCart([]);

  return (
    <Routes>
      <Route
        element={
          <Layout user={user} logoutHandler={logoutHandler} cart={cart} />
        }
      >
        <Route
          path="/"
          element={
            <MainPage
              addToCart={addToCart}
              mtgcards={mtgcards}
              setMtgcards={setMtgcards}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              user={user}
              submitHandler={submitHandler}
              mtgcards={mtgcards}
            />
          }
        />
        <Route
          element={<ProtectedRoute isAllowed={!!user} redirectTo="/signin" />}
        >
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
        <Route
          path="/signup"
          element={<SignupPage signupHandler={signupHandler} />}
        />
        <Route
          path="/signin"
          element={<SignInPage handleLogin={handleLogin} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
