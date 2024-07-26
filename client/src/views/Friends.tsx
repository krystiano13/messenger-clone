import { Searchbar } from "../components/Home/Searchbar";
import { useNavigate } from "react-router";
import { FriendSearchTab } from "../components/Friends/FriendSearchTab";

export default function Friends() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center p-6 gap-6">
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Go Back
        </button>
      </div>
      <Searchbar search={(value: string) => {}} />
      <div className="w-full flex flex-col items-center justify-start">
        <FriendSearchTab name="John Doe" />
      </div>
    </div>
  );
}
