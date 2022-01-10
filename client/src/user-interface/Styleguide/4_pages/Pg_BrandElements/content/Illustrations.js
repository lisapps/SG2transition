import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Illustrations = () => {
  let img1 = "https://www.kingstonloda.com/AssetLink/bsrw2yps728i3b67gslv2iw8b7655004.png";
  let img2 = "https://www.kingstonloda.com/AssetLink/6s8ot376vg4du3ea46gg3k55fkdiolqd.png";

  const imgC1 = "https://www.kingstonloda.com/AssetLink/8dc6864rq583672deotl84rme70vle4n.png";
  const imgC2 = "https://www.kingstonloda.com/AssetLink/26v3u850wmpr1pto0u7k40xuh56wcp4k.png";
  const imgC3 = "https://www.kingstonloda.com/AssetLink/x44o54lv7vb8656lf85jxnu318lx5mj4.png";
  const imgC4 = "https://www.kingstonloda.com/AssetLink/yael8b80io7r5xo3850f0w6x6ka5c0y6.png";

  const imgBg1 = "https://www.kingstonloda.com/AssetLink/16kkk86275svg45eyqv28a2i2584l7g3.png";
  const imgBg2 = "https://www.kingstonloda.com/AssetLink/y6gc3mwwkv1x2424p584p1nwni5g6754.png";
  const imgBg3 = "https://www.kingstonloda.com/AssetLink/8vo64uhg3c5d55xjur3pk41de582q1v7.png";
  const imgBg4 = "https://www.kingstonloda.com/AssetLink/aa5miyt7lj31m82341j5mg1jeogy36ct.png";

  const imgGo1 = "https://www.kingstonloda.com/AssetLink/7hkoma412bwk6uecp3h7pf14aq2nk5sn.png";
  const imgGo2 = "https://www.kingstonloda.com/AssetLink/8v04gfl4cj4x8q52go831v08d30e35l1.png";
  const imgGo3 = "https://www.kingstonloda.com/AssetLink/1qbd2od48554wqe4n400fo735cgk113j.png";
  const imgGo4 = "https://www.kingstonloda.com/AssetLink/07y18ik8m3xo03p6l3gu12bc175haaoc.png";

  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Technical Illustrations</h2>
            </div>
            <div className="l-row__col l-1/1">
              <p>
                <strong style={{ fontWeight: "600" }}>
                  Kingston uses vector lines to enhance our communications.
                </strong>
              </p>
              <p>
                These lines are demonstrated in the images provided. These lines can be used to
                highlight the products or technology used in the image. The thickness of these lines
                is dependant on the size of the communication piece, but they should not be too
                thick and should not overpower or dominate the image.
              </p>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col u-animated u-animated--slow a-fadeIn" style={{ overflow: "initial" }}>
              <Carousel plugins={["arrows"]}>
                <img src={imgC1} alt="" />
                <img src={imgC2} alt="" />
                <img src={imgC3} alt="" />
                <img src={imgC4} alt="" />
              </Carousel>
            </div>
          </div>
          <div className="l-row">
            <p style={{ padding: "1em" }}>
              Kingston also uses some other vector lines as demonstrated below:
            </p>
            <div className="l-row__col l-3/6 u-flex">
              <div
                className="u-flex1"
                style={{ background: "#f7f9fa", marginRight: ".5em", padding: "1em" }}
              >
                <img
                  src="https://www.kingstonloda.com/AssetLink/646ii3jfnf4ny2dma1v36v653g803d7m.png"
                  alt=""
                  style={{ maxWidth: "100px", display: "block", margin: "0 auto 1em" }}
                />
                <small>
                  Vector corners are applied when using Rex, more specifically for Social Media
                  posts. These can be in white, or red depending on the background/color of the
                  image used behind it.
                </small>
              </div>
              <div
                className="u-flex1"
                style={{ background: "#f7f9fa", marginLeft: ".5em", padding: "1em" }}
              >
                <img
                  src="https://www.kingstonloda.com/AssetLink/cva6085y245wd6w4nl8ht26u3h44p842.png"
                  alt=""
                  style={{ maxWidth: "100px", display: "block", margin: "0 auto 1em" }}
                />
                <small>
                  Vector corners are applied when highlighting products on a banner, image or other
                  communication. These can be in white, or red depending on the background/color of
                  the image used behind it.
                </small>
              </div>
            </div>
            <div className="l-row__col l-3/6">
              <img
                src={img1}
                width="390"
                height="212"
                alt="Myriad Pro example"
                className="u-animated a-fadeIn"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h3>Line Drawings</h3>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1 l-3/8@lg">
              <p>
                <strong style={{ fontWeight: "600" }}>
                  A suite of product specific illustrations has been created to apply to all
                  Kingston collateral where a product image is used.
                </strong>
              </p>
              <p>
                The product illustrations are used to help highlight and add emphasis to the product
                image, in some instances to help it stand out from a busy background image, these
                can appear in any of the colors in the Kingston color palette.
              </p>
              <p>
                The product illustrations can also be used as a border to highlight information or a
                product’s USP.
              </p>
              <p style={{ marginTop: "2em" }}>
                <img src={img2} alt="" />
                <small>
                  Product illustration used to highlight product image - to help it stand out from a
                  similar colored background.
                </small>
              </p>
            </div>
            <div className="l-row__col l-1/1 l-3/4 l-5/8@lg" style={{ paddingLeft: "2em" }}>
              <p>
                <img
                  src="https://www.kingstonloda.com/AssetLink/i6ggh113hmgg24rb088ol8325kf8bxu7.svg"
                  alt="Typography Guidance Examples"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h3>Backgrounds + Overlays</h3>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                These are some examples of background and graphic elements that can be used to add
                simplicity to a design, to focus your attention on a subject, device, or product,
                and can be used to convey a product feature such as security or speed. Use this as
                an inspiration to explore other images or create similar custom artwork.
              </p>
            </div>
            <div className="l-row__col u-mb" style={{ overflow: "initial" }}>
              <p>
                <strong>Backgrounds</strong>
              </p>
              <Carousel plugins={["arrows"]}>
                <img src={imgBg1} alt="" />
                <img src={imgBg2} alt="" />
                <img src={imgBg3} alt="" />
                <img src={imgBg4} alt="" />
              </Carousel>
            </div>
            <div className="l-row__col" style={{ overflow: "initial" }}>
              <p>
                <strong>Graphic Overlays</strong>
              </p>
              <Carousel plugins={["arrows"]}>
                <img src={imgGo1} alt="" />
                <img src={imgGo2} alt="" />
                <img src={imgGo3} alt="" />
                <img src={imgGo4} alt="" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Illustrations;
