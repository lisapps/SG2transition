import React, { useState, useContext, useEffect } from "react";
import { OptionsContext } from "../../../../OptionsContext";
import C_ProductSort from "../../2_components/productSort/C_ProductSort";
import C_ProductCard4 from "../../2_components/productCard4/C_ProductCard4";

const PGTab3 = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setContentOptions({
      name: {
        label: "Product Name",
        checkbox: null,
        field: "DataTraveler 100 G3 USB Flash Drive",
      },
      part: { label: "Part Number", checkbox: null, field: "KTH-PL426/16G" },
      desc: {
        label: "Description",
        checkbox: null,
        field: "CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus",
      },
      price: { label: "Price", checkbox: null, field: "$66.98" },
      copy: {
        label: "Buy Panel Copy",
        checkbox: null,
        field: "CL19 1Rx4 8Gbit 1.2V 288-pin Hynix D Rambus",
      },
    });
  }, []);

  function handleExpandedActive(tf) {
    setExpanded(tf);
  }

  return (
    <div className="s-productGallery3__filterLayout__view">
      <C_ProductSort />

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
      <div className="s-productGallery3__filterLayout__view__loadMore">
        <a className="e-btn" target="_self" title="Button Title" href="#loadmore">
          <span>Load More</span>
        </a>
      </div>
    </div>
  );
};

export default PGTab3;
