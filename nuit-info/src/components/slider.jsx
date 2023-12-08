import React, { useState, useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
import test from '../jsons/questions.json';
import PopUp from './popup';

const Question = () => {
    const [valeurSlider, setValeurSlider] = useState();
    const [reponse, setReponse] = useState('');
    const [donnees, setDonnees] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        if (indexQuestion < test.questions.length) {
            setDonnees(test.questions[indexQuestion]);
        } else {
            setDonnees(null);
            setShowPopUp(true);
        }
    }, [indexQuestion]);

    const handleSliderChange = (e) => {
        setValeurSlider(e.target.value);
    };

    const handleValidation = () => {
        if (valeurSlider >= donnees.valeurMinAcceptee && valeurSlider <= donnees.valeurMaxAcceptee) {
            setScore(score + (donnees.type === "slider" ? 10 : 0));
            setReponse('');
            setShowPopUp(true);
        } else {
            setScore(Math.max(score - 1, 0));
            setReponse('Faux. La réponse doit être entre ' + donnees.valeurMinAcceptee + ' et ' + donnees.valeurMaxAcceptee + '.');
        }
    };

    const handlePasserQuestionSuivante = () => {
        if (indexQuestion + 1 < test.questions.length) {
            setIndexQuestion(indexQuestion + 1);
            setShowPopUp(false);
        } else {
            // Redirection vers /classement avec le score en paramètre
            navigate(`/classement?score=${score}`);
            setShowPopUp(false);
        }
    };

    return (
        <div className="question-container">
            {donnees ? (
                <div>
                    <p>{donnees.question}</p>
                    {donnees.type === "slider" && (
                        <>
                            <input
                                type="range"
                                min={donnees.min}
                                max={donnees.max}
                                step={donnees.step}
                                value={valeurSlider}
                                onChange={handleSliderChange}
                            />
                            <p>Valeur du curseur : {valeurSlider}</p>
                        </>
                    )}
                    <button onClick={handleValidation}>Valider</button>
                    <p>{reponse}</p>
                    <p>Score actuel : {score}</p>
                    {showPopUp && (
                        <PopUp
                            reponse={donnees.description}
                            onPasserQuestionSuivante={handlePasserQuestionSuivante}
                        />
                    )}
                </div>
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    );
};

export default Question;
