import { useEffect, useRef, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import io from "socket.io-client";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const socketRef = io("http://localhost:3000");

    socketRef.emit("newUser", "Ali");

    return () => {};
  }, [user]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
