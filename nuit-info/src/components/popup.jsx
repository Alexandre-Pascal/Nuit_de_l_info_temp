// components/Reponse.js

import React from 'react';

const PopUp = ({ reponse, onPasserQuestionSuivante }) => {
    return (
        <div className="popup">
            {reponse}

            <br />

            <button onClick={onPasserQuestionSuivante}>Passer à la question suivante</button>

        </div>
    );
}

export default PopUp;
