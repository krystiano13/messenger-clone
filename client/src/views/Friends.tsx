import { useState } from "react";
import { Searchbar } from "../components/Home/Searchbar";
import { useNavigate } from "react-router";
import { FriendSearchTab } from "../components/Friends/FriendSearchTab";
import { useFriends } from "../hooks/useFriends";
import type { Friend } from "../types/friend";

export default function Friends() {
  const [findFriends, setFindFriend] = useState<boolean>(false);
  const [newFriends, setNewFriends] = useState<Friend[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<Friend[]>([]);

  const friendsQuery = useFriends(setFilteredFriends);

  function findFriend(value: string) {
    const array = [...friendsQuery.data.friends];
    const filteredArray = array.filter((item) =>
      item.friend_name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    setFilteredFriends(filteredArray);
  }

  function findNewFriend(value: string) {
    const array = [...newFriends];
    const filteredArray = array.filter((item) =>
      item.friend_name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    setNewFriends(filteredArray);
  }

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
      <Searchbar
        search={
          findFriends
            ? (value: string) => findNewFriend(value)
            : (value: string) => findFriend(value)
        }
      />
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
              <FriendSearchTab
                key={item.id}
                friendID={item.id}
                name={item.friend_name}
              />
            ))}
          </>
        ) : (
          <>
            {filteredFriends.map((item) => (
              <FriendSearchTab
                key={item.id}
                friendID={item.id}
                name={item.friend_name}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
