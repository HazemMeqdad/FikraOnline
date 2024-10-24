import axios from "axios";
import React, { useEffect, useState } from "react";
import { ACCESS_REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, SetIsLoading] = useState(false);


  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      api.get("/testToken").then((res) => {
        if (res.status === 200) {
          navigate("/");
        }

      })

    }
  }, []);




  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetIsLoading(true);
    try {
      const res = await api.post("/token/", {
        username: username,
        password: password,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(ACCESS_REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      SetIsLoading(false);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <>
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
}
