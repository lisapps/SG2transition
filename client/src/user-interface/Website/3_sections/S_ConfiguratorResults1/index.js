/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_ConfiguratorOne = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [accordion, setAccordion] = useState(false);
  const [accordionMain, setAccordionMain] = useState(true);

  useEffect(() => {
    let conf1Vars = {
      ...appState,
      currentPath: "/ui/configurator-one",
      outputName: "ConfiguratorOne",
      headerName: "Configurator Results: 1",
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
  if (!appState) return "...Loading Configurator Results 1 Section";
  //  add current section classname plus theme
  return (
    <section className={`s-configuratorResults ` + appState.currentTheme} id="configuratorResults0">
      <div className="c-accordion s-configuratorResults__accordion">
        <h2
          className={`c-accordion__tab  s-configuratorResults__accordion__heading ${
            accordionMain ? " c-accordion__tab--active" : ""
          }`}
          id="accTab-8d75bw"
        >
          <button
            aria-controls="accPanel-9in9il"
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
          id="accPanel-9in9il"
          aria-labelledby="accTab-8d75bw"
        >
          <div className="c-accordion__panel__content">
            <div className="l-inner">
              <div className="s-configuratorResults__accordion__results__grid s-configuratorResults__accordion__results__grid--4Items">
                <div className="c-configuratorResultsCard">
                  <div className="c-accordion c-accordion--noOutline">
                    <h5
                      className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                      id="accTab-i5lo9i"
                    >
                      <button aria-controls="accPanel-7o83ch" aria-expanded="true">
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
                        <span className="">Memory</span>
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
                      id="accPanel-7o83ch"
                      aria-labelledby="accTab-i5lo9i"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <h6 className="">Standard</h6>
                            <p>4 GB (Non-removable)</p>
                            <p>8 GB (Non-removable)</p>
                          </li>
                          <li>
                            <h6 className="">Maximum</h6>
                            <p>20 GB with 4GB standard</p>
                            <p>24 GB with 8GB standard</p>
                          </li>
                        </ul>
                        <div className="c-configuratorResultsCard__info__cta">
                          <a href="#anchorLink" title="Anchor Title">
                            Compatible Memory Upgrades
                          </a>
                        </div>
                        <div
                          className="c-accordion c-configuratorResultsCard__info__bankSchema"
                          data-multiselect="false"
                        >
                          <h6
                            className={`c-accordion__tab + ${
                              accordion ? " c-accordion__tab--active" : ""
                            }`}
                            id="accTab-8cgbh2"
                            onClick={() => setAccordion(!accordion)}
                          >
                            <button aria-controls="accPanel-92m1k9" aria-expanded="false">
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
                            id="accPanel-92m1k9"
                            aria-labelledby="accTab-8cgbh2"
                          >
                            <div className="c-accordion__panel__content">
                              <ul className="u-list-unstyled">
                                <li>
                                  <p>CPU 1:</p>
                                  <div className="c-table u-tableUnstyled u-tableCollapse c-configuratorResultsCard__info__bankSchema__table">
                                    <div className="c-table__main">
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <p>CPU 2:</p>
                                  <div className="c-table u-tableUnstyled u-tableCollapse c-configuratorResultsCard__info__bankSchema__table">
                                    <div className="c-table__main">
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="/images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                                className=""
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
                      id="accTab-d8uh6u"
                    >
                      <button aria-controls="accPanel-m8ydma" aria-expanded="true">
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
                        <span className="">Storage</span>
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
                      id="accPanel-m8ydma"
                      aria-labelledby="accTab-d8uh6u"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <h6 className="">Bus Architecture</h6>
                            <p>Flash - SDXC</p>
                            <p>SSD - M.2 NVMe</p>
                            <p>SSD - M.2 SATA</p>
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
                      id="accTab-b80exd"
                    >
                      <button aria-controls="accPanel-ee429m" aria-expanded="true">
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
                        <span className="">Expansion</span>
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
                      id="accPanel-ee429m"
                      aria-labelledby="accTab-b80exd"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <p>1 Socket(s)</p>
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
                      id="accTab-or3htw"
                    >
                      <button aria-controls="accPanel-smi9er" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xlink="http://www.w3.org/1999/xlink"
                            xlinkHref="../images/icons-map.svg#results-cpu_chipset"
                          ></use>
                        </svg>
                        <span className="">CPU/Chipset</span>
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
                      id="accPanel-smi9er"
                      aria-labelledby="accTab-or3htw"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <p>Intel Core i5 7th/8th Gen</p>
                            <p>Intel Core i7 8th Gen</p>
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
                    id="accTab-vl8o2e"
                  >
                    <button aria-controls="accPanel-2597z2" aria-expanded="true">
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
                      <span className="">System Part Numbers</span>
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
                    id="accPanel-2597z2"
                    aria-labelledby="accTab-vl8o2e"
                  >
                    <div className="c-accordion__panel__content">
                      <div className="l-row">
                        <div className="l-row__col">
                          <p>20L7xxx; 20L8xxx</p>
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
              <p>
                Faster memory will clock down to run at optimal speed depending on processor model
                installed. Intel® 7th/8th Gen processors support DDR4-2400 and Intel® 6th Gen
                processors support DDR4-2133.
              </p>
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
  path: "configurator-one",
  component: S_ConfiguratorOne,
  navtxt: "Configurator Results: 1",
  htmlName: "ConfiguratorOne",
  icon: "",
};
