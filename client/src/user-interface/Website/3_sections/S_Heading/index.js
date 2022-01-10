/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Heading = () => {
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
    let headingVars = {
      ...appState,
      currentPath: "/ui/heading",
      outputName: "Heading",
      headerName: "Heading",
      description:
        "The Heading Section displays a heading along with a brief subtitle and/or description.",
      htmlSaved: true,
      currentTheme: "t-white",
      scripts: [],
      specs: [
        ["Heading Title", ["Character Limit: 50"]],
        ["Subheading", ["Character Limit: 120"]],
        ["Description", ["Character Limit: 300"]],
      ],
    };
    setAppState(headingVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions({
      heading1: { label: "Heading", checkbox: null, field: "Heading Title" },
      sub: { label: "Subheading", checkbox: true, field: "Subheading Title" },
      desc: { label: "Description", checkbox: true, field: "Additional Paragraph" },
    });
    setDimensions({ ...dimensions, viewHeight: "168" });
  }, []);

  if (!contentOptions) return "...Loading Heading";
  return (
    <section className={`s-heading ` + appState.currentTheme}>
      <div className="c-heading">
        <div className="c-heading__block">
          <div className="c-heading__block__header">
            <h2 className="">
              {contentOptions.heading1 && contentOptions.heading1.field}
              {contentOptions.sub && contentOptions.sub.checkbox ? (
                <span className="u-txt-subhead">{contentOptions.sub.field}</span>
              ) : (
                ""
              )}
            </h2>
            {contentOptions.desc && contentOptions.desc.checkbox ? (
              <p>{contentOptions.desc.field}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "heading",
  component: S_Heading,
  navtxt: "Heading",
  htmlName: "Heading",
  icon: "",
};
