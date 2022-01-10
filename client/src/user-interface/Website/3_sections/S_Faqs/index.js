import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Faqs = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const [currentPanel, setCurrentPanel] = useState("");
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    let faqsVars = {
      ...appState,
      currentPath: "/ui/faqs",
      outputName: "Faqs",
      headerName: "FAQS",
      description:
        "The FAQs section is pretty straight forward in displaying a list of questions with a collapsable menu to reveal the answers. This section is broken up into 2 components with one being optional.",
      htmlSaved: true,
      currentTheme: "t-white",
      scripts: [
        "../rexusManager.component.js",
        "../cuid.component.js",
        "../accordion.component.js",
      ],
      specs: [
        [
          "Subtitle",
          ["H3 tag that acts as a heading for each accordion group of questions. (Optional)"],
        ],
        ["Question", ["Button, styling modified by accordion component"]],
        ["Answer", ["Standard Text, styling modified by accordion component"]],
      ],
    };
    setAppState(faqsVars);
    setContentOptions({
      subtitle: { label: "Subtitle", checkbox: false, field: "FAQs" },
      question1: { label: "Question 1", checkbox: null, field: "Question 1" },
      answer1: {
        label: "Answer 1",
        checkbox: null,
        field:
          "Although the SSD market is growing and SSDs are becoming much more popular, SSD is still a relatively new innovation. As with any new technology, it is only a matter of time before sales increase to a level that will allow manufacturing costs to reduce. In the last few years, the price gap between SSD and HDDs has gotten much smaller.",
      },
      question2: { label: "Question 2", checkbox: null, field: "Question 2 is a little longer" },
      answer2: {
        label: "Answer 2",
        checkbox: null,
        field: "Although the SSD market is growing and SSDs are becoming much more popular.",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "" });
  }, []);

  function handleToggle(faq) {
    faq == currentPanel ? setCurrentPanel("") : setCurrentPanel(faq);
  }

  if (!contentOptions || Object.keys(contentOptions) < 1) return "...Loading FAQs";
  return (
    <section className="s-faqs">
      <div className="l-inner">
        {contentOptions.subtitle && contentOptions.subtitle.checkbox ? (
          <h3>{contentOptions.subtitle && contentOptions.subtitle.field}</h3>
        ) : (
          ""
        )}
        <div className="c-accordion c-accordion--noOutline" data-multiselect="true">
          <span
            className={`c-accordion__tab${
              currentPanel == "accPanel-u7bm8b" ? " c-accordion__tab--active" : ""
            }`}
            id="accTab-7wl4oh"
          >
            <button
              aria-controls="accPanel-u7bm8b"
              aria-expanded="false"
              onClick={() => handleToggle("accPanel-u7bm8b")}
            >
              {contentOptions.question1 && contentOptions.question1.field}
              <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden={true}>
                <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
              </svg>
            </button>
          </span>
          <div className="c-accordion__panel" id="accPanel-u7bm8b" aria-labelledby="accTab-7wl4oh">
            <div className="c-accordion__panel__content">
              <div className="l-inner">
                <p>{contentOptions.answer1 && contentOptions.answer1.field}</p>
              </div>
            </div>
          </div>
          <span
            className={`c-accordion__tab${
              currentPanel == "accPanel-mz9iqp" ? " c-accordion__tab--active" : ""
            }`}
            id="accTab-xohpir"
          >
            <button
              aria-controls="accPanel-mz9iqp"
              aria-expanded="false"
              onClick={() => handleToggle("accPanel-mz9iqp")}
            >
              {contentOptions.question2 && contentOptions.question2.field}
              <svg className="c-accordion__tab__icon" viewBox="0 0 14 8" aria-hidden={true}>
                <path d="M13.02.02a.062.062 0 00-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 00-.09 0L.02.977a.062.062 0 000 .09l6.937 6.915a.066.066 0 00.09 0l.962-.96 5.973-5.954a.065.065 0 000-.09L13.02.02z"></path>
              </svg>
            </button>
          </span>
          <div className="c-accordion__panel" id="accPanel-mz9iqp" aria-labelledby="accTab-xohpir">
            <div className="c-accordion__panel__content">
              <div className="l-inner">
                <p>{contentOptions.answer2 && contentOptions.answer2.field}</p>
              </div>
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
  path: "faqs",
  component: S_Faqs,
  navtxt: "FAQs",
  htmlName: "Faqs",
  icon: "faqs",
};
