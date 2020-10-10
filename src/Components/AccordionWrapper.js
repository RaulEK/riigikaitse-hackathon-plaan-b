import React from "react";
import {Link} from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {displayButtonStyles, PRIORITIES, summaryElements} from "../constans";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const leftTextClasses = "text-gray-700 w-1/3 text-right pr-4";
const rightTextClasses = "text-black w-1/2";

const renderTimePicker = (classes) => {
    if (!classes) { return; }
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Eeldatav kestvus</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                >
                    <MenuItem value={15}>15 min</MenuItem>
                    <MenuItem value={30}>30 min</MenuItem>
                    <MenuItem value={45}>45 min</MenuItem>
                    <MenuItem value={60}>60 min</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

const renderPriorityPicker = (classes, problem) => {
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Muuda prioriteeti</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={PRIORITIES[problem]}
                >
                    <MenuItem value={0}>{PRIORITIES[0]}</MenuItem>
                    <MenuItem value={1}>{PRIORITIES[1]}</MenuItem>
                    <MenuItem value={2}>{PRIORITIES[2]}</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

const renderControlPanel = (classes, problem) => {
    return (
        <div className="flex justify-between mt-8">
            <div className="ButtonController flex">
                <button className="text-md lg:text-xl py-1 rounded bg-blue-400 text-white h-full w-24 lg:w-32 display justify-center shadow-lg hover:bg-blue-500">Vaata digilugu</button>
                <button className={displayButtonStyles}><Link to="/kalender">Vaata tunniplaan</Link></button>
            </div>
            <div className="flex">
            { renderTimePicker(classes) }
            { renderPriorityPicker(classes, problem)}

            <div className="ButtonController">
                <button className={displayButtonStyles}>Kinnita</button>
            </div>
            </div>
        </div>
    )
}


const AccordionWrapper = ({problem, idx}) => {
    const [expanded, setExpanded] = React.useState(null);
    const [dataDisplay, setDataDisplay] = React.useState(0)
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const classes = useStyles();
    return (
        <Accordion square expanded={expanded === idx} onChange={handleChange(idx)} key={problem.nimi}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon/>}>
                <p className={summaryElements}>{problem.nimi}</p>
                <p className={summaryElements}>{problem.sümptom}</p>
                <p className={summaryElements}>3 päeva</p>
                <p className={summaryElements}>{PRIORITIES[+problem.prioriteediSoovitus]}</p>
            </AccordionSummary>
            <AccordionDetails>
                <div className="w-full flex flex-col">
                    <div className="flex flex-col lg:flex-row items-center lg:items-baseline">
                        <div className="lg:w-1/3  w-4/5 flex justify-center flex-col border-t py-4">
                            <h1 className="font-bold">Andmed Raportist:</h1>
                            <div className="flex"><p className={leftTextClasses}>Sõdur:</p><p className={rightTextClasses}>{problem.nimi}</p></div>
                            <div className="flex"><p className={leftTextClasses}>Sümptomid::</p><p className={rightTextClasses}>{problem.sümptom}</p></div>
                            <div className="flex"><p className={leftTextClasses}>Sümptomi algus:</p><p className={rightTextClasses}>{problem.nimi}</p></div>
                            <div className="flex"><p className={leftTextClasses}>Lisamise aeg:</p><p className={rightTextClasses}>{problem.nimi}</p></div>
                        </div>
                        <div className="lg:w-1/3  w-4/5 flex justify-center flex-col border-t py-4">
                            <h1 className="font-bold">Andmed digiloost:</h1>
                            <div className="flex"><p className={leftTextClasses}>Sõdur:</p><p className={rightTextClasses}>{problem.nimi}</p></div>
                            <div className="flex"><p className={leftTextClasses}>Sümptomid::</p><p className={rightTextClasses}>{problem.sümptom}</p></div>
                            <div className="flex"><p className={leftTextClasses}>Sümptomi algus:</p><p className={rightTextClasses}>{problem.nimi}</p></div>
                            <div className="flex"><p className={leftTextClasses}>Lisamise aeg:</p><p className={rightTextClasses}>{problem.nimi}</p></div>
                        </div>
                        <div className="lg:w-1/3  w-4/5 flex justify-center flex-col border-t py-4">
                            <h1 className="font-bold">Varasemad raportid:</h1>
                            <div className="flex"><p className={leftTextClasses}>01/02/2020</p><p className={rightTextClasses}>Vill tallal</p></div>
                            <div className="flex"><p className={leftTextClasses}>05/03/2020</p><p className={rightTextClasses}>Tald mädaneb</p></div>
                        </div>
                    </div>
                    <div className="border-t"><p>Kaebuse kirjeldus:</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                    { renderControlPanel(classes, problem) }
                </div>
            </AccordionDetails>
        </Accordion>
    )
};

export default AccordionWrapper;