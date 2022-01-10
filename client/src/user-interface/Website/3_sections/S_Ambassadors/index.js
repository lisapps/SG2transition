import React, { useContext, useEffect } from "react";
import C_AmbassadorCard from "../../2_components/ambassadorCard/C_AmbassadorCard";
import E_Button from "../../1_elements/button/E_Button";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
// Dropzones are set in ambassador cards.

const S_Ambassadors = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    let ambVars = {
      ...appState,
      currentPath: "/ui/ambassadors",
      outputName: "Ambassadors",
      headerName: "Ambassadors",
      description:
        "The Ambassadors Section showcases 4 current brand ambassadors and links them to their profiles. It also provides a View More button to view the rest of the ambassadors.",
      htmlSaved: true,
      scripts: [],
      currentTheme: "t-silver",
      specs: [
        ["Image", ["Width: 600px, Height: 600px"]],
        ["Title", ["Standard Text stylized to H4 tag"]],
        ["Button", ["View More"]],
      ],
    };
    setAppState(ambVars);
    setContentOptions({
      name1: { label: "Name 1", checkbox: null, field: "Ambassador Name 1" },
      name2: { label: "Name 2", checkbox: null, field: "Ambassador Name 2" },
      name3: { label: "Name 3", checkbox: null, field: "Ambassador Name 3" },
      name4: { label: "Name 4", checkbox: null, field: "Ambassador Name 4" },
      btnTxt: { label: "Button Text", checkbox: null, field: "Button CTA" },
    });
    setDimensions({ ...dimensions, viewHeight: "480", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Ambassadors";
  return (
    <section className={`s-ambassadors ` + appState.currentTheme}>
      <div className="s-ambassadors__container">
        <C_AmbassadorCard
          name={(contentOptions.name1 && contentOptions.name1.field) || `Ambassador Name`}
        />
        <C_AmbassadorCard
          name={(contentOptions.name2 && contentOptions.name2.field) || `Ambassador Name`}
        />
        <C_AmbassadorCard
          name={(contentOptions.name3 && contentOptions.name3.field) || `Ambassador Name`}
        />
        <C_AmbassadorCard
          name={(contentOptions.name4 && contentOptions.name4.field) || `Ambassador Name`}
        />
      </div>
      <div className="s-ambassadors__cta">
        <E_Button
          action={true}
          text={(contentOptions.btnTxt && contentOptions.btnTxt.field) || `Button Text`}
        />
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "ambassadors",
  component: S_Ambassadors,
  navtxt: "Ambassadors",
  htmlName: "Ambassadors",
  icon: "ambassadors",
};
