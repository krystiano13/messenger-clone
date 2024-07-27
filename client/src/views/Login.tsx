import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";

export default function Login() {
  function applyTransition(delay: number) {
    return {
      duration: 0.35,
      type: "spring",
      bounce: 0.5,
      delay: delay,
    };
  }

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = await new FormData(e.target as HTMLFormElement);

    const res = await fetch("http://127.0.0.1:3000/users/tokens/sign_in", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    console.log(data);
    return data;
  }

  const loginMutation = useMutation({
    mutationFn: handleSubmit,
  });

  return (
    <div className="w-full h-full flex bg-gray-900 bg-opacity-50 justify-center items-center">
      <motion.section
        transition={applyTransition(0)}
        animate={{
          opacity: [0, 1],
        }}
        className="w-[90vw] md:w-96 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <motion.h2
          transition={applyTransition(0.1)}
          animate={{
            opacity: [0, 1],
            y: [35, 0],
          }}
          className="text-lg font-semibold text-gray-700 capitalize dark:text-white"
        >
          Welcome Back !
        </motion.h2>

        <form onSubmit={(e) => loginMutation.mutate(e)}>
          <div className="flex flex-col gap-6 mt-4">
            <motion.div
              transition={applyTransition(0.2)}
              animate={{
                opacity: [0, 1],
                y: [35, 0],
              }}
            >
              <label className="text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </motion.div>

            <motion.div
              transition={applyTransition(0.35)}
              animate={{
                opacity: [0, 1],
                y: [35, 0],
              }}
            >
              <label className="text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </motion.div>
          </div>

          <div className="flex mt-6">
            <motion.button
              transition={applyTransition(0.4)}
              animate={{
                opacity: [0, 1],
                y: [35, 0],
              }}
              className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Log In
            </motion.button>
          </div>
        </form>
      </motion.section>
    </div>
  );
}
