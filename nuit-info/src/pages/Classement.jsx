import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './classement.scss'; // Assurez-vous d'importer votre fichier de styles

function Classement() {
  const location = useLocation();
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Extraire le score de l'URL lors du montage du composant
    const searchParams = new URLSearchParams(location.search);
    const scoreParam = searchParams.get('score');
    if (scoreParam) {
      setScore(parseInt(scoreParam, 10));
    }
  }, [location.search]);

  return (
    <div id="classement">
      <h1>Classement</h1>
      <div id="conteneur">
        <div id="containeurClassementPerso">
          <h2>Votre classement</h2>
          <p>Vous êtes 1er sur 1</p>
          {/* Ajouter le score en dessous de <h2>Votre classement</h2> */}
          <p>Votre score : {score}</p>
        </div>
        <div id='containeurClassementGeneral'>
          <h2>Classement général</h2>
          <div className="utilisateur">
            <p>1.</p>
            <p>Utilsateur 1</p>
            <p className='points'>1000</p>
          </div>
          <div className="utilisateur">
            <p>2.</p>
            <p>Utilsateur 2</p>
            <p className='points'>900</p>
          </div>
          <div className="utilisateur">
            <p>3.</p>
            <p>Utilsateur 3</p>
            <p className='points'>800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classement;
