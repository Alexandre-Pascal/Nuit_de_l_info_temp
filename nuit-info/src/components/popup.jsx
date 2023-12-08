// components/Reponse.js

import React from 'react';

const PopUp = ({ reponse, onPasserQuestionSuivante, onClose }) => {
    return (
        <div className="popup">
            {reponse}

            <br />

            {onPasserQuestionSuivante ? (
                <button onClick={onPasserQuestionSuivante}>Passer à la question suivante</button>
            ) : (
                <button onClick={onClose}>Fermer</button>
            )}
        </div>
    );
}

export default PopUp;
