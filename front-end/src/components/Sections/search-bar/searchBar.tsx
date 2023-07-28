import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../../Nams-Layout/header";
import { ScrollToTop } from "../../Others/scroll-to-top";
import Footer1 from "../../Nams-Layout/footer";

export const Search = ({ setSearchSection }) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    navigate(`/products?q=${searchRef.current.value}`);
  };

  return (
    <>
      <ScrollToTop />
      <Header1 />
      <main>
        <div className="mx-auto max-w-screen-xl p-2 my-5">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative w-full">
              <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
              <input
                ref={searchRef}
                name="search"
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                autoComplete="off"
                required=""
              />
            </div>
            <Link to="./searchresult">
              <button
                onClick={handleSearch}
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mr-2 mb-2"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </main>

      <Footer1 />
    </>
  );
};
