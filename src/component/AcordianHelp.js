import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function AcordianHelp({ id, title, ans }) {
  const [show, setShow] = useState(false);

  return (
    <article
      key={id}
      className="bg-white border-gray-200 border-2 rounded mb-8 shadow-lg "
    >
      <header className="flex justify-between items-center gap-4">
        <h2 className="font-medium leading-6 py-3 px-2 text-gray-500">{title}</h2>
        <button onClick={() => setShow(!show)}>
          {show ? (
            <KeyboardArrowUpIcon color="action" fontSize="large" />
          ) : (
            <KeyboardArrowDownIcon color="action" fontSize="large" />
          )}
        </button>
      </header>
      {show ? (
        <p className="leading-7 mt-4 p-1 text-gray-500 text-justify">{ans}</p>
      ) : null}
    </article>
  );
}

export default AcordianHelp;
