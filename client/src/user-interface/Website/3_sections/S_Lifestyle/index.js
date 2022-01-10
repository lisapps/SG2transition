/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const S_Lifestyle = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [featureImage, setFeatureImage] = useState({ preview: "" });

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
      currentPath: "/ui/lifestyle",
      outputName: "Lifestyle",
      headerName: "Lifestyle",
      description: "The Lifestyle Section is a full-width parallax image for aesthetic display.",
      htmlSaved: true,
      currentTheme: null,
      scripts: [],
      specs: [["Image", ["1265 x 400"]]],
    };
    setAppState(fbVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "400" });
  }, []);

  if (!appState) return "...Loading Lifestyle";
  return (
    <DropZone setImage={setFeatureImage}>
      <section className="s-lifestyle" data-dragdrop="data-dragdrop">
        <div
          className="s-lifestyle__parallax"
          data-bg="lifestyle-large.jpg"
          data-speed="3"
          style={{
            backgroundImage: featureImage.preview
              ? `url("` + featureImage.preview + `")`
              : `url("../images/lifestyle-large.jpg")`,
          }}
        ></div>
      </section>
    </DropZone>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "lifestyle",
  component: S_Lifestyle,
  navtxt: "Lifestyle",
  htmlName: "Lifestyle",
  icon: "",
};
