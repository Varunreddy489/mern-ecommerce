import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
// import SignUp from "./pages/Register/Register";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      {/* <SignUp /> */}
      <Toaster />
    </div>
  );
};

export default App;
