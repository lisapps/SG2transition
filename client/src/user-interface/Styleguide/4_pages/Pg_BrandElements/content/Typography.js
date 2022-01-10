import React from "react";

const Typography = () => {
  let imgMyriadPro = "https://www.kingstonloda.com/AssetLink/x8voh2i66h8oh8x6reqi7sii32i43hsv.svg";
  let imgBreuer = "https://www.kingstonloda.com/AssetLink/42nij4lo46w8fjj3s16s0nw5xk1m3161.svg";
  let imgGuidance = "https://www.kingstonloda.com/AssetLink/i78j4pib6j55a0ei70f6515a448f2i7f.svg";

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
                <strong style={{fontWeight: "600"}}>Breuer Text</strong> is the main brand font and should be used across all
                communication to create a consistent and recognizable brand look and feel. With a
                choice of two weights, it’s easy to work with and enables the user to dial the
                typography style up and down.
              </p>
              <p style={{marginBottom: "2.5em"}}>
                <img src="https://styleguide.kingston.com/icons/download/" alt="download" style={{width: "1em", height: "1em"}} />
                &nbsp;
                <a href="https://www.myfonts.com/fonts/typetrust/breuer-text/" target="_blank" rel="noreferrer">Breuer Text from MyFonts</a>
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
                  src={imgBreuer}
                  width="800"
                  height="700"
                  alt="Breuer example"
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
