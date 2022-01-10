/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_ConfiguratorSeven = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [accordion, setAccordion] = useState(false);
  const [accordionMain, setAccordionMain] = useState(true);

  useEffect(() => {
    let conf1Vars = {
      ...appState,
      currentPath: "/ui/configurator-seven",
      outputName: "ConfiguratorSeven",
      headerName: "Configurator Results: 7",
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
    if (accordion || accordionMain)
      setDimensions({ ...dimensions, width: dimensions.width - 0.25 });
    if (!accordion || !accordionMain)
      setDimensions({ ...dimensions, width: dimensions.width + 0.25 });
  }, [accordion, accordionMain]);

  //   Customize this loader text
  if (!appState) return "...Loading Configurator Results 7 Section";
  //  add current section classname plus theme
  return (
    <section className={`s-configuratorResults ` + appState.currentTheme} id="configuratorResults0">
      <div className="c-accordion s-configuratorResults__accordion">
        <h2
          className={`c-accordion__tab  s-configuratorResults__accordion__heading ${
            accordionMain ? " c-accordion__tab--active" : ""
          }`}
          id="accTab-wcmwl5"
        >
          <button
            aria-controls="accPanel-4op13q"
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
          id="accPanel-4op13q"
          aria-labelledby="accTab-wcmwl5"
        >
          <div className="c-accordion__panel__content">
            <div className="l-inner">
              <div className="s-configuratorResults__accordion__results__grid s-configuratorResults__accordion__results__grid--2Items">
                <div className="c-configuratorResultsCard">
                  <div className="c-accordion c-accordion--noOutline">
                    <h5
                      className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                      id="accTab-u2qdp4"
                    >
                      <button aria-controls="accPanel-beea1s" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xlink="http://www.w3.org/1999/xlink"
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
                      id="accPanel-beea1s"
                      aria-labelledby="accTab-u2qdp4"
                    >
                      <div className="c-accordion__panel__content">
                        <div
                          className="c-accordion c-configuratorResultsCard__info__bankSchema"
                          data-multiselect="false"
                        >
                          <h6
                            className={`c-accordion__tab + ${
                              accordion ? " c-accordion__tab--active" : ""
                            }`}
                            onClick={() => setAccordion(!accordion)}
                            id="accTab-kl5bwq"
                          >
                            <button aria-controls="accPanel-otr35x" aria-expanded="false">
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
                            id="accPanel-otr35x"
                            aria-labelledby="accTab-kl5bwq"
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
                      id="accTab-37zi4i"
                    >
                      <button aria-controls="accPanel-6mja8j" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xlink="http://www.w3.org/1999/xlink"
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
                      id="accPanel-6mja8j"
                      aria-labelledby="accTab-37zi4i"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <p>4 Socket(s) SSD</p>
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
  path: "configurator-seven",
  component: S_ConfiguratorSeven,
  navtxt: "Configurator Results: 7",
  htmlName: "ConfiguratorSeven",
  icon: "",
};
