/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import C_BannerCard from "../../2_components/bannerCard/C_BannerCard";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Banners = () => {
  // These are needed for all sections
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  let bannerOptions = {
    txtColor: { label: "Dark Mode", checkbox: false, field: null },
    bannerLink1: { label: "Banner 1 Link", checkbox: null, field: "bannerLink" },
    title1: { label: "Banner 1 Title", checkbox: null, field: "Banner 1 Title" },
    alt1: { label: "Banner 1 Alt Text", checkbox: null, field: "Alternate Text" },
    copy1: { label: "Banner 1 Copy", checkbox: null, field: "Banner 1 Copy" },
    bannerLink2: { label: "Banner 2 Link", checkbox: null, field: "bannerLink" },
    title2: { label: "Banner 2 Title", checkbox: null, field: "Banner 2 Title" },
    alt2: { label: "Banner 2 Alt Text", checkbox: null, field: "Alternate Text" },
    copy2: { label: "Banner 2 Copy", checkbox: null, field: "Banner 2 Copy" },
    bannerLink3: { label: "Banner 3 Link", checkbox: null, field: "bannerLink" },
    title3: { label: "Banner 3 Title", checkbox: null, field: "Banner 3 Title" },
    alt3: { label: "Banner 3 Alt Text", checkbox: null, field: "Alternate Text" },
    copy3: { label: "Banner 3 Copy", checkbox: null, field: "Banner 3 Copy" },
    bannerLink4: { label: "Banner 4 Link", checkbox: null, field: "bannerLink" },
    title4: { label: "Banner 4 Title", checkbox: null, field: "Banner 4 Title" },
    alt4: { label: "Banner 4 Alt Text", checkbox: null, field: "Alternate Text" },
    copy4: { label: "Banner 4 Copy", checkbox: null, field: "Banner 4 Copy" },
  };

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    // viewHeight is used to autoadjust the height in DimensionsContext
    // viewWidth is set and changed outside the web components, but preserved by DimensionsContext
    // outputName is used by IframeWrapper to preload html if it's done.
    // htmlSaved is used to determine if there is html available to load; can't read local file directories from browser
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let bannerVars = {
      ...appState,
      currentPath: "/ui/banners",
      outputName: "Banners",
      headerName: "Bannners",
      currentTheme: "t-silver",
      description:
        "The Banners Section organizes photos with titles and description into a grid based layout using cards that contain the photo, title and description. The number of cards per row changes based on page width.",
      htmlSaved: true,
      scripts: [],
      specs: [
        ["Image", ["Width: 384px, Height: 176px"]],
        ["Title", ["String Text, H3 tag with inherit global styling"]],
        ["Text", ["Standard Text, generated as a P tag (Optional)"]],
      ],
    };
    setAppState(bannerVars);
    // checkbox null makes the field always appear - making that content non-optional. No field, but with a checkbox makes the content optional but not editable. An array in the field value makes it a dropdown.
    setContentOptions(bannerOptions);
    setDimensions({ ...dimensions, viewHeight: "346", width: window.innerWidth - 24 });
  }, []);

  if (!contentOptions || (contentOptions && Object.keys(contentOptions).length < 17))
    return "...Loading Banners";
  return (
    <section
      className={
        `s-banners ${
          contentOptions.txtColor && contentOptions.txtColor.checkbox ? "s-banners--dark " : ""
        }` + appState.currentTheme
      }
    >
      <div className="s-banners__container l-grid l-grid--2col@md l-grid--4col@lg l-grid--flush@sm">
        <C_BannerCard
          link={contentOptions.bannerLink1 && contentOptions.bannerLink1.field}
          title={contentOptions.title1 && contentOptions.title1.field}
          altText={contentOptions.alt1 && contentOptions.alt1.field}
          copy={contentOptions.copy1 && contentOptions.copy1.field}
        />
        <C_BannerCard
          link={contentOptions.bannerLink2 && contentOptions.bannerLink2.field}
          title={contentOptions.title2 && contentOptions.title2.field}
          altText={contentOptions.alt2 && contentOptions.alt2.field}
          copy={contentOptions.copy2 && contentOptions.copy2.field}
        />
        <C_BannerCard
          link={contentOptions.bannerLink3 && contentOptions.bannerLink3.field}
          title={contentOptions.title3 && contentOptions.title3.field}
          altText={contentOptions.alt3 && contentOptions.alt3.field}
          copy={contentOptions.copy3 && contentOptions.copy3.field}
        />
        <C_BannerCard
          link={contentOptions.bannerLink4 && contentOptions.bannerLink4.field}
          title={contentOptions.title4 && contentOptions.title4.field}
          altText={contentOptions.alt4 && contentOptions.alt4.field}
          copy={contentOptions.copy4 && contentOptions.copy4.field}
        />
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "banners",
  component: S_Banners,
  navtxt: "Banners",
  htmlName: "Banners",
  icon: "banners",
};
