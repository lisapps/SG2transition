import React, { useState, useContext, useEffect } from "react";
import { OptionsContext } from "../../../../OptionsContext";
import C_ProductSort from "../../2_components/productSort/C_ProductSort";
import C_ProductCard4 from "../../2_components/productCard4/C_ProductCard4";

const PGTab1 = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const [expanded, setExpanded] = useState(false);
  const [noteOpen, setNoteOpen] = useState(true);

  function handleExpandedActive(tf) {
    setExpanded(tf);
  }

  function handleNotificationClick(event) {
    event.preventDefault();
    setNoteOpen(false);
  }

  useEffect(() => {
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
        field: "This is Bullet Number One and it goes on for a little while here.",
      },
      details2: {
        label: "Details 2",
        checkbox: null,
        field: "Second Bullet Point Goes Here, thank you very much for not keeping it short.",
      },
      price: { label: "Price", checkbox: null, field: "$66.98" },
      note: {
        label: "Notification Text",
        checkbox: null,
        field:
          "Unfortunately, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    });
  }, []);

  if (!contentOptions) return "...Loading Product Gallery Tabs with Notification Section";
  return (
    <div className="s-productGallery3__filterLayout__view">
      <div className={`c-notification${noteOpen ? "" : " c-notification--close"}`}>
        <div className="l-inner">
          <p>{contentOptions && contentOptions.note && contentOptions.note.field}</p>
        </div>
        <button
          className="c-notification__close"
          href="#"
          aria-label="Close Button"
          onClick={handleNotificationClick}
        >
          <svg viewBox="0 0 14 14">
            <path d="M.46 12.023L11.772.709l1.768 1.768L2.227 13.791z"></path>
            <path d="M2.227.71l11.314 11.313-1.768 1.768L.459 2.477z"></path>
          </svg>
        </button>
      </div>
      <C_ProductSort />
      <ul
        className={`l-gridFlex s-productGallery3__grid${
          expanded ? " s-productGallery3__grid--active" : ""
        }`}
        data-min="288"
        data-max="480"
      >
        <C_ProductCard4
          type="tab"
          id="productCard4-0"
          pname={contentOptions.name ? contentOptions.name.field : "Product Name"}
          tag={"Sale"}
          partNumber={contentOptions.part ? contentOptions.part.field : "KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_Non-ECC_Unbuffered_SODIMM_4GB_1-tn.png"
          }
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={
            contentOptions.details1
              ? contentOptions.details1.field
              : "This is Bullet Number One and it goes on for a little while here."
          }
          details2={
            contentOptions.details2
              ? contentOptions.details2.field
              : "Second Bullet Point Goes Here, thank you very much for not keeping it short."
          }
          buyBtn={true}
          currentPrice={contentOptions.price ? contentOptions.price.field : "$66.98"}
          panelCopy={
            contentOptions.copy
              ? contentOptions.copy.field
              : "Product scheduled to ship 1 - 2 weeks"
          }
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
          type="tab"
          id="productCard4-1"
          kit={"4"}
          pname="2GB Module - DDR3 1600MHz"
          tag={"Sale"}
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/DDR4_ECC_Registered_VLP_DIMM_1-tn.png"
          }
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
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
          type="tab"
          id="productCard4-2"
          pname='"DC450R 2.5" Enterprise SSD'
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
          buyBtn={true}
          form="where"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          type="tab"
          id="productCard4-3"
          pname="UV500 SATA SSD"
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
          buyBtn={true}
          currentPrice={"blank"}
          form="quantity
          "
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          btns={{ main: "Buy" }}
        />
        <C_ProductCard4
          //this class centers a "Temporarile Out of Stock" when there is no buy button
          pclasses=" c-productCard4--singleCTA"
          type="tab"
          id="productCard4-4"
          pname="4GB Module - DDR4 2666MHz"
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
          buyBtn={false}
          // No current price value adds a "temorarily out of stock" span.
          //   currentPrice={"blank"}
        />
        <C_ProductCard4
          type="tab"
          id="productCard4-5"
          pname="DRAM"
          imgSrc={
            "https://media.kingston.com/kingston/product/ktc-product-usb-dtmicroduo3c-dtduo3c128gb-1-tn.png"
          }
          partNumber={"KTH-PL426/16G"}
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          buyBtn={true}
          form={"partners"}
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
          currentPrice={"blank"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          type="tab"
          id="productCard4-1"
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
          currentPrice="blank"
          buyBtn={true}
          form="where"
          buyClick={(tf) => handleExpandedActive(tf)}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          type="tab"
          id="productCard4-0"
          pname="NV1 NVMe PCIe SSD"
          partNumber={"KTH-PL426/16G"}
          tag={"Sale"}
          imgSrc={"https://media.kingston.com/kingston/product/ktc-product-ssd-snvs-500g-1-tn.png"}
          selections={[
            { name: "size16", label: "16 GB", disabled: false, checked: true },
            { name: "size32", label: "32 GB", disabled: false, checked: false },
            { name: "size64", label: "64 GB", disabled: true, checked: false },
            { name: "size128", label: "128 GB", disabled: false, checked: false },
          ]}
          details1={"This is Bullet Number One and it goes on for a little while here."}
          details2={"Second Bullet Point Goes Here, thank you very much for not keeping it short."}
          buyBtn={true}
          originalPrice={"$122.54"}
          currentPrice={"$66.98"}
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
          pclasses=" c-productCard4--singleCTA"
          type="tab"
          id="productCard4-0"
          pname="Canvas Go! Plus SD Memory Card"
          partNumber={"KTH-PL426/16G"}
          tag={"Sale"}
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
          currentPrice={"blank"}
          buyBtn={false}
          replaced={{ name: "KTH-PL426/16G", url: "#link" }}
        />
      </ul>
      <div className="s-productGallery3__filterLayout__view__loadMore">
        <a className="e-btn" target="_self" title="Button Title" href="#loadmore">
          <span>Load More</span>
        </a>
      </div>
    </div>
  );
};

export default PGTab1;
