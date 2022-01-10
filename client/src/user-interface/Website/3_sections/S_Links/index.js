/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Links = () => {
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
      currentPath: "/ui/links",
      currentTheme: "t-stone",
      outputName: "Links",
      headerName: "Links",
      description: "The Links Section displays a collection of links with optional descriptions.",
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
        field: "Link's Text",
      },
      desc1: {
        label: "Description 1 Paragraph",
        checkbox: true,
        field: "Link's paragraph description.",
      },
      linkText2: {
        label: "Link 2 Text",
        checkbox: null,
        field: "Link's Text",
      },
      desc2: {
        label: "Description 2 Paragraph",
        checkbox: true,
        field: "Link's paragraph description.",
      },
      linkText3: {
        label: "Link 3 Text",
        checkbox: null,
        field: "Link's Text",
      },
      desc3: {
        label: "Description 3 Paragraph",
        checkbox: true,
        field: "Link's paragraph description.",
      },
      linkText4: {
        label: "Link 4 Text",
        checkbox: null,
        field: "Link's Text",
      },
      desc4: {
        label: "Description 4 Paragraph",
        checkbox: true,
        field: "Link's paragraph description.",
      },
      linkText5: {
        label: "Link 5 Text",
        checkbox: null,
        field: "Link's Text",
      },
      desc5: {
        label: "Description 5 Paragraph",
        checkbox: true,
        field: "Link's paragraph description.",
      },
      linkText6: {
        label: "Link 6 Text",
        checkbox: null,
        field: "Link's Text",
      },
      desc6: {
        label: "Description 6 Paragraph",
        checkbox: true,
        field: "Link's paragraph description.",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "186", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Legal";
  return (
    <section className={"s-links " + appState.currentTheme}>
      <div className="l-inner">
        <ul className="l-row u-m0">
          <li className="l-row__col l-1/2 l-1/3@md">
            <a className="u-txt-bold" href="#link1" title="Anchor Title">
              {contentOptions.linkText1 && contentOptions.linkText1.field}
            </a>
            {contentOptions.desc1 && contentOptions.desc1.checkbox ? (
              <p>{contentOptions.desc1.field}</p>
            ) : (
              ""
            )}
          </li>
          <li className="l-row__col l-1/2 l-1/3@md">
            <a className="u-txt-bold" href="#link2" title="Anchor Title">
              {contentOptions.linkText2 && contentOptions.linkText2.field}
            </a>
            {contentOptions.desc2 && contentOptions.desc2.checkbox ? (
              <p>{contentOptions.desc2.field}</p>
            ) : (
              ""
            )}
          </li>
          <li className="l-row__col l-1/2 l-1/3@md">
            <a className="u-txt-bold" href="#link3" title="Anchor Title">
              {contentOptions.linkText3 && contentOptions.linkText3.field}
            </a>
            {contentOptions.desc3 && contentOptions.desc3.checkbox ? (
              <p>{contentOptions.desc3.field}</p>
            ) : (
              ""
            )}
          </li>
          <li className="l-row__col l-1/2 l-1/3@md">
            <a className="u-txt-bold" href="#link4" title="Anchor Title">
              {contentOptions.linkText4 && contentOptions.linkText4.field}
            </a>
            {contentOptions.desc4 && contentOptions.desc4.checkbox ? (
              <p>{contentOptions.desc4.field}</p>
            ) : (
              ""
            )}
          </li>
          <li className="l-row__col l-1/2 l-1/3@md">
            <a className="u-txt-bold" href="#link5" title="Anchor Title">
              {contentOptions.linkText5 && contentOptions.linkText5.field}
            </a>
            {contentOptions.desc5 && contentOptions.desc5.checkbox ? (
              <p>contentOptions.desc5.field</p>
            ) : (
              ""
            )}
          </li>
          <li className="l-row__col l-1/2 l-1/3@md">
            <a className="u-txt-bold" href="#link6" title="Anchor Title">
              {contentOptions.linkText6 && contentOptions.linkText6.field}
            </a>
            {contentOptions.desc6 && contentOptions.desc6.checkbox ? (
              <p>{contentOptions.desc6.field}</p>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. ex: htmlName: "KeyFeature",
export default {
  path: "links",
  component: S_Links,
  navtxt: "Links",
  htmlName: "Links",
  icon: "",
};
