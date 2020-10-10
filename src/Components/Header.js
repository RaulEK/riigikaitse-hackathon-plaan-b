import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  return (
      <div className="absolute top-0 h-24 w-full bg-blue-400 flex justify-between px-16 items-center">
        <h1 className="font-bold text-white text-5xl">Plan-B</h1>
        <Link className="font-bold text-white text-3xl" to="/">Tagasi</Link>
      </div>
  )
};

export default Header;