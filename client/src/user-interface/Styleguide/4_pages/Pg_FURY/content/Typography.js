import React from "react";

const Typography = () => {
  let imgMyriadPro = "https://www.kingstonloda.com/AssetLink/x8voh2i66h8oh8x6reqi7sii32i43hsv.svg";
  let imgSol = "https://www.kingstonloda.com/AssetLink/gf45lhnsh0a857g1uodkq475230445fg.svg";
  let imgGuidance = "https://www.kingstonloda.com/AssetLink/l7n6g23kf002i4268ob10kybl751564a.svg";

  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Typography</h2>
            </div>
            <div className="l-row__col l-1/1 l-5/12@lg">
              <p>
                <strong style={{fontWeight: "600"}}>Sol Pro</strong> is the main headline brand font and should be used across all communication to create a consistent and
                recognizable brand look and feel. Sol Pro font can be found
                on Adobe Fonts and should have <strong style={{fontWeight: "600"}}>horizontal scale of 108%</strong>. enables the user to dial the typography style up and down.
              </p>
              <p style={{marginBottom: "2.5em"}}>
                <img src="https://styleguide.kingston.com/icons/download/" alt="download" style={{width: "1em", height: "1em"}} />
                &nbsp;
                <a href="https://fonts.adobe.com/fonts/sol" target="_blank" rel="noreferrer">Sol Pro from Adobe Fonts</a>
              </p>
              <p>
              <strong style={{fontWeight: "600"}}>Myriad Pro</strong> is used for the body copy and large amounts of
                information copy within communications. The weights that can be used are Regular and
                Bold.
              </p>
              <img
                src={imgMyriadPro}
                width="390"
                height="212"
                alt="Myriad Pro example"
                className="u-animated a-fadeIn"
              />
            </div>
            <div className="l-row__col l-1/1 l-7/12@lg" style={{ paddingLeft: "2em" }}>
              <p style={{ position: "relative", height: "0", paddingTop: "500px" }}>
                <img
                  src={imgSol}
                  width="800"
                  height="700"
                  alt="Sol example"
                  className="u-animated a-fadeIn"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    maxWidth: "100%",
                    height: "auto",
                    verticalAlign: "middle",
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h3>Guidance</h3>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                <img src={imgGuidance} alt="Typography Guidance Examples" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Typography;
