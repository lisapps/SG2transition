/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import C_KeyFeatureItem from "../../2_components/keyfeatureitem/C_KeyFeatureItem";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_KeyFeaturesLite = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let blogVars = {
      ...appState,
      currentPath: "/ui/key-features-lite",
      outputName: "keyfeatureslite",
      headerName: "Key Features Lite",
      description:
        "The Key Features Lite section is columns of product features with an svg, heading and description for each.",
      htmlSaved: true,
      currentTheme: null,
      scripts: [],
      specs: [
        [
          "Blog Card Image",
          ["Optimal Size: 300px x 200px, can work with 720x404 from HyperX also."],
        ],
        ["Blog Card Tags", ["String Text"]],
        ["Blog Card Heading", ["String Text in H5 tag"]],
        ["Blog Card Copy", ["String Text"]],
      ],
    };
    setAppState(blogVars);
    setContentOptions({
      heading1: {
        name: "heading1",
        label: "Heading 1",
        checkbox: null,
        field: "Feature Heading",
      },
      copy1: {
        name: "copy1",
        label: "Paragraph 1",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      heading2: {
        name: "heading2",
        label: "Heading 2",
        checkbox: null,
        field: "Feature Heading",
      },
      copy2: {
        name: "copy2",
        label: "Paragraph 2",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      heading3: {
        name: "heading3",
        label: "Heading 3",
        checkbox: null,
        field: "Feature Heading",
      },
      copy3: {
        name: "copy3",
        label: "Paragraph 3",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      heading4: {
        name: "heading4",
        label: "Heading 4",
        checkbox: null,
        field:
          "Feature Heading Example with very long heading that will push down any text in the content below, and it goes on and on and is really longer than a normal headline.",
      },
      copy4: {
        name: "copy4",
        label: "Paragraph 4",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      heading5: {
        name: "heading5",
        label: "Heading 5",
        checkbox: null,
        field: "Feature Heading",
      },
      copy5: {
        name: "copy5",
        label: "Paragraph 5",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      heading6: {
        name: "heading6",
        label: "Heading 6",
        checkbox: null,
        field: "Feature Heading",
      },
      copy6: {
        name: "copy6",
        label: "Paragraph 6",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      heading7: {
        name: "heading7",
        label: "Heading 7",
        checkbox: null,
        field: "Feature Heading",
      },
      copy7: {
        name: "copy7",
        label: "Paragraph 7",
        checkbox: null,
        field:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      currentLang: null,
    });
    setDimensions({ ...dimensions, viewHeight: "629" });
  }, []);

  if (!contentOptions) return "...Loading Key Features Lite Section";
  return (
    <section className={"s-keyFeaturesLite"}>
      <div className="l-inner">
        <ul className="c-features u-list-unstyled">
          <C_KeyFeatureItem
            title={contentOptions.heading1 && contentOptions.heading1.field}
            copy={contentOptions.copy1 && contentOptions.copy1.field}
          />
          <C_KeyFeatureItem
            title={contentOptions.heading2 && contentOptions.heading2.field}
            copy={contentOptions.copy2 && contentOptions.copy2.field}
          />
          <C_KeyFeatureItem
            title={contentOptions.heading3 && contentOptions.heading3.field}
            copy={contentOptions.copy3 && contentOptions.copy3.field}
          />
          <C_KeyFeatureItem
            title={contentOptions.heading4 && contentOptions.heading4.field}
            copy={contentOptions.copy4 && contentOptions.copy4.field}
          />
          <C_KeyFeatureItem
            title={contentOptions.heading5 && contentOptions.heading5.field}
            copy={contentOptions.copy5 && contentOptions.copy5.field}
          />
          <C_KeyFeatureItem
            title={contentOptions.heading6 && contentOptions.heading6.field}
            copy={contentOptions.copy6 && contentOptions.copy6.field}
          />
          <C_KeyFeatureItem
            title={contentOptions.heading7 && contentOptions.heading7.field}
            copy={contentOptions.copy7 && contentOptions.copy7.field}
          />
        </ul>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "key-features-lite",
  component: S_KeyFeaturesLite,
  navtxt: "Key Features Lite",
  htmlName: "keyfeatureslite",
};
