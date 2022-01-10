/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_SearchConfigurator = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let revVars = {
      ...appState,
      currentPath: "/ui/search-configurator",
      outputName: "SearchConfigurator",
      headerName: "Search Configurator",
      currentTheme: "t-slate",
      description: "The Search Configurator...",
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Heading", ["Character Limit: None"]],
        ["Text", ["String text"]],
        ["Input", ["Input field"]],
        ["Button", ["Button cta is string text"]],
      ],
    };
    setAppState(revVars);
    setContentOptions({
      heading1: {
        name: "heading1",
        label: "Heading 1",
        checkbox: null,
        field: "Search by System/Device",
      },
      text1: {
        name: "text1",
        label: "Instruction Text 1",
        checkbox: null,
        field:
          "Simply enter the make and model number or system part number of the computer system or digital device to find the Kingston products you need.",
      },
      button1: {
        name: "button1",
        label: "Button 1 Text",
        checkbox: null,
        field: "Search",
      },
      heading2: {
        name: "heading2",
        label: "Heading 2",
        checkbox: null,
        field: "Search by Part Number",
      },
      text2: {
        name: "text2",
        label: "Instruction Text 2",
        checkbox: null,
        field:
          "Search by either the Kingston part number, distributor part number or manufacturer equivalent part number.",
      },
      button2: {
        name: "button2",
        label: "Button 2 Text",
        checkbox: null,
        field: "Search",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "328", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Search Configurator Section";
  return (
    <section className={"s-searchConfigurator " + appState.currentTheme}>
      <div className="s-searchConfigurator__body l-inner">
        <div className="l-grid l-grid--2col@lg">
          <div className="c-searchCard">
            <h4 className="c-searchCard__heading">
              {contentOptions.heading1 && contentOptions.heading1.field}
            </h4>
            <div className="c-searchCard__body">
              <p>{contentOptions.text1 && contentOptions.text1.field}</p>
              <form className="c-searchCard__body__cta">
                <div className="f-input">
                  <div className="f-input__icon">
                    <svg viewBox="0 0 17.2 16.7" aria-hidden="true">
                      <path d="M9.8 0C5.7 0 2.4 3.3 2.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4S13.9 0 9.8 0zm0 12.8c-3 0-5.3-2.4-5.3-5.3 0-3 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"></path>
                      <path d="M4.5 10.5L.4 14.6c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l4.1-4.1"></path>
                    </svg>
                  </div>
                  <div className="f-input__string">
                    <input
                      type="text"
                      name="card1"
                      id="card1"
                      required="required"
                      pattern="[a-zA-Z0-9]+"
                    />
                    <label htmlFor="card1">Enter Make/Model</label>
                  </div>
                </div>
                <a className="e-btn e-btn--+" href="#">
                  {contentOptions.button1 && contentOptions.button1.field}
                </a>
              </form>
            </div>
          </div>
          <div className="c-searchCard">
            <h4 className="c-searchCard__heading">
              {contentOptions.heading2 && contentOptions.heading2.field}
            </h4>
            <div className="c-searchCard__body">
              <p>{contentOptions.text2 && contentOptions.text2.field}</p>
              <form className="c-searchCard__body__cta">
                <div className="f-input" data-id="fi-ipqdfn">
                  <div className="f-input__icon">
                    <svg viewBox="0 0 17.2 16.7" aria-hidden="true">
                      <path d="M9.8 0C5.7 0 2.4 3.3 2.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4S13.9 0 9.8 0zm0 12.8c-3 0-5.3-2.4-5.3-5.3 0-3 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"></path>
                      <path d="M4.5 10.5L.4 14.6c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l4.1-4.1"></path>
                    </svg>
                  </div>
                  <div className="f-input__string">
                    <input
                      type="text"
                      name="card2"
                      id="card2"
                      required="required"
                      pattern="[a-zA-Z0-9]+"
                    />
                    <label htmlFor="card2">Enter Make/Model</label>
                  </div>
                </div>
                <a className="e-btn e-btn--+" href="#">
                  {contentOptions.button2 && contentOptions.button2.field}
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "search-configurator",
  component: S_SearchConfigurator,
  navtxt: "Search Configurator",
  htmlName: "SearchConfigurator",
};
