import { motion } from "framer-motion";

export function ChatForm() {
  return (
    <motion.form
      animate={{ opacity: [0, 1] }}
      className="absolute bottom-0 flex justify-between gap-3 items-center bg-slate-800 w-full p-3"
    >
      <button className="px-3 py-1 h-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        +
      </button>
      <input
        type="text"
        placeholder="Message ..."
        className="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      />
    </motion.form>
  );
}
