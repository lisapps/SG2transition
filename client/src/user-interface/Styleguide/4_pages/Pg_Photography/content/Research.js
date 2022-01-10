import React from "react";
let imgResearch = "https://www.kingstonloda.com/AssetLink/ad0rl85lo5koj5gb2o14471q71jcl52h.png";

const Research = () => {
  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Research &amp; Fact Check</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                When creating assets for Kingston communications and marketing use, whether from stock images or an actual photoshoot, please be mindful not to misrepresent Kingston products.
              </p>
              <p>
                For example, the message behind a product photograph might be to use Kingston SSDs to upgrade the hard drive on a laptop for better and faster performance. But you don’t want to use a MacBook Pro in the product photograph since MacBook Pros aren’t upgradeable.
              </p>
              <p>
                Light research and fact-checking may be necessary to correctly represent Kingston and its products. It is important for all products used in product photography to be appropriate and accurate for Kingston communications and marketing purposes.
              </p>
            </div>
            <div className="l-row__col l-1/1">
                <img
                  src={imgResearch}
                  className="u-animated u-animated--fast a-fadeIn" 
                  alt="Research and Fact Check Graphic"
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
