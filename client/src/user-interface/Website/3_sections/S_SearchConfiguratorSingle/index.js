/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_SearchConfiguratorSingle = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let revVars = {
      ...appState,
      currentPath: "/ui/search-configurator-single",
      outputName: "SearchConfiguratorSingle",
      headerName: "Search Configurator: Single",
      currentTheme: "t-white",
      description: "The Single Search Configurator...",
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Heading", ["Character Limit: None"]],
        ["Input", ["Input field"]],
        ["Button", ["Button cta is string text"]],
      ],
    };
    setAppState(revVars);
    setContentOptions({
      heading: {
        name: "heading1",
        label: "Heading 1",
        checkbox: null,
        field: "Search by System/Device",
      },
      button: {
        name: "button1",
        label: "Button 1 Text",
        checkbox: null,
        field: "Search",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "215" });
  }, []);

  if (!contentOptions) return "...Loading Search Configurator Section";
  return (
    <section className={"s-SearchConfiguratorSingle " + appState.currentTheme}>
      <div className="c-heading">
        <div className="c-heading__block">
          <div className="c-heading__block__header">
            <h2>{contentOptions.heading && contentOptions.heading.field}</h2>
          </div>
        </div>
      </div>
      <div className="l-inner">
        <div className="c-searchCard c-searchCard--singleBar">
          <form>
            <div className="f-input f-input--outlined" data-id="fi-8pcxo9">
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
              <div className="f-input__cta">
                <button className="e-btn e-btn--+ u-hide-sm" href="#">
                  {contentOptions.button && contentOptions.button.field}
                </button>
              </div>
            </div>
            <button className="e-btn e-btn--+ c-searchCard__mBtn u-show-sm" href="#">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "search-configurator-single",
  component: S_SearchConfiguratorSingle,
  navtxt: "Search Configurator: Single",
  htmlName: "SearchConfiguratorSingle",
};
