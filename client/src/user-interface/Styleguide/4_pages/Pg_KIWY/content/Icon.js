import React from "react";

let imgIconKIWY1 = "https://www.kingstonloda.com/AssetLink/ehavly825o8tal2321386o30bl5l7w23.svg";
let imgIconKIWY3 = "https://www.kingstonloda.com/AssetLink/cd8p161vmhx0fp8wpaq0x085j5et134i.svg";
let imgIconKIWY4 = "https://www.kingstonloda.com/AssetLink/34o483o547fa18fld7of6y7s08x3caj5.svg";
let imgDontDo1 = "https://www.kingstonloda.com/AssetLink/0h22l1mu5ltx8y71ggr886y5p70lq4ku.svg";
let imgDontDo2 = "https://www.kingstonloda.com/AssetLink/b03x4ye5jd6v1uat2bnv1sg2lml7335n.svg";
let imgBgBackground = "https://www.kingstonloda.com/AssetLink/1d55e7n57ga32ss6xa3552ffnj561o8r.jpg";
let imgIconExamples = "https://www.kingstonloda.com/AssetLink/2c113vyvph583v6070hu4405kyp43d83.png";

const Icon = () => {
  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Icon Guideline</h2>
            </div>
          </div>

          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                This icon was created to be a visual expression for the <strong>“Kingston Is With You”</strong>
                initiative. It features the traditional Kingston icon (Rex) in the center, the heart
                and soul of our mission. Rex is a symbol of integrity and partnership. Kingston’s
                corporate colors of red, black and white are utilized for consistency and impact.
                Stars can represent a badge of honor, and also good fortune. Here they symbolize
                Quality, Reliability and Trust, the foundation of Kingston Technology. They also
                reflect over 3 decades of customer service and support.
              </p>
              <p>
                The inner circle represents the Kingston family. The external circle is larger and
                represents all our Kingston family partners and customers around the world. They are
                joined by the two bottom connecting lines, braces that are supporting the inner
                circle that represent John Tu and David Sun, our founders and mentors. “Kingston Is
                With You” is not just a four-word slogan, its goal is to guide the way we engage.
              </p>
            </div>
          </div>

          <div className="c-iconGrid l-row l-row--flush u-bgGreyL" style={{ marginBottom: "1.5em" }}>
            <div className="l-row__col l-1/2 u-p0">
              <img
                src={imgIconKIWY1}
                className="e-iconKIWY u-animated a-fadeIn u-animated--slower"
                alt="KIWY Icon"
              />
            </div>
            <div className="l-row__col l-1/2 u-p0">
              <img
                src={imgIconKIWY3}
                className="e-iconKIWY u-animated a-fadeIn u-animated--slower"
                alt="Black KIWY Icon"
              />
            </div>
          </div>

          <div className="l-row">
            <div className="l-row__col l-1/1 l-1/2@lg">
              <h3>Using the “Kingston Is With You” icon</h3>
              <p>
                <span style={{ color: "green", fontWeight: "600" }}>DO</span> use on promotional
                items along with the Kingston logotype.
              </p>
              <p>
                <span style={{ color: "green", fontWeight: "600" }}>DO</span> use on promotional
                items along with the Kingston logotype.
              </p>
              <p>
                <span style={{ color: "red", fontWeight: "600" }}>DO NOT</span> use in place of the
                official Kingston communications logo on advertisements, flyers, banners, videos or
                any other digital or print materials.
              </p>
              <p>
                <span style={{ color: "red", fontWeight: "600" }}>DO NOT</span> alter the icon in
                any way.
              </p>
              <p>
                <span style={{ color: "red", fontWeight: "600" }}>DO NOT</span> double Rex. Use
                Kingston logotype along with icon for areas with limited space.
              </p>
            </div>
            <div className="l-row__col l-1/1 l-1/2@lg">
              <img
                src={imgDontDo2}
                alt="Do use promotional items along with the Kingston logotype."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="l-row__col l-1/2">
              <img
                src={imgIconKIWY4}
                className="e-iconKIWY u-animated a-fadeIn u-animated--slower"
                alt="White KIWY Icon"
                style={{
                  background: "url('" + imgBgBackground + "')",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="l-row__col l-1/2">
              <h3>Using the <strong>“Kingston Is With You”</strong> Icon (Transparent Background)</h3>
              <p>The solid white icon can be used at designer’s discretion.</p>
              <p>
                <span style={{ color: "red", fontWeight: "600" }}>DO NOT</span> invert or colorize
                icon.
              </p>
              <img
                src={imgDontDo1}
                alt="Do Not Invert or Colorize Icon"
                style={{ maxWidth: "60%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Icon Examples</h2>
            </div>
          </div>

          <div className="l-row">
            <div className="l-row__col l-1/1">
              <img src={imgIconExamples} alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icon;
