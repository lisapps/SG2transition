import React from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

let imgB2C = "https://www.kingstonloda.com/AssetLink/1370os3v8n0vthp1141p4c7g7c3vnrfy.png";
let imgB2B = "https://www.kingstonloda.com/AssetLink/1e26522e6lh71opb3m5m8040nrd84apb.png";
let imgBP = "https://www.kingstonloda.com/AssetLink/q62g6fvf725m2c11856b508t81w0nt5o.png";
let imgBannersTemplate =
  "https://www.kingstonloda.com/AssetLink/2w373cc2la5602f82fm5hoft256fl2ua.png";

let imgFlyers = "https://www.kingstonloda.com/AssetLink/n0t1225xq38juo76235h268h25582wve.png";
let imgFlyers2 = "https://www.kingstonloda.com/AssetLink/k1kei6a8j0cokd5qrxd61d11t0qs1007.png";
let imgFlyers3 = "https://www.kingstonloda.com/AssetLink/vimf7okb1a5o36us4xux6o47adi7aoqu.png";

let imgPrintMedia = "https://www.kingstonloda.com/AssetLink/3433wd5s400t6witf1gvjlasspg5f3re.png";
let imgPrintMedia2 = "https://www.kingstonloda.com/AssetLink/u5wb5lf8p1ncmu0262owxd245s75r43o.png";
let imgPrintMedia3 = "https://www.kingstonloda.com/AssetLink/rt08dlpi7dbkdbc034m45i76nw4fkdx2.png";
let imgPrintMedia4 = "https://www.kingstonloda.com/AssetLink/6og2ep8chluwx14sc0y6t25jhb0g03c3.png";

let imgDatasheets = "https://www.kingstonloda.com/AssetLink/8lv62k5rhv0tpv7616vlvhgln6068xmu.png";
let imgDatasheets2 = "https://www.kingstonloda.com/AssetLink/4ty7q577157n55kv75d48508wonkde7n.png";
let imgDatasheets3 = "https://www.kingstonloda.com/AssetLink/j5r2j553vt166ad76jp24jcaak1f47t5.png";

const Examples = () => {
  return (
    <>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>B2C Web Banner Sample Set</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                B2C sample web banners are colorful, lively and engaging. The focus is more on
                lifestyle and real-world usage of our products.
              </p>
              <p>
                <strong>#KingstonIsWithYou</strong>
                <br />
                Please add the hashtag to banners that have ample spacing and if space does not
                allow, just omit from banner.
              </p>
              <p>
                Keep it clean and simple. Too many elements on smaller banners can create chaos for
                the viewer.
              </p>
            </div>
            <div className="l-row__col">
              <p>
                <img className="u-animated u-animated--slow a-fadeIn" src={imgB2C} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>B2B Web Banner Sample Set</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                B2B sample web banners. One focuses on the product incorporated with a speed or
                technical background where the other can focus on the lifestyle element.
              </p>
              <p>
                <strong>#KingstonIsWithYou</strong>
                <br />
                Please add the hashtag to banners that have ample spacing and if space does not
                allow, just omit from banner.
              </p>
              <p>
                Keep it clean and simple. Too many elements on smaller banners can create chaos for
                the viewer.
              </p>
              <p>
                <img src={imgB2B} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Banner Best Practices</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1 l-1/2@lg">
              <p>
                <img src={imgBP} alt="" />
              </p>
            </div>

            <div className="l-row__col l-1/1 l-1/2@lg" style={{ paddingLeft: "2em" }}>
              <p>
                <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Use a strong clear
                headline. “Capturing Life on the Move” or “Secure Sensitive Data” are good examples.
              </p>
              <p>
                <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Include product images
                with lifestyle oriented ads to give customers a quick visual reference for ad
                context.
              </p>
              <p>
                <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Include text explaining
                product offering. “Encrypted Storage Solutions” and “Canvas Select Plus MicroSD” for
                example.
              </p>
              <p>
                <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Ensure each Ad includes
                ‘Call to action’ text in addition to headlines. Use ‘Learn More’, ‘Download Now’ or
                ‘Sign up’ based on the objective.
              </p>
              <p>
                <span style={{ fontSize: "1.5em", color: "green" }}>✓</span> Include
                <strong>#KingstonIsWithYou</strong> as space allows on banners.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>CTA Styles and Buttons</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                For Kingston digital media banners, designers should choose a style that will work
                best with the images given.
              </p>
              <p>
                All elements can be optimized, and the Kingston logo block can be interchangeable
                between the positive or negative logo. The block can also differ in original opacity
                depending on the suitable image being used. As the designer, it’s your call to make
                decisions based on these parameters.
              </p>
              <p>
                The only elements that should not be changed or altered are the Kingston logo block
                size and the CTA size. A template has been created to maintain size ratio with the
                appropriate banner size. As shown, CTA sizes are proportioned appropriately for
                their specific GDN sizes
              </p>
              <p>
                <img src={imgBannersTemplate} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Flyers</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                Examples of flyers with partial and full-bleed imagery for the front cover – open to
                designer’s discretion. Body copy can be flexible to a single or multiple column
                layout. Also what’s evident is the use of the ‘red accent bar’ affixed to the top of
                each page and minimal use of red elements as shown.
              </p>
            </div>
            <Carousel plugins={['arrows']}>
              <img src={imgFlyers} alt="" />
              <img src={imgFlyers2} alt="" />
              <img src={imgFlyers3} alt="" />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="s-content" style={{ background: "#F7F9FA" }}>
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Datasheets</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                Examples of datasheets show the height flexibility for the main image which is
                dependent on the amount of content given. The ‘red accent bar’ is placed at the top
                of each datasheet for consistency with other marketing pieces.
              </p>
            </div>
            <Carousel plugins={['arrows']}>
              <img src={imgDatasheets} alt="" />
              <img src={imgDatasheets2} alt="" />
              <img src={imgDatasheets3} alt="" />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="s-content">
        <div className="l-inner">
          <div className="l-row">
            <div className="s-content__headline l-row__col l-1/1">
              <h2>Printed Media</h2>
            </div>
          </div>
          <div className="l-row">
            <div className="l-row__col l-1/1">
              <p>
                Examples of flyers with partial and full-bleed imagery for the front cover – open to
                designer’s discretion. Body copy can be flexible to a single or multiple column
                layout. Also what’s evident is the use of the ‘red accent bar’ affixed to the top of
                each page and minimal use of red elements as shown.
              </p>
            </div>
            <Carousel plugins={['arrows']}>
              <img src={imgPrintMedia} alt="" />
              <img src={imgPrintMedia2} alt="" />
              <img src={imgPrintMedia3} alt="" />
              <img src={imgPrintMedia4} alt="" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Examples;
