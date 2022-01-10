import React, { useState, useEffect } from "react";
import E_logoFURY from "../../../1_elements/logoFURY/E_logoFURY";
import { gsap } from "gsap";

const Logo = () => {
  let logoZip = "https://www.kingstonloda.com/AssetLink/1ci5fl1mid32e4815r3q72751w66w1x4.zip";

  let imgClear1 = "https://www.kingstonloda.com/AssetLink/e6iv0xh7365ptj8273au5d60d487lea5.png";
  let imgClear2 = "https://www.kingstonloda.com/AssetLink/2ir7770lsej5xr07qnvw60rqcma8cx5x.png";

  let imgGuidance = "https://www.kingstonloda.com/AssetLink/h3u2607mm8i66d05n003i787a27got2b.svg";
  let imgIncorrectUsage =
    "https://www.kingstonloda.com/AssetLink/8x7ys22bd56fdpsmq2rblu7505252p5e.svg";

  const [logo, updateLogo] = useState({
    version: "default",
    name: "Full Color",
    bgClass: "u-bgGreyL",
    barPos: "0",
  });

  useEffect(() => {
    const tl = gsap.timeline();
    // Set initials
    tl.set(".pg-brandFURY__logoSelect__barContainer__bar", {
      scaleX: 0,
    })
      .set(".pg-brandFURY__logoSelect__donut", {
        opacity: 0,
        x: -120,
      })
      .set(".pg-brandFURY__logoSelect__dot", {
        opacity: 0,
        x: 120,
      });

    // Donut
    tl.from(
      ".pg-brandFURY__logoSelect__donut",
      {
        opacity: 0,
        scale: 3,
        duration: 0.35,
      },
      0.125,
    )
      .addLabel("introLoaded")
      .to(".pg-brandFURY__logoSelect__donut", {
        ease: "ease-out",
        duration: 0.3,
        x: 0,
      })
      .addLabel("initOutro");

    tl.to(
      ".pg-brandFURY__logoSelect__donut",
      {
        ease: "ease-in",
        duration: 0.25,
        scale: 0,
      },
      "initOutro-=.125",
    );

    // Dot
    tl.set(
      ".pg-brandFURY__logoSelect__dot",
      {
        opacity: 1,
      },
      "introLoaded",
    );
    tl.to(
      ".pg-brandFURY__logoSelect__dot",
      {
        ease: "ease-out",
        duration: 0.3,
        x: 0,
      },
      "introLoaded",
    );
    tl.to(
      ".pg-brandFURY__logoSelect__dot",
      {
        ease: "ease-in",
        duration: 0.25,
        scale: 0,
      },
      "initOutro-=.125",
    );

    //Bar
    tl.to(
      ".pg-brandFURY__logoSelect__barContainer__bar",
      {
        ease: "ease-out",
        duration: 0.3,
        scaleX: 1,
      },
      "introLoaded",
    ).to(
      ".pg-brandFURY__logoSelect__barContainer__bar",
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
              <h2>Kingston FURY Logo</h2>
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
                  `pg-brandFURY__logo u-animated u-animated--slower a-fadeIn ` + logo.bgClass
                }
              >
                <E_logoFURY version={logo.version} />
              </div>
              <div className="pg-brandFURY__logoSelect l-row">
                <button
                  className={`l-row__col l-1/4 u-flex u-bgGreyL ${
                    logo.version == "default" ? "-active" : ""
                  }`}
                  onClick={() =>
                    updateLogo({
                      version: "default",
                      name: "Full Color",
                      bgClass: "u-bgGreyL",
                      barPos: "0",
                    })
                  }
                >
                  <E_logoFURY />
                </button>
                <button
                  className={`l-row__col l-1/4 u-flex u-bgDarkGrey ${
                    logo.version == "white" ? "-active" : ""
                  }`}
                  onClick={() =>
                    updateLogo({
                      version: "white",
                      name: "Full Color Reversed",
                      bgClass: "u-bgDarkGrey",
                      barPos: "25%",
                    })
                  }
                >
                  <E_logoFURY version={"white"} />
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
                  <E_logoFURY version={"monoBlack"} />
                </button>
                <button
                  className={`l-row__col l-1/4 u-flex u-bgDarkGrey ${
                    logo.version == "monoWhite" ? "-active" : ""
                  }`}
                  onClick={() =>
                    updateLogo({
                      version: "monoWhite",
                      name: "Monochromatic Reversed*",
                      bgClass: "u-bgDarkGrey",
                      barPos: "75%",
                    })
                  }
                >
                  <E_logoFURY version={"monoWhite"} />
                </button>
                <div
                  className="pg-brandFURY__logoSelect__barContainer"
                  style={{ left: logo.barPos }}
                >
                  <div className="pg-brandFURY__logoSelect__barContainer__bar"></div>
                  {/* Full Dot */}
                  <svg className="pg-brandFURY__logoSelect__dot">
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
                  <svg className="pg-brandFURY__logoSelect__donut">
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
                The official Kingston FURY logo, which is comprised (the logotype and trademark (TM)
                symbol, should be used on all Kingston FURY communications and marketing collateral.
                The logo should always be used in proportion (as shown) and should not be changed or
                altered in any way.
              </p>
              <p>
                The core of the FURY name: unrestrained, ferocious, intense, full of passion and
                accelerating energy into action. The “Kingston” logo is updated, but just for this
                enthusiast/gaming brand. Its foundation is in capital letters, strong and steadfast
                like Kingston has been by engineering quality solutions for over 3 decades. FURY
                represents that passion for excellence and performance. The FURY logo radiates vigor
                and resolute, anticipation of the next adventure; as well as movement forward,
                angling slightly to the right. The FURY letters are a combination of curves and
                straight lines, joining the technology and the passion. The two accent features on
                the outside letters, represent the sharp and aggressive nature of the brand. The two
                words are always to be used together on the logo as{" "}
                <strong>“KINGSTON FURY.”</strong>
              </p>
            </div>
            <div className="l-row__col l-1/1 l-1/3@lg">
              <strong>Minimum Logo Size</strong>
              <div className="u-flex u-alignCenter">
                <div
                  style={{
                    minWidth: "118px",
                    width: "118px",
                    padding: "10px 0",
                    marginTop: ".5em",
                  }}
                >
                  <E_logoFURY />
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
                  <strong> 118px at 1080p</strong>
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
              The Kingston FURY logo must have a clearance of the <strong>“u”</strong> height
                    on all four sides that allow all applications free of type, graphics, and other
                    elements that may visually clutter the logo.
              </p>
              <p>Examples:</p>
              <div className="u-flex">
                <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                  <img src={imgClear1} alt="Visual demonstrationg of 'N' height." />
                  <p>
                    <small>
                      Example showing proper <strong>&quot;u&quot;</strong> spacing around the
                      Kingston FURY logo, free of text, image clutter and high-contrasting backgrounds.
                    </small>
                  </p>
                </div>
                <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                  <img src={imgClear2} alt="Visual demonstrationg of 'N' height." />
                  <p>
                    <small>
                      Example showing proper <strong>&quot;u&quot;</strong> spacing around the
                      Kingston FURY logo, free of text, image clutter and high-contrasting backgrounds.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content pg-brandFURY__guidance">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h3>Guidance</h3>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1 l-1/2@lg">
              <p>
                The Kingston FURY logo is the fundamental branding element of Kingston FURY and it’s
                the foundation to our representation and recognition. The “Kingston” font is
                updated, but just for this enthusiast/gaming brand.
              </p>
              <p>
                <strong style={{ color: "green", fontWeight: "800" }}>DO</strong> choose the
                Kingston FURY logo from the “Correct Usage” section best suited for your needs.
              </p>
              <ul style={{ padding: 0, listStyle: "none", lineHeight: "2em" }}>
                <li>
                  <strong style={{ fontWeight: "800" }}>A:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use FURY logo
                  without Kingston above it{" "}
                </li>
                <li>
                  <strong style={{ fontWeight: "800" }}>B:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> change or alter
                  Kingston type proportions
                </li>
                <li>
                  <strong style={{ fontWeight: "800" }}>C:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> rotate the logo
                </li>
                <li>
                  <strong style={{ fontWeight: "800" }}>D:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> stretch, squish
                  or change proportion of logo
                </li>
                <li>
                  <strong style={{ fontWeight: "800" }}>E:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use colors
                  other than those specified for the logo{" "}
                </li>
                <li>
                  <strong style={{ fontWeight: "800" }}>F:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use backgrounds
                  where the logo is not legible
                </li>
                <li>
                  <strong style={{ fontWeight: "800" }}>G:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> colorize any
                  portion of the logo{" "}
                </li>
                <li>
                  <strong style={{ fontWeight: "800" }}>H:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use Kingston
                  FURY and Kingston Technology logo together on the same visual plane{" "}
                  <span style={{ color: "red" }}>*</span>
                </li>
                <li>
                  <strong style={{ fontWeight: "800" }}>I:</strong>{" "}
                  <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> change Kingston
                  to any other color
                </li>
              </ul>
              <p>
                <small>
                  <span style={{ color: "red" }}>*</span> There may be some exceptions such as
                  packaging and product compliance labels. Please check with Corporate Team for
                  guidance.
                </small>
              </p>
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
