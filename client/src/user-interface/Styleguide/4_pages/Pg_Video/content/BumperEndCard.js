import React from "react";

let imgClear1 = "https://www.kingstonloda.com/AssetLink/1esx5076308508rsusi1pk41308makc2.png";
let imgClear2 = "https://www.kingstonloda.com/AssetLink/xn6t013g4j012b1sj4y416ivq52vt6c4.png";

const BumperEndCard = () => {
  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Video Logo Bumper + Endcard Guidelines</h2>
            </div>
          </div>

          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                The video logo bumper &amp; endcard was created to provide consistent Kingston
                branding elements for videos. They are to be used for all Kingston videos and any
                third-party videos associated with Kingston.
              </p>
              <p>
                The intro logo bumper is a quick 2-second video containing the Kingston logo,
                whereas the outro endcard is a 3-second video containing the logo as well as the{" "}
                <strong>#KingstonIsWithYou</strong> messaging and <strong>kingston.com</strong> URL
              </p>
              <div className="u-flex">
                <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                  <p>
                    <small>
                      <strong>INTRO LOGO BUMPER</strong>
                    </small>
                  </p>
                  <img src={imgClear1} alt="Visual demonstrationg of 'N' height." />
                </div>
                <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                  <p>
                    <small>
                      <strong>OUTRO LOGO BUMPER</strong>
                    </small>
                  </p>
                  <img src={imgClear2} alt="Visual demonstrationg of 'N' height." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <h2>Logo Bumper and Endcard Usage</h2>
              <p>
                Kingston videos need to contain either the logo bumper in the opening of the video,
                or the endcard at the end of the video, or both. It is recommended that no other
                Kingston logo or branding is immediately proceeded or preceeded by them, as this may
                cause redundancy (though it’s absolutely fine to have Kingston logos and branding
                throughout the rest of the video, per Kingston style guidelines).
              </p>
              <p>
                <strong style={{ color: "green", fontWeight: "800" }}>DO</strong> use the logo
                bumper in the intro, or the endcard in the outro (or both).
              </p>
              <img
                src="https://www.kingstonloda.com/AssetLink/ju67p5ns5p5t531mus6421evo05873l4.png"
                alt=""
              />
              <p>
                <strong style={{ color: "red", fontWeight: "800" }}>DO NOT</strong> use any Kingston
                logo or branding proceeding or preceeding the logo bumper or endcard.
              </p>
              <img
                src="https://www.kingstonloda.com/AssetLink/j0r5jauktr14h4p45ue4v4ub6hubt7yf.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Video Formats</h2>
            </div>
          </div>

          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                The logo bumper and endcard are rendered out as H.264 MP4 video files. The following
                resolutions are available:
              </p>
              <p>1. 4K - 3840x2160, 16:9 aspect ratio (YouTube, general broadcast)</p>
              <p>2. Square - 1080x1080, 1:1 aspect ratio (Twitter and Facebook)</p>
              <p>3. Vertical - 1080x1920, 9:16 aspect ratio (Instagram Stories)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BumperEndCard;
