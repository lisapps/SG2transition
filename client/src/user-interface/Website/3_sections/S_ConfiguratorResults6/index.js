/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_ConfiguratorSix = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [accordionMain, setAccordionMain] = useState(true);

  useEffect(() => {
    let conf1Vars = {
      ...appState,
      currentPath: "/ui/configurator-six",
      outputName: "ConfiguratorSix",
      headerName: "Configurator Results: 6",
      description:
        "The Configurator Results Section displays system information for the user. *In progress...",
      htmlSaved: true,
      currentTheme: "t-silver",
      scripts: [
        "../rexusManager.component.js",
        "../accordion.component.js",
        "../configuratorResults.section",
      ],
      specs: [
        ["Image", ["Width: 52px, Height: 32px"]],
        ["Title", ["String Text, H5 tag with inherit global styling"]],
        ["Sub Titles", ["String Text, H6 tag with inherit global styling"]],
        ["Description", ["String Text"]],
        ["Link", ["String Text"]],
      ],
    };
    setAppState(conf1Vars);
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "895" });
  }, []);

  //call the height adjustment script in iframeWrapper.js by triggering an update to dimensions context
  useEffect(() => {
    if (accordionMain) setDimensions({ ...dimensions, width: dimensions.width - 0.25 });
    if (!accordionMain) setDimensions({ ...dimensions, width: dimensions.width + 0.25 });
  }, [accordionMain]);

  //   Customize this loader text
  if (!appState) return "...Loading Configurator Results 6 Section";
  //  add current section classname plus theme
  return (
    <section className={`s-configuratorResults ` + appState.currentTheme} id="configuratorResults0">
      <div className="c-accordion s-configuratorResults__accordion">
        <h2
          className={`c-accordion__tab  s-configuratorResults__accordion__heading ${
            accordionMain ? " c-accordion__tab--active" : ""
          }`}
          id="accTab-etoqgs"
        >
          <button
            aria-controls="accPanel-jyfzk0"
            aria-expanded="true"
            onClick={() => setAccordionMain(!accordionMain)}
          >
            System Information
            <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
              <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z">
                {" "}
              </path>
            </svg>
          </button>
        </h2>
        <div
          className="c-accordion__panel s-configuratorResults__accordion__results"
          id="accPanel-jyfzk0"
          aria-labelledby="accTab-etoqgs"
        >
          <div className="c-accordion__panel__content">
            <div className="l-inner">
              <div className="s-configuratorResults__accordion__results__grid s-configuratorResults__accordion__results__grid--3Items">
                <div className="c-configuratorResultsCard">
                  <div className="c-accordion c-accordion--noOutline">
                    <h5
                      className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                      id="accTab-gci8aq"
                    >
                      <button aria-controls="accPanel-1a0r1g" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xlink="http://www.w3.org/1999/xlink"
                            xlinkHref="../images/icons-map.svg#results-memory"
                          ></use>
                        </svg>
                        <span>Memory</span>
                        <svg
                          className="c-accordion__tab__icon"
                          width="14"
                          height="8"
                          aria-hidden="true"
                          viewBox="0 0 14 8"
                        >
                          <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
                        </svg>
                      </button>
                    </h5>
                    <div
                      className="c-accordion__panel c-configuratorResultsCard__info"
                      id="accPanel-1a0r1g"
                      aria-labelledby="accTab-gci8aq"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <h6>Standard</h6>
                            <p>2 GB (Non-removable)</p>
                            <p>3 GB (Non-removable)</p>
                            <p>4 GB (Non-removable)</p>
                          </li>
                          <li>
                            <h6>Maximum</h6>
                            <p>2 GB or</p>
                            <p>4 GB or</p>
                            <p>8 GB</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-configuratorResultsCard">
                  <div className="c-accordion c-accordion--noOutline">
                    <h5
                      className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                      id="accTab-jw9znb"
                    >
                      <button aria-controls="accPanel-oimmy1" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xlink="http://www.w3.org/1999/xlink"
                            xlinkHref="../images/icons-map.svg#results-storage"
                          ></use>
                        </svg>
                        <span>Storage</span>
                        <svg
                          className="c-accordion__tab__icon"
                          width="14"
                          height="8"
                          aria-hidden="true"
                          viewBox="0 0 14 8"
                        >
                          <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
                        </svg>
                      </button>
                    </h5>
                    <div
                      className="c-accordion__panel c-configuratorResultsCard__info"
                      id="accPanel-oimmy1"
                      aria-labelledby="accTab-jw9znb"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <h6>Bus Architecture</h6>
                            <p>Flash - microSDXC</p>
                            <p>SSD - Proprietary</p>
                          </li>
                        </ul>
                        <div className="c-configuratorResultsCard__info__cta">
                          <a href="#anchorLink" title="Anchor Title">
                            Compatible Storage Upgrades
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-configuratorResultsCard">
                  <div className="c-accordion c-accordion--noOutline">
                    <h5
                      className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                      id="accTab-vip5k6"
                    >
                      <button aria-controls="accPanel-hshn3a" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xlink="http://www.w3.org/1999/xlink"
                            xlinkHref="../images/icons-map.svg#results-sd_card"
                          ></use>
                        </svg>
                        <span>Expansion</span>
                        <svg
                          className="c-accordion__tab__icon"
                          width="14"
                          height="8"
                          aria-hidden="true"
                          viewBox="0 0 14 8"
                        >
                          <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
                        </svg>
                      </button>
                    </h5>
                    <div
                      className="c-accordion__panel c-configuratorResultsCard__info"
                      id="accPanel-hshn3a"
                      aria-labelledby="accTab-vip5k6"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <p>0 Socket(s) Memory soldered to motherboard</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-configuratorResultsCard">
                <div className="c-accordion c-accordion--noOutline">
                  <h5
                    className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                    id="accTab-uv6msy"
                  >
                    <button aria-controls="accPanel-84u23y" aria-expanded="true">
                      <svg
                        className="c-configuratorResultsCard__header__icon"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <use
                          xlink="http://www.w3.org/1999/xlink"
                          xlinkHref="../images/icons-map.svg#results-part_number"
                        ></use>
                      </svg>
                      <span>System Part Numbers</span>
                      <svg
                        className="c-accordion__tab__icon"
                        width="14"
                        height="8"
                        aria-hidden="true"
                        viewBox="0 0 14 8"
                      >
                        <path d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"></path>
                      </svg>
                    </button>
                  </h5>
                  <div
                    className="c-accordion__panel c-configuratorResultsCard__info"
                    id="accPanel-84u23y"
                    aria-labelledby="accTab-uv6msy"
                  >
                    <div className="c-accordion__panel__content">
                      <p>82HYxxx; 82J0xxx</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-configuratorResults__important">
        <div className="l-inner">
          <div className="c-configuratorResultsCard c-configuratorResultsCard--important">
            <div className="c-configuratorResultsCard__header c-accordion__tab--active">
              <svg
                className="c-configuratorResultsCard__header__icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <use
                  xlink="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#results-important_notes"
                ></use>
              </svg>
              <h5 className="u-txt-uppercase">Important Configuration Notes</h5>
            </div>
            <div className="c-configuratorResultsCard__info">
              <div className="l-row">
                <div className="l-row__col">
                  <p>Standard memory is soldered to the motherboard and is not upgradeable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. Don't add until after html is saved.
export default {
  path: "configurator-six",
  component: S_ConfiguratorSix,
  navtxt: "Configurator Results: 6",
  htmlName: "ConfiguratorSix",
  icon: "",
};
