interface Props {
  me: boolean;
  name?: string;
  content: string;
}

export const Message: React.FC<Props> = ({ me, content, name }) => {
  return (
    <div className={`w-full p-2 flex flex-col ${me ? "items-end" : "items-start"}`}>
      <h3 className={`font-light text-slate-300 text-md ${me && "text-right"}`}>
        {me ? "Me" : name}
      </h3>
      <div
        className={`p-2 rounded-xl mt-1 max-w-[40%] ${
          me ? "bg-blue-700" : "bg-slate-700"
        }`}
      >
        <span className="text-white">{content}</span>
      </div>
    </div>
  );
};
