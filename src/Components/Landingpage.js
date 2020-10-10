import React from 'react'
import {Link} from "react-router-dom";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import Events from "./Events";

const buttonStyle = "rounded bg-white w-1/2 h-32 m-8 flex justify-center items-center rounded shadow-lg hover:bg-gray-100 text-2xl lg:w-1/4";
const mockEvent = {
    'title': 'Õppus',
    'start': new Date(2020, 9, 12, 15, 0, 0),
    'end': new Date(2020, 9, 12, 17, 0, 0)
};
const LandingPage = () => {

    return (
        <div className="w-full h-auto flex justify-center items-center flex-col">
            <h1 className="font-bold text-gray-800 text-3xl p-8">Tere tulemast Medkioski!</h1>
            <div className="w-full flex justify-center flex-col items-center">
                <Link style={{borderRadius: "25px", position: "relative"}} className={buttonStyle}
                      to="/question"><EditOutlinedIcon style={{fontSize: 40, position: "absolute", left: "30px"}}/>
                    <p>Loo taotlus</p></Link>
                <Link style={{borderRadius: "25px", position: "relative"}} className={buttonStyle}
                      to="/kalender"><TodayOutlinedIcon style={{fontSize: 40, position: "absolute", left: "30px"}}/>
                    <p>Vaata kalendrit</p></Link>
                <Link style={{borderRadius: "25px", position: "relative"}} className={buttonStyle}
                      to="/arst"><PermContactCalendarOutlinedIcon
                    style={{fontSize: 40, position: "absolute", left: "30px"}}/><p>Tervisemurede raportid</p></Link>
            </div>
        </div>
    )
};

export default LandingPage;