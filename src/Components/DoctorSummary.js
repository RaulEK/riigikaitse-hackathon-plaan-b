import React from 'react';
import {PRIORITIES} from "../constans";

const DoctorSummary = ({summary}) => {
    return (
        <div style={{borderRadius: "25px"}} className="w-4/6 lg:w-2/5 h-full rounded px-8 py-1 flex justify-around text-center bg-white shadow-md">
            {Object.keys(summary).map(keys => {
                return (
                    <div key={keys} className="flex flex-col justify-center h-full">
                        <p className="text-lg font-bold">{summary[keys]}</p>
                        <p className="text-md text-gray-600">{ PRIORITIES[+keys] }</p>
                    </div>
                )
            }) }
        </div>
    )
};

export default DoctorSummary;