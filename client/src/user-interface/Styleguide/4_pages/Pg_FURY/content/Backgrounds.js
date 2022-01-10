import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const imgBg1 = "https://www.kingstonloda.com/AssetLink/uwiw4o4ag4i04j46p6gx466g2nqa7s5s.png";
const imgBg2 = "https://www.kingstonloda.com/AssetLink/716671x64h77a728c77owp5cct5551ug.png";
const imgBg3 = "https://www.kingstonloda.com/AssetLink/uq50673dl316v31548cfe74s5171sx42.png";
const imgBg4 = "https://www.kingstonloda.com/AssetLink/607e4q3kx247m1ot1h721ud50t2l2426.png";

const Backgrounds = () => {
  return (
    <div className="s-content pg_brandElements__colors">
      <div className="l-inner">
        <div className="l-row">
          <div className="s-content__headline l-row__col l-1/1">
            <h2>Backgrounds</h2>
            <p>
              These are some examples of backgrounds that can be used to add simplicity to a design,
              to focus your attention on a subject, device, or product, and can be used to convey a
              product feature such as security or speed. Use this as an inspiration to explore other
              images or create similar custom artwork.
            </p>
          </div>
        </div>
        <p>
          <strong>Sample Backgrounds:</strong>
        </p>
        <Carousel plugins={["arrows"]}>
          <img src={imgBg1} alt="" />
          <img src={imgBg2} alt="" />
          <img src={imgBg3} alt="" />
          <img src={imgBg4} alt="" />
        </Carousel>
      </div>
    </div>
  );
};

export default Backgrounds;
