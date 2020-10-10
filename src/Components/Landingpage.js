import React from 'react'
import {Link} from "react-router-dom";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';

const buttonStyle = "rounded bg-white w-1/3 h-32 m-8 flex justify-center items-center rounded shadow-lg hover:bg-gray-100 text-2xl lg:w-1/4";
const LandingPage = () => {

    return (
        <div className="w-full h-auto flex justify-center items-center flex-col">
            <h1 className="font-bold text-gray-800 text-3xl p-8">Tere tulemast Medkioski!</h1>
            <div className="w-full flex justify-center flex-col items-center">
                <Link style={{borderRadius: "25px", position:"relative"}} className={buttonStyle} to="/form"><EditOutlinedIcon style={{ fontSize: 40, position:"absolute", left:"30px"}}/><p>Loo taotlus</p></Link>
                <Link style={{borderRadius: "25px", position:"relative"}} className={buttonStyle} to="/kalender"><TodayOutlinedIcon style={{ fontSize: 40, position:"absolute", left:"30px"}}/><p>Vaata kalendrit</p></Link>
                <Link style={{borderRadius: "25px", position:"relative"}} className={buttonStyle} to="/arst"><PermContactCalendarOutlinedIcon style={{ fontSize: 40, position:"absolute", left:"30px"}}/><p>Tervisemurede raportid</p></Link>
            </div>
        </div>
    )
};

export default LandingPage;