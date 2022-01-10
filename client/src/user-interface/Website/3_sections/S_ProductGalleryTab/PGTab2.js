import React, { useState, useContext, useEffect } from "react";
import { OptionsContext } from "../../../../OptionsContext";
import C_ProductSort from "../../2_components/productSort/C_ProductSort";
import C_ProductCard4 from "../../2_components/productCard4/C_ProductCard4";

const PGTab2 = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { contentOptions, setContentOptions } = useContext(OptionsContext);

  useEffect(() => {
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
        field: "Black-on-black sliding cap design",
      },
      details2: {
        label: "Details 2",
        checkbox: null,
        field: "USB 3.1 Gen 1 (USB 3.0)",
      },
      details3: {
        label: "Details 3",
        checkbox: null,
        field: "32GB, 64GB, 128GB, 256GB",
      },
      details4: {
        label: "Details 4",
        checkbox: null,
        field: "Up to 130MB/s read",
      },

      price: { label: "Price", checkbox: null, field: "$66.98" },
    });
  }, []);

  return (
    <div className="s-productGallery3__filterLayout__view">
      <C_ProductSort />

      <ul className={`l-gridFlex s-productGallery3__grid`} data-min="288" data-max="480">
        <C_ProductCard4
          pclasses=" c-productCard4--product"
          type={"product"}
          tag={"Sale"}
          id="productCard4-9"
          pname={contentOptions.name ? contentOptions.name.field : "Product Name"}
          imgSrc={
            "https://media.kingston.com/kingston/product/ktc-product-usb-dt100g3-dt100g3256gb-1-tn.png"
          }
          details={[
            contentOptions.details1 ? contentOptions.details1.field : "",
            contentOptions.details2 ? contentOptions.details2.field : "",
            contentOptions.details3 ? contentOptions.details3.field : "",
            contentOptions.details4 ? contentOptions.details4.field : "",
          ]}
          nonDRAM={true}
          buyBtn={false}
          currentPrice={"blank"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          btns={{ main: "Buy", alt: "Learn More" }}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--product"
          type={"product"}
          id="productCard4-1"
          pname="DataTraveler Elite G2 USB Flash Drive"
          partNumber={"KTH-PL426/16G"}
          imgSrc={
            "https://media.kingston.com/kingston/product/ktc-product-usb-dteliteg2-dteg2128gb-1-tn.png"
          }
          details={[
            "Shock and water-resistant casing, removable cap",
            "USB 3.1 Gen 1 (USB 3.0)",
            "64GB, 128GB",
            "Up to 180MB/s read, 70MB/s write",
          ]}
          nonDRAM={true}
          buyBtn={false}
          currentPrice={"blank"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          btns={{ main: "Learn More" }}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--product"
          type={"product"}
          id="productCard4-2"
          pname='"DC450R 2.5" Enterprise SSD'
          imgSrc={"https://media.kingston.com/kingston/product/ktc-product-ssd-sedc450r-1-tn.png"}
          details={[
            "Optimized for read-centric applications",
            '2.5" form factor',
            "480GB, 960GB, 1.92TB, 3.84TB, 7.68TB",
            "Up to 560MB/s read, 530MB/s write",
          ]}
          nonDRAM={true}
          buyBtn={false}
          currentPrice={"blank"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--product"
          type={"productparagraph"}
          id="productCard4-3"
          pname="UV500 SATA SSD"
          imgSrc={
            "https://media.kingston.com/kingston/product-card/ktc-product-ssd-suv500-1-tn.png"
          }
          details="HyperX Cloud Stinger Core Gaming Headset"
          nonDRAM={true}
          buyBtn={false}
          currentPrice={"blank"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          btns={{ main: "Buy" }}
        />
        <C_ProductCard4
          pclasses=" c-productCard4--product"
          type={"product"}
          id="productCard4-4"
          pname="4GB Module - DDR4 2666MHz"
          imgSrc={"https://media.kingston.com/images/products/SA2000M8_250GB_tn.png"}
          details={[
            "This is Bullet Number One and it goes on for a little while here.",
            "Second Bullet Point Goes Here, thank you very much for not keeping it short.",
            "Maybe a Third One As Well, who knows……",
            "Maybe a Third One As Well",
            "Second Bullet Point Goes Here",
          ]}
          nonDRAM={true}
          buyBtn={false}
          currentPrice={"blank"}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
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

export default PGTab2;
