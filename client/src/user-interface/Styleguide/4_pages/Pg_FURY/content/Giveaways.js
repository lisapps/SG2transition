import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

let img1 = "https://www.kingstonloda.com/AssetLink/1163686303yr7tcll61xlk27h2t67x8x.png";
let img2 = "https://www.kingstonloda.com/AssetLink/g6t3x3k40751748q20vgyb72143wj43c.png";
let img3 = "https://www.kingstonloda.com/AssetLink/65fog4mo2l7r3488f40aou0lnxl7725y.png";

const Giveaways = () => {
  return (
    <div className="s-content pg_brandElements__colors">
      <div className="l-inner">
        <div className="l-row">
          <div className="s-content__headline l-row__col l-1/1">
            <h2>Swag / Merchandise</h2>
          </div>
        </div>
        <p>
          <Carousel plugins={["arrows"]}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </Carousel>
        </p>
      </div>
    </div>
  );
};

export default Giveaways;
