import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { NavLink, useParams } from "react-router-dom";

const Vpaste = () => {
  const {id} =useParams()
  const allPastes= useSelector((state) => state.Paste.pastes)

  const paste = allPastes.filter((p) => p._id ===id)[0];
  console.log(paste);
  return (

    <div>
  
  <div>
    <h1 className="mt-4 font-extrabold text-blue-500 ">Just View Here</h1>
        <input
                  className="mt-4 mx-4 bg-slate-400 text-slate-900 placeholder-slate-700 p-1 rounded"

          type="text"
          placeholder="enter Title her"
          value={paste.title}
          readOnly
          onChange={(e) => setTitle(e.target.value)}
        />

     

        <div className="mt-4">
          <textarea
                      className="p-4 rounded placeholder-slate-700 bg-slate-400 resize-none min-w-[50%] text-slate-900"

            name=""
            id=""
            value={paste.content}
            placeholder="enter content here"
            readOnly
            onChange={(e) => setValue(e.target.value)}
            rows={10}
          ></textarea>
        </div>
      </div>
       

        
      </div>
  )
}

export default Vpaste