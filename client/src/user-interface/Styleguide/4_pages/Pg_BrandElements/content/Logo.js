import React, { useState, useEffect } from "react";
import E_logoKingston from "../../../1_elements/logoKingston/E_LogoKingston";
import { gsap } from "gsap";

const Logo = () => {
  let logoZip = "https://www.kingstonloda.com/AssetLink/1uu17dkm461cgqu0m26b18u2565y5a14.zip";
  let imgClear1 = "https://www.kingstonloda.com/AssetLink/037h20n0cjp5d2k11eyw74y35ensp4h0.jpg";
  let imgClear2 = "https://www.kingstonloda.com/AssetLink/nsq2q0vpo541ua212mth157b03yk3322.jpg";
  let imgGuidance = "https://www.kingstonloda.com/AssetLink/knmcir2x8265x18e412y01v50414y4v5.svg";
  let imgIncorrectUsage =
    "https://www.kingstonloda.com/AssetLink/mnjk020t56564a5rrx5btfhs6ynr6402.svg";

  const [logo, updateLogo] = useState({
    version: "black",
    name: "Full Color",
    bgClass: "u-bgGreyL",
    barPos: "0",
  });

  useEffect(() => {
    const tl = gsap.timeline();
    // Set initials
    tl.set(".pg-brandElements__logoSelect__barContainer__bar", {
      scaleX: 0,
    })
      .set(".pg-brandElements__logoSelect__donut", {
        opacity: 0,
        x: -120,
      })
      .set(".pg-brandElements__logoSelect__dot", {
        opacity: 0,
        x: 120,
      });

    // Donut
    tl.from(
      ".pg-brandElements__logoSelect__donut",
      {
        opacity: 0,
        scale: 3,
        duration: 0.35,
      },
      0.125,
    )
      .addLabel("introLoaded")
      .to(".pg-brandElements__logoSelect__donut", {
        ease: "ease-out",
        duration: 0.3,
        x: 0,
      })
      .addLabel("initOutro");

    tl.to(
      ".pg-brandElements__logoSelect__donut",
      {
        ease: "ease-in",
        duration: 0.25,
        scale: 0,
      },
      "initOutro-=.125",
    );

    // Dot
    tl.set(
      ".pg-brandElements__logoSelect__dot",
      {
        opacity: 1,
      },
      "introLoaded",
    );
    tl.to(
      ".pg-brandElements__logoSelect__dot",
      {
        ease: "ease-out",
        duration: 0.3,
        x: 0,
      },
      "introLoaded",
    );
    tl.to(
      ".pg-brandElements__logoSelect__dot",
      {
        ease: "ease-in",
        duration: 0.25,
        scale: 0,
      },
      "initOutro-=.125",
    );

    //Bar
    tl.to(
      ".pg-brandElements__logoSelect__barContainer__bar",
      {
        ease: "ease-out",
        duration: 0.3,
        scaleX: 1,
      },
      "introLoaded",
    ).to(
      ".pg-brandElements__logoSelect__barContainer__bar",
      {
        opacity: "1",
        duration: 0.8,
      },
      "-=.3",
    );
  }, []);

  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Kingston Logo</h2>
            </div>
            <div className="l-row__col l-1/1 u-pb0">
              <div className="u-flex u-spaceBetween u-txtSmall">
                <p>
                  Version: <strong>{logo.name}</strong>
                </p>
                <p>
                  <img
                    src="https://styleguide.kingston.com/icons/download/"
                    alt="download"
                    style={{ width: "1em", height: "1em" }}
                  />
                  &nbsp;
                  <a href={logoZip} target="_blank" rel="noreferrer">
                    Download Logo Assets
                  </a>
                </p>
              </div>
              <div
                className={
                  `pg-brandElements__logo u-animated u-animated--slower a-fadeIn ` + logo.bgClass
                }
              >
                <E_logoKingston version={logo.version} />
              </div>
              <div className="pg-brandElements__logoSelect l-row">
                <button
                  className={`l-row__col l-1/4 u-flex u-bgGreyL ${
                    logo.version == "black" ? "-active" : ""
                  }`}
                  onClick={() =>
                    updateLogo({
                      version: "black",
                      name: "Full Color",
                      bgClass: "u-bgGreyL",
                      barPos: "0",
                    })
                  }
                >
                  <E_logoKingston />
                </button>
                <button
                  className={`l-row__col l-1/4 u-flex u-bgGrey ${
                    logo.version == "white" ? "-active" : ""
                  }`}
                  onClick={() =>
                    updateLogo({
                      version: "white",
                      name: "Full Color Inverted",
                      bgClass: "u-bgGrey",
                      barPos: "25%",
                    })
                  }
                >
                  <E_logoKingston version={"white"} />
                </button>
                <button
                  className={`l-row__col l-1/4 u-flex u-bgGreyL ${
                    logo.version == "monoBlack" ? "-active" : ""
                  }`}
                  onClick={() =>
                    updateLogo({
                      version: "monoBlack",
                      name: "Monochromatic*",
                      bgClass: "u-bgGreyL",
                      barPos: "50%",
                    })
                  }
                >
                  <E_logoKingston version={"monoBlack"} />
                </button>
                <button
                  className={`l-row__col l-1/4 u-flex u-bgGrey ${
                    logo.version == "monoWhite" ? "-active" : ""
                  }`}
                  onClick={() =>
                    updateLogo({
                      version: "monoWhite",
                      name: "Monochromatic Inverted*",
                      bgClass: "u-bgGrey",
                      barPos: "75%",
                    })
                  }
                >
                  <E_logoKingston version={"monoWhite"} />
                </button>
                <div
                  className="pg-brandElements__logoSelect__barContainer"
                  style={{ left: logo.barPos }}
                >
                  <div className="pg-brandElements__logoSelect__barContainer__bar"></div>
                  {/* Full Dot */}
                  <svg className="pg-brandElements__logoSelect__dot">
                    <circle
                      cx="6"
                      cy="10"
                      r="4"
                      stroke="#c70f2e"
                      strokeWidth="3"
                      fill="#c70f2e"
                    ></circle>
                  </svg>

                  {/* Donut */}
                  <svg className="pg-brandElements__logoSelect__donut">
                    <circle
                      cx="6"
                      cy="10"
                      r="4"
                      stroke="#c70f2e"
                      strokeWidth="3"
                      fill="white"
                    ></circle>
                  </svg>
                </div>
              </div>

              <p>
                <small>
                  <span style={{ color: "red" }}>*</span> Monochromatic versions for single color
                  print collateral
                </small>
              </p>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1 l-2/3@lg">
              <p>
                The official Kingston logo, which is comprised of the red head ‘Rex’, the logotype,
                and registration (®) symbol, should be used on all Kingston communications and
                marketing collateral. The logo should always be used in proportion (as shown) and
                should not be changed or altered in any way.
              </p>
            </div>
            <div className="l-row__col l-1/1 l-1/3@lg">
              <strong>Minimum Logo Size</strong>
              <div className="u-flex u-alignCenter">
                <div
                  style={{
                    minWidth: "165px",
                    width: "165px",
                    padding: "10px",
                    background: "black",
                    marginTop: ".5em",
                  }}
                >
                  <E_logoKingston version={"white"} />
                </div>
              </div>
              <div style={{ marginTop: ".5em" }}>
                <small>
                  <span>Print:</span>
                  <strong> 30mm</strong>
                  <br />
                  For size-restricted promo items and products only.
                  <hr style={{ backgroundColor: "#ddd" }} />
                  <span>Web / Screen:</span>
                  <strong> 133px at 1080p</strong>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h3>Clear Space</h3>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                The Kingston logo must have a clearance of the <strong>“n”</strong> height on all
                four sides that allow all applications free of type, graphics, and other elements
                that may visually clutter the logo.
              </p>
              <p>Examples:</p>
              <div className="u-flex">
                <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                  <img src={imgClear1} alt="Visual demonstrationg of 'N' height." />
                  <p>
                    <small>
                      Example showing proper <strong>&quot;n&quot;</strong> spacing around the
                      Kingston logo, free of text, image clutter and high-contrasting backgrounds.
                    </small>
                  </p>
                </div>
                <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                  <img src={imgClear2} alt="Visual demonstrationg of 'N' height." />
                  <p>
                    <small>
                      This example shows where the <strong>&quot;n&quot;</strong> spacing is not
                      required. Logo containers are used to create separation from image clutter and
                      high-contrasting backgrounds.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h3>Specific Cases</h3>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1 l-2/5@lg">
              <p>
                In some instances, the Kingston logo has other variations based on specific cases.
              </p>
              <div className="u-flex" style={{ border: "1px solid black" }}>
                <div
                  className="u-flex1"
                  style={{ padding: ".75em .75em 0 .75em", background: "black" }}
                >
                  <img
                    src="https://www.kingstonloda.com/AssetLink/g50c2r4j30r271x5w05wuf38515nfkb6.svg"
                    width="300"
                    height="150"
                    alt="Visual demonstrationg of 'N' height."
                  />
                </div>
                <div className="u-flex1" style={{ padding: ".75em .75em 0 .75em" }}>
                  <img
                    src="https://www.kingstonloda.com/AssetLink/xk1437m8rng81qfsj82yeygj575l6fm8.svg"
                    width="300"
                    height="150"
                    alt="Kingston Logo specific case variation"
                  />
                </div>
              </div>
              <p>
                <strong>Raised Logotype</strong> — Used mainly for promotional merchandise and
                apparel due to print, color and/or size limitations. These output types include
                silkscreen, embroidery, stamping and laser etching.{" "}
                <strong>Minimum print: 0.75 inches.</strong>
              </p>
              <hr style={{ backgroundColor: "#333", margin: "2em 0" }} />
              <div className="u-flex" style={{ border: "1px solid black" }}>
                <div
                  className="u-flex1 u-txt-center"
                  style={{ paddingTop: ".25em", background: "black" }}
                >
                  <img
                    src="https://www.kingstonloda.com/AssetLink/jpsapry86on5vk06f4mriy3285qd1432.svg"
                    width="150"
                    height="150"
                    alt="Stacked Logo"
                    style={{ maxWidth: "120px" }}
                  />
                </div>
                <div className="u-flex1 u-txt-center" style={{ paddingTop: ".25em" }}>
                  <img
                    src="https://www.kingstonloda.com/AssetLink/n71356tr54t03r67706517061y277f01.svg"
                    width="150"
                    height="150"
                    alt="Stacked Logo"
                    style={{ maxWidth: "120px" }}
                  />
                </div>
              </div>
              <p>
                <strong>Stacked Red Head + Logotype</strong> — The stacked logo should only be used
                when the given space is either round or square. An example would be on responsive
                GDN banners as shown.
              </p>
            </div>
            <div className="l-row__col l-1/1 l-3/5@lg" style={{ paddingLeft: "2em" }}>
              <img
                src="https://www.kingstonloda.com/AssetLink/1082qieqrys70ea5vd5m4e050874x086.png"
                width="800"
                height="1000"
                alt="Example of Specific Cases"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-content pg-brandElements__guidance" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h3>Guidance</h3>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1 l-1/2@lg">
              <p>
                The Kingston logo is the fundamental branding element of Kingston Technology and
                it’s the foundation to our representation and recognition. It’s very important to
                keep the integrity of the Kingston logo.
              </p>
              <ul style={{ padding: 0, listStyle: "none" }}>
                <li>
                  <strong>A:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> flip or invert
                  the red head “Rex” icon{" "}
                </li>
                <li>
                  <strong>B:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> rotate the logo
                </li>
                <li>
                  <strong>C:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> change or alter
                  Rex’s proportions
                </li>
                <li>
                  <strong>D:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> stretch, squish
                  or change proportion of logo
                </li>
                <li>
                  <strong>E:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use colors
                  other than those specified for the logo{" "}
                </li>
                <li>
                  <strong>F:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use contrasting
                  backgrounds behind the logo
                </li>
                <li>
                  <strong>G:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use any other
                  color than those specified for Rex{" "}
                </li>
                <li>
                  <strong>H:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use an inverted
                  white version of Rex
                </li>
                <li>
                  <strong>I:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> introduce any
                  color effects on Rex
                </li>
              </ul>
            </div>
            <div className="l-row__col l-1/1 l-1/2@lg">
              <strong>Correct Usage:</strong>
              <img src={imgGuidance} width="800" height="550" alt="Logo Guidance visual examples" />
              <strong style={{ marginTop: ".25em", display: "block" }}>Incorrect Usage:</strong>
              <img
                src={imgIncorrectUsage}
                width="800"
                height="550"
                alt="Incorrect Usage Logo Guidelines"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
