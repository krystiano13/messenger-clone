import { Message } from "./Message";

interface Props {
  close: () => void;
}

export const Chat: React.FC<Props> = ({ close }) => {
  return (
    <div className="w-full h-full max-h-[100vh] overflow-y-auto flex flex-col bg-slate-800 justify-start p-1">
      <section className="flex justify-center items-center p-4 shadow-md gap-4">
        <button
          onClick={close}
          className="md:hidden px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Close
        </button>
        <h2 className="text-white text-center text-xl font-regular">
          John Doe
        </h2>
      </section>
      <Message me={false} content="Hello ! What's up ?" name="John Doe" />
      <Message me={true} content="Hello ! Everything's good" />
    </div>
  );
};
