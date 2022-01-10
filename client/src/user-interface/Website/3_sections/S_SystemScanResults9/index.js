/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_SystemScanResults9 = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let ss9Vars = {
      ...appState,
      currentPath: "/ui/system-scan-results-9",
      outputName: "SystemScanResults9",
      headerName: "System Scan Results: 9",
      description: "The System Scan Results Section displays system information",
      htmlSaved: true,
      currentTheme: "t-silver",
      scripts: [
        "../rexusManager.component.js",
        "../systemScanResults.section.js",
        "../progressBar.component.js",
      ],
      specs: [
        ["SVG", ["Width: 18px, Height: 18px"]],
        ["Title", ["String Text, H5 tag with inherit global styling"]],
        ["Sub Titles", ["String Text, H6 tag"]],
        ["Description", ["String Text"]],
        ["Images", ["Width: 56px, Height: 32px"]],
        ["Link", ["String Text"]],
      ],
    };
    setAppState(ss9Vars);
    setContentOptions({
      s9model1: {
        name: "model",
        label: "Model Name 1",
        checkbox: null,
        field: "Lenovo ThinkPad X1 Extreme 2nd",
      },
      s9model2: {
        name: "model",
        label: "Model Name 2",
        checkbox: null,
        field: "ThinkPad 11e",
      },
      s9model3: {
        name: "model",
        label: "Model Name 3",
        checkbox: null,
        field: "Lenovo - ThinkPad 11e (2nd Gen) AMD",
      },
      s9model4: {
        name: "model",
        label: "Model Name 4",
        checkbox: null,
        field: "ThinkCentre M93/M93p Tiny",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "1267", width: window.innerWidth - 24 });
  }, []);

  //   Customize this loader text
  if (!contentOptions) return "...Loading System Scan Results 9 Section";
  //  add current section classname plus theme
  return (
    <section className={`s-systemScanResults ` + appState.currentTheme} id="systemScanResults0">
      <div className="c-heading">
        <div className="c-heading__block">
          <div className="c-heading__block__header">
            <h2>System Scan Results</h2>
          </div>
        </div>
      </div>
      <div className="l-inner s-systemScanResults__layout">
        <div className="c-systemScanResultsCard">
          <div className="c-systemScanResultsCard__header">
            <svg
              className="c-systemScanResultsCard__header__icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <use
                xlink="http://www.w3.org/1999/xlink"
                xlinkHref="../images/icons-map.svg#results-desktop"
              ></use>
            </svg>
            <h3 className="u-h5">Models</h3>
          </div>

          <div className="c-systemScanResultsCard__content">
            <p>We can&apos;t find the exact model match. Is one of these your system?</p>
            <div className="l-row c-systemScanResultsCard__content__model">
              <div className="l-row__col l-1/2@md">
                <a className="c-systemScanResultsCard__content__model__item" href="#model1">
                  <div className="c-systemScanResultsCard__content__model__item__info">
                    <span>Lenovo</span>
                    <p>{contentOptions.s9model1 && contentOptions.s9model1.field}</p>
                  </div>
                  <svg viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#arrow-down"
                    ></use>
                  </svg>
                </a>
                <a className="c-systemScanResultsCard__content__model__item" href="#model1">
                  <div className="c-systemScanResultsCard__content__model__item__info">
                    <span>Lenovo</span>
                    <p>{contentOptions.s9model2 && contentOptions.s9model2.field}</p>
                  </div>
                  <svg viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#arrow-down"
                    ></use>
                  </svg>
                </a>
              </div>
              <div className="l-row__col l-1/2@md">
                <a className="c-systemScanResultsCard__content__model__item" href="#model1">
                  <div className="c-systemScanResultsCard__content__model__item__info">
                    <span>Lenovo</span>
                    <p>{contentOptions.s9model3 && contentOptions.s9model3.field}</p>
                  </div>
                  <svg viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#arrow-down"
                    ></use>
                  </svg>
                </a>
                <a className="c-systemScanResultsCard__content__model__item" href="#model1">
                  <div className="c-systemScanResultsCard__content__model__item__info">
                    <span>Lenovo</span>
                    <p>{contentOptions.s9model4 && contentOptions.s9model4.field}</p>
                  </div>
                  <svg viewBox="0 0 100 100">
                    <use
                      xlink="http://www.w3.org/1999/xlink"
                      xlinkHref="../images/icons-map.svg#arrow-down"
                    ></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="c-systemScanResultsCard">
          <div className="c-systemScanResultsCard__header">
            <svg
              className="c-systemScanResultsCard__header__icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <use
                xlink="http://www.w3.org/1999/xlink"
                xlinkHref="../images/icons-map.svg#results-laptop"
              ></use>
            </svg>
            <h3 className="u-h5">System</h3>
          </div>
          <div className="c-systemScanResultsCard__content">
            <div className="l-row">
              <div className="l-row__col l-1/2@md">
                <h4 className="u-h6">Model</h4>
                <p>Lenovo ThinkPad X1 Extreme 2nd</p>
              </div>
              <div className="l-row__col l-1/2@md">
                <h4 className="u-h6">CPU</h4>
                <p>Interl(R) Core(TM) i7-9750H CPU @ 2.60 GHz</p>
                <h4 className="u-h6">OS</h4>
                <p>Microsoft Windows 10 Pro</p>
              </div>
            </div>
          </div>
        </div>
        <div className="c-systemScanResultsCard c-systemScanResultsCard--half">
          <div className="c-systemScanResultsCard__header">
            <svg
              className="c-systemScanResultsCard__header__icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <use
                xlink="http://www.w3.org/1999/xlink"
                xlinkHref="../images/icons-map.svg#results-memory"
              ></use>
            </svg>
            <h3 className="u-h5">Memory</h3>
            <span className="u-h5 c-systemScanResultsCard__header__total">Total 16GB</span>
          </div>
          <div className="c-systemScanResultsCard__content">
            <div className="c-systemScanResultsCard__content__section">
              <div className="c-systemScanResultsCard__content__section__item">
                <div className="c-systemScanResultsCard__content__section__item__info">
                  <span>2933Mhz DIMM</span>
                  <p>Kingston KVR29N21S6/8</p>
                </div>
                <img src="../images/fpo/section-configurator_results/stick8.png" alt="8GB" />
              </div>
              <div className="c-systemScanResultsCard__content__section__item">
                <div className="c-systemScanResultsCard__content__section__item__info">
                  <span>2933Mhz DIMM</span>
                  <p>Kingston KVR29N21S6/8</p>
                </div>
                <img src="../images/fpo/section-configurator_results/stick8.png" alt="8GB" />
              </div>
            </div>
            <div className="c-systemScanResultsCard__content__upgrade">
              <div className="c-systemScanResultsCard__content__upgrade__header">
                <svg
                  className="c-systemScanResultsCard__content__upgrade__header__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <use
                    xlink="http://www.w3.org/1999/xlink"
                    xlinkHref="../images/icons-map.svg#results-upgrade"
                  ></use>
                </svg>
                <span>Upgrade Recommendations</span>
              </div>
              <p>
                Sorry, this scan didn’t give us anything to base a memory recommendation on. Please
                feel free to reach out to a Kingston expert to help with your configuration
                questions.
              </p>
            </div>
          </div>
        </div>
        <div className="c-systemScanResultsCard c-systemScanResultsCard--half">
          <div className="c-systemScanResultsCard__header">
            <svg
              className="c-systemScanResultsCard__header__icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <use
                xlink="http://www.w3.org/1999/xlink"
                xlinkHref="../images/icons-map.svg#results-storage"
              ></use>
            </svg>
            <h3 className="u-h5">Storage</h3>
            <span className="u-h5 c-systemScanResultsCard__header__total">Total 1.77TB</span>
          </div>
          <div className="c-systemScanResultsCard__content">
            <div className="c-systemScanResultsCard__content__section">
              <div className="c-systemScanResultsCard__content__section__item">
                <div className="c-systemScanResultsCard__content__section__item__info">
                  <span>SATA SSD</span>
                  <p>Kingston A400</p>
                </div>
                <div
                  className="c-progressBar c-progressBar--high"
                  data-value="81%"
                  id="progressBar0"
                >
                  <span className="c-progressBar__info">370GB / 432GB</span>
                  <div className="c-progressBar__content">
                    <span className="c-progressBar__content__percentage">81%</span>
                    <div className="c-progressBar__content__bar">
                      <div
                        className="c-progressBar__content__bar__determinate"
                        style={{ width: "81%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-systemScanResultsCard__content__section__item">
                <div className="c-systemScanResultsCard__content__section__item__info">
                  <span>SATA HDD</span>
                  <p>Western Digital</p>
                </div>
                <div
                  className="c-progressBar c-progressBar--medium"
                  data-value="51%"
                  id="progressBar1"
                >
                  <span className="c-progressBar__info">344GB / 684GB</span>
                  <div className="c-progressBar__content">
                    <span className="c-progressBar__content__percentage">51%</span>
                    <div className="c-progressBar__content__bar">
                      <div
                        className="c-progressBar__content__bar__determinate"
                        style={{ width: "51%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-systemScanResultsCard__content__section__item">
                <div className="c-systemScanResultsCard__content__section__item__info">
                  <span>NVMe PCIe SSD</span>
                  <p>A2000</p>
                </div>
                <div
                  className="c-progressBar c-progressBar--low"
                  data-value="20%"
                  id="progressBar2"
                >
                  <span className="c-progressBar__info">30GB / 123GB</span>
                  <div className="c-progressBar__content">
                    <span className="c-progressBar__content__percentage">20%</span>
                    <div className="c-progressBar__content__bar">
                      <div
                        className="c-progressBar__content__bar__determinate"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-systemScanResultsCard__content__upgrade">
              <div className="c-systemScanResultsCard__content__upgrade__header">
                <svg
                  className="c-systemScanResultsCard__content__upgrade__header__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <use
                    xlink="http://www.w3.org/1999/xlink"
                    xlinkHref="../images/icons-map.svg#results-upgrade"
                  ></use>
                </svg>
                <span>Upgrade Recommendations</span>
              </div>
              <p>
                Sorry, this scan didn’t give us anything to base a memory recommendation on. Please
                feel free to reach out to a Kingston expert to help with your configuration
                questions.
              </p>
            </div>
          </div>
        </div>
        <div className="c-systemScanResultsCard">
          <div className="c-systemScanResultsCard__header">
            <svg
              className="c-systemScanResultsCard__header__icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <use
                xlink="http://www.w3.org/1999/xlink"
                xlinkHref="../images/icons-map.svg#results-no_info"
              ></use>
            </svg>
            <h3 className="u-h5">Questions</h3>
          </div>
          <div className="c-systemScanResultsCard__content">
            <p>
              Please feel free to reach out to a Kingston expert to help with your configuration
              questions.
            </p>
            <div className="c-systemScanResultsCard__content__cta">
              <a className="e-btn e-btn--alt1">
                <svg>
                  <use
                    xlink="http://www.w3.org/1999/xlink"
                    xlinkHref="../images/icons-map.svg#icon-chat"
                  ></use>
                </svg>
                <span>Contact Support</span>
              </a>
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
  path: "system-scan-results-9",
  component: S_SystemScanResults9,
  navtxt: "System Scan Results: 9",
  htmlName: "SystemScanResults9",
};
