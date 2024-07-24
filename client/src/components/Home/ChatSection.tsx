import { motion } from "framer-motion";
import { Chat } from "../Chat/Chat";

interface Props {
  chatOpen: boolean;
  setChatOpen: (value: boolean) => void;
}

export const ChatSection: React.FC<Props> = ({ chatOpen, setChatOpen }) => {
  return (
    <section
      className={`${
        !chatOpen &&
        "fixed md:static translate-x-[100vw] md:translate-x-[0vw] md:flex"
      } ${
        chatOpen && "w-full translate-x-[0vw] fixed md:static"
      } h-full transition-transform md:w-2/3 items-center justify-center`}
    >
      {chatOpen && <Chat close={() => setChatOpen(false)} />}
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
  );
};
