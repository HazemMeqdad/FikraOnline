import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductedRoute from "./components/ProductedRoute";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { ACCESS_REFRESH_TOKEN, ACCESS_TOKEN } from "./constants";
import "./App.css";
import "./main.css";
import Footer from "./components/Footer";
import Teachers from "./pages/Teachers/Teachers";
function Logout() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(ACCESS_REFRESH_TOKEN);
  return <Navigate to={"/login"} />;
}
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}
function App() {
  const [theme, setTheme] = React.useState("light");
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/browse" element={<><Header /><Teachers /><Footer /></>} />

          <Route path="/login" element={<Login></Login>} />
          <Route
            path="/register"
            element={<RegisterAndLogout></RegisterAndLogout>}
          />
          <Route path="/logout" element={<Logout></Logout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
