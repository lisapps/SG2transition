/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";
import C_ProductCard4 from "../../2_components/productCard4/C_ProductCard4";

const S_ProductGalleryNonDramPart = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);
  const [expanded, setExpanded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/ui/product-gallery-ndram-part",
      outputName: "ProductGalleryNonDramPart",
      headerName: "Product Gallery : Non-DRAM :: Part Level",
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
        ["Selections", ["Radio Buttons Text"]],
        ["Long Description", ["List Element containing lines of string text. No limit"]],
        ["Product: CTA Buttons", ["Varies in Type: CTA String Text and Button"]],
        ["Price", ["String Text"]],
        ["Buy Options", ["Button Text"]],
      ],
    });
    setContentOptions({
      name: {
        label: "Product Name",
        checkbox: null,
        field: "DataTraveler 100 G3 USB Flash Drive",
      },
      part: { label: "Part Number", checkbox: null, field: "KTH-PL426/16G" },
      details1: {
        label: "Details 1",
        checkbox: null,
        field: "This is Bullet Number One and it goes on for a little while here.",
      },
      details2: {
        label: "Details 2",
        checkbox: null,
        field: "Second Bullet Point Goes Here, thank you very much for not keeping it short.",
      },
      price: { label: "Price", checkbox: null, field: "$66.98" },
    });
    setDimensions({ ...dimensions, viewHeight: "1675", width: window.innerWidth - 24 });
  }, []);

  function handleExpandedActive(tf) {
    setExpanded(tf);
  }

  // if (!contentOptions || Object.keys(contentOptions) < 1)
  if (!appState) return "...Loading Product Gallery - Non-DRAM Part Section";
  return (
    <section className={`s-productGallery3`} id="productGallery30">
      <ul
        className={`l-gridFlex s-productGallery3__grid ${
          expanded ? "s-productGallery3__grid--active" : ""
        }`}
        data-min="288"
        data-max="480"
      >
        <C_ProductCard4
          //no pClasses value will leave default "c-productCard4"
          id="productCard4-0"
          pname={contentOptions.name && contentOptions.name.field}
          partNumber={contentOptions.part && contentOptions.part.field}
          imgSrc={
            "https://media.kingston.com/kingston/product/ktc-product-usb-dt100g3-dt100g3256gb-1-tn.png"
          }
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={contentOptions.details1 && contentOptions.details1.field}
          details2={contentOptions.details2 && contentOptions.details2.field}
          nonDRAM={true}
          buyBtn={true}
          buyClick={(tf) => handleExpandedActive(tf)}
          currentPrice={"$66.98"}
          panelCopy={"Product scheduled to ship 1 - 2 weeks"}
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
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          id="productCard4-1"
          kit={"4"}
          pname="DataTraveler Elite G2 USB Flash Drive"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/ktc-product-usb-dteliteg2-dteg2128gb-1-tn.png"
          }
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          // No currentPrice will make product "out of stock"
          buyBtn={true}
          buyClick={(tf) => handleExpandedActive(tf)}
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
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          id="productCard4-2"
          pname="2GB Module - DDR3 1600MHz"
          partNumber={"KTH-PL426/16G"}
          imgSrc={"https://media.kingston.com/kingston/product/ktc-product-ssd-sedc450r-1-tn.png"}
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          // No currentPrice will make product "out of stock"
          buyBtn={true}
          buyClick={(tf) => handleExpandedActive(tf)}
          form={"where"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          id="productCard4-3"
          pname="UV500 SATA SSD"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product-card/ktc-product-ssd-suv500-1-tn.png"
          }
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          originalPrice={"$122.54"}
          currentPrice={"$66.98"}
          buyBtn={true}
          buyClick={(tf) => handleExpandedActive(tf)}
          form={"quantity"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          id="productCard4-4"
          pname="4GB Module - DDR4 2666MHz"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={"https://media.kingston.com/images/products/SA2000M8_250GB_tn.png"}
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          // No currentPrice will make product "out of stock"
          buyBtn={false}
        />
        <C_ProductCard4
          id="productCard4-5"
          pname="DRAM"
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/ktc-product-usb-dtmicroduo3c-dtduo3c128gb-1-tn.png"
          }
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          // "blank" currentPrice will leave this area off entirely
          currentPrice={"blank"}
          buyBtn={true}
          buyClick={(tf) => handleExpandedActive(tf)}
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
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          id="productCard4-6"
          kit={"4"}
          pname="DataTraveler MicroDuo 3C USB Flash Drive"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/ktc-product-usb-ironkey-d300-standard-ikd300128gb-1-tn.png"
          }
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          // "blank" currentPrice will leave this area off entirely
          currentPrice={"blank"}
          buyBtn={true}
          buyClick={(tf) => handleExpandedActive(tf)}
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
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          id="productCard4-7"
          pname="NV1 NVMe PCIe SSD"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={"https://media.kingston.com/kingston/product/ktc-product-ssd-snvs-500g-1-tn.png"}
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          originalPrice={"$122.54"}
          currentPrice={"$66.98"}
          buyBtn={true}
          buyClick={(tf) => handleExpandedActive(tf)}
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
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          id="productCard4-8"
          pname="Canvas Go!: Product Name Link"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/ktc-product-flash-sdcards-sdg3-512gb-1-tn.png"
          }
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          currentPrice={"blank"}
          buyBtn={false}
          replaced={{ name: "KTH-PL426/16G", url: "#link" }}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          id="productCard4-7"
          pname="UV500 SATA SSD"
          partNumber={"KTH-PL426/16G"}
          imgSrc={"https://media.kingston.com/kingston/product/ktc-product-ssd-snvs-500g-1-tn.png"}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          nonDRAM={true}
          originalPrice={"$122.54"}
          currentPrice={"$66.98"}
          buyBtn={true}
          buyClick={(tf) => handleExpandedActive(tf)}
          form={"quantity"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </ul>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "product-gallery-ndram-part",
  component: S_ProductGalleryNonDramPart,
  navtxt: "Product Gallery : Non-DRAM :: Part Level",
  htmlName: "ProductGalleryNonDramPart",
};
