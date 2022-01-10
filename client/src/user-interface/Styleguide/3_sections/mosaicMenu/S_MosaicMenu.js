import React from "react";
import { Link } from "react-router-dom";

const S_MosaicMenu = () => {
  let imgBrandElements =
    "https://www.kingstonloda.com/AssetLink/vrum7y2dvw1f5d7l5yd07078840ilu03.jpg";
  let imgFURY = "https://www.kingstonloda.com/AssetLink/f788yu6o858cc0xoygnll0084b411g16.png";
  let imgIllustration =
    "https://www.kingstonloda.com/AssetLink/janus378685bd88k73mn062k7ghrn4ov.png";
  let imgKIWY = "https://www.kingstonloda.com/AssetLink/ox4sase6vvqs5ednpu0ad6h8688y12oj.png";
  //let imgWeb = "https://www.kingstonloda.com/AssetLink/lr1j108u16n0e2vapql6m04ecs80pnd6.png";
  let imgPhoto = "https://www.kingstonloda.com/AssetLink/8x74y83l0cg5i1ne10b3nb4jyt6tg2g7.png";
  let imgVideo = "https://www.kingstonloda.com/AssetLink/bfrto1228470al1bl4m13170i7e264nr.jpg";

  return (
    <div className="s-mosaicMenu l-row l-row--flush u-flex u-flexColumn u-flex1">
      <div className="s-mosaicMenu__row">
        <Link
          to="/brand/elements"
          className="s-mosaicMenu__col l-row__col l-1/1"
          style={{ minHeight: "320px" }}
        >
          <h2 className="s-mosaicMenu__col__title">Brand Elements</h2>
          <img className="s-mosaicMenu__col__bg" src={imgBrandElements} alt=""></img>
        </Link>
      </div>

      <div className="s-mosaicMenu__row" style={{ maxHeight: "320px" }}>
        <Link
          to="/brand/kiwy"
          className="s-mosaicMenu__col l-row__col l-3/5@lg"
        >
          <h2 className="s-mosaicMenu__col__title">Kingston is With You</h2>
          <img className="s-mosaicMenu__col__bg u-animated a-fadeIn" src={imgKIWY} alt=""></img>
        </Link>
        <Link 
          to="/brand/fury" 
          className="s-mosaicMenu__col l-row__col l-2/5@lg">
          <h2 className="s-mosaicMenu__col__title">Kingston FURY</h2>
          <img className="s-mosaicMenu__col__bg" src={imgFURY} alt=""></img>
        </Link>
      </div>
      <div className="s-mosaicMenu__row">
        {/* <Link to="/brand/web" className="s-mosaicMenu__col l-row__col">
          <h2 className="s-mosaicMenu__col__title">Web</h2>
          <img className="s-mosaicMenu__col__bg" src={imgWeb} alt=""></img>
        </Link> */}
        <Link to="/brand/photography" className="s-mosaicMenu__col l-row__col">
          <h2 className="s-mosaicMenu__col__title">Photography</h2>
          <img className="s-mosaicMenu__col__bg" src={imgPhoto} alt=""></img>
        </Link>
        {/* <Link to="/brand/illustrations-and-backgrounds" className="s-mosaicMenu__col l-row__col">
          <h2 className="s-mosaicMenu__col__title">Illustrations + Backgrounds</h2>
          <img className="s-mosaicMenu__col__bg" src={imgIllustration} alt=""></img>
        </Link> */}
        <Link to="/brand/video" className="s-mosaicMenu__col l-row__col">
          <h2 className="s-mosaicMenu__col__title">Video</h2>
          <img className="s-mosaicMenu__col__bg" src={imgVideo} alt=""></img>
        </Link>
      </div>
      {/* Post MOSAIC content */}
      <div className="s-mosaicMenu__post">
        <ul className="u-flex u-list-unstyled u-p0" >
          <li>
            <h6>
              <Link to="/brand/program-logos">
                <img src="https://styleguide.kingston.com/icons/right-pointer/12/ffffff/" alt="right pointer" />
                Program Logos
              </Link>
            </h6>
          </li>
          <li>
            <h6>
              <Link to="/brand/product-category-logos">
                <img src="https://styleguide.kingston.com/icons/right-pointer/12/ffffff/" alt="right pointer" />
                  Product Category Logos
              </Link>
            </h6>
          </li>
          <li>
            <h6>
              <Link to="/brand/legal">
                <img src="https://styleguide.kingston.com/icons/right-pointer/12/ffffff/" alt="right pointer" />
                ISO / Legal
              </Link>
            </h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default S_MosaicMenu;

// Backdrop Overlay
// <div style="
//     width: 100%;
//     height: 100%;
//     background: black;
//     z-index: 1000;
//     position: absolute;
//     left: 0;
//     z-index: 200;
//     top: 0;
//     opacity: .75;
//     "></div>
