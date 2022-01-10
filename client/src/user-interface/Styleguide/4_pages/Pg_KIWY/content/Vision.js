import React from "react";

let imgKiwy = "https://www.kingstonloda.com/AssetLink/v7b777ox76d3c24s1ublo4nqxvnd5p6e.png";

const Vision = () => {
  return (
    <>
      <div className="s-content u-pt0">
        <div
          className="u-animated u-animated--fast a-fadeIn"
          style={{
            height: "265px",
            marginBottom: "2em",
            background: `url('${imgKiwy}') repeat-x`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Our Vision</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              {/* <img src="https://www.kingstonloda.com/AssetLink/v7b777ox76d3c24s1ublo4nqxvnd5p6e.png" /> */}
              <p>
                This guideline introduces “Kingston Is With You” as our brand philosophy. It places
                Kingston firmly in the hearts and lives of our customers and positions Kingston as a
                brand that can help and benefit many aspects of business and life. From the products
                we make to our customer service and support, “Kingston Is With You” will be the
                branding initiative behind everything we do.
              </p>
              <p>
                Our vision is to make Kingston the go-to brand for all consumers and businesses for
                quality products, technology and solutions. We do this using the mission statements
                below as our core messaging:
              </p>
              <div className="l-row">
                <div
                  className="l-row__col l-1/1 l-1/2@lg"
                  style={{ marginTop: "1em", paddingLeft: 0 }}
                >
                  <div>
                    <h3 className="u-txt-bold">Kingston Is With You</h3>
                    <iframe
                      height="250"
                      src="https://www.youtube.com/embed/xOxPoV4PBZ8"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    {/* <audio
                      controls
                      style={{ marginTop: ".5em", borderRadius: "4px", background: "#f0f2f3" }}
                    >
                      <source
                        src="https://www.kingstonloda.com/AssetLink/w81vrnkgh4x37p63841x12dv7w22vp6c.mp3"
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio> */}
                    <p>
                      Kingston is with you,
                      <br /> Whatever you do,
                      <br /> Wherever you go.
                      <br />
                      <br /> However you live,
                      <br /> Work,
                      <br /> Or play,
                      <br /> Our technology enhances your world.
                      <br />
                      <br /> From that very first spark,
                      <br /> Wherever it takes you.
                      <br />
                      <br /> We stay on while you recharge,
                      <br /> Keeping your data safe,
                      <br /> Wherever you are,
                      <br /> Whenever you need us.
                      <br />
                      <br /> We make technology
                      <br /> You can count on
                      <br />
                      <br /> Kingston
                      <br /> We are with you.
                    </p>
                  </div>
                </div>
                <div className="l-row__col l-1/1 l-1/2@lg" style={{ marginTop: "1em" }}>
                  <div>
                    <h3 className="u-txt-bold">Kingston Is Everywhere</h3>
                    <iframe
                      height="250"
                      src="https://www.youtube.com/embed/sqFp38rfYXM"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    {/* <audio
                      controls
                      style={{ marginTop: ".5em", borderRadius: "4px", background: "#f0f2f3" }}
                    >
                      <source
                        src="https://www.kingstonloda.com/AssetLink/0026502m56i443075x6iybtkw0nt6h7c.mp3"
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio> */}
                    <p>
                      Wherever you go, Whatever you do,
                      <br />
                      Kingston is right there with you
                      <br />
                      <br />
                      With technology product that empower innovation
                      <br />
                      <br />
                      Kingston is with you all the way
                      <br />
                      With you every day, From morning, until night
                      <br />
                      <br />
                      With you on the ground and in flight
                      <br />
                      With you where you work, and helping you find your way
                      <br />
                      <br />
                      Kingston is everywhere you are
                      <br />
                      We make the technology products That help you capture, see, hear, and
                      experience
                      <br />
                      <br />
                      The modern world in which we live...
                      <br />
                      <br />
                      Kingston, we are with you, everywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
