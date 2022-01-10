import React from "react";

const exampleImg = "https://www.kingstonloda.com/AssetLink/52ho03hw5nin3d61a54sd408x7r571xf.png";

const BrandColors = () => {
  return (
    <div className="s-content pg_brandElements__colors">
      <div className="l-inner">
        <div className="l-row">
          <div className="s-content__headline l-row__col l-1/1">
            <h2>Brand Colors</h2>
            <p>
            The Kingston FURY brand follows the primary corporate color scheme that has been implemented for over two decades. Well recognized around the world, it allows the brand to make a consistent visual statement that is distinct.
            </p><p>
While reinforcing the brand awareness of Kingston, it features a slightly deeper red, representing the passion and intensity of the Kingston FURY brand.
            </p>
          </div>
          <div className="l-row__col l-1/1">
            <p style={{ marginTop: 0 }}>
              <strong style={{ textTransform: "uppercase" }}>Primary Palette</strong>
            </p>
            <div className="pg-brandElements__colors__swatches u-animated u-animated--normal a-fadeIn l-row">
              <div className="l-row__col l-1/1 l-1/3@md u-p0">
                <div
                  className="pg-brandElements__colors__swatches__swatch"
                  style={{ backgroundColor: "#C8102E", color: "white", padding: "1em" }}
                >
                  <strong>Kingston FURY Red*</strong>
                  <br />
                  <strong>PMS 200C</strong>
                  <br />
                  <div style={{ fontSize: ".75em" }}>
                    CMYK / <strong>C:0 M:100 Y:76 K:13 </strong>
                    <br />
                    RGB / <strong>R:186 G:12 B:47 </strong>
                    <br />
                    HEX / <strong>#BA0C2F</strong>
                  </div>
                </div>
                {/* <div>
                  <p>
                    <img src="https://www.kingstonloda.com/AssetLink/m4746vf2mn4111kc8qx7dhh0wv2u0104.svg" alt=""/>
                  </p>
                </div> */}
              </div>
              <div className="l-row__col l-1/1 l-1/3@md u-p0">
                <div
                  className="pg-brandElements__colors__swatches__swatch"
                  style={{ backgroundColor: "#000000", color: "white", padding: "1em" }}
                >
                  <strong>Black</strong>
                  <br />
                  <br />
                  <div style={{ fontSize: ".75em" }}>
                    CMYK / <strong>C:0 M:0 Y:0 K:100</strong>
                    <br />
                    RGB / <strong>R:0 G:0 B:0 </strong>
                    <br />
                    HEX / <strong>#000000</strong>
                  </div>
                </div>
              </div>
              <div className="l-row__col l-1/1 l-1/3@md u-p0">
                <div
                  className="pg-brandElements__colors__swatches__swatch -bordered"
                  style={{ backgroundColor: "#FFFFFF", padding: "1em"}}
                >
                  <strong>White</strong>
                  <br />
                  <br />
                  <div style={{ fontSize: ".75em" }}>
                    CMYK / <strong>C:0 M:0 Y:0 K:0</strong>
                    <br />
                    RGB / <strong>R:255 G:255 B:255 </strong>
                    <br />
                    HEX / <strong>#FFFFFF</strong>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="u-animated u-animated--normal a-fadeIn l-row">
              <div className="l-row__col l-1/1 l-1/3@md u-p0">
                <div>
                  <p>
                    <img src="https://www.kingstonloda.com/AssetLink/m4746vf2mn4111kc8qx7dhh0wv2u0104.svg" alt=""/>
                  </p>
                </div>
              </div>
              <div className="l-row__col l-1/1 l-1/3@md u-p0">
                <div>
                  <p>
                    <img src="https://www.kingstonloda.com/AssetLink/0d4g348j8am6f108rd3r4830413i04cc.svg" alt=""/>
                  </p>
                </div>
              </div>
              <div className="l-row__col l-1/1 l-1/3@md u-p0">
                <div>
                  <p>
                    <img src="https://www.kingstonloda.com/AssetLink/0pm7q6450l7804lus6w3c30726ec72l2.svg" alt=""/>
                  </p>
                </div>
              </div>
            </div>
            <p><small>*Please note that the corporate Kingston Red differs from the Kingston FURY Red.</small></p>
            <div style={{display: "flex"}}>
              <div>
                <div style={{width:"125px", height: "60px", background: "#C8102E"}}></div>
                <small><strong>Kingston Red</strong></small>
              </div>
              <div>
                <div style={{width:"125px", height: "60px", background: "#BA0C2F"}}></div>
                <small><strong>Kingston FURY Red</strong></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandColors;
