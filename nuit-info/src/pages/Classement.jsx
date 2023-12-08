import "./classement.scss";

function Classement() {
  return (
    <div id="classement">
      <h1>Classement</h1>
      <div id="conteneur">
        <div id="containeurClassementPerso">
          <h2>Votre classement</h2>
          <p>Vous êtes 1er sur 1</p>
        </div>
        <div id='containeurClassementGeneral'>
          <h2>Classement général</h2>
          <div className="utilisateur">
            <p>
                1.
            </p>
            <p>
              Utilsateur 1
            </p>
            <p class='points'>
              1000
            </p>
          </div>
          <div className="utilisateur">
          <p>
                2.
            </p>
            <p>
              Utilsateur 2
            </p>
            <p class='points'>
              900
            </p>
          </div>
          <div className="utilisateur">
          <p>
                3.
            </p>
            <p>
              Utilsateur 3
            </p>
            <p class='points'>
              800
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Classement;
