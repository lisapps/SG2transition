import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { useParams, useHistory } from "react-router-dom";
import S_Headline from "../../3_sections/headline/S_Headline";
import S_ContentNav from "../../3_sections/contentNav/S_ContentNav";

// Content Areas
import Overview from "./content/Overview";
import B2CvsB2B from "./content/B2C-vs-B2B";
import Guidance from "./content/Guidance";
import ProductLifestyle from "./content/Lifestyle";
import Research from "./content/Research";
// RESEARCH IMPORT

const Pg_Photography = () => {
  const { appState, setAppState } = useContext(AppContext);

  //now currentContent just sets active state for tab btns
  const [currentContent, setCurrentContent] = useState("Overview");

  const history = useHistory();
  //active_tab var to be able to track current tab and push url to browser
  const { active_tab } = useParams();
  let defaultTab = "overview";

  const toggleTab = (tab) => {
    if (active_tab !== tab) {
      history.push(`/brand/photography/${tab}`);
    }
  };

  //this is to change the tab if it's changed from outside this page like search. Also allows forward and back on browser nav.
  useEffect(() => {
    let cPath = location.pathname;
    let tab = cPath.replace("/brand/photography/", "");
    setCurrentContent(tab);
  }, [appState.currentPath, location]);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/brand/photography",
      outputName: "",
      headerName: "Photography",
      thumb: "",
      viewHeight: null,
      description: null,
      hasjs: false,
    });
  }, []);

  useEffect(() => {
    if (!active_tab) {
      history.push(`/${defaultTab}`);
    }
    active_tab !== currentContent ? setCurrentContent(active_tab) : null;
    window.scrollTo(0, 0);
  }, [currentContent]);

  return (
    <div className="pg-photography u-flex u-flex1 u-flexColumn">
      <S_Headline
        classMods={"s-headline--alignLeft"}
        headline={appState.headerName}
        history={true}
      />
      <S_ContentNav
        tabs={[
          { name: "Overview", active: "overview", path: "overview" },
          { name: "B2C vs B2B", active: "b2c-vs-b2b", path: "b2c-vs-b2b" },
          { name: "Guidance", active: "guidance", path: "guidance" },
          { name: "Product Lifestyle", active: "product-lifestyle", path: "product-lifestyle" },
          { name: "Research & Fact Check", active: "research", path: "research" },
        ]}
        updateContent={setCurrentContent}
        toggleTab={toggleTab}
        currentContent={currentContent}
        classMods={"s-contentNav--tabs"}
      />
      <div className="u-flex u-flexColumn u-flex1 u-justifyCenter u-animated u-animated--delayFast u-animated--slower a-fadeIn">
        {currentContent == "overview" ? (
          <Overview />
        ) : currentContent == "b2c-vs-b2b" ? (
          <B2CvsB2B />
        ) : currentContent == "guidance" ? (
          <Guidance />
        ) : currentContent == "product-lifestyle" ? (
          <ProductLifestyle />
        ) : (
          <Research />
        )}
      </div>
    </div>
  );
};

export default {
  path: "photography/:active_tab",
  component: Pg_Photography,
  navtxt: "Photography",
};
