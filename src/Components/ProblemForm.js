import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const backgroundStyle = "m-auto bg-gray-300 h-full";
const flexboxContainerStyle = "flex flex-col items-center content-center bg-grey-200 w-1/2 m-auto";


const ProblemForm = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [description, setDescription] = useState("");

    const handleSend = () => {
        console.log(name, symptoms, description)
    }


    return (
        <div className={backgroundStyle}>
            <div className={flexboxContainerStyle}>
                <h1 className="mt-10">Taotlus</h1>

                <TextField onChange={(event) => setName(event.target.value)} id="standard-basic" label="Nimi" fullWidth
                           value={name}/>
                <TextField onChange={(event) => setSymptoms(event.target.value)} id="standard-basic" label="Sümptomid"
                           fullWidth multiline value={symptoms}/>
                <TextField onChange={(event) => setDescription(event.target.value)} id="standard-basic"
                           label="Kirjeldus" fullWidth multiline value={description}/>

                <div className="flex content-around justify-around w-full mt-20">
                    <div className="flex flex-col">
                        <h1>Ebasobiv aeg</h1>
                        <h2>calendar widget coming soon</h2>
                    </div>

                    <Button onClick={() => handleSend()} variant="contained" color="primary">
                        Saada
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProblemForm;
