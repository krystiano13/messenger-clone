import { useState } from "react";
import { Searchbar } from "../components/Home/Searchbar";
import { useNavigate } from "react-router";
import { FriendSearchTab } from "../components/Friends/FriendSearchTab";
import type { Friend } from "../types/friend";

export default function Friends() {
  const [findFriends, setFindFriend] = useState<boolean>(false);

  const [newFriends, setNewFriends] = useState<Friend[]>([]);
  const [friends, setFriends] = useState<Friend[]>([
    {
      name: "John Doe",
    },
  ]);
  const [filteredFriends, setFilteredFriends] = useState<Friend[]>([
    ...friends,
  ]);

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
      <section className="flex items-center gap-3 w-full">
        <button
          onClick={() => setFindFriend(false)}
          className={`px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform ${
            findFriends && "bg-gray-700 rounded-md hover:bg-gray-600"
          } ${
            !findFriends && "bg-blue-700 rounded-md hover:bg-blue-600"
          } focus:outline-none`}
        >
          Friends
        </button>
        <button
          onClick={() => setFindFriend(true)}
          className={`px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform ${
            !findFriends && "bg-gray-700 rounded-md hover:bg-gray-600"
          } ${
            findFriends && "bg-blue-700 rounded-md hover:bg-blue-600"
          } focus:outline-none`}
        >
          Find new friend
        </button>
      </section>
      <div className="w-full flex flex-col items-center justify-start">
        {findFriends ? (
          <>
            {newFriends.map((item) => (
              <FriendSearchTab name={item.name} />
            ))}
          </>
        ) : (
          <>
            {filteredFriends.map((item) => (
              <FriendSearchTab name={item.name} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
