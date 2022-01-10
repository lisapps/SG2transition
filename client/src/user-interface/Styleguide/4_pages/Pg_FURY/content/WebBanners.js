import React from "react";

let imgDarkBg = "https://www.kingstonloda.com/AssetLink/4rd2um6vv5522003njs4y6uybb267ld4.png";
let imgRedBg = "https://www.kingstonloda.com/AssetLink/odk503gb4npl156mg424172x6ya05517.png";
let imgLightBg = "https://www.kingstonloda.com/AssetLink/5573a00t72b6u0l731up1aeke57l760y.png";
let imgComboProducts = "https://www.kingstonloda.com/AssetLink/n40yv7k5xkd60ycv16inasls05d38751.png";

const WebBanners = () => {

  return (
    <>
      <div className="s-content pg_brandElements__colors">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Dark Background</h2>
            </div>
            <div className="l-row__col l-1/1">
              <p>
                <img src={imgDarkBg} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content pg_brandElements__colors" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Red Background</h2>
            </div>
            <div className="l-row__col l-1/1">
              <p>
                <img src={imgRedBg} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content pg_brandElements__colors">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Light Background</h2>
            </div>
            <div className="l-row__col l-1/1">
              <p>
                <img src={imgLightBg} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content pg_brandElements__colors" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Combo Products</h2>
            </div>
            <div className="l-row__col l-1/1">
              <p>
                <img src={imgComboProducts} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebBanners;
