import React from "react";
let imgPillars = "https://www.kingstonloda.com/AssetLink/05b142t6qc6dy645j5f7lv4pw128n7pb.svg";

const Goal = () => {
  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Our Goal</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                A unified brand look and feel will ensure communications are instantly recognizable
                as Kingston and therefore strengthen the overall brand identity across different
                markets and target audiences, reinforcing Kingston’s reputation as the leading
                independent memory and storage manufacturer. It will embody the vision and values
                across the different platforms and assets that Kingston uses.
              </p>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1 u-pt0">
              <h3>Messaging Pillars</h3>
              <p>
                <img
                  src={imgPillars}
                  width="1200"
                  height="600"
                  alt="Kingston's Messaging Pillars"
                  className="u-animated u-animated--slow a-fadeIn"
                />
              </p>
            </div>
          </div>

          <div className="l-row">
            <div className="l-row__col l-1/1 l-1/2@lg">
              <h3>Our Purpose</h3>
              <p>
                The Kingston spirit reflects an individual commitment, based on teamwork and
                loyalty, to reach a standard of exceptional quality, reliability and service in
                providing system enhancements and solutions to our customers worldwide.
              </p>
            </div>
            <div className="l-row__col l-1/1 l-1/2@lg">
              <h3>Brand Promise</h3>
              <p>
                Kingston Technology is committed to providing our customers with the highest quality
                product solutions, service and support. At every touch point of the journey we are
                listening, learning and engaging with our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goal;
