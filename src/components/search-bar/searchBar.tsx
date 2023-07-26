// import TextField from "@mui/material/TextField";
import { BiSearchAlt2 } from "react-icons/bi";
function SearchBar() {
  return (
    <div className="flex items-center bg-blue-500 rounded-lg border-2 border-gray-300 hover:border-green-400/20 hover:bg-blue-600 drop-shadow-md">
      <input
        // value={task}
        // onChange={(event) => setTask(event.target.value)}
        className="px-2 h-10 w-full rounded-l-md text-gray-900 text-sm focus:outline-none"
        name="task"
        type="text"
        placeholder="Search..."
      />
      <div className="p-2 drop-shadow-lg">
        <BiSearchAlt2 />
      </div>
    </div>
  );
}

export default SearchBar;
