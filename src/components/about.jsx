import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}

           
            <video className="img-responsive" autoPlay loop muted>
  <source src="img/gif.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

            {" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>À propos</h2>
              <h3>SAC-PACK votre partenaire D’emballage</h3>
              <p>En tant qu’atelier de fabrication spécialisé,
                Sac-Pack vous propose une large gamme de
                sacs en tissu personnalisables et réutilisables,
                au meilleur prix. Fabriqués avec soin, nos sacs
                protègent et valorisent vos produits tout en
                étant une solution d’emballage durable et
                élégante. Avec Sac-Pack, vos emballages
                deviennent un véritable atout marketing,
                conçu pour fidéliser vos clients et renforcer
                votre image de marque.</p>
              <h3>Pourquoi choisir Sac-Pack ?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
