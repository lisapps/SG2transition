/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_ConfiguratorTwo = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [accordion, setAccordion] = useState(false);
  const [accordionMain, setAccordionMain] = useState(true);

  useEffect(() => {
    let conf1Vars = {
      ...appState,
      currentPath: "/ui/configurator-two",
      outputName: "ConfiguratorTwo",
      headerName: "Configurator Results: 2",
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
    setDimensions({ ...dimensions, viewHeight: "" });
  }, []);

  //call the height adjustment script in iframeWrapper.js by triggering an update to dimensions context
  useEffect(() => {
    if (accordion || accordionMain)
      setDimensions({ ...dimensions, width: dimensions.width - 0.25 });
    if (!accordion || !accordionMain)
      setDimensions({ ...dimensions, width: dimensions.width + 0.25 });
  }, [accordion, accordionMain]);

  //   Customize this loader text
  if (!appState) return "...Loading Configurator Results 2 Section";
  //  add current section classname plus theme
  return (
    <section className={`s-configuratorResults ` + appState.currentTheme} id="configuratorResults0">
      <div className="c-accordion s-configuratorResults__accordion">
        <h2
          className={`c-accordion__tab  s-configuratorResults__accordion__heading ${
            accordionMain ? " c-accordion__tab--active" : ""
          }`}
          id="accTab-ewb3zj"
        >
          <button
            aria-controls="accPanel-dsf3nm"
            aria-expanded="true"
            onClick={() => setAccordionMain(!accordionMain)}
          >
            System Information
            <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
              <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
            </svg>
          </button>
        </h2>
        <div
          className="c-accordion__panel s-configuratorResults__accordion__results"
          id="accPanel-dsf3nm"
          aria-labelledby="accTab-ewb3zj"
        >
          <div className="c-accordion__panel__content">
            <div className="l-inner">
              <div className="s-configuratorResults__accordion__results__grid s-configuratorResults__accordion__results__grid--3Items">
                <div className="c-configuratorResultsCard">
                  <div className="c-accordion c-accordion--noOutline">
                    <h5
                      className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                      id="accTab-0wt1b2"
                    >
                      <button aria-controls="accPanel-61u8yi" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xmlns="http://www.w3.org/1999/xlink"
                            xlinkHref="/images/icons-map.svg#results-memory"
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
                      id="accPanel-61u8yi"
                      aria-labelledby="accTab-0wt1b2"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <h6>Standard</h6>
                            <p>2 GB (Non-removable)</p>
                            <p>3 GB (Non-removable)</p>
                            <p>4 GB (Non-removable)</p>
                            <p>8 GB (Non-removable)</p>
                            <p>12 GB (Non-removable)</p>
                            <p>16 GB (Non-removable)</p>
                          </li>
                          <li>
                            <h6>Maximum</h6>
                            <p>2 GB or</p>
                            <p>3 GB or</p>
                            <p>4 GB or</p>
                            <p>8 GB or</p>
                            <p>12 GB or</p>
                            <p>16 GB</p>
                          </li>
                        </ul>
                        <div
                          className="c-accordion c-configuratorResultsCard__info__bankSchema"
                          data-multiselect="false"
                        >
                          <h6
                            className={`c-accordion__tab + ${
                              accordion ? " c-accordion__tab--active" : ""
                            }`}
                            onClick={() => setAccordion(!accordion)}
                            id="accTab-0078i8"
                          >
                            <button aria-controls="accPanel-hkuol3" aria-expanded="false">
                              <span>Show Bank Schema</span>
                              <span>Hide Bank Schema</span>
                              <svg
                                className="c-accordion__tab__icon"
                                viewBox="0 0 14 8"
                                aria-hidden="true"
                              >
                                <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                              </svg>
                            </button>
                          </h6>
                          <div
                            className="c-accordion__panel"
                            id="accPanel-hkuol3"
                            aria-labelledby="accTab-0078i8"
                          >
                            <div className="c-accordion__panel__content">
                              <ul className="u-list-unstyled">
                                <li>
                                  <p>SSD:</p>
                                  <div className="c-table u-tableUnstyled u-tableCollapse c-configuratorResultsCard__info__bankSchema__table">
                                    <div className="c-table__main">
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/slot.png"
                                                alt="EmptySlot"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/slot.png"
                                                alt="EmptySlot"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/slot.png"
                                                alt="EmptySlot"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/slot.png"
                                                alt="EmptySlot"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="c-configuratorResultsCard">
                  <div className="c-accordion c-accordion--noOutline">
                    <h5
                      className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                      id="accTab-4vxite"
                    >
                      <button aria-controls="accPanel-zaxhi2" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xmlns="http://www.w3.org/1999/xlink"
                            xlinkHref="/images/icons-map.svg#results-storage"
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
                      id="accPanel-zaxhi2"
                      aria-labelledby="accTab-4vxite"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <h6>Bus Architecture</h6>
                            <p>Flash - microSDXC</p>
                            <p>SSD - Propriety</p>
                            <p>USB 2.0/3.x Type-A</p>
                            <p>USB 2.0/3.x Type-C</p>
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
                      id="accTab-6d33v0"
                    >
                      <button aria-controls="accPanel-59z5il" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xmlns="http://www.w3.org/1999/xlink"
                            xlinkHref="/images/icons-map.svg#results-sd_card"
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
                      id="accPanel-59z5il"
                      aria-labelledby="accTab-6d33v0"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <p>0 Socket(s) Memory soldered to motherboard</p>
                            <p>1 Socket(s) USB Type-C</p>
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
                    id="accTab-3bvr5g"
                  >
                    <button aria-controls="accPanel-e9nf2e" aria-expanded="true">
                      <svg
                        className="c-configuratorResultsCard__header__icon"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <use
                          xmlns="http://www.w3.org/1999/xlink"
                          xlinkHref="/images/icons-map.svg#results-part_number"
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
                    id="accPanel-e9nf2e"
                    aria-labelledby="accTab-3bvr5g"
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
                  xmlns="http://www.w3.org/1999/xlink"
                  xlinkHref="/images/icons-map.svg#results-important_notes"
                ></use>
              </svg>
              <h5 className="u-txt-uppercase">Important Configuration Notes</h5>
            </div>
            <div className="c-configuratorResultsCard__info">
              <div className="l-row">
                <div className="l-row__col">
                  <p>
                    SYSTEM STORAGE COULD BE CONFIGURED MANY DIFFERENT WAYS. IF THERE ARE NO STORAGE
                    OPTIONS LISTED OR MISSING STORAGE OPTIONS PLEASE VERIFY YOUR SYSTEM&aps;S
                    CONFIGURATION AND <a href="#link">contact Kingston Support</a>
                  </p>
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
  path: "configurator-two",
  component: S_ConfiguratorTwo,
  navtxt: "Configurator Results: 2",
  htmlName: "ConfiguratorTwo",
  icon: "",
};
