/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_featureBox = () => {
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
    let fbVars = {
      ...appState,
      currentPath: "/ui/feature-box",
      outputName: "featureBox",
      headerName: "Feature Box",
      description:
        "The Feature Box section displays a feature of a product with the name of the feature, an image that’s a badge or icon and a text description below.",
      htmlSaved: true,
      currentTheme: "t-white",
      scripts: [],
      specs: [
        ["SVG", ["Any square ratio (1:1) SVGs will work best"]],
        ["Copy", ["Character Limit: 100"]],
      ],
    };
    setAppState(fbVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions({
      copy1: { label: "Box 1 Copy", checkbox: null, field: "30 years of technology innovation" },
      copy2: { label: "Box 2 Copy", checkbox: null, field: "Worldwide manufacturing & testing" },
      copy3: { label: "Box 3 Copy", checkbox: null, field: "Available in over 30,000 locations" },
    });
    setDimensions({ ...dimensions, viewHeight: "168" });
  }, []);

  if (!contentOptions) return "...Loading Feature Boxes";
  return (
    <section className={`s-featureBox ` + appState.currentTheme}>
      <ul className="s-featureBox__list l-inner u-list-unstyled">
        <li>
          <svg width="20" height="16" viewBox="0 0 20 16" className="">
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path
                  className="cls-1"
                  d="M17.33 11.11c-.82.73-1.31-.13-1.92.38l-.08-.05.3-.26a2.85 2.85 0 0 1 .79-1 5.37 5.37 0 0 1 2.9-.24c-.37.09-.64 0-1.06.33s-.65.59-.93.84zM13.34 13.62l-.07-.09.41-.17a3.23 3.23 0 0 1 1.22-.81 6.08 6.08 0 0 1 3.19.79c-.43 0-.67-.28-1.25 0-.39.17-.91.42-1.3.59-1.16.46-1.37-.64-2.2-.31zM14.75 16c-.39-.18-.53-.5-1.17-.46-.43 0-1 .08-1.43.11-1.24.06-1.07-1-2-1v-.11h.45a3.24 3.24 0 0 1 1.4-.35A6.07 6.07 0 0 1 14.75 16zM16.16 4.07h-.06l-.1-.22a2 2 0 0 1-.49-.79 3.85 3.85 0 0 1 .58-2c0 .27-.19.42 0 .79s.25.58.35.84c.23.73-.44.85-.28 1.38zM17.78 4.13c0 .3-.08.71-.13 1-.14.87-.88.59-1 1.22h-.08v-.31a2.29 2.29 0 0 1 0-1 4.31 4.31 0 0 1 1.68-1.62c-.16.2-.4.26-.47.71zM18.7 7.11c-.2.26-.44.63-.64.9-.58.77-1.14.12-1.57.66h-.08l.21-.27a2.49 2.49 0 0 1 .5-1 4.68 4.68 0 0 1 2.43-.7c-.3.08-.55.01-.85.41zM14.47 2.25l-.14-.17a1.58 1.58 0 0 1-.55-.47 3 3 0 0 1 0-1.61c0 .21 0 .35.15.6l.45.54c.38.48-.11.72.16 1.07zM2.22 11.12c.82.73 1.31-.13 1.92.38l.08-.05-.3-.26a2.85 2.85 0 0 0-.79-1 5.37 5.37 0 0 0-2.9-.24c.37.09.64 0 1.06.33s.65.59.93.84zM6.21 13.63l.07-.09-.41-.17a3.23 3.23 0 0 0-1.22-.81 6.08 6.08 0 0 0-3.19.79c.43 0 .67-.28 1.25 0 .39.17.91.42 1.3.59 1.16.46 1.37-.64 2.2-.31zM4.8 16c.39-.18.53-.5 1.17-.46.43 0 1 .08 1.43.11 1.24.06 1.07-1 2-1v-.11h-.45a3.24 3.24 0 0 0-1.43-.34A6.07 6.07 0 0 0 4.8 16zM3.39 4.08h.06l.1-.26A2 2 0 0 0 4 3.07a3.85 3.85 0 0 0-.58-2c0 .27.19.42 0 .79s-.25.58-.35.84c-.19.73.51.85.32 1.38zM1.77 4.14c0 .3.08.71.13 1 .14.87.88.59 1 1.22H3v-.31A2.29 2.29 0 0 0 3 5a4.31 4.31 0 0 0-1.72-1.61c.18.25.42.3.49.75zM.85 7.12c.2.26.44.63.64.9.58.77 1.14.12 1.57.66h.08l-.21-.27a2.49 2.49 0 0 0-.5-1A4.68 4.68 0 0 0 0 6.65c.3.14.55.07.85.47zM5.08 2.26l.14-.17a1.58 1.58 0 0 0 .55-.47A3 3 0 0 0 5.81 0c0 .21 0 .35-.15.6l-.45.54c-.38.48.11.72-.16 1.07zM11.32 4.34c-.33 0-.49.15-.49.45v5.69c0 .25.16.39.49.39s.45-.13.45-.39V4.79a.39.39 0 0 0-.45-.45z"
                ></path>
                <path
                  className="cls-1"
                  d="M9.72 1.54a5.93 5.93 0 1 0 5.93 5.93 5.93 5.93 0 0 0-5.93-5.93zM9.3 4.38l-1 2.29h.11a.9.9 0 0 1 .59.26.82.82 0 0 1 .27.63v2.95c0 .84-.45 1.26-1.37 1.25s-1.36-.41-1.36-1.25v-.65h.91v.63c0 .21.16.3.46.3s.45-.1.45-.3V7.87a.34.34 0 0 0-.3-.3h-.84v-.88l1-2.28H6.56v-.88H9.3zm3.37 6.11c0 .86-.46 1.29-1.37 1.29s-1.36-.43-1.36-1.29V4.78c0-.89.46-1.34 1.4-1.34a1.18 1.18 0 0 1 1.34 1.34z"
                ></path>
                <path
                  className="cls-1"
                  d="M9.72 1.54a5.93 5.93 0 1 0 5.93 5.93 5.93 5.93 0 0 0-5.93-5.93zM9.3 4.38l-1 2.29h.11a.9.9 0 0 1 .59.26.82.82 0 0 1 .27.63v2.95c0 .84-.45 1.26-1.37 1.25s-1.36-.41-1.36-1.25v-.65h.91v.63c0 .21.16.3.46.3s.45-.1.45-.3V7.87a.34.34 0 0 0-.3-.3h-.84v-.88l1-2.28H6.56v-.88H9.3zm3.37 6.11c0 .86-.46 1.29-1.37 1.29s-1.36-.43-1.36-1.29V4.78c0-.89.46-1.34 1.4-1.34a1.18 1.18 0 0 1 1.34 1.34z"
                ></path>
              </g>
            </g>
          </svg>
          <p>{contentOptions.copy1 && contentOptions.copy1.field}</p>
        </li>
        <li>
          <svg width="21" height="18" viewBox="0 0 21 18" className="">
            <g data-name="Layer 2">
              <path
                d="M18.4 11L17 9.16l-2 1.32a6 6 0 1 1-1-4.85L9.76 8.5 7.91 5.26 5.3 6.76l3.47 6.07 12.36-8.44-1.7-2.49L16.34 4l-1.61-.35-.32-2.25-2.22.6L11 0 9.2 1.38 7.37 0 6.21 2 4 1.4l-.33 2.27L1.4 4 2 6.21 0 7.37 1.38 9.2 0 11l2 1.16-.6 2.25 2.21.31.32 1.87L4 17v.08l2.2-.59 1.17 2 1.79-1.37L11 18.45l1.15-2 2.24.6.31-2.28 2.3-.3v-.06l-.06-.22-.47-2z"
                data-name="Layer 1"
              ></path>
            </g>
          </svg>
          <p>{contentOptions.copy2 && contentOptions.copy2.field}</p>
        </li>
        <li>
          <svg width="14" height="20" viewBox="0 0 14 20" className="">
            <path
              d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"
              fillRule="evenodd"
            ></path>
          </svg>
          <p>{contentOptions.copy3 && contentOptions.copy3.field}</p>
        </li>
      </ul>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "feature-box",
  component: S_featureBox,
  navtxt: "Feature Box",
  htmlName: "featureBox",
  icon: "featureBox",
};
