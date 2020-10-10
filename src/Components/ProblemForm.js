import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/index.scss';
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";

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
const flexboxContainerStyle = "flex flex-col items-center content-center bg-grey-200 w-1/2 h-full m-auto";

const ProblemForm = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [description, setDescription] = useState("");
    const [skipDate, setSkipDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleSend = () => {
        console.log(name, symptoms, description, skipDate)
    }

    const handleSkipDateSelection = (selectedDate) => {
        setSkipDate(selectedDate);
        setShowCalendar(false);
    }

    return (
        <div className={backgroundStyle}>
            <div className={flexboxContainerStyle}>
                <h1 className="mt-10">Taotlus</h1>

                <TextField className={StyledTextField} onChange={(event) => setName(event.target.value)}
                           id="standard-basic" label="Nimi"
                           fullWidth
                           value={name}/>
                <TextField onChange={(event) => setSymptoms(event.target.value)}
                           id="standard-basic" label="Sümptomid"
                           fullWidth multiline value={symptoms}/>
                <TextField className="material-ui-textfield" onChange={(event) => setDescription(event.target.value)}
                           id="standard-basic"
                           label="Kirjeldus" fullWidth multiline value={description}/>

                <div className="flex justify-around w-full h-1/2 mt-20 items-start">
                    <div className="flex flex-col w-1/2">
                        <InputLabel>Vali ebasobiv kuupäev</InputLabel>
                        <TextField
                            onClick={() => setShowCalendar(!showCalendar)}
                            id="standard-read-only-input"
                            value={skipDate === null ? "valimata" : skipDate.toLocaleString().split(',')[0]}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        {showCalendar ? <Calendar onChange={(date) => handleSkipDateSelection(date)} value={skipDate} locale="ISO 3166"/>
                            : <button onClick={() => setSkipDate(null)}>Tühista valik</button>}
                    </div>

                    <Button onClick={() => handleSend()} variant="contained" color="primary" className="h-12">
                        Saada
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProblemForm;
