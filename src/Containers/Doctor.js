import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import DoctorSummary from "../Components/DoctorSummary";

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
];

const summaryElements = "w-1/4 text-center";
const displayButtonStyles = "text-xl py-1  border rounded bg-blue-400 text-white h-full w-32 display justify-center ml-4";

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
    const [expanded, setExpanded] = React.useState(null);
    const summary = calculateStatistics(mockData);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="lg:px-32 xl:px-64 flex justify-center px-8">
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
            {mockData.map((problem, idx) => {
                return (
                    <Accordion square expanded={expanded === idx} onChange={handleChange(idx)} key={problem.nimi}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <p className={summaryElements}>{problem.nimi}</p>
                            <p className={summaryElements}>{problem.sümptom}</p>
                            <p className={summaryElements}>3 päeva</p>
                            <p className={summaryElements}>{problem.prioriteediSoovitus}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                Sõduri kaebus:
                                {problem.põhjus}
                                <button>Kinnita</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
            </div>
        </div>
    );
}