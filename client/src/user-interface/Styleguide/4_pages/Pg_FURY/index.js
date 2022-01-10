import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { useParams, useHistory } from "react-router-dom";
import S_Headline from "../../3_sections/headline/S_Headline";
import S_ContentNav from "../../3_sections/contentNav/S_ContentNav";

// Content Areas
import Logo from "./content/Logo";
import BrandColors from "./content/BrandColors";
import Typography from "./content/Typography";
import Backgrounds from "./content/Backgrounds";
import Giveaways from "./content/Giveaways";
import CTAStyles from "./content/CTAStyles";
import WebBanners from "./content/WebBanners";
import About from "./content/About";

const Pg_FURY = () => {
  const { appState, setAppState } = useContext(AppContext);

  //now currentContent just sets active state for tab btns
  const [currentContent, setCurrentContent] = useState("logo");

  const history = useHistory();
  //active_tab var to be able to track current tab and push url to browser
  const { active_tab } = useParams();
  let defaultTab = "Logo";

  const toggleTab = (tab) => {
    if (active_tab !== tab) {
      history.push(`/brand/fury/${tab}`);
    }
  };

  //this is to change the tab if it's changed from outside this page like search. Also allows forward and back on browser nav.
  useEffect(() => {
    let cPath = location.pathname;
    let tab = cPath.replace("/brand/fury/", "");
    setCurrentContent(tab);
  }, [appState.currentPath, location]);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/brand/fury",
      outputName: "",
      headerName: "Kingston FURY",
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
    <div className="pg-brandFURY u-flex u-flex1 u-flexColumn">
      <S_Headline
        classMods={"s-headline--alignLeft"}
        headline={appState.headerName}
        history={true}
      />
      <S_ContentNav
        tabs={[
          { name: "Logo", active: "logo", path: "logo" },
          { name: "About", active: "about", path: "about" },
          { name: "Colors", active: "colors", path: "colors" },
          { name: "Typography", active: "typography", path: "typography" },
          { name: "Backgrounds", active: "backgrounds", path: "backgrounds" },
          { name: "Swag", active: "giveaways", path: "giveaways" },
          { name: "CTA Styles", active: "ctastyles", path: "ctastyles" },
          { name: "Web Banners", active: "webbanners", path: "webbanners" },
        ]}
        updateContent={setCurrentContent}
        toggleTab={toggleTab}
        currentContent={currentContent}
        classMods={"s-contentNav--tabs"}
      />
      <div className="pg-brandFURY__centerWrap u-flex u-flexColumn u-flex1 u-justifyCenter u-animated u-animated--delayFast u-animated--slower a-fadeIn">
        {currentContent == "logo" ? (
          <Logo />
        ) : currentContent == "colors" ? (
          <BrandColors />
        ) : currentContent == "about" ? (
          <About />
        ) : currentContent == "typography" ? (
          <Typography />
        ) : currentContent == "backgrounds" ? (
          <Backgrounds />
        ) : currentContent == "giveaways" ? (
          <Giveaways />
        ) : currentContent == "ctastyles" ? (
          <CTAStyles />
        ) : currentContent == "webbanners" ? (
          <WebBanners />
        ) : (
          <Logo />
        )}
      </div>
    </div>
  );
};

export default {
  path: "fury/:active_tab",
  component: Pg_FURY,
  navtxt: "Kingston FURY",
};
