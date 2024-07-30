import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

export function Menu({ menuOpen, setMenuOpen }: Props) {
  const navigate = useNavigate();
  const auth = useAuth();

  function logOut() {
    localStorage.removeItem("username");
    localStorage.removeItem("refresh_token");

    auth.auth.setUser({
      id: -1,
      email: "",
      username: "",
      accessToken: "",
    });
  }

  return (
    <div
      className={`${
        menuOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } bg-slate-800 w-[80%] h-[100vh] fixed z-50 transition-transform flex flex-col items-center justify-center gap-6`}
    >
      <img
        className="object-cover w-24 h-24 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
        alt=""
      />
      <h1 className="text-white text-center font-medium text-3xl">John Doe</h1>
      <button
        onClick={() => navigate("/friends")}
        className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      >
        Friends
      </button>
      <div className="flex justify-center items-center gap-3 w-36">
        <button
          onClick={() => setMenuOpen(false)}
          className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Close
        </button>
        <button
          onClick={logOut}
          className="px-8 py-2.5 text-nowrap w-full leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
