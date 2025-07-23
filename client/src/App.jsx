import { Route, Routes } from "react-router";

import Layout from "./components/pages/Layout1";
import SignInPage from "./components/pages/SignInPage";
import SignupPage from "./components/pages/SignupPage";
import axiosInstance from "./service/axiosInstance";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const signupHandler = async (formData) => {
    const response = await axiosInstance.post("/auth/signup", formData);
    setUser(response.data.user);
  };

  const logoutHandler = async () => {
    await axiosInstance.delete("/auth/signout");
    setUser(null);
  };
  return (
    <Routes>
      <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
        {/* <Route path="/profile" element={<ProfilePage user={user} />} />
      <Route path="/cart" element={<CartPage />} /> */}
        <Route
          path="/signup"
          element={<SignupPage signupHandler={signupHandler} />}
        />
        <Route path="/signin" element={<SignInPage />} />
        {/* <Route path="/" element={<MainPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
