export default function Header({ children }) {
  return (
    <nav className=" nav-flex-center lg:w-2/3 py-7 px-2 lg:px-0 flex-wrap">
      {children}
    </nav>
  );
}
