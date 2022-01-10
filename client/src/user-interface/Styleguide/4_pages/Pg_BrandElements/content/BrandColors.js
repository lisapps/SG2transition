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
              The Kingston brand follows a corporate primary color scheme. It allows the brand to
              make a visual statement that is distinctly Kingston. It helps promote the awareness of
              the Kingston brand.
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
                  <strong>Kingston Red</strong>
                  <br />
                  <strong>PMS 186C</strong>
                  <br />
                  <div style={{ fontSize: ".75em" }}>
                    CMYK / <strong>C:0 M:100 Y:80 K:5 </strong>
                    <br />
                    RGB / <strong>R:200 G:16 B:46 </strong>
                    <br />
                    HEX / <strong>#C8102E</strong>
                  </div>
                </div>
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
                  style={{ backgroundColor: "#FFFFFF", padding: "1em" }}
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
            <p style={{ marginTop: "3em" }}>
              <strong>PROPORTION &amp; RATIO</strong>
            </p>
            <p>
              The suggested <strong>Proportion &amp; Ratio</strong> is to let us be more precise on
              the use of our Kingston Red – it makes the usage of the Kingston Red more meaningful.
            </p>
            <div className="u-flex u-animated u-animated--slow a-fadeIn">
              <div className="l-1/2">
                <div className="pg-brandElements__colors__ratios u-flex">
                  <div className="pg-brandElements__colors__ratio -white l-9/12"></div>

                  <div className="l-3/12 u-flex u-flexColumn" style={{ height: "150px" }}>
                    <div
                      className="pg-brandElements__colors__ratio -black"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="pg-brandElements__colors__ratio -red"
                      style={{ height: "35%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="l-1/2">
                <div className="pg-brandElements__colors__ratios u-flex">
                  <div className="pg-brandElements__colors__ratio -black l-9/12"></div>

                  <div className="l-3/12 u-flex u-flexColumn" style={{ height: "150px" }}>
                    <div
                      className="pg-brandElements__colors__ratio -white"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="pg-brandElements__colors__ratio -red"
                      style={{ height: "35%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-flex u-animated u-animated--slow a-fadeIn">
              <div className="l-1/2">
                <div className="pg-brandElements__colors__ratios u-flex">
                  <div className="pg-brandElements__colors__ratio -white l-9/12"></div>

                  <div className="l-3/12 u-flex u-flexColumn" style={{ height: "150px" }}>
                    <div
                      className="pg-brandElements__colors__ratio -red"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="pg-brandElements__colors__ratio -black"
                      style={{ height: "35%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="l-1/2">
                <div className="pg-brandElements__colors__ratios u-flex">
                  <div
                    className="pg-brandElements__colors__ratio -red l-9/12"
                    style={{ background: "#c8102e", padding: "1em", display: "flex" }}
                  >
                    <small
                      style={{
                        color: "white",
                        fontSize: ".5em",
                        lineHeight: "normal",
                        alignSelf: "flex-end",
                      }}
                    >
                      Note: Full-bleed red backgrounds are still welcome since some designs are
                      proven more effective and impactful in certain regions.
                    </small>
                  </div>

                  <div className="l-3/12 u-flex u-flexColumn" style={{ height: "150px" }}>
                    <div
                      className="pg-brandElements__colors__ratio -white"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="pg-brandElements__colors__ratio -black"
                      style={{ height: "35%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ marginTop: "3em" }}>
              <strong>DARK RED ACCENT COLOR (PRINT ONLY)</strong>
            </p>
            <p>
              The dark red accent color is for use on color bars and subheadlines for printed
              materials such as; datasheets, ads, and flyers.
            </p>

            <div className="l-row">
              <div className="l-row__col l-1/3 u-p0">
                <div className="l-row">
                  <div className="l-row__col l-1/4" style={{ background: "#b9102a" }}></div>
                  <div className="l-row__col l-3/4 u-pb0 u-pt0">
                    <div className="u-mt0 u-mb0">
                      <strong>Dark Red</strong>
                      <br />
                      <div style={{ fontSize: ".75em" }}>
                        CMYK / <strong>C:0 M:100 Y:81 K:26</strong>
                        <br />
                        RGB / <strong>R:185 G:16 B:42</strong>
                        <br />
                        HEX / <strong>#B9102A</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-row__col l-2/3 u-p0">
                <p className="u-m0">
                  Examples:
                  <img
                    src={exampleImg}
                    width="300"
                    height="150"
                    alt="Visual demonstrationg of 'N' height."
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandColors;
