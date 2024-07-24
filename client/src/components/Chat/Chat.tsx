import { Message } from "./Message";

export function Chat() {
  return (
    <div className="w-full h-full max-h-[100vh] overflow-y-auto flex flex-col bg-slate-800 justify-start p-1">
      <section className="flex justify-center items-center p-4 shadow-md">
        <h2 className="text-white text-center text-xl font-regular">
          John Doe
        </h2>
      </section>
      <Message me={false} content="Hello ! What's up ?" name="John Doe" />
      <Message me={true} content="Hello ! Everything's good" />
    </div>
  );
}
