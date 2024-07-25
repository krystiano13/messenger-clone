import type { FriendMessage } from "../../types/friendMessage";

interface Props {
  open: () => void;
  friend: FriendMessage;
}

export const FriendTab: React.FC<Props> = ({ open, friend }) => {
  return (
    <div
      onClick={open}
      className="flex justify-start items-center rounded-lg gap-4 p-4 hover:bg-gray-800 cursor-pointer transition-colors"
    >
      <img
        className="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
        alt=""
      />
      <section>
        <h2 className="text-white text-xl font-regular">{friend.name}</h2>
        <p className="text-slate-300 text-opacity-50 font-light text-base">
          {friend.message} {friend.time}
        </p>
      </section>
    </div>
  );
};
