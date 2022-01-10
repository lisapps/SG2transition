import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { useParams, useHistory } from "react-router-dom";
import S_Headline from "../../3_sections/headline/S_Headline";
import S_ContentNav from "../../3_sections/contentNav/S_ContentNav";

// Content Areas
import Vision from "./content/Vision";
import Tagline from "./content/Tagline";
import Icon from "./content/Icon";
import Goal from "./content/Goal";

const Pg_KIWY = () => {
  const { appState, setAppState } = useContext(AppContext);

  //now currentContent just sets active state for tab btns
  const [currentContent, setCurrentContent] = useState("vision");

  const history = useHistory();
  //active_tab var to be able to track current tab and push url to browser
  const { active_tab } = useParams();
  let defaultTab = "Vision";

  const toggleTab = (tab) => {
    if (active_tab !== tab) {
      history.push(`/brand/kiwy/${tab}`);
    }
  };

  //this is to change the tab if it's changed from outside this page like search. Also allows forward and back on browser nav.
  useEffect(() => {
    let cPath = location.pathname;
    let tab = cPath.replace("/brand/kiwy/", "");
    setCurrentContent(tab);
  }, [appState.currentPath, location]);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/brand/kiwy",
      outputName: "",
      headerName: "Kingston Is With You",
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
    <div className="pg-brandKIWY u-flex u-flex1 u-flexColumn">
      <S_Headline
        classMods={"s-headline--alignLeft"}
        headline={appState.headerName}
        history={true}
      />
      <S_ContentNav
        tabs={[
          { name: "Vision", active: "vision", path: "vision" },
          { name: "Goal", active: "goal", path: "goal" },
          { name: "Tag Line", active: "tagline", path: "tagline" },
          { name: "Icon", active: "icon", path: "icon" },
        ]}
        updateContent={setCurrentContent}
        toggleTab={toggleTab}
        currentContent={currentContent}
        classMods={"s-contentNav--tabs"}
      />
      <div className="pg-brandKIWY__centerWrap u-flex u-flexColumn u-flex1 u-justifyCenter u-animated u-animated--delayFast u-animated--slower a-fadeIn">
        {currentContent == "vision" ? (
          <Vision />
        ) : currentContent == "goal" ? (
          <Goal />
        ) : currentContent == "tagline" ? (
          <Tagline />
        ) : (
          <Icon />
        )}
      </div>
    </div>
  );
};

export default {
  path: "kiwy/:active_tab",
  component: Pg_KIWY,
  navtxt: "Kingston Is With You",
};
