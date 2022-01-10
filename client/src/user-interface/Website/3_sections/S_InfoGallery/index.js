/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import C_InfoCard from "../../2_components/infoCard/C_InfoCard";

const S_InfoGallery = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  //   useEffect(() => {
  //     dimensions.width = window.innerWidth - 24;
  //   }, [DimensionsContext]);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let fbVars = {
      ...appState,
      currentPath: "/ui/info-gallery",
      outputName: "InfoGallery",
      headerName: "Info Gallery",
      description:
        "The Information Gallery is a collection of information displayed in card format along with a call to action.",
      currentTheme: "t-white",
      htmlSaved: true,
      scripts: ["../rexusManager.component.js", "../flexTiles.layout.js"],
      specs: [
        ["Image", ["335 x 150px"]],
        ["Title", ["Character Limit: "]],
        ["Copy", ["Character Limit: "]],
        ["CTA", ["Character Limit: "]],
      ],
    };
    setAppState(fbVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions({
      title1: {
        name: "title1",
        label: "Title 1",
        checkbox: null,
        field: "300x200 Image Example",
      },
      copy1: {
        name: "copy1",
        label: "Copy 1",
        checkbox: null,
        field: "Info Card 1 Copy",
      },
      cta1: {
        name: "cta1",
        label: "CTA 1",
        checkbox: null,
        field: "Learn More",
      },
      title2: {
        name: "title2",
        label: "Title 2",
        checkbox: null,
        field: "384x144 Image Example",
      },
      copy2: {
        name: "copy1",
        label: "Copy 1",
        checkbox: null,
        field: "Info Card 1 Copy",
      },
      cta2: {
        name: "cta1",
        label: "CTA 1",
        checkbox: null,
        field: "Learn More",
      },
      title3: {
        name: "title3",
        label: "Title 3",
        checkbox: null,
        field: "128x120 Image Example",
      },
      copy3: {
        name: "copy1",
        label: "Copy 1",
        checkbox: null,
        field: "Info Card 1 Copy",
      },
      cta3: {
        name: "cta1",
        label: "CTA 1",
        checkbox: null,
        field: "Learn More",
      },
      title4: {
        name: "title4",
        label: "Title 4",
        checkbox: null,
        field:
          "720x405 Image Example with very long title that will push down any text in the content below, and it goes on and on and is really longer than a normal headline.",
      },
      copy4: {
        name: "copy1",
        label: "Copy 1",
        checkbox: null,
        field: "Info Card 1 Copy",
      },
      cta4: {
        name: "cta1",
        label: "CTA 1",
        checkbox: null,
        field: "Learn More",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "" });
  }, []);

  if (!contentOptions || !dimensions) return "...Loading Info Gallery";
  return (
    <section className={`s-infoGallery ${appState.currentTheme}`}>
      <ul className="l-flexTiles" data-min-width="150" data-max-width="350" data-cuid="ft-ul88xj">
        <li
          className="l-flexTiles__item"
          data-index="0"
          data-flex-tile="true"
          style={
            dimensions.width < 700
              ? { width: "50%" }
              : dimensions.width > 699 && dimensions.width < 769
              ? { width: "33%" }
              : { width: "25%" }
          }
        >
          <C_InfoCard
            title={contentOptions.title1 && contentOptions.title1.field}
            copy={contentOptions.copy1 && contentOptions.copy1.field}
            cta={contentOptions.cta1 && contentOptions.cta1.field}
          />
        </li>
        <li
          className="l-flexTiles__item"
          data-index="1"
          data-flex-tile="true"
          style={
            dimensions.width < 700
              ? { width: "50%" }
              : dimensions.width > 699 && dimensions.width < 769
              ? { width: "33%" }
              : { width: "25%" }
          }
        >
          <C_InfoCard
            title={contentOptions.title2 && contentOptions.title2.field}
            copy={contentOptions.copy2 && contentOptions.copy2.field}
            cta={contentOptions.cta2 && contentOptions.cta2.field}
          />
        </li>
        <li
          className="l-flexTiles__item"
          data-index="2"
          data-flex-tile="true"
          style={
            dimensions.width < 700
              ? { width: "50%" }
              : dimensions.width > 699 && dimensions.width < 769
              ? { width: "33%" }
              : { width: "25%" }
          }
        >
          <C_InfoCard
            title={contentOptions.title3 && contentOptions.title3.field}
            copy={contentOptions.copy3 && contentOptions.copy3.field}
            cta={contentOptions.cta3 && contentOptions.cta3.field}
          />
        </li>
        <li
          className="l-flexTiles__item"
          data-index="3"
          data-flex-tile="true"
          style={
            dimensions.width < 700
              ? { width: "50%" }
              : dimensions.width > 699 && dimensions.width < 769
              ? { width: "33%" }
              : { width: "25%" }
          }
        >
          <C_InfoCard
            title={contentOptions.title4 && contentOptions.title4.field}
            copy={contentOptions.copy4 && contentOptions.copy4.field}
            cta={contentOptions.cta4 && contentOptions.cta4.field}
          />
        </li>
      </ul>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "info-gallery",
  component: S_InfoGallery,
  navtxt: "Info Gallery",
  htmlName: "InfoGallery",
  icon: "",
};
