import { motion } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { useRegister } from "../hooks/useRegister";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  function applyTransition(delay: number) {
    return {
      duration: 0.35,
      type: "spring",
      bounce: 0.5,
      delay: delay,
    };
  }

  function animate() {
    return {
      opacity: [0, 1],
      y: [30, 0],
    };
  }

  const register = useRegister();
  const auth = useAuth();
  const navigate = useNavigate();

  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  function registerSuccess(token: string, accessToken: string) {
    localStorage.setItem("refresh_token", token);
    localStorage.setItem("username", usernameInputRef.current?.value as string);

    auth.auth.setUser({
      email: emailInputRef.current?.value as string,
      accessToken: accessToken,
    });

    navigate("/");
  }

  return (
    <div className="w-full h-full flex bg-gray-900 bg-opacity-50 justify-center items-center">
      <motion.section
        transition={applyTransition(0)}
        animate={{
          opacity: [0, 1],
        }}
        className="w-[95vw] md:w-auto md:max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
      >
        <motion.h2
          transition={applyTransition(0.1)}
          animate={animate()}
          className="text-lg font-semibold text-gray-700 capitalize dark:text-white"
        >
          Create new account
        </motion.h2>

        <form
          onSubmit={(e) =>
            register.mutation.mutateAsync(e).then((res) => {
              console.log(res);
              registerSuccess(res.resource_owner.refreshToken, res.token);
            })
          }
        >
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <motion.div transition={applyTransition(0.2)} animate={animate()}>
              <label className="text-gray-700 dark:text-gray-200">
                Username
              </label>
              <input
                ref={usernameInputRef}
                id="username"
                type="text"
                name="username"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </motion.div>

            <motion.div transition={applyTransition(0.3)} animate={animate()}>
              <label className="text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                ref={emailInputRef}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </motion.div>

            <motion.div transition={applyTransition(0.4)} animate={animate()}>
              <label className="text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </motion.div>

            <motion.div transition={applyTransition(0.5)} animate={animate()}>
              <label className="text-gray-700 dark:text-gray-200">
                Password Confirmation
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                name="password_confirmation"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </motion.div>
          </div>

          <div className="flex justify-end mt-6">
            <motion.button
              transition={applyTransition(0.6)}
              animate={animate()}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Register
            </motion.button>
          </div>

          {register.errors.map((item) => (
            <p className="text-red-500 text-center text-lg font-regular">
              {item}
            </p>
          ))}
        </form>
      </motion.section>
    </div>
  );
}
