interface Props {
  menuOpen: boolean;
}

export function Menu({ menuOpen }: Props) {
  return (
    <div
      className={`${
        menuOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } bg-slate-700 w-[80%] h-[100vh] fixed z-50 transition-transform`}
    ></div>
  );
}
