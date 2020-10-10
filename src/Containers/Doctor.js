import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import DoctorSummary from "../Components/DoctorSummary";
import {CONTENTSTYLE, displayButtonStyles, summaryElements} from "../constans";
import AccordionWrapper from "../Components/AccordionWrapper";

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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));


const summaryElements = "w-1/4 text-center";
const displayButtonStyles = "text-xl py-1 rounded bg-blue-400 text-white h-full w-32 display justify-center ml-4 shadow-lg hover:bg-blue-500";

const calculateStatistics = (data) => {
    let result = {};
    let total = 0;
    data.forEach(problem => {
        const problemKey = problem.prioriteediSoovitus;
        const resultEntry = result[problemKey];
        total += 1;
        result[problemKey] = resultEntry ? resultEntry + 1 : 1;
    });
    result[Object.keys(result).length] = total
    return result;

};

export default function CustomizedAccordions() {
    const summary = calculateStatistics(mockData);


    return (
        <div className={ CONTENTSTYLE }>
            <div className="w-4/5 md:w-full">
                <div className="controls w-full h-14 mb-8 flex justify-between">
                    <DoctorSummary summary={summary}/>
                    <div className="ButtonController">
                        <button className={displayButtonStyles}>Uued</button>
                        <button className={displayButtonStyles}>Vaadatud</button>
                    </div>
                </div>
                <Accordion>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <div className="flex w-full">
                            <p className={summaryElements}>Nimi</p>
                            <p className={summaryElements}>Sümptom</p>
                            <p className={summaryElements}>Esitamisest möödas</p>
                            <p className={summaryElements}>Prioriteet</p>
                        </div>
                    </AccordionSummary>
                </Accordion>
                <div className="shadow-md">
                    {mockData.map((problem, idx) => {
                        return (
                            <AccordionWrapper problem={problem} idx={idx}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}