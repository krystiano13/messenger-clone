import { useState, useRef, useEffect } from "react";
import { Searchbar } from "../components/Home/Searchbar";
import { useNavigate } from "react-router";
import { FriendSearchTab } from "../components/Friends/FriendSearchTab";
import { useFriends } from "../hooks/useFriends";
import { useUsers } from "../hooks/useUsers";
import type { Friend } from "../types/friend";

export default function Friends() {
  const [findFriends, setFindFriend] = useState<boolean | "invites">(false);
  const [newFriends, setNewFriends] = useState<Friend[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<Friend[]>([]);
  
  const friendsQuery = useFriends(setFilteredFriends);
  const users = useUsers("");

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

  function findUsers(value: string) {
    users.mutation.mutate(value);
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
          findFriends === true
            ? (value: string) => findNewFriend(value)
            : findFriends === false
            ? (value: string) => findFriend(value)
            : (value: string) => findUsers(value)
        }
      />
      <section className="flex items-center gap-3 w-full">
        <button
          onClick={() => setFindFriend(false)}
          className={`text-sm md:text-base px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform ${
            findFriends !== false && "bg-gray-700 rounded-md hover:bg-gray-600"
          } ${
            findFriends === false && "bg-blue-700 rounded-md hover:bg-blue-600"
          } focus:outline-none`}
        >
          Friends
        </button>
        <button
          onClick={() => setFindFriend(true)}
          className={`text-sm md:text-base px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform ${
            findFriends !== true && "bg-gray-700 rounded-md hover:bg-gray-600"
          } ${
            findFriends === true && "bg-blue-700 rounded-md hover:bg-blue-600"
          } focus:outline-none`}
        >
          Find
        </button>
        <button
          onClick={() => setFindFriend("invites")}
          className={`text-sm md:text-base px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform ${
            findFriends !== "invites" &&
            "bg-gray-700 rounded-md hover:bg-gray-600"
          } ${
            findFriends === "invites" &&
            "bg-blue-700 rounded-md hover:bg-blue-600"
          } focus:outline-none`}
        >
          Invites
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
