import { CiLogout } from "react-icons/ci";
import useLogout from "../hooks/useLogout";

const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="text-center">
      {!loading ? (
        <CiLogout
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Logout;