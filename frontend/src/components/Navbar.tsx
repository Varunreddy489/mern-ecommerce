import { useState } from "react";
import Urbanlogo from "../../public/Urbanlogo.svg";
import Dropdown from "./Dropdown";
import { TiShoppingCart } from "react-icons/ti";
// import useGetUserData from "../hooks/useGetUserData";
// import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const { authUser } = useAuthContext();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const { userData, loading } = useGetUserData(authUser?.id || "");

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const data = localStorage.getItem("user");
  const userData = data ? JSON.parse(data) : null;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={Urbanlogo} className="h-8" alt="UrbanBazaar Logo" />
        </a>
        <div className="flex items-center md:order-2 space-x-6 rtl:space-x-reverse flex-grow justify-end relative">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <img
              className="w-8 h-8 rounded-full"
              src={userData?.profilePic || ""}
              alt="user photo"
            />
          </button>
          {isDropdownOpen && <Dropdown />}
          <TiShoppingCart className="text-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
