import Layout from "./components/pages/Layout";
import { Route, Routes, useNavigate } from "react-router";
import ProfilePage from "./components/pages/ProfilePage";
import SignInPage from "./components/pages/SignInPage";
import SignupPage from "./components/pages/SignupPage";
import axiosInstance from "./service/axiosInstance";
import { useState } from "react";
import MainPage from "./components/pages/MainPage";
function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
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
    setCards([...cards, res.data]);
    navigate("/profile");
  };

  return (
    <Routes>
      <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
        <Route path="/profile" element={<ProfilePage user={user} submitHandler={submitHandler}/>} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route
          path="/signup"
          element={<SignupPage signupHandler={signupHandler} />}
        />
        <Route
          path="/signin"
          element={<SignInPage handleLogin={handleLogin} />}
        />
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
