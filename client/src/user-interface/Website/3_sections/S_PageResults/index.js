/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_PageResults = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  // These are all states that are needed for sections with picture tags.

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    // currentTheme null if there is no theme applicable
    let fbVars = {
      ...appState,
      currentPath: "/ui/page-results",
      outputName: "PageResults",
      headerName: "Page Results",
      description: "Page Resutls lists out the pages found via the search feature in the nav bar.",
      htmlSaved: true,
      currentTheme: null,
      scripts: [],
      specs: [
        ["Heading", ["String Text, h5 tag with inherit global styling"]],
        ["Copy", ["Standard Text, generated as a P tag"]],
      ],
    };
    setAppState(fbVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "512" });
  }, []);

  if (!appState) return "...Loading Page Results";
  return (
    <section className="s-pageResults">
      <ul className="s-pageResults__list l-inner u-list-unstyled">
        <li className="s-pageResults__list__item">
          <div className="c-resultsCard">
            <h5 className="c-resultsCard__heading">
              <a href="#">
                Results <strong>Memory</strong> Heading
              </a>
            </h5>
            <p className="c-resultsCard__copy">
              Morbi cursus mauris et quam eleifend <strong>memory</strong>. Pellentesque condimentum
              tempor varius. Etiam rhoncus diam eu dapibus porta. Maecenas dictum et est non
              efficitur.
            </p>
          </div>
        </li>
        <li className="s-pageResults__list__item">
          <div className="c-resultsCard">
            <h5 className="c-resultsCard__heading">
              <a href="#">Results Heading </a>
            </h5>
            <p className="c-resultsCard__copy">
              Morbi cursus mauris et quam eleifend vestibulum. Pellentesque condimentum tempor
              varius. Etiam rhoncus diam eu dapibus porta. Maecenas dictum et est non efficitur.
            </p>
          </div>
        </li>
        <li className="s-pageResults__list__item">
          <div className="c-resultsCard">
            <h5 className="c-resultsCard__heading">
              <a href="#">Results Heading </a>
            </h5>
            <p className="c-resultsCard__copy">
              Morbi cursus mauris et quam eleifend vestibulum. Pellentesque condimentum tempor
              varius. Etiam rhoncus diam eu dapibus porta. Maecenas dictum et est non efficitur.
            </p>
          </div>
        </li>
        <li className="s-pageResults__list__item">
          <div className="c-resultsCard">
            <h5 className="c-resultsCard__heading">
              <a href="#">Results Heading </a>
            </h5>
            <p className="c-resultsCard__copy">
              Morbi cursus mauris et quam eleifend vestibulum. Pellentesque condimentum tempor
              varius. Etiam rhoncus diam eu dapibus porta. Maecenas dictum et est non efficitur.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "page-results",
  component: S_PageResults,
  navtxt: "Page Results",
  htmlName: "PageResults",
  icon: "",
};
