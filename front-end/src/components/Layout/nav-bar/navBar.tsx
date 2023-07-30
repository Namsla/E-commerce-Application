import { Link } from "react-router-dom";
import { Search } from "../../Sections/search-bar/searchBar";
import { menuLinks } from "./navLinks";

function NavBar() {
  return (
    <>
      <div className="sticky top-0 z-50 shadow-xl mb-2 text-2xl grid grid-cols-9 gap-4 border-b-2 border-slate-900/25 bg-slate-100 backdrop-blur p-2">
        <div className="w-full col-span-4 p-2">
          <div className="grid grid-cols-7">
            <div className="col-span-1">Bazaar</div>
            <div className="col-span-6">
              <Search />
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex justify-end align-center mt-2 text-sm gap-2">
            {menuLinks.map((item) => (
              <div className="hover:bg-indigo-100 p-2 rounded-lg">
                <Link key={item.link} to={item.link}>
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
