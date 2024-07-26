import { useNavigate } from "react-router";

export default function Friend() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 gap-6">
      <img
        className="object-cover w-24 h-24 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
        alt=""
      />
      <h1 className="text-white text-center font-medium text-3xl">John Doe</h1>
      <section className="flex items-center gap-3">
        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Invite
        </button>
        <button
          onClick={() => navigate("/friends")}
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Go Back
        </button>
      </section>
    </div>
  );
}
