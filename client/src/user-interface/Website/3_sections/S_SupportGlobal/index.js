/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_SupportGlobal = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [currentTab, setCurrentTab] = useState("tab1");
  const [mobileDDActive, setMobileDDActive] = useState(false);

  const toggleTab = (tab) => {
    if (currentTab !== tab) {
      setCurrentTab(tab);
    }
    mobileDDActive === true && setMobileDDActive(false);
  };

  useEffect(() => {
    let vars = {
      ...appState,
      currentPath: "/ui/support-global",
      outputName: "SupportGlobal",
      headerName: "Support Global",
      currentTheme: null,
      description:
        "The support global section displays a list of contact information for international customers.",
      htmlSaved: true,
      scripts: [
        "../rexusManager.component.js",
        "../cuid.component.js",
        "../dropDown.component.js",
        "../tabs.layout.js",
      ],
      specs: [["iframe source", ["Define a source to load into the iframe"]]],
    };
    setAppState(vars);
    setContentOptions({
      tab1: {
        name: "tab1",
        label: "Tab Title 1",
        checkbox: null,
        field: "Tab 1",
      },
      col1title: {
        name: "col1title",
        label: "Column 1 Title for Tab 1",
        checkbox: null,
        field: "Column Title 1 (Tab 1)",
      },
      td1: {
        name: "td1",
        label: "Column 1 Info",
        checkbox: null,
        field: "TD 1",
      },
      col2title: {
        name: "col2title",
        label: "Column 2 Title for Tab 1",
        checkbox: null,
        field: "Column Title 2 (Tab 1)",
      },
      td2: {
        name: "td2",
        label: "Column 2 Info",
        checkbox: null,
        field: "TD 2",
      },
      col3title: {
        name: "col3title",
        label: "Column 3 Title for Tab 1",
        checkbox: null,
        field: "Column Title 3 (Tab 1)",
      },
      td3: {
        name: "td3",
        label: "Column 3 Info",
        checkbox: null,
        field: "TD 3",
      },
      tab2: {
        name: "tab2",
        label: "Tab Title 2",
        checkbox: null,
        field: "Tab 2",
      },
      tab3: {
        name: "tab3",
        label: "Tab Title 3",
        checkbox: null,
        field: "Tab 3",
      },
      tab4: {
        name: "tab4",
        label: "Tab Title 4",
        checkbox: null,
        field: "Tab 4",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "243", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Support Global Section";
  return (
    <section className="s-supportGlobal">
      <div className="l-tabView" data-id="tab-kmbcfu">
        <ul
          className={`l-tabView__tabs ${mobileDDActive ? "  l-tabView__tabs--active" : ""}`}
          role="tablist"
        >
          <li
            className="l-tabView__tabs__mobile"
            onClick={() => setMobileDDActive(!mobileDDActive)}
          >
            <span>{currentTab}</span>
            <svg viewBox="0 0 32 32">
              <path d="M24 2L8 16l16 14"></path>
            </svg>
          </li>
          <li
            className={`l-tabView__tabs__tab  ${
              currentTab === "tab1" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            aria-controls="tabContent0_0"
            id="tab0_0"
            aria-selected={currentTab === "tab1" ? "true" : "false"}
            tabIndex="0"
            onClick={() => toggleTab("tab1")}
            onKeyDown={() => toggleTab("tab1")}
          >
            {contentOptions.tab1 && contentOptions.tab1.field}
          </li>
          <li
            className={`l-tabView__tabs__tab  ${
              currentTab === "tab2" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            aria-controls="tabContent0_1"
            id="tab0_1"
            aria-selected={currentTab === "tab2" ? "true" : "false"}
            tabIndex="-1"
            onClick={() => toggleTab("tab2")}
            onKeyDown={() => toggleTab("tab2")}
          >
            {contentOptions.tab2 && contentOptions.tab2.field}
          </li>
          <li
            className={`l-tabView__tabs__tab  ${
              currentTab === "tab3" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            aria-controls="tabContent0_2"
            id="tab0_2"
            aria-selected={currentTab === "tab3" ? "true" : "false"}
            tabIndex="-1"
            onClick={() => toggleTab("tab3")}
            onKeyDown={() => toggleTab("tab3")}
          >
            {contentOptions.tab3 && contentOptions.tab3.field}
          </li>
          <li
            className={`l-tabView__tabs__tab  ${
              currentTab === "tab4" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            aria-controls="tabContent0_3"
            id="tab0_3"
            aria-selected={currentTab === "tab4" ? "true" : "false"}
            tabIndex="-1"
            onClick={() => toggleTab("tab4")}
            onKeyDown={() => toggleTab("tab4")}
          >
            {contentOptions.tab4 && contentOptions.tab4.field}
          </li>
        </ul>
        <div className="l-tabView__panels">
          <div
            className={`l-tabView__panels__panel ${
              currentTab === "tab1" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
            aria-labelledby="tab0_0"
            id="tabContent0_0"
          >
            <div className="c-table c-table--sideKeys u-tableUnstyled">
              <div className="c-table__main">
                <table>
                  <thead>
                    <tr>
                      <th>{contentOptions.col1title && contentOptions.col1title.field}</th>
                      <th>{contentOptions.col2title && contentOptions.col2title.field}</th>
                      <th>{contentOptions.col3title && contentOptions.col3title.field}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{contentOptions.td1 && contentOptions.td1.field}</td>
                      <td>{contentOptions.td2 && contentOptions.td2.field}</td>
                      <td>{contentOptions.td3 && contentOptions.td3.field}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className={`l-tabView__panels__panel ${
              currentTab === "tab2" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
            aria-labelledby="tab0_1"
            id="tabContent0_1"
          >
            <div className="c-table c-table--sideKeys u-tableUnstyled">
              <div className="c-table__main">
                <table>
                  <thead>
                    <tr>
                      <th>Column Title 1 (Tab 2)</th>
                      <th>Column Title 2 (Tab 2)</th>
                      <th>Column Title 3 (Tab 2)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TD 1</td>
                      <td>TD 2</td>
                      <td>TD 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className={`l-tabView__panels__panel ${
              currentTab === "tab3" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
            aria-labelledby="tab0_2"
            id="tabContent0_2"
          >
            <p>This is content for a tab in support global section</p>
          </div>
          <div
            className={`l-tabView__panels__panel ${
              currentTab === "tab4" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
            aria-labelledby="tab0_3"
            id="tabContent0_3"
          >
            <div className="c-table c-table--sideKeys u-tableUnstyled">
              <div className="c-table__main">
                <table>
                  <thead>
                    <tr>
                      <th>Column Title 1 (Tab 4)</th>
                      <th>Column Title 2 (Tab 4)</th>
                      <th>Column Title 3 (Tab 4)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TD 1</td>
                      <td>TD 2</td>
                      <td>TD 3</td>
                    </tr>
                  </tbody>
                </table>
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
  path: "support-global",
  component: S_SupportGlobal,
  navtxt: "Support Global",
  htmlName: "SupportGlobal",
};
