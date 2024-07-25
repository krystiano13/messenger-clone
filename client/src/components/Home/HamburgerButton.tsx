interface Props {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

export function HamburgerButton({ menuOpen, setMenuOpen }: Props) {
  return (
    <button
      onClick={() => setMenuOpen(true)}
      className={`flex flex-col justify-center ${
        menuOpen && "bg-blue-700"
      } transition-colors w-6 h-6 gap-[0.3rem]`}
    >
      <span className="w-full h-[2px] bg-white"></span>
      <span className="w-full h-[2px] bg-white"></span>
      <span className="w-full h-[2px] bg-white"></span>
    </button>
  );
}
