import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Register/Register";
import { useAuthContext } from "./context/AuthContext";
import Cart from "./pages/Cart/Cart";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/cart"
          element={authUser ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
