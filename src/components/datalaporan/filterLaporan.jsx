import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterLaporan() {
  const [show, setShow] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  function handleFilterStatus(status) {
    console.log(status);
    searchParams.set("status", status);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col relative ">
      <button onClick={() => setShow(!show)} className="btn btn-sm">
        Status
      </button>
      {show && (
        <ul className="menu absolute top-10 bg-base-200 w-56 rounded-box">
          <li>
            <button onClick={() => handleFilterStatus("all")}>All</button>
          </li>
          <li>
            <button onClick={() => handleFilterStatus("true")}>verified</button>
          </li>
          <li>
            <button onClick={() => handleFilterStatus("false")}>
              unverified
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
