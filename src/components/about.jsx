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
              <h3>Sac en tissu :</h3>
              <p>Chez Sac-Pack, nous sommes spécialisés dans la création de sacs en tissu avec fermeture à cordon, conçus pour offrir à vos produits une protection optimale tout en ajoutant une touche d'élégance. Notre mission est d'offrir aux commerçants de chaussures une solution d'emballage réutilisable, personnalisable, et idéale pour fidéliser les clients.</p>
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
