/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import DropZone from "../../../Styleguide/0_hooks/dropzone";

const S_ImageLimitedWidth = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  // These are all states that are needed for sections with picture tags.
  const [phone, setPhone] = useState(null);
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
      currentPath: "/ui/image-limited-width",
      outputName: "ImageLimitedWidth",
      headerName: "Image Limited Width",
      description:
        "The Image Section displays a drag and droppable image and the limited width display requires a 512px wide image and one larger image (could be 960px, 1200px, etc. wide). The larger one would max out at 100% of the image size, after which the selected background theme would show in the margins.",
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
    <DropZone setPhone={setPhone} setDesktop={setDesktop} pictureTag={true}>
      <section className={`s-image ` + appState.currentTheme}>
        <picture className="e-picture" id="js-picture">
          <source
            srcSet={
              phone && phone.phone ? phone.phone : "https://styleguide.kingston.com/fpo/512/608"
            }
            media="(max-width: 32em)"
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
  path: "image-limited-width",
  component: S_ImageLimitedWidth,
  navtxt: "Image - Limited Width",
  htmlName: "ImageLimitedWidth",
  icon: "",
};
