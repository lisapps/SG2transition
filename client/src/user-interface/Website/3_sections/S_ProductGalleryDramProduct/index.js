/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import C_ProductCard4 from "../../2_components/productCard4/C_ProductCard4";

const S_ProductGalleryDramProduct = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/ui/product-gallery-dram-product",
      outputName: "ProductGalleryDramProduct",
      headerName: "Product Gallery : DRAM :: Product Level",
      description: "The Product Gallery displays product and part level cards in List View.",
      htmlSaved: true,
      currentTheme: null,
      scripts: [
        "../rexusManager.component.js",
        "../cuid.component.js",
        "../productGallery3.section.js",
        "../gridFlex.layout.js",
      ],
      specs: [
        ["Title", ["Character Limit: none"]],
        ["Tag", ["String Text"]],
        ["Kit Number", ["String Text"]],
        ["Image", ["No defined image size: depends on product"]],
        ["Long Description", ["List Element containing lines of string text. No limit"]],
      ],
    });
    setContentOptions({
      name: {
        label: "Product Name",
        checkbox: null,
        field: "DDR4 3200MHz Non-ECC Unbuffered SODIMM",
      },
      part: { label: "Part Number", checkbox: null, field: "KTH-PL426/16G" },
      details1: {
        label: "Details 1",
        checkbox: null,
        field: "This is Bullet Number One",
      },
      details2: {
        label: "Details 2",
        checkbox: null,
        field: "Second Bullet Point Goes Here",
      },
      details3: {
        label: "Details 3",
        checkbox: null,
        field: "Maybe a Third One As Well",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "887", width: window.innerWidth - 24 });
  }, []);

  // if (!contentOptions || Object.keys(contentOptions) < 1)
  if (!appState) return "...Loading Product Gallery - DRAM Product Section";
  return (
    <section className="s-productGallery3" id="productGallery30">
      <ul
        className="l-gridFlex s-productGallery3__grid l-gridFlex--list"
        data-min="288"
        data-max="480"
      >
        <C_ProductCard4
          pclasses=" c-productCard4--product c-productCard4--dram c-productCard4--listView"
          id="productCard4-0"
          pname={contentOptions.name && contentOptions.name.field}
          type={"product"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_Non-ECC_Unbuffered_SODIMM_4GB_1-tn.png"
          }
          details={[
            contentOptions.details1 && contentOptions.details1.field,
            contentOptions.details2 && contentOptions.details2.field,
            contentOptions.details3 && contentOptions.details3.field,
          ]}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--product c-productCard4--dram c-productCard4--listView"
          id="productCard4-1"
          pname="DDR4 3200MHz ECC Registered DIMM"
          type={"product"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_ECC_Registered_VLP_DIMM_1-tn.png"
          }
          details={[
            "8GB, 16GB, 32GB, 64GB",
            "1.2V 288-pin CL22",
            "Server Premier",
            "Up to 180MB/s read, 70MB/s write",
          ]}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--product c-productCard4--dram c-productCard4--listView"
          id="productCard4-2"
          pname="2GB Module - DDR3 1600MHz"
          type={"product"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_Non-ECC_Unbuffered_DIMM_S6_1-tn.png"
          }
          details={["4GB, 8GB, 16GB, 32GB", "1.2V CL19 288-pin"]}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--product c-productCard4--dram c-productCard4--listView"
          id="productCard4-3"
          pname="4GB Module - DDR4 2400MHz"
          type={"productparagraph"}
          imgSrc={
            "https://media.kingston.com/images/products/DDR4_Non-ECC_Unbuffered_DIMM_S6_1_tn.png"
          }
          details="HyperX Cloud Stinger Core Gaming Headset"
        />
        <C_ProductCard4
          pclasses=" c-productCard4--product c-productCard4--dram c-productCard4--listView"
          id="productCard4-4"
          pname="4GB Module - DDR4 2666MHz"
          type={"product"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_ECC_Load_Reduced_DIMM_4R_x4_1-tn.png"
          }
          details={["64GB", "1.2V 288-pin CL21", "Server Premier"]}
        />
      </ul>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "product-gallery-dram-product",
  component: S_ProductGalleryDramProduct,
  navtxt: "Product Gallery : DRAM :: Product Level",
  htmlName: "ProductGalleryDramProduct",
};
