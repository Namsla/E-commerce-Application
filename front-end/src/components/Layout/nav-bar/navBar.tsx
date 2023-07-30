import { Link } from "react-router-dom";
// import { DropdownLoggedOut } from "../../Elements/dropped-down-logged-out";
import { useState } from "react";
import { Dropdown } from "../../Elements/drop-down-no-token";
// import { Search } from "../../Sections/search-bar/searchBar";
// import { menuLinks } from "./navLinks";

function NavBar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <nav className=" bg-amber-100 drop-shadow-lg border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://logopond.com/logos/09aca1c77e9d1b111f9b08ea28a3fa9a.png"
              className="h-12 mr-3"
              alt="Bazaar Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bazaar
            </span>
          </Link>

          <div className="flex items-center relative">
            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {dropdown && <Dropdown />}
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
    </div>
  );
}

export default NavBar;
