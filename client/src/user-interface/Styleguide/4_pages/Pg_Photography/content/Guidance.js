import React from "react";

let imgDontDo = "https://www.kingstonloda.com/AssetLink/r627rro15js1uaroh1250qd4n02bha58.png";

const PhotoGuidance = () => {
  return (
    <>
      <div className="pg-photography__guidance s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Guidance</h2>
            </div>
          </div>

          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                At Kingston, we want to avoid dull, uninteresting, and staged photography. It’s better to use photography that is engaging, inspiring, and genuine.
              </p>
            </div>
          </div>

          <div className="l-row">
            <div className="l-row__col l-1/1 l-1/2@lg">
              <img
                src={imgDontDo}
                className="u-animated u-animated--fast a-fadeIn" 
                alt="Do use promotional items along with the Kingston logotype."
              />
            </div>
            <div className="l-row__col l-1/1 l-1/2@lg">
              <ul style={{ padding: 0, listStyle: "none" }}>
                <li>
                  <strong>A:</strong>
                  <div>
                    <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use images where people resemble stiff mannequin dolls
                  </div>
                </li>
                <li>
                  <strong>B:</strong>
                  <div>
                    <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use images where the subject is unnaturally or incorrectly using a tech device
                  </div>
                </li>
                <li>
                  <strong>C:</strong>
                  <div>
                    <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use images of people making hand signs to the camera
                  </div>
                </li>
                <li>
                  <strong>D:</strong>
                  <div>
                    <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use images that are overly conceptual or colored outside of the corporate colors
                  </div>
                </li>
                <li>
                  <strong>E:</strong>
                  <div>
                    <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> use images of people being aware of and looking straight into the camera and striking a pose
                  </div>
                </li>
                <li>
                  <strong>F:</strong>
                  <div>
                    <strong style={{ color: "red", fontWeight: "800" }}>DON’T</strong> find imagery where people are posed with a fixated finger pointing to something
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGuidance;
