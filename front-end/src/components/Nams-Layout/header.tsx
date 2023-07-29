import { Link } from "react-router-dom";
import { Search } from "../Sections/search-bar/searchBar";
import { useState, useEffect } from "react";
import { DropdownLoggedOut } from "../Elements/dropped-down-logged-out";
// import { DropdownLoggedIn } from "../Elements/dropped-down-loggedin";
// import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header1() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // const handleLogout = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   event.preventDefault();
  //   localStorage.removeItem("token");
  //   navigate("/signin");
  // };
  return (
    <div className="sticky top-0 z-50">
      <nav className=" bg-amber-100 drop-shadow-lg border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://logopond.com/logos/5b75fcfdf7cd91f36c1007cecb83c855.png"
              className="h-12 mr-3"
              alt="Bazaar Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bazaar
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>

            <span
              onClick={() => setSearchSection(!searchSection)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {dropdown && <DropdownLoggedOut />}
            {/* <span>
              <button
                onClick={handleLogout}
                className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5   w-[24px] h-[24px] text-gray-800 dark:text-white"
              >
                <RiLogoutBoxRLine />
              </button>
            </span> */}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </div>
  );
}

export default Header1;
