/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_ConfiguratorTen = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [accordion, setAccordion] = useState(false);
  const [accordionMain, setAccordionMain] = useState(true);

  useEffect(() => {
    let conf1Vars = {
      ...appState,
      currentPath: "/ui/configurator-ten",
      outputName: "ConfiguratorTen",
      headerName: "Configurator Results: 10",
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
  if (!appState) return "...Loading Configurator Results 10 Section";
  //  add current section classname plus theme
  return (
    <section className={`s-configuratorResults ` + appState.currentTheme} id="configuratorResults0">
      <div className="c-accordion s-configuratorResults__accordion">
        <h2
          className={`c-accordion__tab  s-configuratorResults__accordion__heading ${
            accordionMain ? " c-accordion__tab--active" : ""
          }`}
          id="accTab-msvywt"
        >
          <button
            aria-controls="accPanel-tb1nkc"
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
          id="accPanel-tb1nkc"
          aria-labelledby="accTab-msvywt"
        >
          <div className="c-accordion__panel__content">
            <div className="l-inner">
              <div className="s-configuratorResults__accordion__results__grid s-configuratorResults__accordion__results__grid--4Items">
                <div className="c-configuratorResultsCard">
                  <div className="c-accordion c-accordion--noOutline">
                    <h5
                      className="c-accordion__tab c-configuratorResultsCard__header c-accordion__tab--active"
                      id="accTab-v6fiqn"
                    >
                      <button aria-controls="accPanel-oc1im5" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xmlns="http://www.w3.org/1999/xlink"
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
                      id="accPanel-oc1im5"
                      aria-labelledby="accTab-v6fiqn"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <h6>Maximum</h6>
                            <p>2 TB Reg ECC RDIMMs (with 4 Compute Nodes)</p>
                            <p>4 TB LRDIMMs (with 4 Compute Nodes)</p>
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
                            id="accTab-33etiw"
                          >
                            <button aria-controls="accPanel-ydy8hj" aria-expanded="false">
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
                            id="accPanel-ydy8hj"
                            aria-labelledby="accTab-33etiw"
                          >
                            <div className="c-accordion__panel__content">
                              <ul className="u-list-unstyled">
                                <li>
                                  <p>8GB Standard:</p>
                                  <div className="c-table u-tableUnstyled u-tableCollapse c-configuratorResultsCard__info__bankSchema__table">
                                    <div className="c-table__main">
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <p>16GB Standard:</p>
                                  <div className="c-table u-tableUnstyled u-tableCollapse c-configuratorResultsCard__info__bankSchema__table">
                                    <div className="c-table__main">
                                      <table>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img
                                                src="../images/fpo/section-configurator_results/stick8.png"
                                                alt="MemoryStick"
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
                      id="accTab-4nmdo2"
                    >
                      <button aria-controls="accPanel-8ftwkb" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xmlns="http://www.w3.org/1999/xlink"
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
                      id="accPanel-8ftwkb"
                      aria-labelledby="accTab-4nmdo2"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <h6>Bus Architecture</h6>
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
                      id="accTab-82ehe2"
                    >
                      <button aria-controls="accPanel-h2dy8a" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xmlns="http://www.w3.org/1999/xlink"
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
                      id="accPanel-h2dy8a"
                      aria-labelledby="accTab-82ehe2"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <p>4 Socket(s) per Compute Nodes</p>
                            <p>16 Socket(s) per Compute Nodes</p>
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
                      id="accTab-3481m9"
                    >
                      <button aria-controls="accPanel-hrarrt" aria-expanded="true">
                        <svg
                          className="c-configuratorResultsCard__header__icon"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <use
                            xmlns="http://www.w3.org/1999/xlink"
                            xlinkHref="../images/icons-map.svg#results-cpu_chipset"
                          ></use>
                        </svg>
                        <span>CPU/Chipset</span>
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
                      id="accPanel-hrarrt"
                      aria-labelledby="accTab-3481m9"
                    >
                      <div className="c-accordion__panel__content">
                        <ul className="u-list-unstyled">
                          <li>
                            <p>Intel Xeon Intel C62x Series</p>
                          </li>
                        </ul>
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
                  xmlns="http://www.w3.org/1999/xlink"
                  xlinkHref="../images/icons-map.svg#results-important_notes"
                ></use>
              </svg>
              <h5 className="u-txt-uppercase">Important Configuration Notes</h5>
            </div>
            <div className="c-configuratorResultsCard__info">
              <div className="l-row">
                <div className="l-row__col l-1/2@md">
                  <ul>
                    <li>MODULES MUST BE ORDERED AND INSTALLED IN PAIRS for Dual Channel mode.</li>
                    <li>
                      Faster memory will clock down to run at optimal speed depending on processor
                      model installed.
                    </li>
                  </ul>
                </div>
                <div className="l-row__col l-1/2@md">
                  <ul>
                    <li>
                      Only Intel Xeon x2xx Series (Cascade Lake-SP) processors can use memory
                      modules built with 16Gb density DRAM. BIOS/firmware updates and/or specific
                      board revisions may also be required.
                    </li>
                    <li>
                      Faster memory will clock down to run at optimal speed depending on processor
                      model installed.
                    </li>
                    <li>
                      Kingston offers both Registered RDIMM and Load Reduced LRDIMM memory modules.
                      Registered and Load Reduced modules CANNOT be mixed within the same system.
                    </li>
                  </ul>
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
  path: "configurator-ten",
  component: S_ConfiguratorTen,
  navtxt: "Configurator Results: 10",
  htmlName: "ConfiguratorTen",
  icon: "",
};
