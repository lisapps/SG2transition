/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Decoder = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  // currentPath helps with browser navigation, and highlights the item in nav menu.
  // viewHeight is used to autoadjust the height
  // viewWidth is set and changed outside the web components, but preserved by ...Dimensions context
  // outputName is used by IframeWrapper preload html.
  // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
  useEffect(() => {
    let heroVars = {
      ...appState,
      currentPath: "/ui/decoder",
      outputName: "Decoder",
      headerName: "Decoder Section",
      description:
        "The Decoder Section is designed to help you identify Kingston® memory modules by specification. *The accordion actions need to be verified and so aren't active in the Editable view",
      htmlSaved: true,
      currentTheme: "t-white",
      scripts: [
        "../rexusManager.component.js",
        "../cuid.component.js",
        "../accordion.component.js",
      ],
      specs: [
        ["Number Blocks", ["Number Blocks toggling corresponding accordion in legend"]],
        ["Legend", ["Accordion Component with Standard Text"]],
      ],
    };
    setAppState(heroVars);
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "", width: window.innerWidth - 24 });
  }, []);

  //this context data must be loaded else errors are thrown, so show loading text
  if (!appState) return "...Loading Decoder";
  return (
    <section className={`s-decoder ` + appState.currentTheme} id="decoder0">
      <div className="l-inner">
        <div className="s-decoder__numBlock">
          <p>Part Number: KVR1066D3LD8R7SLK2/46HB *</p>
          <div className="s-decoder__numBlock__numbers">
            <ul aria-label="HyperX Part Number Decoder">
              <li
                data-target="KVR"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-ypmo7v"
              >
                KVR
              </li>
              <li
                data-target="1066"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-sas4ie"
              >
                1066
              </li>
              <li
                data-target="D3"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-r4rgyo"
              >
                D3
              </li>
              <li
                data-target="L"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-oq95f2"
              >
                L
              </li>
              <li
                data-target="D"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-fqwfbx"
              >
                D
              </li>
              <li
                data-target="8"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-and8mo"
              >
                8
              </li>
              <li
                data-target="R"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-9ucvot"
              >
                R
              </li>
              <li
                data-target="7"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-b0xwfx"
              >
                7
              </li>
              <li
                data-target="S"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-lit7fp"
              >
                S
              </li>
              <li
                data-target="L-2"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-spjbrf"
              >
                L
              </li>
              <li
                data-target="K2"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-14yy24"
              >
                K2
              </li>
              <li className="slash">/</li>
              <li
                data-target="4G"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-simzp7"
              >
                4G
              </li>
              <li
                data-target="H"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-3ng16s"
              >
                H
              </li>
              <li
                data-target="B"
                className="c-accordion__tab--active js-accordion"
                tabIndex="0"
                role="button"
                id="accElmTab-z3xjev"
              >
                B
              </li>
            </ul>
          </div>
          <span
            className="s-decoder__numBlock__toggle s-decoder__numBlock__toggle--active"
            data-sectionparent="decoder0"
          >
            <button
              className="s-decoder__numBlock__toggle__show"
              data-accmenutoggle="toggle"
              data-accmenu="decoder"
            >
              Show All
            </button>
            <button
              className="s-decoder__numBlock__toggle__hide"
              data-accmenutoggle="toggle"
              data-accmenu="decoder"
            >
              Hide All
            </button>
          </span>
        </div>
        <div className="s-decoder__legend">
          <div className="l-row">
            <div className="l-row__col l-1/3@md">
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="KVR"
                id="accTargetId-accElmTab-ypmo7v"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-5wkpx6">
                  <button aria-controls="accPanel-mo417u" aria-expanded="true">
                    KVR = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-mo417u"
                  aria-labelledby="accTab-5wkpx6"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>KVR - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="1066"
                id="accTargetId-accElmTab-sas4ie"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-73h327">
                  <button aria-controls="accPanel-w01krh" aria-expanded="true">
                    1066 = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-w01krh"
                  aria-labelledby="accTab-73h327"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>1066 - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="D3"
                id="accTargetId-accElmTab-r4rgyo"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-6udlso">
                  <button aria-controls="accPanel-4kquzo" aria-expanded="true">
                    D3 = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-4kquzo"
                  aria-labelledby="accTab-6udlso"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>D3 - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="L"
                id="accTargetId-accElmTab-oq95f2"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-jda668">
                  <button aria-controls="accPanel-y4osgi" aria-expanded="true">
                    L = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-y4osgi"
                  aria-labelledby="accTab-jda668"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>L - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-row__col l-1/3@md">
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="D"
                id="accTargetId-accElmTab-fqwfbx"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-4ea33o">
                  <button aria-controls="accPanel-8ax2we" aria-expanded="true">
                    D = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-8ax2we"
                  aria-labelledby="accTab-4ea33o"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>D - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="8"
                id="accTargetId-accElmTab-and8mo"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-9vlh29">
                  <button aria-controls="accPanel-x5hig8" aria-expanded="true">
                    8 = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-x5hig8"
                  aria-labelledby="accTab-9vlh29"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>8 - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="R"
                id="accTargetId-accElmTab-9ucvot"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-yjc1t7">
                  <button aria-controls="accPanel-tdypal" aria-expanded="true">
                    R = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-tdypal"
                  aria-labelledby="accTab-yjc1t7"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>R - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="7"
                id="accTargetId-accElmTab-b0xwfx"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-3a32w9">
                  <button aria-controls="accPanel-31tf6t" aria-expanded="true">
                    7 = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-31tf6t"
                  aria-labelledby="accTab-3a32w9"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>7 - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="S"
                id="accTargetId-accElmTab-lit7fp"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-6jnce7">
                  <button aria-controls="accPanel-c5qvr6" aria-expanded="true">
                    S = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-c5qvr6"
                  aria-labelledby="accTab-6jnce7"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>S - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-row__col l-1/3@md">
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="L-2"
                id="accTargetId-accElmTab-spjbrf"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-ky526q">
                  <button aria-controls="accPanel-1ebjhw" aria-expanded="true">
                    L = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-1ebjhw"
                  aria-labelledby="accTab-ky526q"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>L - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="K2"
                id="accTargetId-accElmTab-14yy24"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-k021jk">
                  <button aria-controls="accPanel-648unp" aria-expanded="true">
                    K2 = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-648unp"
                  aria-labelledby="accTab-k021jk"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>K2 - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="4G"
                id="accTargetId-accElmTab-simzp7"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-nmeuih">
                  <button aria-controls="accPanel-8lmtm0" aria-expanded="true">
                    4G = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-8lmtm0"
                  aria-labelledby="accTab-nmeuih"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>4G - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="H"
                id="accTargetId-accElmTab-3ng16s"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-0qhrl4">
                  <button aria-controls="accPanel-lb3p9w" aria-expanded="true">
                    H = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-lb3p9w"
                  aria-labelledby="accTab-0qhrl4"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>H - Kingston ValueRAM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="c-accordion c-accordion--iconBefore c-accordion--noOutline"
                data-target="B"
                id="accTargetId-accElmTab-z3xjev"
              >
                <strong className="c-accordion__tab c-accordion__tab--active" id="accTab-8vxajb">
                  <button aria-controls="accPanel-gttndk" aria-expanded="true">
                    B = Kingston ValueRAM
                    <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden="true">
                      <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
                    </svg>
                  </button>
                </strong>
                <div
                  className="c-accordion__panel"
                  id="accPanel-gttndk"
                  aria-labelledby="accTab-8vxajb"
                >
                  <div className="c-accordion__panel__content">
                    <ul>
                      <li>B - Kingston ValueRAM</li>
                    </ul>
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
//html name should be component/section name without the S_ or C_. It's used by IframeWrapper to load the html version of the section. It can't be gotten from the state if the react version is never loaded.
export default {
  path: "decoder",
  component: S_Decoder,
  navtxt: "Decoder",
  htmlName: "Decoder",
};
