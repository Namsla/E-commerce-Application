import NavBar from "../nav-bar/navBar";
import Footer from "../footer/footer";

function Container({ children }) {
  return (
    <div className="h-full">
      <NavBar />
      {children}

      <Footer />
    </div>
  );
}

export default Container;
