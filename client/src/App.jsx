import Layout from "./components/pages/Layout";
import { Route, Routes, useNavigate } from "react-router";
import ProfilePage from "./components/pages/ProfilePage";
import SignInPage from "./components/pages/SignInPage";
import SignupPage from "./components/pages/SignupPage";
import axiosInstance from "./service/axiosInstance";
import { useEffect, useState } from "react";
import MainPage from "./components/pages/MainPage";
import CartPage from "./components/pages/CartPage1";
import ProtectedRoute from "./components/HOCs/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
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
    navigate("/");
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
  const onOrderComplete = () => setCart([]);

  return (
    <Routes>
      {/* Общий Layout для всех страниц */}
      <Route
        element={
          <Layout user={user} logoutHandler={logoutHandler} cart={cart} />
        }
      >
        {/* Публичные маршруты */}
        <Route path="/" element={<MainPage addToCart={addToCart} />} />
        <Route
          path="/signup"
          element={<SignupPage signupHandler={signupHandler} />}
        />
        <Route
          path="/signin"
          element={<SignInPage handleLogin={handleLogin} />}
        />

        {/* Защищенные маршруты - требуют авторизации */}
        <Route
          element={<ProtectedRoute isAllowed={!!user} redirectTo="/signin" />}
        >
          <Route path="/profile" element={<ProfilePage user={user} />} />
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
      </Route>
    </Routes>
  );
}

export default App;
