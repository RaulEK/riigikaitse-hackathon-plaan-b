import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const buttonStyle = "rounded bg-white w-1/4 h-32 m-8 flex justify-center items-center rounded shadow-lg hover:bg-gray-100 text-2xl";
const QuestionForm = () => {
    let history = useHistory();
    const [questionIndex, setQuestionIndex] = useState(0);

    const questions = {
        0: {
            question: "Peale mida tervisehäda tekkis?",
            answers: ["Rännakut", "Sporditegevust", "Muu"]
        },
        1: {
            question: "Mis tervisehäda on?",
            answers: ["Jalg valutab", "Jalal on villid", "Muu"]
        },
        2: {
            question: "Jalavalu on peale rännakut levinud ja tihti leebe probleem. Määri jalale kreemi. Kui valu muutub talumatuks või mitu päeva järjest, siis võta uuesti ühendust.",
            answers: ["Vigastus pole tõsine - lõpeta küsimustiku täitmine", "Vigastus vajab arsti abi - täida lisaküsimustik"]
        }
    }

    if (questionIndex === 2) {
        return (
            <div className="w-full h-auto flex justify-center items-center flex-col">
                <div className="w-1/2">
                    <h1 className="font-bold text-gray-800 text-3xl p-8 text-center"><i>Jalavalu</i> on peale <i>rännakut</i> levinud ja tihti leebe probleem. Määri jalale kreemi. Kui valu muutub talumatuks või mitu päeva järjest, siis võta uuesti ühendust.</h1>
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
                <button style={{borderRadius: "25px"}} onClick={() => setQuestionIndex(questionIndex + 1)}
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