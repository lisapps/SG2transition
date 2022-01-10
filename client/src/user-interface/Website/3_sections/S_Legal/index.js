/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Legal = () => {
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
      currentPath: "/ui/legal",

      outputName: "Legal",
      headerName: "Legal",
      description: "The Legal section serves as a section for legal text with footnotes.",
      htmlSaved: true,
      currentTheme: null,
      scripts: [],
      specs: [
        ["Text", ["Basic text formatting within a P tag such as bold, superscripts only."]],
        [
          "Footnotes",
          ["Ordered list text for any numbered callouts in the Legal paragraphs. (Optional)"],
        ],
      ],
    };
    setAppState(lVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions({
      text: {
        label: "Text",
        checkbox: null,
        field:
          "Benchmark scores, results and test methodology stated in published reviews and articles are at the sole discretion of the reviewer and website or publication. Individual results may vary due to the revision of hardware, host hardware, software and usage.",
      },
      foot: {
        label: "Footnote",
        checkbox: true,
        field: "Xbox One stereo adapter required; not included.",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "186", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Legal";
  return (
    <section className="s-legal">
      <div className="l-inner">
        <p>{contentOptions.text && contentOptions.text.field}</p>
        {contentOptions.foot && contentOptions.foot.checkbox ? (
          <ol>
            <li>{contentOptions.foot.field}</li>
          </ol>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. ex: htmlName: "KeyFeature",
export default {
  path: "legal",
  component: S_Legal,
  navtxt: "Legal",
  htmlName: "Legal",
  icon: "",
};
