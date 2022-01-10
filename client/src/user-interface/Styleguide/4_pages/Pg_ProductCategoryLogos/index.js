import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import S_Headline from "../../3_sections/headline/S_Headline";

let svgLogoVR1 = 'https://www.kingstonloda.com/AssetLink/5p8m0j1265801ecejk1yydj8v7xgfx42.svg'
let svgLogoVR2 = 'https://www.kingstonloda.com/AssetLink/o07t2lircs6himrsbi1w4aw7bjb8njx4.svg'
let svgLogoVR3 = 'https://www.kingstonloda.com/AssetLink/80htnm62qyfskn1x7c3tb6ds610guj2k.svg'
let svgLogoVR4 = 'https://www.kingstonloda.com/AssetLink/vdp2t0l3f6022r2mj8acf22nvsk6jylg.svg'

let svgLogoVR5 = 'https://www.kingstonloda.com/AssetLink/rn5adur4542u4co2g2tyy1l6i0sgg4qk.svg'
let svgLogoVR6 = 'https://www.kingstonloda.com/AssetLink/rn5adur4542u4co2g2tyy1l6i0sgg4qk.svg'

let svgLogoIK1 = 'https://www.kingstonloda.com/AssetLink/24df1w556jhca847u83me2x4775vu416.svg'
let svgLogoIK2 = 'https://www.kingstonloda.com/AssetLink/ab80u638y0qfy8l1rbx4w02607py02ns.svg'

let svgLogoSP1 = 'https://www.kingstonloda.com/AssetLink/x5tbip4us06v8123xlbh64wp2g42e0ql.svg'
let svgLogoSP2 = 'https://www.kingstonloda.com/AssetLink/ib0353ell6ril647071b881ds6yemvyv.svg'
let svgLogoSP3 = 'https://www.kingstonloda.com/AssetLink/ep38ca77s864js7x44fpgx182l4f0088.svg'
let svgLogoSP4 = 'https://www.kingstonloda.com/AssetLink/01050ww7bn8g1bqcg5137y0ne4o2bxlm.svg'

const Pg_ProductCategoryLogos = () => {
    const { appState, setAppState } = useContext(AppContext);

    useEffect(() => {
        setAppState({
        ...appState,
        currentPath: "/brand/product-category-logos",
        outputName: "",
        headerName: "Product Category Logos",
        thumb: "",
        viewHeight: null,
        description: null,
        hasjs: false,
        });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pg-brandProductCategoryLogos u-flex u-flex1 u-flexColumn">
            <S_Headline
            classMods={"s-headline--alignLeft"}
            headline={appState.headerName}
            history={true}
            />
            <div className="pg-brandLegal__centerWrap u-flex u-flexColumn u-flex1 u-justifyCenter u-animated u-animated--delayFast u-animated--slower a-fadeIn">
                <div className="s-content">
                    <div className="l-inner">
                        <div className="l-row">
                            <div className="s-content__headline l-row__col l-1/1">
                                <h2>ValueRAM Logo</h2>
                            </div>
                        </div>
                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <p>
                                    The <strong>ValueRAM®</strong> logo should always be used in proportion and should not be changed or altered in any way. Kingston ValueRAM logo has two variations:
                                </p>
                                <ul>
                                    <li><strong>Full color ValueRAM Logo</strong></li>
                                    <li><strong>Monochromatic ValueRAM Logo</strong></li>
                                </ul>
                            </div>
                        </div>              
                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <div className="u-flex">
                                    <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                                        <p>
                                            <small>
                                                Full color - over white
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black",background:"white"}}>
                                            <img src={svgLogoVR1} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Full color - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoVR2} alt="Kingston Care" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <div className="u-flex">
                                    <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                                        <p>
                                            <small>
                                                Monochromatic - over white
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black",background:"white"}}>
                                            <img src={svgLogoVR3} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Monochromatic - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoVR4} alt="Kingston Care" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <div className="u-flex">
                                    <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                                        <p>
                                            <small>
                                                Monochromatic - over white
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black",background:"white"}}>
                                            <img src={svgLogoVR5} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Monochromatic - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoVR6} alt="Kingston Care" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>          
                    </div>
                </div>
                <div className="s-content"  style={{ background: "#F7F9FA" }}>
                    <div className="l-inner">
                        <div className="l-row">
                            <div className="s-content__headline l-row__col l-1/1">
                                <h2>IronKey Logo</h2>
                            </div>
                        </div>

                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <p>
                                    Kingston’s <strong>IronKey®</strong> logo should always be used in proportion and should not be changed or altered in any way. Kingston’s IronKey logo only has one variation:
                                </p>
                                <ul>
                                    <li><strong>Monochromatic IronKey Logo</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                            <div className="u-flex">
                                    <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                                        <p>
                                            <small>
                                                Full color - over white
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black",background:"white"}}>
                                            <img src={svgLogoIK1} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Full color - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoIK2} alt="Kingston Care" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s-content">
                    <div className="l-inner">
                        <div className="l-row">
                            <div className="s-content__headline l-row__col l-1/1">
                                <h2>Server Premier Logo</h2>
                            </div>
                        </div>
                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <p>
                                    The <strong>Server Premier®</strong> logo should always be used in proportion (as shown) and should not be changed or altered in any way. Kingston’s Server Premier® logo has two variations:
                                </p>
                                <ul>
                                    <li><strong>Full color Server Premier Logo</strong></li>
                                    <li><strong>Monochromatic Server Premier Logo</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <div className="u-flex">
                                    <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                                        <p>
                                            <small>
                                                Full color - over white
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black",background:"white"}}>
                                            <img src={svgLogoSP1} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Full color - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoSP2} alt="Kingston Care" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <div className="u-flex">
                                    <div className="u-flex1" style={{ padding: ".5em", paddingLeft: 0 }}>
                                        <p>
                                            <small>
                                                Monochromatic - over white
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black",background:"white"}}>
                                            <img src={svgLogoSP3} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Monochromatic - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoSP4} alt="Kingston Care" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default {
  path: "product-category-logos",
  component: Pg_ProductCategoryLogos,
  navtxt: "Product Category Logos",
};
