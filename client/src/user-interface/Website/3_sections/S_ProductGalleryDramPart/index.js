/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import C_ProductCard4 from "../../2_components/productCard4/C_ProductCard4";

const S_ProductGalleryDramPart = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [expanded, setExpanded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/ui/product-gallery-dram-part",
      outputName: "ProductGalleryDramPart",
      headerName: "Product Gallery : DRAM :: Part Level",
      description: "The Product Gallery displays part level cards in List View.",
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
        ["Short Description", ["String Text"]],
        ["Product: CTA Buttons", ["Varies in Type: CTA String Text and Button"]],
        ["Price", ["String Text"]],
        ["Buy Options", ["Button Text"]],
      ],
    });
    setContentOptions({
      name: {
        label: "Product Name",
        checkbox: null,
        field: "DDR4 3200MHz Non-ECC Unbuffered SODIMM",
      },
      part: { label: "Part Number", checkbox: null, field: "KTH-PL426/16G" },
      desc: {
        label: "Description",
        checkbox: null,
        field: "CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus",
      },
      dl1: { label: "Download 1", checkbox: null, field: "Spec Sheet PDF" },
      dl2: { label: "Download 2", checkbox: null, field: "PCN" },
      price: { label: "Price", checkbox: null, field: "$66.98" },
      copy: {
        label: "Buy Panel Copy",
        checkbox: null,
        field: "CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus",
      },
    });
    setDimensions({ ...dimensions, viewHeight: "887", width: window.innerWidth - 24 });
  }, []);

  function handleExpandedActive(tf) {
    setExpanded(tf);
  }

  // if (!contentOptions || Object.keys(contentOptions) < 1)
  if (!contentOptions) return "...Loading Product Gallery - DRAM Part Section";
  return (
    <section className="s-productGallery3" id="productGallery30">
      <ul
        className={`l-gridFlex s-productGallery3__grid l-gridFlex--list${
          expanded ? " s-productGallery3__grid--active" : ""
        }`}
        data-min="288"
        data-max="480"
      >
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-0"
          pname={contentOptions.name && contentOptions.name.field}
          tag={"Sale"}
          partNumber={contentOptions.part && contentOptions.part.field}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_Non-ECC_Unbuffered_SODIMM_4GB_1-tn.png"
          }
          description={contentOptions.desc && contentOptions.desc.field}
          downloads={[
            {
              title: contentOptions.dl1 && contentOptions.dl1.field,
              url: "http://www.africau.edu/images/default/sample.pdf",
              text: contentOptions.dl1 && contentOptions.dl1.field,
            },
            {
              title: contentOptions.dl2 && contentOptions.dl2.field,
              url: "http://www.africau.edu/images/default/sample.pdf",
              text: contentOptions.dl2 && contentOptions.dl2.field,
            },
          ]}
          buyBtn={true}
          currentPrice={contentOptions.price && contentOptions.price.field}
          panelCopy={contentOptions.copy && contentOptions.copy.field}
          partners={[
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
          ]}
          form={"quantitypartners"}
          buyClick={(tf) => handleExpandedActive(tf)}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-1"
          kit={"4"}
          pname="2GB Module - DDR3 1600MHz"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_ECC_Registered_VLP_DIMM_1-tn.png"
          }
          description={"CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus"}
          downloads={[
            {
              title: "PCN",
              url: "http://www.africau.edu/images/default/sample.pdf",
              text: "PCN",
            },
          ]}
          // No currentPrice will make product "out of stock"
          buyBtn={true}
          partners={[
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
          ]}
          form={"partners"}
          buyClick={(tf) => handleExpandedActive(tf)}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-2"
          pname="2GB Module - DDR3 1600MHz"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_Non-ECC_Unbuffered_DIMM_S6_1-tn.png"
          }
          description={"CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus"}
          downloads={[
            {
              title: "Spec Sheet PDF",
              url: "http://www.africau.edu/images/default/sample.pdf",
              text: "Spec Sheet PDF",
            },
          ]}
          // No currentPrice will make product "out of stock"
          buyBtn={true}
          form={"where"}
          buyClick={(tf) => handleExpandedActive(tf)}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-3"
          pname="4GB Module - DDR4 2400MHz"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/images/products/DDR4_Non-ECC_Unbuffered_DIMM_S6_1_tn.png"
          }
          description={"CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus"}
          originalPrice={"$122.54"}
          currentPrice={"$66.98"}
          buyBtn={true}
          form={"quantity"}
          buyClick={(tf) => handleExpandedActive(tf)}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-4"
          pname="4GB Module - DDR4 2666MHz"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_ECC_Load_Reduced_DIMM_4R_x4_1-tn.png"
          }
          description={"CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus"}
          // No currentPrice will make product "out of stock"
          buyBtn={false}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-5"
          pname="DRAM"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={"https://styleguide.kingston.com/fpo/200/52"}
          description={"CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus"}
          // "blank" currentPrice will leave this area off entirely
          currentPrice={"blank"}
          buyBtn={true}
          partners={[
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
          ]}
          form={"partners"}
          buyClick={(tf) => handleExpandedActive(tf)}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-6"
          kit={"4"}
          pname="DRAM"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={"https://styleguide.kingston.com/fpo/200/52"}
          description={"CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus"}
          // "blank" currentPrice will leave this area off entirely
          currentPrice={"blank"}
          buyBtn={true}
          partners={[
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
            {
              name: "Insight",
              link: "#",
              logo: "https://media.kingston.com/images/vend/insight_add-to-cart_HyperX.png",
            },
          ]}
          form={"where"}
          buyClick={(tf) => handleExpandedActive(tf)}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-7"
          pname="DRAM"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={"https://styleguide.kingston.com/fpo/200/52"}
          description={"CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus"}
          originalPrice={"$122.54"}
          currentPrice={"$66.98"}
          buyBtn={true}
          form={"quantity"}
          buyClick={(tf) => handleExpandedActive(tf)}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--dram c-productCard4--listView"
          id="productCard4-8"
          pname="DRAM: Product Name Link"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={"https://styleguide.kingston.com/fpo/200/52"}
          description={"CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus"}
          currentPrice={"blank"}
          buyBtn={false}
          replaced={{ name: "KTH-PL426/16G", url: "#link" }}
        />
      </ul>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "product-gallery-dram-part",
  component: S_ProductGalleryDramPart,
  navtxt: "Product Gallery : DRAM :: Part Level",
  htmlName: "ProductGalleryDramPart",
};
