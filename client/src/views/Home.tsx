import { HamburgerButton } from "../components/Home/HamburgerButton";
import { Searchbar } from "../components/Home/Searchbar";

export function Home() {
  return (
    <div className="w-full h-full flex justify-between">
      <section className="w-1/3 flex flex-col gap-5 bg-gray-900 bg-opacity-25 p-4">
        <div className="flex w-full justify-start items-center gap-4">
          <HamburgerButton />
          <h1 className="text-center text-white text-2xl">Chats</h1>
        </div>
        <Searchbar />
        <div id="chats">

        </div>
      </section>
      <section className="w-2/3"></section>
    </div>
  );
}
