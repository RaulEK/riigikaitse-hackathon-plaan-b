import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/index.scss';
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import moment from 'moment';
import {CONTENTSTYLE} from "../constans";

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
const flexboxContainerStyle = "flex pt-10 px-16 flex-col items-center content-center bg-white w-2/3 h-full m-auto rounded-lg shadow-xl";

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

        <div className={CONTENTSTYLE + "w-full h-full bg-gray-200 p-10"}>
            <div className={flexboxContainerStyle}>
                <div className="flex w-full">
                    <h1 className="text-2xl">Taotlus</h1>
                </div>
                <div className="mb-3 mt-3 w-full">
                    <TextField className={StyledTextField} onChange={(event) => setName(event.target.value)}
                               id="standard-basic" label="Nimi"
                               fullWidth
                               value={name} required/>
                </div>
                <div className="mb-3 mt-3 w-full">
                    <TextField onChange={(event) => setSymptoms(event.target.value)}
                               id="standard-basic" label="Mis on sümptomid?"
                               fullWidth multiline value={symptoms} rows={4} variant="outlined" required/>
                </div>
                <div className="mb-3 mt-3 w-full">
                    <TextField onChange={(event) => setDescription(event.target.value)}
                               id="standard-basic" label="Miks tervisehäda tekkis?" fullWidth
                               multiline value={description} rows={4} variant="outlined" required/>
                </div>

                <div className="flex justify-around w-full h-1/2 mt-12 items-start">
                    <div className="flex flex-col w-1/3">
                        <InputLabel>Millal tervisehäda tekkis?</InputLabel>
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
                        />
                        {showCalendar ?
                            <Calendar onChange={(date) => handleSkipDateSelection(date)} value={skipDate}
                                      locale="et-EE" maxDate={new Date()}/>
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
