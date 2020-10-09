import React from 'react'
import {Link} from "react-router-dom";

const buttonStyle = "rounded bg-green-200 w-1/4 h-32 m-8"
const LandingPage = () => {

    return (
        <div className="w-full h-full flex justify-center items-center">
            <button className={buttonStyle}>Lisa taotlus</button>
            <button className={buttonStyle}>Kalender</button>
            <button className={buttonStyle}><Link to="/arst">Arst</Link></button>
        </div>
    )
};

export default LandingPage;