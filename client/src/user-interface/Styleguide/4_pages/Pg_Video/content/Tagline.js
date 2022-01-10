import React from "react";
let imgHashtag = "https://www.kingstonloda.com/AssetLink/i77l6xa6a45r7q11gjq4qh53in0nkh64.svg";
let imgHashtag2 = "https://www.kingstonloda.com/AssetLink/b40o455u2tpxo607u4fdcf17j858rllh.svg";

const Tagline = () => {
  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Tag Line Usage</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                <strong>“Kingston Is With You”</strong> is the official tag line for Kingston
                Technology. This tag line should be used for the vast majority of marketing
                purposes. “We Are With You” should only be used in long form copy writing where
                saying ‘Kingston Is With You’ would be redundant.
              </p>
            </div>
            <div className="l-row">
              <div className="l-row__col l-1/1 l-1/2@lg">
                <div>
                  <h3 className="u-txt-bold">Kingston Is With You</h3>
                  <ul className="u-list-unstyled u-p0">
                    <li style={{ marginBottom: ".25em" }}>
                      <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Used as stand
                      alone tag line or headline in assets
                    </li>
                    <li style={{ marginBottom: ".25em" }}>
                      <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Used on
                      promotional merchandise and apparel
                    </li>
                    <li style={{ marginBottom: ".25em" }}>
                      <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Initial caps on
                      first letter of each word Use as hashtag in all social media platforms &nbsp;
                      <a href="#" alt="">
                        #KingstonIsWithYou
                      </a>
                    </li>
                    <li style={{ marginBottom: ".25em" }}>
                      <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Can be used in
                      visual assets, footers of documents, promo materials
                    </li>
                  </ul>
                </div>
              </div>
              <div className="l-row__col l-1/1 l-1/2@lg">
                <div>
                  <h3 className="u-txt-bold">We are With You</h3>
                  <ul className="u-list-unstyled u-p0">
                    <li style={{ marginBottom: ".25em" }}>
                      <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Used in spoken or
                      long form copy, ONLY
                    </li>
                    <li style={{ marginBottom: ".25em" }}>
                      <span style={{ fontSize: "1.5em", color: "red", fontWeight: "bold" }}>X</span>{" "}
                      Should not be used as headline, tag line or on promotional merchandise
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Hashtag Usage</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                Please incorporate the hashtag when creating your digital assets or printed
                material. Below are the two options for font use and also you’ll find just a few
                examples of hashtag placement. Please use title-case character as shown here.
              </p>
              <p style={{ marginTop: "1em" }}>
                <img src={imgHashtag} alt="Kingston is with you hashtag" />
              </p>
              <p>
                <img src={imgHashtag2} alt="Kingston is with you hashtag" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tagline;
