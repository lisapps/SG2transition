import React from "react";

let imgBg = "https://www.kingstonloda.com/AssetLink/678120208534p2603887334f0e3a1101.png";

const Overview = () => {
  return (
    <>
      <div className="s-content" style={{flex:"0"}}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Photography Overview</h2>
              <p style={{lineHeight: 1.75}}>
                <strong>Capture stories about people’s lives.</strong>
                <br/>
                <strong>Considered compositions. </strong>
                <br/>
                <strong>Spontaneous moments.</strong>
                <br/>
                <strong>Energizing subject matter. </strong>
                <br/>
                <strong>Confident, cool and candid.</strong>
                <br/>
                <strong>Current and authentic.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content u-p0" style={{ flex: "1", position: "relative", display: "flex"}}>
        <div
          className="u-animated u-animated--slow a-fadeIn u-m0"
          style={{
            width: "100%",
            height: "auto",
            minHeight: "500px",
            background: `url('${imgBg}') repeat-x`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
};

export default Overview;
