import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/pages/Layout1";
import SignupPage from "./components/pages/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/register" element={<SignupPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
