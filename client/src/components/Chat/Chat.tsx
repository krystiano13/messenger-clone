import { Message } from "./Message";

export function Chat() {
  return (
    <div className="w-full h-full max-h-[100vh] overflow-y-auto flex flex-col justify-start">
      <section className="flex justify-center items-center p-4 shadow-md">
        <h2 className="text-white text-center text-xl font-regular">
          John Doe
        </h2>
      </section>
      <Message me={true} content="Hello ! What's up ?" name="John Doe" />
    </div>
  );
}
