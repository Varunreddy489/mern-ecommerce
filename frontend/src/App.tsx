// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";

import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div 
    // className="bg-black text-white"
    >
      {/* <Register /> */}
      {/* <Login /> */}
      <Home />
      <Toaster />
    </div>
  );
};

export default App;
