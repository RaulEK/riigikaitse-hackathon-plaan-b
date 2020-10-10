import React from 'react'
import {Link} from "react-router-dom";

const buttonStyle = "rounded bg-green-200 w-1/4 h-32 m-8 flex justify-center items-center rounded shadow-lg";
const LandingPage = () => {

    return (
        <div className="w-full h-auto flex justify-center items-center flex-col">
            <h1>Tere tulemas Plan-B süsteemi!</h1>
            <div className="w-full flex justify-center flex-col items-center">
                <Link style={{borderRadius: "25px"}} className={buttonStyle} to="/form"><p>Sisesta avaldus</p></Link>
                <Link style={{borderRadius: "25px"}} className={buttonStyle} to="/kalender"><p>Vaata kalendrit</p></Link>
                <Link style={{borderRadius: "25px"}} className={buttonStyle} to="/arst"><p>Vaata kaebusi</p></Link>
            </div>
        </div>
    )
};

export default LandingPage;