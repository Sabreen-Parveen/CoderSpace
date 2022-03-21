import { AiOutlineClose } from "react-icons/ai";

export default function MobileNav({ closeNav, children }) {
  return (
    <div className="lg:hidden flex fixed right-0 top-0 w-full h-full z-50">
      <div
        className="bg-black opacity-75 md:w-1/3 z-10"
        onClick={closeNav}
      ></div>
      <div className="bg-white ml-auto md:w-2/3 w-full h-full p-10">
        <button onClick={closeNav}>
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
}
