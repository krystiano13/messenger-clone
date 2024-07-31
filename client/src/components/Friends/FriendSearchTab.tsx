import { motion } from "framer-motion";
import { useNavigate } from "react-router";

interface Props {
  name: string;
  friendID: number;
}

export function FriendSearchTab({ name, friendID }: Props) {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/friend?id=${friendID}`)}
      animate={{ opacity: [0, 1], y: [30, 0] }}
      className="w-full flex justify-start items-center rounded-lg gap-4 p-4 hover:bg-gray-700 cursor-pointer transition-colors"
    >
      <img
        className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
        alt=""
      />
      <section>
        <h2 className="text-white text-xl font-regular">{name}</h2>
      </section>
    </motion.div>
  );
}
