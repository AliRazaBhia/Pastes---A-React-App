import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/PasteSlice";
import {format} from 'date-fns'
const HomePge = () => {
  let [title, setTitle] = useState("");
  let [value, setValue] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.Paste.pastes)
    useEffect(()=>{
        if(pasteId){
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title)
            setValue(paste.content)
        }
    },[pasteId])
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toLocaleString("en-US"),
    };



    if (pasteId) {
      dispatch(updateToPaste(paste));
    } else {
      dispatch(addToPaste(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }
  return (
    <>
      <div>
        <input
        
          className="mt-4 mx-4 bg-slate-400 text-slate-900 placeholder-slate-700 p-1 rounded"
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className= " mt-4 bg-blue-500 font-semibold p-1 rounded "onClick={createPaste}>
          {pasteId ? "update my paste" : "create my paste"}
        </button>

        <div className="mt-4 w-[100%] ">
          <textarea
          
            name=""
            id=""
            value={value}
            placeholder="Enter Content Here"
            onChange={(e) => setValue(e.target.value)}
            rows={10}
            className="p-4 rounded placeholder-slate-700 bg-slate-400 resize-none min-w-[50%] text-slate-900"
          ></textarea>

        </div>
      </div>
    </>
  );
};

export default HomePge;
