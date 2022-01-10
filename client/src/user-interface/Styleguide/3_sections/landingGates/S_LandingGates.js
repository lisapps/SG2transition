import React from 'react';
import { Link } from 'react-router-dom';

let imgGate1 = "https://www.kingstonloda.com/AssetLink/e4p66314085217ntj64clibosp4fld62.jpg"
let imgGate2 = "https://www.kingstonloda.com/AssetLink/m5j8r0c701r188imra223b2h3uegxx73.jpg"

const S_LandingGates = () => {
  return (
    <div className="s-landingGates l-row l-row--flush u-animated u-animated--delayFast u-animated--slowest a-fadeIn">
      <Link
        to="/brand/guidelines"
        className="s-landingGates__col l-row__col l-1/2 u-flex u-flex1 u-flexCenterAll"
        style={{backgroundImage: "url("+imgGate1+")", backgroundSize: "cover"}}>
          <h2 className="s-landingGates__col__title u-txt-black">Brand Guidelines</h2>
      </Link>
      <Link
        className="s-landingGates__col l-row__col l-1/2 u-flex u-flex1 u-flexCenterAll"
        style={{backgroundImage: "url("+imgGate2+")", backgroundSize: "cover"}}
        to="/web-ui">
        <h2 className="s-landingGates__col__title">Web Guidelines</h2>
      </Link>
    </div>
  );
};

export default S_LandingGates;
