import React, { Fragment, useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { Link } from "react-router-dom";
import S_Headline from "../../3_sections/headline/S_Headline";
import S_LandingGates from "../../3_sections/landingGates/S_LandingGates";
import C_PolygonBg from "../../2_components/polygonBG/C_PolygonBG";

const Pg_Home = () => {
  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/",
      outputName: "",
      headerName: "Home Page",
      thumb: "",
      description:
        "Welcome to our online hub for Kingston's brand guidelines and assets.",
      breadcrumbs: null,
      classMod: "",
      viewHeight: null,
    });
  }, []);

  return (
    <div className="pg-home u-flex u-flexColumn u-flex1">
      <S_Headline
        headline={[
          "For All Your Creative Needs, ",
          <Link to="/key-feature" key={"keyfeature"}>
            #KingstonIsWithYou
          </Link>,
        ]}
      />
      <div className="pg-brandGuidelines__centerWrap u-flex u-flex1 u-justifyCenter" style={{position: "relative",
    overflow: "hidden"}}>
        <S_LandingGates />
        <C_PolygonBg />
      </div>
    </div>
  );
};

export default {
  path: "/",
  exact: true,
  sticky: true,
  component: Pg_Home,
  navtxt: "Home",
};
