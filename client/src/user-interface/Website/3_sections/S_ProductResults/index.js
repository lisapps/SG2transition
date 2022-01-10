/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
// import C_ProductResultCard from "../../2_components/productResultCard/C_ProductResultCard-test";

const S_ProductResults = () => {
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
    //scripts are the unique js that the section needs. rexusmanager.js always must go first.
    // Specs are what's loaded in the specs tab
    // contentOptions are the fields that are editable in that tab
    let fbVars = {
      ...appState,
      currentPath: "/ui/product-results",
      outputName: "ProductResults",
      headerName: "Product Results",
      description: "The Product Results displays...related products",
      currentTheme: null,
      htmlSaved: true,
      scripts: [
        "../rexusManager.component.js",
        "../cuid.component.js",
        "../gridFlex.layout.js",
        "compactProductCard.component.js",
      ],
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

  if (!contentOptions || !dimensions) return "...Loading Product Results";
  return (
    <section className="s-productResults">
      <ul className="l-gridFlex" data-min="288" data-max="330" data-type="fixed" id="pg-kz7ou9">
        <li data-index="0" data-id="pg-kz7ou9">
          <div
            className="c-compactProductCard c-compactProductCard--dram"
            id="compactProductCard-0"
          >
            <div className="e-tag c-compactProductCard__kit">
              <span className="c-compactProductCard__kit__lg">Kit of 4</span>
              <span className="c-compactProductCard__kit__sm">x 4</span>
            </div>
            <a
              className="c-compactProductCard__link"
              href="#productCardLink"
              title="Product Card Title"
            ></a>
            <div className="c-compactProductCard__header">
              <span className="c-compactProductCard__header__name">
                DDR4 3200MHz Non-ECC Unbuffered SODIMM
                <span className="c-compactProductCard__header__name__partNumber">
                  (KTH-PL426/16G)
                </span>
              </span>
            </div>
            <div className="c-compactProductCard__image">
              <img
                src="https://media.kingston.com/kingston/product/DDR4_Non-ECC_Unbuffered_SODIMM_4GB_1-tn.png"
                alt="DDR4 3200MHz Non-ECC Unbuffered SODIMM"
              />
            </div>
            <div className="c-compactProductCard__details">
              <div className="c-compactProductCard__details__content">
                <div className="c-compactProductCard__details__content__longDesc">
                  <ul className="u-list-commas">
                    <li>This is Bullet Number One and it goes on for a little while here</li>
                    <li>
                      Second Bullet Point Goes Here, thank you very much for not keeping it short
                    </li>
                    <li className="c-compactProductCard__details__content__longDesc__partNumber">
                      Part Number: KTH-PL426/16G
                    </li>
                  </ul>
                </div>
              </div>
              <p className="c-compactProductCard__details__shortDesc">
                CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus
              </p>
              <ul className="c-compactProductCard__details__downloads u-list-unstyled u-list-commas">
                <li>
                  <a
                    href="http://www.africau.edu/images/default/sample.pdf"
                    download=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    Spec Sheet PDF
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.africau.edu/images/default/sample.pdf"
                    download=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    PCN
                  </a>
                </li>
              </ul>
            </div>
            <span className="c-compactProductCard__partNumber">Part Number: KTH-PL426/16G</span>
          </div>
        </li>
        <li data-index="1" data-id="pg-kz7ou9">
          <div
            className="c-compactProductCard c-compactProductCard--product c-compactProductCard--dram"
            id="compactProductCard-1"
          >
            <a
              className="c-compactProductCard__link"
              href="#productCardLink"
              title="Product Card Title"
            ></a>
            <div className="c-compactProductCard__header">
              <span className="c-compactProductCard__header__name">
                DDR4 3200MHz Non-ECC Unbuffered SODIMM
              </span>
            </div>
            <div className="c-compactProductCard__image">
              <img
                src="https://media.kingston.com/kingston/product/DDR4_ECC_Load_Reduced_DIMM_4R_x4_1-tn.png"
                alt="DDR4 3200MHz Non-ECC Unbuffered SODIMM"
              />
            </div>
            <div className="c-compactProductCard__details">
              <div className="c-compactProductCard__details__content">
                <div className="c-compactProductCard__details__content__longDesc">
                  <ul className="u-list-commas">
                    <li>This is Bullet Number One</li>
                    <li>Second Bullet Point Goes Here</li>
                    <li>Maybe a Third One As Well</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li data-index="2" data-id="pg-kz7ou9">
          <div className="c-compactProductCard" id="compactProductCard-2">
            <a
              className="c-compactProductCard__link"
              href="#productCardLink"
              title="Product Card Title"
            ></a>
            <div className="c-compactProductCard__header">
              <span className="c-compactProductCard__header__name">
                DataTraveler 100 G3 USB Flash Drive
                <span className="c-compactProductCard__header__name__partNumber">
                  (KTH-PL426/16G)
                </span>
              </span>
            </div>
            <div className="c-compactProductCard__image">
              <img
                src="https://media.kingston.com/kingston/product/ktc-product-ssd-sedc450r-1-tn.png"
                alt="DataTraveler 100 G3 USB Flash Drive"
              />
            </div>
            <div className="c-compactProductCard__details">
              <div className="c-compactProductCard__details__content">
                <div className="c-compactProductCard__details__content__longDesc">
                  <ul className="u-list-commas">
                    <li>This is Bullet Number One and it goes on for a little while here.</li>
                    <li>
                      Second Bullet Point Goes Here, thank you very much for not keeping it short.
                    </li>
                    <li className="c-compactProductCard__details__content__longDesc__partNumber">
                      Part Number: KTH-PL426/16G
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <span className="c-compactProductCard__partNumber">Part Number: KTH-PL426/16G</span>
          </div>
        </li>
        <li data-index="3" data-id="pg-kz7ou9">
          <div
            className="c-compactProductCard c-compactProductCard--product"
            id="compactProductCard-3"
          >
            <a
              className="c-compactProductCard__link"
              href="#productCardLink"
              title="Product Card Title"
            ></a>
            <div className="c-compactProductCard__header">
              <span className="c-compactProductCard__header__name">
                DataTraveler 100 G3 USB Flash Drive
              </span>
            </div>
            <div className="c-compactProductCard__image">
              <img
                src="https://media.kingston.com/kingston/product/ktc-product-usb-dt100g3-dt100g3256gb-1-tn.png"
                alt="DataTraveler 100 G3 USB Flash Drive"
              />
            </div>
            <div className="c-compactProductCard__details">
              <div className="c-compactProductCard__details__content">
                <div className="c-compactProductCard__details__content__longDesc">
                  <ul className="u-list-commas">
                    <li>Black-on-black sliding cap design</li>
                    <li>USB 3.1 Gen 1 (USB 3.0)</li>
                    <li>32GB, 64GB, 128GB, 256GB</li>
                    <li>Up to 130MB/s read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    //     <section className="s-ProductResults t-white">
    //       <ul className="l-flexTiles" data-min-width="150" data-max-width="350" data-cuid="ft-ul88xj">

    //           <C_ProductResultCard
    //             title={contentOptions.title1 && contentOptions.title1.field}
    //             copy={contentOptions.copy1 && contentOptions.copy1.field}
    //             cta={contentOptions.cta1 && contentOptions.cta1.field}
    //             num,
    //   kit,
    //   name,
    //   url,
    //   partNumber,
    //   short,
    //   long,
    //   download,
    //   dram,
    //           />

    //       </ul>
    //     </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
export default {
  path: "product-results",
  component: S_ProductResults,
  navtxt: "Product Results",
  htmlName: "ProductResults",
  icon: "",
};
