import React from "react";
import {Link} from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {COLORS, displayButtonStyles, PRIORITIES, summaryElements} from "../constans";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Popup from "reactjs-popup";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
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

const leftTextClasses = "text-gray-700 w-1/3 text-right pr-4";
const rightTextClasses = "text-black w-1/2";

const renderTimePicker = (classes) => {
    if (!classes) {
        return;
    }
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

const renderPriorityPicker = (classes, problem, handlePiroritySet) => {
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Muuda prioriteeti</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={PRIORITIES[problem]}
                    onChange={(event) => handlePiroritySet(event) }
                >
                    <MenuItem value={0}>{PRIORITIES[0]}</MenuItem>
                    <MenuItem value={1}>{PRIORITIES[1]}</MenuItem>
                    <MenuItem value={2}>{PRIORITIES[2]}</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

const RenderControlPanel = ({classes, problem, history, handleRefresh}) => {
    const [open, setOpen] = React.useState(false);
    const [customPriority, setCustomPriority] = React.useState(null);

    const handleClick = () => {
        console.log(customPriority,problem)
        const data = {
            ...problem,
            priorityPrediction: customPriority || problem.priorityPrediction,
            approvedPriorityPrediction: customPriority
        };
        axios.put('https://plaanb.azurewebsites.net/problem', data)
            .then(res => {
                setOpen(true);
                setTimeout(() => {
                    setOpen(false);
                    handleRefresh();
                },1500)
            }, (error) => {
                console.log(error);
                history.push('/')
            });

    };

    const handlePriorityChange = (event) => {
        setCustomPriority(event.target.value)
    }
    return (
        <div className="flex justify-between mt-8">
            <div className="ButtonController flex">
                <Popup contentStyle={{width: "400px", height: "100px", display: "flex", alignItems:"center", justifyContent:"center"}} modal trigger={<button
                    className="text-md lg:text-xl py-1 rounded bg-blue-400 text-white h-full w-24 lg:w-32 display justify-center shadow-lg hover:bg-blue-500">Vaata
                    digilugu
                </button>} position="right center">
                    <div>Digiloo avamine skoopi ei mahtunud!</div>
                </Popup>

                <button className={displayButtonStyles}><Link to="/kalender">Vaata
                    tunniplaan</Link></button>
            </div>
            <div className="flex">
                {renderTimePicker(classes)}
                {renderPriorityPicker(classes, problem, handlePriorityChange)}
            <div className="ButtonController">
                <button className={displayButtonStyles} onClick={handleClick}>Kinnita</button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    ContentProps={
                        classes= {
                            style: {background:"green"}
                    }
                    }
                    open={open}
                    autoHideDuration={0.9}
                    message="Kuulutus edukalt kinnitatud!"
                />
            </div>
            </div>
        </div>
    )
}


const AccordionWrapper = ({problem, idx, refreshData}) => {
    const [expanded, setExpanded] = React.useState(null);
    let history = useHistory();
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const classes = useStyles();
    return (
        <Accordion square expanded={expanded === idx} onChange={handleChange(idx)} key={problem.name}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon/>}>
                <p className={summaryElements}>{problem.name}</p>
                <p className={summaryElements}>{problem.symptoms}</p>
                <p className={summaryElements}>2 päeva</p>
                <p className={summaryElements}>{PRIORITIES[+problem.approvedPriorityPrediction !== -1 ? +problem.approvedPriorityPrediction : +problem.priorityPrediction]}</p>
                <div className="w-3 rounded" style={{backgroundColor: COLORS[+problem.approvedPriorityPrediction !== -1 ? +problem.approvedPriorityPrediction : +problem.priorityPrediction]}}/>
            </AccordionSummary>
            <AccordionDetails>
                <div className="w-full flex flex-col">
                    <div className="flex flex-col lg:flex-row items-center lg:items-baseline">
                        <div className="lg:w-1/3  w-4/5 flex justify-center flex-col border-t py-4">
                            <h1 className="font-bold">Andmed Raportist:</h1>
                            <div className="flex"><p className={leftTextClasses}>Sõdur:</p><p className={rightTextClasses}>{problem.name}</p></div>
                            <div className="flex"><p className={leftTextClasses}>Sümptomid::</p><p className={rightTextClasses}>{problem.symptoms}</p></div>
                            <div className="flex"><p className={leftTextClasses}>Sümptomi algus:</p><p className={rightTextClasses}>01/10/2020</p></div>
                            <div className="flex"><p className={leftTextClasses}>Lisamise aeg:</p><p className={rightTextClasses}>10/10/2020</p></div>
                        </div>
                        <div className="lg:w-1/3  w-4/5 flex justify-center flex-col border-t py-4">
                            <h1 className="font-bold">Andmed digiloost:</h1>
                            <div className="flex"><p className={leftTextClasses}>Vanus:</p><p className={rightTextClasses}>21</p></div>
                            <div className="flex"><p className={leftTextClasses}>Pikkus:</p><p className={rightTextClasses}>187cm</p></div>
                            <div className="flex"><p className={leftTextClasses}>Allergiad</p><p className={rightTextClasses}>H20, Pähklid, Loomad</p></div>
                            <div className="flex"><p className={leftTextClasses}>Operatsioonid</p><p className={rightTextClasses}>Mandlid eemaldatud, Pimesool eemaldatud</p></div>
                        </div>
                        <div className="lg:w-1/3  w-4/5 flex justify-center flex-col border-t py-4">
                            <h1 className="font-bold">Varasemad raportid:</h1>
                            <div className="flex"><p className={leftTextClasses}>01/02/2020</p><p className={rightTextClasses}>Vill tallal</p></div>
                            <div className="flex"><p className={leftTextClasses}>05/03/2020</p><p className={rightTextClasses}>Tald mädaneb</p></div>
                        </div>
                    </div>
                    <div className="border-t"><p>Kaebuse kirjeldus:</p><p>{problem.reason}</p></div>
                    <RenderControlPanel classes={classes} problem={problem} history={history} handleRefresh={refreshData}/>
                </div>
            </AccordionDetails>
        </Accordion>
    )
};

export default AccordionWrapper;