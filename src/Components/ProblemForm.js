import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/index.scss';
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import moment from 'moment';
import {CONTENTSTYLE} from "../constans";
import axios from "axios";
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const StyledTextField = withStyles({
    root: {
        backgroundColor: 'red'
    },
})(TextField);

const backgroundStyle = "m-auto bg-gray-300 h-full";
const flexboxContainerStyle = "flex pt-10 px-16 flex-col items-center content-center bg-white w-full lg:w-2/3 h-full m-auto rounded-lg shadow-xl";

const ProblemForm = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [description, setDescription] = useState("");
    const [skipDate, setSkipDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleSend = () => {

        if (skipDate === null) {
            return;
        }

        const data = {
            createdTimeStamp: skipDate.getTime() / 1000,
            symptoms: symptoms,
            reason: description,
            name: name
        }
        axios.post('https://plaanb.azurewebsites.net/problem', data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }, (error) => {
                console.log(error);
            });
    }

    const handleSkipDateSelection = (selectedDate) => {
        setSkipDate(selectedDate);
        setShowCalendar(false);
    }
    //<InputLabel>Millal tervisehäda tekkis?</InputLabel>
    return (

        <div className={CONTENTSTYLE + "w-full h-full bg-gray-200 p-10"}>
            <div className={flexboxContainerStyle} style={{position: "relative"}}>
                <div className="flex w-full">
                    <h1 className="text-2xl">Arstivisiidi taotlus</h1>
                </div>
                <div className="mb-3 mt-3 w-full">
                    <TextField className={StyledTextField} onChange={(event) => setName(event.target.value)}
                               id="standard-basic" label="Nimi"
                               fullWidth
                               value={name} required
                               inputProps={{style: {fontSize: 20}}}/>
                </div>
                <div className="mb-3 mt-3 w-full">
                    <TextField onChange={(event) => setSymptoms(event.target.value)}
                               id="standard-basic" label="Mis on sümptomid?"
                               fullWidth multiline value={symptoms} rows={4} variant="outlined" required
                               inputProps={{style: {fontSize: 20}}}/>
                </div>
                <div className="mb-3 mt-3 w-full">
                    <TextField onChange={(event) => setDescription(event.target.value)}
                               id="standard-basic" label="Miks tervisehäda tekkis?" fullWidth
                               multiline value={description} rows={4} variant="outlined" required
                               inputProps={{style: {fontSize: 20}}}/>
                </div>
                <div className="flex justify-start w-full h-1/2 mt-4 items-start">
                    <p>Millal tervisehäda tekkis?</p>
                </div>
                <div className="flex justify-between w-full h-1/2 mt-4 items-start">
                    <div className="flex flex-col w-2/5 lg:w-1/3" style={{position: "relative"}}>

                        <TextField
                            required
                            onClick={() => setShowCalendar(!showCalendar)}
                            id="standard-read-only-input"
                            value={skipDate === null ? "" : moment(skipDate).format("DD/MM/YYYY")}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            size="small"
                        >
                        </TextField>
                        <PermContactCalendarOutlinedIcon
                            style={{fontSize: 40, position: "absolute", right: "5px"}}/>
                        {showCalendar ?
                            <Calendar onChange={(date) => handleSkipDateSelection(date)} value={skipDate}
                                      locale="et-EE" maxDate={new Date()}/>
                            : <button onClick={() => setSkipDate(null)}>Tühista valik</button>}
                    </div>

                    <button onClick={() => handleSend()}
                            className="text-md lg:text-xl py-1 rounded bg-blue-400 text-white h-2/3 w-40 lg:w-26 display justify-center ml-4 shadow-lg hover:bg-blue-500">
                        Saada
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProblemForm;
