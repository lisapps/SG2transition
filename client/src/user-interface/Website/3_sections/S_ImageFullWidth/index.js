/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const S_ImageFullWidth = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  // These are all states that are needed for sections with picture tags.
  const [phone, setPhone] = useState(null);
  const [tablet, setTablet] = useState(null);
  const [desktop, setDesktop] = useState(null);

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
      currentPath: "/ui/image-full-width",
      outputName: "ImageFullWidth",
      headerName: "Image Full Width",
      description:
        "The Image Section displays a drag and droppable image and the display requires 512, 1024, 2048 pixels wide (height flexible).",
      htmlSaved: true,
      currentTheme: null,
      scripts: [],
      specs: [["Image", ["Small: 512 × 608", "Medium: 1024 × 784", "Large: 2048 × 960"]]],
    };
    setAppState(fbVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "700" });
  }, []);

  if (!appState) return "...Loading Image Full-Width";
  return (
    <DropZone setPhone={setPhone} setTablet={setTablet} setDesktop={setDesktop} pictureTag={true}>
      <section className="s-image s-image--fullWidth">
        <picture className="e-picture" id="js-picture">
          <source
            srcSet={
              phone && phone.phone ? phone.phone : "https://styleguide.kingston.com/fpo/512/608"
            }
            media="(max-width: 32em)"
          />
          <source
            srcSet={
              tablet && tablet.tablet
                ? tablet.tablet
                : "https://styleguide.kingston.com/fpo/2048/960"
            }
            media="(min-width: 64em)"
          />
          <img
            src={
              desktop && desktop.desktop
                ? desktop.desktop
                : "https://styleguide.kingston.com/fpo/1024/784"
            }
            alt="Alternate Text"
          />
        </picture>
      </section>
    </DropZone>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "image-full-width",
  component: S_ImageFullWidth,
  navtxt: "Image - Full Width",
  htmlName: "ImageFullWidth",
  icon: "",
};
