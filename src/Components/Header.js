import React from 'react'
import {Link} from "react-router-dom";
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

const Header = () => {
    return (
        <div className="absolute top-0 h-24 w-full bg-blue-400 flex justify-between px-16 items-center shadow-xl"
             id="header">
            <Link to="/">
                <div className="flex items-center">
                    <LocalHospitalOutlinedIcon style={{color: "white", fontSize: 60}}/>
                    <h1 className="font-bold text-white text-5xl">MEDKIOSK</h1>
                </div>
            </Link>

            <Link className="font-bold text-white text-2xl hover:text-gray-300 underline" to="/">Tagasi
                pealehele </Link>
        </div>
    )
};

export default Header;