/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_TechSpecs = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let tVars = {
      ...appState,
      currentPath: "/ui/tech-specs",
      outputName: "TechSpecs",
      headerName: "Tech Specs",
      description:
        "The Tech Specs section displays detailed information relating to any specific product.",
      htmlSaved: true,
      currentTheme: "t-stone",
      scripts: [],
      specs: [
        ["Table Heading", ["Character Limit ##"]],
        ["Table Rows", ["Left Character Limit ###S", "Right Character Limie ###"]],
      ],
    };
    setAppState(tVars);
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "665", width: window.innerWidth - 24 });
  }, []);

  //   Customize this loader text
  if (!appState) return "...Loading System Scan Results - No Results Section";
  //  add current section classname plus theme
  return (
    <section className={`s-techSpecs ` + appState.currentTheme}>
      <div className="l-inner">
        <div className="c-table c-table--striped c-table--sideKeys c-table--2col">
          <div className="c-table__main">
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Headphones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Model</td>
                  <td>Cloud Stinger</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Circumaural, Closed Back</td>
                </tr>
                <tr>
                  <td>Driver</td>
                  <td>Dynamic, 53mm with neodymium magnets</td>
                </tr>
                <tr>
                  <td>Impedance</td>
                  <td>260 Ω</td>
                </tr>
                <tr>
                  <td>Frequency Response</td>
                  <td>15Hz - 25,000Hz</td>
                </tr>
                <tr>
                  <td>T.H.D.</td>
                  <td>&lt; 2%</td>
                </tr>
                <tr>
                  <td>Sound Pressure Level</td>
                  <td>98±3dB</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>350g</td>
                </tr>
                <tr>
                  <td>Input Power</td>
                  <td>Rated 150mW, Maximum 300mW</td>
                </tr>
                <tr>
                  <td>Connection</td>
                  <td>Headset - 3.5mm plug (4 pole)</td>
                </tr>
                <tr>
                  <td>Cable Length and Type</td>
                  <td>Headset (1m) + extension cable (2m) + 10cm iPhone cable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. Don't add until after html is saved.
export default {
  path: "tech-specs",
  component: S_TechSpecs,
  navtxt: "Tech Specs",
  htmlName: "TechSpecs",
};
