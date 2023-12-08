// Question.js
import React, { useState, useEffect } from 'react';
import test from '../jsons/questions.json';
import PopUp from './popup';

const Question = () => {
    const [valeurSlider, setValeurSlider] = useState();
    const [reponse, setReponse] = useState('');
    const [donnees, setDonnees] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (indexQuestion < test.questions.length) {
            // Utilisez l'importation directe du fichier JSON
            setDonnees(test.questions[indexQuestion]);
        } else {
            // Afficher un message de félicitations lorsque toutes les questions ont été répondues
            setDonnees(null);
            setShowPopUp(true);
        }
    }, [indexQuestion]);

    const handleSliderChange = (e) => {
        setValeurSlider(e.target.value);
    };

    const handleValidation = () => {
        if (valeurSlider >= donnees.valeurMinAcceptee && valeurSlider <= donnees.valeurMaxAcceptee) {
            // La réponse est correcte, incrémenter le score
            setScore(score + (donnees.type === "slider" ? 10 : 0));
            setReponse('');
            setShowPopUp(true);
        } else {
            // La réponse est incorrecte, décrémenter le score (jusqu'à un minimum de 0)
            setScore(Math.max(score - 1, 0));
            setReponse('Faux. La réponse doit être entre ' + donnees.valeurMinAcceptee + ' et ' + donnees.valeurMaxAcceptee + '.');
        }
    };

    const handlePasserQuestionSuivante = () => {
        // Passer à la question suivante en mettant à jour l'index
        setIndexQuestion(indexQuestion + 1);

        // Fermer la pop-up
        setShowPopUp(false);
    };

    const handleClosePopUp = () => {
        // Afficher le bouton "Passer à la question suivante" dans la pop-up
        setShowPopUp(true);
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
                            onClose={handleClosePopUp}
                        />
                    )}
                </div>
            ) : (
                <p>{indexQuestion === test.questions.length ? `Félicitations, vous avez terminé le questionnaire ! Votre score final est de ${score}.` : "Chargement des données..."}</p>
            )}
        </div>
    );
};

export default Question;
