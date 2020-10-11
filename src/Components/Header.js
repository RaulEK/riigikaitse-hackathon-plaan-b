import React from 'react'
import {Link} from "react-router-dom";
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import {useLocation} from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    return (
        <div className="absolute top-0 h-24 w-full bg-black-400 flex justify-between px-16 items-center shadow-xl"
             id="header">
            <Link to="/">
                <div className="flex items-center">
                    <LocalHospitalOutlinedIcon style={{color: "white", fontSize: 60}}/>
                    <h1 className="font-bold text-white text-5xl pr-10 ">MEDKIOSK</h1>
                    {location.pathname === "/arst" && <p className="font-bold text-white text-2xl bg-pink-500 rounded p-3"> Arsti vaade </p>}
                </div>
            </Link>
            {location.pathname !== "/" && <Link className="font-bold text-white text-2xl hover:text-gray-300 underline" to="/">Tagasi
                pealehele </Link>}
        </div>
    )
};

export default Header;