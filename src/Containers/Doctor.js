import React, {useEffect, useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import DoctorSummary from "../Components/DoctorSummary";
import {CONTENTSTYLE, displayButtonStyles, summaryElements} from "../constans";
import AccordionWrapper from "../Components/AccordionWrapper";
import axios from 'axios';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const mockData = [
    {
        nimi: "Mart Mets",
        sümptom: "Peavalu",
        põhjus: "Kukkusin pea ees vastu betooni",
        prioriteediSoovitus: "2"
    },
    {
        nimi: "Madis Malev",
        sümptom: "Kopsud valutavad",
        põhjus: "Peale viimast rännakut külmetasin",
        prioriteediSoovitus: "1",
    },
    {
        nimi: "Toomas Sõdur",
        sümptom: "Väike haav",
        põhjus: "Kriimustasin ja sooviksin plaastrit",
        prioriteediSoovitus: "0"
    }
]

const calculateStatistics = (data) => {
    let result = {};
    let total = 0;
    data.forEach(problem => {
        const problemKey = problem.approvedPriorityPrediction !== -1 ? problem.approvedPriorityPrediction : problem.priorityPrediction;
        const resultEntry = result[problemKey];
        total += 1;
        result[problemKey] = resultEntry ? resultEntry + 1 : 1;
    });
    result[3] = total
    return result;

};

export default function CustomizedAccordions() {
    const [problemData, setProblemData] = useState(null);
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        axios.get('https://plaanb.azurewebsites.net/problems').then(res => {
            const response = res.data;
            if (response.length > 0) {
                setTimeout(() => {
                    setProblemData(response)
                    setShowData(response.filter(problem => problem.approvedPriorityPrediction === -1))
                }, 1000)
            }
        }).catch((err) => console.log(err))

    },[]);

    // this is the point where we should consider using redux strore
    const handleRefetch = () => {
        axios.get('https://plaanb.azurewebsites.net/problems').then(res => {
            const response = res.data;
            setProblemData(response)
            setShowData(response.filter(problem => problem.approvedPriorityPrediction === -1))
        }).catch((err) => console.log(err));
    };

    if(!problemData || !showData) { return (
        <div className="w-full flex justify-center mt-64 ">
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>
        </div>
    ) }

    const summary = calculateStatistics(showData);
    return (
        <div className={ CONTENTSTYLE }>
            <div className="w-4/5 md:w-full">
                <div className="controls w-full h-14 mb-8 flex justify-between">
                    <DoctorSummary summary={summary}/>
                    <div className="ButtonController">
                        <button onClick={() => setShowData(problemData.filter(problem => problem.approvedPriorityPrediction === -1))} className={displayButtonStyles}>Uued</button>
                        <button onClick={() => setShowData(problemData.filter(problem => problem.approvedPriorityPrediction !== -1))} className={displayButtonStyles}>Vaadatud</button>
                    </div>
                </div>
                <Accordion>
                    <AccordionSummary style={{backgroundColor: "rgb(142 200 243)", fontWeight: "bold"}}
                                      aria-controls="panel1d-content" id="panel1d-header">
                        <div className="flex w-full" style={{paddingRight: "48px"}}>
                            <p className={summaryElements}>Nimi</p>
                            <p className={summaryElements}>Sümptom</p>
                            <p className={summaryElements}>Esitamisest möödas</p>
                            <p className={summaryElements}>Prioriteet</p>
                        </div>
                    </AccordionSummary>
                </Accordion>
                <div className="shadow-md">
                    {showData.map((problem, idx) => {
                        return (
                            <AccordionWrapper problem={problem} idx={idx} refreshData={handleRefetch}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}