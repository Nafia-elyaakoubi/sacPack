import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    // </div> changed from <div id="portfolio" className="text-center">
    <div id="portfolio" className="text-center"> 
      <div className="container">
        <div className="section-title">
          <h2>Catalogue</h2>
          <p>
          Un Large Choix de Sacs pour
          Chaque Besoin.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"

                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
