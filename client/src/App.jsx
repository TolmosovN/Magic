import { Route, Routes,  } from "react-router";
import axios from "axios";
import ProfilePage from "./components/pages/ProfilePage";
import Layout from "./components/pages/Layout";

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
