import { useEffect, useRef, useState } from "react";
import { Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import io from "socket.io-client";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState("");
  const navigation = useNavigate();
  const socketRef = io("http://localhost:3000");
  useEffect(() => {
    socketRef.emit("newUser", user._id);

    return () => {};
  }, [user]);

  const Logout = () => {
    socketRef.emit("offline", user._id);
    setUser("");
    window.location.reload();
  };
  return (
    <div>
      <nav>
        <ul>
          {console.log(user)}
          <li>
            {!user ? (
              <Link to="/login">Login</Link>
            ) : (
              <button onClick={() => Logout()}>Logout</button>
            )}
          </li>
          <li>
            <li>{!user && <Link to="/register">Register</Link>}</li>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/login"
          element={
            user ? <Navigate to="/home" /> : <LoginPage setUser={setUser} />
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
