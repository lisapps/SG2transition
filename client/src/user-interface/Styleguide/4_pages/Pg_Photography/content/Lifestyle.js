import React from "react";
let imgLifestyle = "https://www.kingstonloda.com/AssetLink/4548st57rf264k1xbp6031hqd3s372fm.png";

const Lifestyle = () => {
  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Product Lifestyle</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                Product lifestyle images should show the product in a realistic environment helping to highlight the real life benefits to the end-user, this will ensure that the images are always relevant and interesting to the target audience.
              </p>
              <p>
                In some instances, the product can be shot on a simple textured background for a simplistic approach to enhance the product’s design or features.
              </p>
            </div>
            <div className="l-row__col l-1/1">
                <img
                  src={imgLifestyle}
                  className="u-animated u-animated--fast a-fadeIn"
                  alt="Product Lifestyle Photography"
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lifestyle;
