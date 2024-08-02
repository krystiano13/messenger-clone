import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useFriend } from "../hooks/useFriend";
import { useFriendRemove } from "../hooks/useFriendRemove";
import { motion } from "framer-motion";

export default function Friend() {
  const [params, setParams] = useSearchParams();
  const [user, setUser] = useState<boolean>(false);

  const navigate = useNavigate();
  const friend = useFriend(params.get("id") as string);
  const friendRemove = useFriendRemove(params.get("id") as string);

  function applyTransition(delay: number) {
    return { type: "spring", bounce: 0.5, duration: 0.25, delay: delay };
  }

  useEffect(() => {
    if (!params.get("id")) {
      navigate("/friends");
    }

    if (params.get("user")) {
      setUser(true);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 gap-6">
      <motion.img
        transition={applyTransition(0)}
        animate={{ opacity: [0, 1], y: [30, 0], scale: [0.5, 1] }}
        className="object-cover w-24 h-24 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
        alt=""
      />
      <motion.h1
        transition={applyTransition(0.15)}
        animate={{ opacity: [0, 1], y: [30, 0], scale: [0.5, 1] }}
        className="text-white text-center font-medium text-3xl"
      >
        {friend.isSuccess && friend.data.friend.friend_name}
      </motion.h1>
      <motion.section
        transition={applyTransition(0.3)}
        animate={{ opacity: [0, 1], y: [30, 0], scale: [0.5, 1] }}
        className="flex items-center gap-3"
      >
        <button
          onClick={() => friendRemove.mutation.mutate()}
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Remove
        </button>
        <button
          onClick={() => navigate("/friends")}
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Go Back
        </button>
      </motion.section>
    </div>
  );
}
