// Question.js
import React, { useState, useEffect } from 'react';
import test from '../jsons/questions.json';
import PopUp from './popup';

const Question = () => {
    const [valeurSlider, setValeurSlider] = useState();
    const [reponse, setReponse] = useState('');
    const [donnees, setDonnees] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        // Utilisez l'importation directe du fichier JSON
        setDonnees(test);
    }, []);

    const handleSliderChange = (e) => {
        setValeurSlider(e.target.value);
    };

    const handleValidation = () => {
        if (valeurSlider >= donnees.valeurMinAcceptee && valeurSlider <= donnees.valeurMaxAcceptee) {
            // Afficher le PopUp avec la réponse correcte
            setReponse('');
            setShowPopUp(true);
        } else {
            setReponse('Faux. La réponse doit être entre ' + donnees.valeurMinAcceptee + ' et ' + donnees.valeurMaxAcceptee + '.');
        }
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
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
                        <PopUp reponse={donnees.description} onClose={handleClosePopUp} />
                    )}
                </div>
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    );
};

export default Question;
