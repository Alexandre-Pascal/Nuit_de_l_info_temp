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
            // Afficher le PopUp avec la réponse correcte et le bouton pour passer à la question suivante
            setReponse('');
            setShowPopUp(true);
        } else {
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
                    <input
                        type="range"
                        min={donnees.min}
                        max={donnees.max}
                        step={donnees.step}
                        value={valeurSlider}
                        onChange={handleSliderChange}
                    />
                    <p>Valeur du curseur : {valeurSlider}</p>
                    <button onClick={handleValidation}>Valider</button>
                    <p>{reponse}</p>
                    {showPopUp && (
                        <PopUp
                            reponse={donnees.description}
                            onPasserQuestionSuivante={handlePasserQuestionSuivante}
                            onClose={handleClosePopUp}
                        />
                    )}
                </div>
            ) : (
                <p>{indexQuestion === test.questions.length ? "Félicitations, vous avez terminé le questionnaire !" : "Chargement des données..."}</p>
            )}
        </div>
    );
};

export default Question;
