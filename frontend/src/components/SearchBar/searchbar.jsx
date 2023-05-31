import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const [currInput, setCurrInput] = useState("");
  const {elements, statuses} = props;

  const filteredElements = currInput
    ? elements?.filter((e) => e.includes(currInput.toLowerCase()))
    : null;
  const filteredStatuses = currInput
    ? statuses?.filter((s) => s.includes(currInput.toLowerCase()))
    : null;
  return (
    <div className="relative hidden text-gray-600 focus-within:text-gray-400 md:block">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        className="rounded-full bg-white py-2 pl-10 pr-2 text-sm focus:bg-white focus:outline-none md:w-[105px] lg:w-[220px]"
        type="search"
        name="search"
        placeholder="Search"
        autoComplete="off"
        onChange={(e) => setCurrInput(e.target.value)}
        value={currInput}
      />
      <div className="absolute top-[125%] right-0 w-[220px] rounded border-[1px] border-blue-3 bg-white">
        {filteredElements?.map((fe, index) => (
          <div
            key={fe + index}
            className="p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-blue-1 hover:text-white"
          >
            <Link to={`/element/${fe}`} onClick={() => setCurrInput("")}>
              <p>{fe}</p>
              <p className="text-right">Element</p>
            </Link>
          </div>
        ))}
        {filteredStatuses?.map((fs, index) => (
          <div
            key={fs + index}
            className="p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-blue-1 hover:text-white"
          >
            <Link to={`/status/${fs}`} onClick={() => setCurrInput("")}>
              <p>{fs}</p>
              <p className="text-right">Status</p>
            </Link>
          </div>
        ))}
        {filteredElements?.length === 0 && filteredStatuses?.length === 0 && (
          <div
            className="p-2 transition-colors duration-300 hover:cursor-pointer hover:bg-blue-1 hover:text-white"
            onClick={() => setCurrInput("")}
          >
            No data
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
