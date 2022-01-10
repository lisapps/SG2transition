/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_ShortcutLinks = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let lVars = {
      ...appState,
      currentPath: "/ui/shortcut-links",
      currentTheme: "t-white",
      outputName: "ShortcutLinks",
      headerName: "Shortcut Links",
      description:
        "The shortcut links section provides a quick and simple way to layout links across the section. Only displaying text links, the links will be centered align up until it wraps then it’ll be left aligned.",
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Link Text", ["Character Limit: 50"]],
        ["Paragraph", ["Character Limit: 100"]],
      ],
    };
    setAppState(lVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions({
      linkText1: {
        label: "Link 1 Text",
        checkbox: null,
        field: "Cloud Stinger",
      },

      linkText2: {
        label: "Link 2 Text",
        checkbox: null,
        field: "Cloud Core",
      },

      linkText3: {
        label: "Link 3 Text",
        checkbox: null,
        field: "Cloud Flight",
      },

      linkText4: {
        label: "Link 4 Text",
        checkbox: null,
        field: "Cloud Revolver",
      },

      linkText5: {
        label: "Link 5 Text",
        checkbox: null,
        field: "Cloud Cloud II",
      },

      linkText6: {
        label: "Link 6 Text",
        checkbox: null,
        field: "Cloud Orbit",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "72", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Shortcut Links";
  return (
    <section className={"s-shortcutLinks " + appState.currentTheme}>
      <ul className="s-shortcutLinks__nav u-list-unstyled u-pl u-pr">
        <li className="u-m0">
          <a href="#link1" title="Anchor Title">
            {contentOptions.linkText1 && contentOptions.linkText1.field}
          </a>
        </li>
        <li className="u-m0">
          <a href="#link2" title="Anchor Title">
            {contentOptions.linkText2 && contentOptions.linkText2.field}
          </a>
        </li>
        <li className="u-m0">
          <a href="#link3" title="Anchor Title">
            {contentOptions.linkText3 && contentOptions.linkText3.field}
          </a>
        </li>
        <li className="u-m0">
          <a href="#link4" title="Anchor Title">
            {contentOptions.linkText4 && contentOptions.linkText4.field}
          </a>
        </li>
        <li className="u-m0">
          <a href="#link5" title="Anchor Title">
            {contentOptions.linkText5 && contentOptions.linkText5.field}
          </a>
        </li>
        <li className="u-m0">
          <a href="#link6" title="Anchor Title">
            {contentOptions.linkText6 && contentOptions.linkText6.field}
          </a>
        </li>
      </ul>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. ex: htmlName: "KeyFeature",
export default {
  path: "shortcut-links",
  component: S_ShortcutLinks,
  navtxt: "Shortcut Links",
  htmlName: "ShortcutLinks",
  icon: "",
};
