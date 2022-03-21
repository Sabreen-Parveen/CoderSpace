import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
