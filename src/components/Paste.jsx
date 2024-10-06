import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.Paste.pastes);
  const [searchTerm, useSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removePastes(pasteId));
  }

  return (
    <div>
      <input
        className="mt-4 py-1.5 p-2 placeholder-slate-700  rounded text-black"
        type="search"
        placeholder="Search By Title Here"
        value={searchTerm}
        onChange={(e) => useSearchTerm(e.target.value)}
      />
      <div className=" flex w-full justify-center">
        <div className="flex flex-col min-w-[70%] gap-3 my-4 ">
          {filterData.length > 0 &&
            filterData.map((pastes) => {
              return (
                <div
                  key={pastes?._id}
                  className="border-2 w-full p-4 bg-gray-800 border-gray-400 rounded "
                >
                  <div className={pastes.title ? "font-bold text-blue-200" : "text-red-600 font-bold"}>{pastes.title ? pastes.title : "no title added"}</div>
                  <div
                    className={
                      pastes.content
                        ? "text-white whitespace-nowrap overflow-hidden text-ellipsis px-3 my-4"
                        : "text-red-500 "
                    }
                  >
                    {pastes.content ? pastes.content : "no content added"}
                  </div>
                  <div className="sm:flex sm:flex-row sm:gap-4 sm:w-full sm:justify-center sm:content-center gap-4 flex mx-2 flex-col">
                    
                    <button className="bg-blue-500 py-1 px-2 rounded" >
                      <NavLink to={`/?pasteId=${pastes?._id}`}>Edit</NavLink>
                    </button>
                    <button
                    className="bg-blue-500 py-1 px-2 rounded"
                      onClick={() => {
                        handleCopy(
                          navigator.clipboard.writeText(pastes?.content)
                        );
                        toast.success("copied to clipboard");
                      }}
                    >
                      Copy
                    </button>
                    <button className="bg-blue-500 py-1 px-2 rounded" >
                      <NavLink to={`/pastes/${pastes?._id}`}>View</NavLink>
                    </button>
                    <button className="bg-blue-500 py-1 px-2 rounded"  onClick={() => handleDelete(pastes?._id)}>
                      Delete
                    </button>
                  </div>
                  <div className="mt-4">{pastes.createdAt}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Paste;
