// components/Reponse.js

import React from 'react';

const PopUp = ({ reponse, onClose }) => {
    return (
        <div className="popup">
            {reponse}

            <br />

            <button onClick={onClose}>Fermer</button>
        </div>
    );
}

export default PopUp;
