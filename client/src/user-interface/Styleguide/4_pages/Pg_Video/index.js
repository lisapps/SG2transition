import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { useParams, useHistory } from "react-router-dom";
import S_Headline from "../../3_sections/headline/S_Headline";
import S_ContentNav from "../../3_sections/contentNav/S_ContentNav";

// Content Areas
import Name1 from "./content/BumperEndCard";

const Pg_Video = () => {
  const { appState, setAppState } = useContext(AppContext);

  //now currentContent just sets active state for tab btns
  const [currentContent, setCurrentContent] = useState("Name1");

  const history = useHistory();
  //active_tab var to be able to track current tab and push url to browser
  const { active_tab } = useParams();
  let defaultTab = "Name1";

  const toggleTab = (tab) => {
    if (active_tab !== tab) {
      history.push(`/brand/video/${tab}`);
    }
  };

  //this is to change the tab if it's changed from outside this page like search. Also allows forward and back on browser nav.
  useEffect(() => {
    let cPath = location.pathname;
    let tab = cPath.replace("/brand/video/", "");
    setCurrentContent(tab);
  }, [appState.currentPath, location]);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/brand/video",
      outputName: "",
      headerName: "Video Guidelines",
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
    <div className="pg-brandVideo u-flex u-flex1 u-flexColumn">
      <S_Headline
        classMods={"s-headline--alignLeft"}
        headline={appState.headerName}
        history={true}
      />
      <S_ContentNav
        tabs={[{ name: "Bumper & End Card", active: "name1", path: "name1" }]}
        updateContent={setCurrentContent}
        toggleTab={toggleTab}
        currentContent={currentContent}
        classMods={"s-contentNav--tabs"}
      />
      <div className="pg-brandVideo__centerWrap u-flex u-flexColumn u-flex1 u-justifyCenter u-animated u-animated--delayFast u-animated--slower a-fadeIn">
        {currentContent == "name1" ? <Name1 /> : <Name1 />}
      </div>
    </div>
  );
};

export default {
  path: "video/:active_tab",
  component: Pg_Video,
  navtxt: "Video",
};
