import { useState } from "react";
import { motion } from "framer-motion";

import { HamburgerButton } from "../components/Home/HamburgerButton";
import { Searchbar } from "../components/Home/Searchbar";
import { FriendTab } from "../components/Home/FriendTab";
import { Chat } from "../components/Chat/Chat";

export function Home() {
  const [chatOpen, setChatOpen] = useState<boolean>(true);
  return (
    <div className="w-full h-full flex justify-between overflow-hidden">
      <section className="w-full md:w-1/3 flex flex-col gap-5 bg-gray-900 bg-opacity-25 p-4">
        <motion.div
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.5,
          }}
          animate={{
            opacity: [0, 1],
            y: [30, 0],
          }}
          className="flex flex-col gap-5 sticky"
        >
          <div className="flex w-full justify-start items-center gap-4">
            <HamburgerButton />
            <h1 className="text-center text-white text-2xl">Chats</h1>
          </div>
          <Searchbar />
        </motion.div>
        <motion.div
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.5,
            delay: 0.2,
          }}
          animate={{
            opacity: [0, 1],
            y: [30, 0],
          }}
          id="chats"
          className="h-fit flex-1 overflow-y-auto"
        >
          <FriendTab />
        </motion.div>
      </section>
      <section className="hidden md:w-2/3 md:flex items-center justify-center">
        {chatOpen && <Chat />}
        {!chatOpen && (
          <motion.h1
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.5,
              delay: 0.35,
            }}
            animate={{
              opacity: [0, 1],
              y: [30, 0],
            }}
            className="text-white font-medium text-5xl"
          >
            Messenger clone
          </motion.h1>
        )}
      </section>
    </div>
  );
}
