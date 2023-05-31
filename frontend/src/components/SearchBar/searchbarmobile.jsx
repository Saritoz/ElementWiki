import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBarMobile = (props) => {
  const { elements, statuses } = props;
  const [currInput, setCurrInput] = useState("");

  const filteredElements = currInput
    ? elements?.filter((e) => e.includes(currInput.toLowerCase()))
    : null;
  const filteredStatuses = currInput
    ? statuses?.filter((s) => s.includes(currInput.toLowerCase()))
    : null;

  return (
    <>
      <input
        type="text"
        placeholder="Enter something"
        className="mx-2 block w-[200px] rounded-md py-[2px] px-2 focus:outline-none"
        onChange={(e) => setCurrInput(e.target.value)}
        value={currInput}
      />
      <div className="mx-2 mt-2 bg-blue-4 rounded">
        {filteredElements?.map((fe, index) => (
          <Link
            className="block p-2 text-white transition-colors duration-300 hover:bg-blue-2"
            key={fe + index}
            to={`/element/${fe}`}
            onClick={() => setCurrInput("")}
          >
            <p>{fe}</p>
            <p className="text-xs text-right">Element</p>
          </Link>
        ))}
        {filteredStatuses?.map((fs, index) => (
          <Link
            className="block p-2 text-white transition-colors duration-300 hover:bg-blue-2"
            key={fs + index}
            to={`/status/${fs}`}
            onClick={() => setCurrInput("")}
          >
            <p>{fs}</p>
            <p className="text-xs text-right">Status</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchBarMobile;
