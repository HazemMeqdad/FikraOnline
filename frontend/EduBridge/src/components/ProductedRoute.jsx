import React, { useState, useEffect } from "react";
import { ACCESS_TOKEN, ACCESS_REFRESH_TOKEN } from "../constants";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import api from "../api";

export default function ProductedRoute({ children }) {
  const [isAuthrized, SetIsAuthrized] = useState(null);

  useEffect(() => {
    auth().catch(() => SetIsAuthrized(false));
  }, []);
  const refreshToken = async () => {
    const refresh = localStorage.getItem(ACCESS_REFRESH_TOKEN);
    try {
      const res = await api.post("api/token/refrsh/", { refresh: refresh });

      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        SetIsAuthrized(true);
      } else {
        SetIsAuthrized(false);
      }
    } catch (error) {
      console.log(error);
      SetIsAuthrized(false);
    }
  };
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      SetIsAuthrized(false);
      return <h1>s</h1>;
    }
    const exp = jwtDecode(token).exp;
    const now = Date.now() / 1000;
    if (exp < now) {
      await refreshToken();
    } else {
      SetIsAuthrized(true);
    }
  };

  if (isAuthrized === null) {
    return <>loading ....</>;
  }
  return isAuthrized ? children : <Navigate to="./login" />;
}
