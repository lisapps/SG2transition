import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Header = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [phone, setPhone] = useState(null);
  const [tablet, setTablet] = useState(null);
  const [desktop, setDesktop] = useState(null);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height
    // viewWidth is set and changed outside the web components, but preserved by ...appState
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let keyVars = {
      ...appState,
      currentPath: "/ui/header",
      outputName: "Header",
      headerName: "Header",
      description:
        "The Header Section serves as a grand headline for a product or topic. This section can support the largest body of text when compared to other headline related sections (promo and hero). This section is intended to be the first section of any template with related content in the sections that follow.",
      htmlSaved: true,
      currentTheme: null,
      scripts: [],
      specs: [
        ["Image", ["Small: 512 × 752", "Medium: 1024 × 512", "Large: 2048 × 610"]],
        ["Heading", ["Character Limit: 100"]],
        ["Content", ["Character Limit: 400"]],
      ],
    };
    setAppState(keyVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable.
    setContentOptions({
      darkHeading: { label: "Dark Title", checkbox: false, field: null },
      headingAlign: {
        label: "Title Align",
        checkbox: null,
        field: ["Left", "Right"],
        selected: "Left",
      },
      heading: { label: "Title", checkbox: null, field: "Header Headline" },
      darkCopy: { label: "Dark Copy", checkbox: false, field: null },
      paragraph: {
        label: "Content",
        checkbox: true,
        field: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions) return "...Loading Header Section";
  return (
    <DropZone setPhone={setPhone} setTablet={setTablet} setDesktop={setDesktop} pictureTag={true}>
      <section
        className={`s-header ${
          contentOptions.darkHeading && contentOptions.darkHeading.checkbox
            ? "s-header--darkTitle"
            : "s-header"
        } ${
          contentOptions.darkCopy && contentOptions.darkCopy.checkbox ? "s-header--darkCopy" : ""
        } ${
          contentOptions.headingAlign && contentOptions.headingAlign.selected == "Right"
            ? "s-header--titleRightAlign"
            : ""
        }`}
      >
        <div className="s-header__title l-inner">
          <h2>
            {contentOptions.heading && contentOptions.heading.field
              ? contentOptions.heading.field
              : "Header Headline"}
          </h2>
        </div>
        <div className="s-header__copy">
          <div className="l-inner">
            <p>
              {contentOptions.paragraph && contentOptions.paragraph.checked
                ? contentOptions.paragraph.field
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}{" "}
            </p>
          </div>
        </div>
        <div className="s-header__background">
          <picture className="e-picture">
            <source
              srcSet={
                phone && phone.phone ? phone.phone : "https://styleguide.kingston.com/fpo/512/608"
              }
              media="(max-width:32em)"
            />
            <source
              srcSet={
                tablet && tablet.desktop
                  ? tablet.desktop
                  : "https://styleguide.kingston.com/fpo/2048/960"
              }
              media="(min-width:76em)"
            />
            <img
              src={
                desktop && desktop.tablet
                  ? desktop.tablet
                  : "https://styleguide.kingston.com/fpo/1024/784"
              }
              alt="Alternate Text"
            />
          </picture>
        </div>
      </section>
    </DropZone>
  );
};

export default {
  path: "header",
  component: S_Header,
  navtxt: "Header",
  htmlName: "Header",
};
