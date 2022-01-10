import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { useParams, useHistory, useLocation } from "react-router-dom";
import S_Headline from "../../3_sections/headline/S_Headline";
import S_ContentNav from "../../3_sections/contentNav/S_ContentNav";

// Content Areas
import Logo from "./content/Logo";
import BrandColors from "./content/BrandColors";
import Tone from "./content/Tone";
import Typography from "./content/Typography";
import Illustrations from "./content/Illustrations";
import Emojis from "./content/Emojis";
import Examples from "./content/Examples";

const Pg_brandElements = () => {
  // const cUrl = useLocation();
  // console.log("cUrl.pathname: ", cUrl.pathname);
  const { appState, setAppState } = useContext(AppContext);
  //now currentContent just sets active state for tab btns
  const [currentContent, setCurrentContent] = useState("logo");

  const history = useHistory();
  let location = useLocation();
  //active_tab var to be able to track current tab and push url to browser
  const { active_tab } = useParams();
  let defaultTab = "logo";

  const toggleTab = (tab) => {
    if (active_tab !== tab) {
      history.push(`/brand/elements/${tab}`);
    }
  };

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/brand/elements",
      outputName: "",
      headerName: "Brand Elements",
      thumb: "",
      viewHeight: null,
      description: null,
    });
  }, []);

  //this is to change the tab if it's changed from outside this page like search. Also allows forward and back on browser nav.
  useEffect(() => {
    let cPath = location.pathname;
    let tab = cPath.replace("/brand/elements/", "");
    setCurrentContent(tab);
  }, [appState.currentPath, location]);

  useEffect(() => {
    if (!active_tab) {
      history.push(`/${defaultTab}`);
    }
    active_tab !== currentContent ? setCurrentContent(active_tab) : null;
    window.scrollTo(0, 0);
  }, [currentContent]);

  return (
    <div className="pg-brandElements u-flex u-flex1 u-flexColumn">
      <S_Headline
        classMods={"s-headline--alignLeft"}
        headline={appState.headerName}
        history={true}
        // breadcrumbs={[
        //   {
        //     url: "/",
        //     text: "Home",
        //   },
        //   {
        //     url: "/brand/guidelines",
        //     text: "Brand Guidelines",
        //   },
        // ]}
      />
      <S_ContentNav
        tabs={[
          { name: "Logo", active: "logo", path: "logo" },
          { name: "Brand Colors", active: "colors", path: "colors" },
          { name: "Typography", active: "typography", path: "typography" },
          { name: "Illustrations", active: "illustrations", path: "illustrations" },
          { name: "Tone of Voice", active: "tone", path: "tone" },
          { name: "Emojis", active: "emojis", path: "emojis" },
          { name: "Examples", active: "examples", path: "examples" },
        ]}
        updateContent={setCurrentContent}
        toggleTab={toggleTab}
        currentContent={currentContent}
        classMods={"s-contentNav--tabs"}
      />
      <div
        className="pg-brandElements__centerWrap u-flex u-flexColumn u-flex1 u-justifyCenter u-animated u-animated--delayFast u-animated--slower a-fadeIn"
        style={{ background: "white" }}
      >
        {currentContent == "logo" ? (
          <Logo />
        ) : currentContent == "colors" ? (
          <BrandColors />
        ) : currentContent == "tone" ? (
          <Tone />
        ) : currentContent == "emojis" ? (
          <Emojis />
        ) : currentContent == "examples" ? (
          <Examples />
        ) : currentContent == "illustrations" ? (
          <Illustrations />
        ) : (
          <Typography />
        )}
      </div>
    </div>
  );
};

export default {
  path: "elements/:active_tab",
  component: Pg_brandElements,
  navtxt: "Brand Elements",
};
