import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navi = () => {
  return (
    <>
    <div className='w-[100%] flex content-center justify-center '>
        <div className='flex font-bold min-w-[50%] flex-row gap-3 bg-white text-blue-500 justify-center mt-10'>
       <NavLink className={ ({isActive}) => isActive ? "text-indigo-500 drop-shadow-sm  transition ease-in-out duration-150" : "text-blue-500"} to="/" >Home</NavLink>
       <NavLink className={ ({isActive}) => isActive ? "text-indigo-500 drop-shadow-sm transition ease-in-out duration-150" : "text-blue-500"} to="/pastes">Pastes</NavLink>
       </div>
       </div>
       </>
)
}

export default Navi