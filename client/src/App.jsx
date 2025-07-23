import { Route, Routes } from "react-router";

import Layout from "./components/pages/Layout1";
import SignupPage from "./components/pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout user={user} />}></Route>
      <Route path="/profile" element={<ProfilePage user={user} />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
