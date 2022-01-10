import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import S_MosaicMenu from "../../3_sections/mosaicMenu/S_MosaicMenu";
import S_Headline from "../../3_sections/headline/S_Headline";
import C_PolygonBg from "../../2_components/polygonBG/C_PolygonBG";

const Pg_brandGuidelines = () => {

  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    // this is so user still gets correct/no iframe wrapper if they use browser navigation.
    setAppState({
      ...appState,
      currentPath: "/brand/guidelines",
      outputName: "",
      headerName: "Brand Guidelines",
      thumb: "",
      description:
        "A unified brand look and feel will ensure communications are instantly recognizable as Kingston.",
      viewHeight: null,
    });
  }, []);

  return (
    <div className="pg-brandGuidelines u-flex u-flex1 u-flexColumn" style={{position:"relative"}}>
      <S_Headline headline={"Kingston's Brand Guidelines"} />
      <div className="pg-brandGuidelines__centerWrap u-flex u-flex1 u-justifyCenter u-animated u-animated--delayFast u-animated--slower a-fadeIn" style={{position:"relative"}}>
        <S_MosaicMenu />
        <C_PolygonBg />
      </div>
    </div>
  );
};

export default {
  path: "guidelines",
  component: Pg_brandGuidelines,
  navtxt: "Brand Guidelines",
};
