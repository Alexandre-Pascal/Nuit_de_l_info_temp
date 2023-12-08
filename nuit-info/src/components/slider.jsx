// Question.js
import React, { useState, useEffect } from 'react';
import test from '../jsons/questions.json';

const Question = () => {
    const [valeurSlider, setValeurSlider] = useState();
    const [reponse, setReponse] = useState('');
    const [donnees, setDonnees] = useState(null);

    useEffect(() => {
        // Utilisez l'importation directe du fichier JSON
        setDonnees(test);
    }, []);

    const handleSliderChange = (e) => {
        setValeurSlider(e.target.value);
    };

    const handleValidation = () => {
        if (valeurSlider >= donnees.min && valeurSlider <= donnees.max) {
            setReponse('Bravo ! La réponse est correcte.');
        } else {
            setReponse('Faux. La réponse doit être entre ' + donnees.min + ' et ' + donnees.max + '.');
        }
    };

    return (
        <div className="question-container">
            {donnees ? (
                <div>
                    <p>{donnees.question}</p>
                    <input
                        type="range"
                        min="0"
                        max={donnees.max * 3}
                        step="10"
                        value={valeurSlider}
                        onChange={handleSliderChange}
                    />
                    <p>Valeur du curseur : {valeurSlider}</p>
                    <button onClick={handleValidation}>Valider</button>
                    <p>{reponse}</p>
                </div>
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    );
};

export default Question;
