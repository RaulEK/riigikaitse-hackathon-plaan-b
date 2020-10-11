import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {buttonStyle} from "../constans";
import Loader from "react-loader-spinner";
import idCardIcon from './Icons/IDCard.png';
import mobileIDIcon from './Icons/mobiiliID.png';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const QuestionForm = () => {
    let history = useHistory();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [spinnerController, setSpinnerController] = useState(1);

    if (spinnerController === 0) {
        setTimeout(() => {
            setSpinnerController(2)
        }, 1000)
        return (
            <div className="w-full flex justify-center mt-64 ">
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>
            </div>
        )
    }

    if (spinnerController === 2) {
        setTimeout(() => {
            setSpinnerController(1)
        }, 1000)
        return (
            <div className="w-full h-auto flex justify-center items-center flex-col">
                <div className="lg:w-1/2 w-full">
                    <h1 className="font-bold text-green-800 text-5xl p-8 mt-40 text-center">Autentimine õnnestus!</h1>
                </div>
            </div>
        )
    }

    const questions = {
        1: {
            question: "Peale mida tervisehäda tekkis?",
            answers: ["Rännakut", "Sporditegevust", "Muu"]
        },
        2: {
            question: "Mis tervisehäda on?",
            answers: ["Jalg valutab", "Jalal on villid", "Muu"]
        },
        3: {
            question: "Jalavalu on peale rännakut levinud ja tihti leebe probleem. Määri jalale kreemi. Kui valu muutub talumatuks või mitu päeva järjest, siis võta uuesti ühendust.",
            answers: ["Vigastus pole tõsine - lõpeta küsimustiku täitmine", "Vigastus vajab arsti abi - täida lisaküsimustik"]
        }
    }

    if (questionIndex === 0) {
        return (
            <div className="w-full h-auto flex justify-center items-center flex-col">
                <div className="w-1/2">
                    <h1 className="font-bold text-gray-800 text-3xl p-8 text-center">Vali autentimisviis.</h1>
                </div>
                <div className="w-full flex justify-center flex-col items-center">
                    <button style={{borderRadius: "25px", position: "relative"}} onClick={() => {
                        setQuestionIndex(questionIndex + 1);
                        setSpinnerController(0)
                    }}
                            className={buttonStyle}><img src={idCardIcon} alt="idCard" style={{fontSize: 40, position: "absolute", left: "60px", width: "80px"}}/><p>ID-kaart</p></button>
                    <button style={{borderRadius: "25px", position: "relative"}} onClick={() => {
                        setQuestionIndex(questionIndex + 1);
                        setSpinnerController(0)
                    }}
                            className={buttonStyle}><img src={mobileIDIcon} alt="idCard" style={{fontSize: 40, position: "absolute", left: "60px", width: "80px"}}/><p>Mobiil-ID</p></button>
                </div>
            </div>
        )
    }

    if (questionIndex === 3) {
        return (
            <div className="w-full h-auto flex justify-center items-center flex-col">
                <div className="w-1/2 bg-gray-400 rounded mt-5">
                    <h1 className="font-bold text-gray-800 text-3xl p-8 text-center"><i>Jalavalu</i> on
                        peale <i>rännakut</i> levinud ja tihti leebe probleem. Määri jalale kreemi. Kui valu muutub
                        talumatuks või mitu päeva järjest, siis võta uuesti ühendust.</h1>
                </div>
                <Link style={{borderRadius: "25px"}} className={buttonStyle} to="/"><p>Probleem pole tõsine - liigu
                    pealehele</p></Link>
                <Link style={{borderRadius: "25px"}} className={buttonStyle} to="/form"><p>Vajan arsti abi - broneeri
                    külastus</p></Link>
            </div>
        )
    }

    return (
        <div className="w-full h-auto flex justify-center items-center flex-col">
            <div className="w-1/2 text-center">
                <h1 className="font-bold text-gray-800 text-3xl p-8">{questions[questionIndex].question}</h1>
            </div>
            <div className="w-full flex justify-center flex-col items-center">
                <button style={{borderRadius: "25px", position: "relative"}}
                        onClick={() => setQuestionIndex(questionIndex + 1)}
                        className={buttonStyle}><p>{questions[questionIndex].answers[0]}</p></button>
                <button style={{borderRadius: "25px"}} onClick={() => setQuestionIndex(questionIndex + 1)}
                        className={buttonStyle}><p>{questions[questionIndex].answers[1]}</p></button>
                <button style={{borderRadius: "25px"}} onClick={() => history.push('/form')}
                        className={buttonStyle}><p>{questions[questionIndex].answers[2]}</p></button>
            </div>

        </div>
    )
}

export default QuestionForm;