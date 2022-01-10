import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_InPageNav = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    //scripts are the unique js that the section needs. rexusmanager.js always must go first.
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let navVars = {
      ...appState,
      currentPath: "/ui/in-page-nav",
      outputName: "InPageNav",
      headerName: "In Page Nav",
      description:
        "The In-Page-Navigation is used mainly in product pages to jump to specific areas of the page.",
      htmlSaved: true,
      currentTheme: "t-white",
      scripts: ["../rexusManager.component.js", "inPageNav.component.js"],
      specs: [
        ["Name", ["Optional text for a product or section name."]],
        [
          "Links",
          [
            "Standard text, will use the <a> tag with inherit global styling. Wrapped within <li> tags",
          ],
        ],
      ],
    };
    setAppState(navVars);
    setContentOptions({
      Title: { label: "Title", checkbox: null, field: "Cloud Stinger Wireless 8.0" },
    });
    setDimensions({ ...dimensions, viewHeight: "40" });
  }, []);

  // this is a line that returns a line of text as a loader while the page data is loading, otherwise it skips to the next return which is the page output.
  if (!contentOptions) return "...Loading In-Page-Nav";
  return (
    <section className={`s-inPageNav ` + appState.currentTheme} id="inPageNav1">
      <div className="s-inPageNav__product">
        <span>{contentOptions.Title && contentOptions.Title.field}</span>
      </div>
      <span className="e-arrowToggle__down s-inPageNav__toggle">
        <svg viewBox="0 0 14 8">
          <path
            path="path"
            d="M13.02.02a.062.062 0 0 0-.09 0L7.058 5.87c-.038.035-.068.039-.105.01L1.071.02a.062.062 0 0 0-.09 0L.02.977a.062.062 0 0 0 0 .09l6.937 6.915a.066.066 0 0 0 .09 0l.962-.96 5.973-5.954a.065.065 0 0 0 0-.09L13.02.02z"
          />
        </svg>
      </span>
      <div className="s-inPageNav__links">
        <span className="u-invisible">
          <svg viewBox="0 0 14 8">
            <path
              path="path"
              d="M13.02 7.98a.062.062 0 0 1-.09 0L7.058 2.13c-.038-.035-.068-.039-.105-.01L1.071 7.98a.062.062 0 0 1-.09 0L.02 7.023a.062.062 0 0 1 0-.09L6.957.017a.066.066 0 0 1 .09 0l.962.96 5.973 5.954a.065.065 0 0 1 0 .09l-.961.958z"
            />
          </svg>
        </span>
        <ul
          className="s-inPageNav__links__nav"
          id="s-inPageNav__links__nav"
          style={{ left: "0px" }}
        >
          <li>
            <a href="#intro" data-root="inPageNav1">
              Intro
            </a>
          </li>
          <li>
            <a href="#keyFeatures" data-root="inPageNav1">
              Key Features
            </a>
          </li>
          <li>
            <a href="#videos" data-root="inPageNav1">
              Videos
            </a>
          </li>
          <li>
            <a href="#compare" data-root="inPageNav1">
              Compare
            </a>
          </li>
          <li>
            <a href="#reviews" data-root="inPageNav1">
              Reviews
            </a>
          </li>
          <li>
            <a href="#videos" data-root="inPageNav1">
              Videos
            </a>
          </li>
          <li>
            <a href="#videos" data-root="inPageNav1">
              Videos 2
            </a>
          </li>
          <li>
            <a href="#videos" data-root="inPageNav1">
              Videos
            </a>
          </li>
          <li>
            <a href="#compare" data-root="inPageNav1">
              Compare 2
            </a>
          </li>
          <li>
            <a href="#reviews" data-root="inPageNav1">
              Reviews 2
            </a>
          </li>
        </ul>
        <span className="">
          <svg viewBox="0 0 14 8">
            <path
              path="path"
              d="M13.02 7.98a.062.062 0 0 1-.09 0L7.058 2.13c-.038-.035-.068-.039-.105-.01L1.071 7.98a.062.062 0 0 1-.09 0L.02 7.023a.062.062 0 0 1 0-.09L6.957.017a.066.066 0 0 1 .09 0l.962.96 5.973 5.954a.065.065 0 0 1 0 .09l-.961.958z"
            />
          </svg>
        </span>
      </div>
      <span className="s-inPageNav__price">$99.99 - $139.99</span>
      <a className="e-btn" href="#buyLink" target="_self" title="Button Title">
        <span>Buy</span>
      </a>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "in-page-nav",
  component: S_InPageNav,
  navtxt: "In Page Nav",
  htmlName: "InPageNav",
};
