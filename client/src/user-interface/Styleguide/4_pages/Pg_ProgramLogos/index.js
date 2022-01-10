import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import S_Headline from "../../3_sections/headline/S_Headline";

let svgLogoKC1 = 'https://www.kingstonloda.com/AssetLink/beh210n23vbmky41ygch8o2w6m6822fp.svg'
let svgLogoKC2 = 'https://www.kingstonloda.com/AssetLink/33i7n6b6b3aw4m4crff0y2p32yv577ft.svg'
let svgLogoKC3 = 'https://www.kingstonloda.com/AssetLink/25v63004lfy7ncx21vn6v3140pjxg10q.svg'
let svgLogoKC4 = 'https://www.kingstonloda.com/AssetLink/7386orwm5s6n258ed542xhb2dvdv860j.svg'

let svgLogoAsk1 = 'https://www.kingstonloda.com/AssetLink/25jqixhcje4gh2o18n0b6m2404772qn6.svg'
let svgLogoAsk2 = 'https://www.kingstonloda.com/AssetLink/h17q081lqw0mfu323hs22857x56n3o70.svg'
let svgLogoAsk3 = 'https://www.kingstonloda.com/AssetLink/nu54b3ug0blh466d4uxc050nys1lb4dr.svg'
let svgLogoAsk4 = 'https://www.kingstonloda.com/AssetLink/h3qej0ssnj340ls4r0753mx1g278154w.svg'

const Pg_ProgramLogos = () => {
    const { appState, setAppState } = useContext(AppContext);

    useEffect(() => {
        setAppState({
        ...appState,
        currentPath: "/brand/program-logos",
        outputName: "",
        headerName: "Program Logos",
        thumb: "",
        viewHeight: null,
        description: null,
        hasjs: false,
        });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pg-brandProgramLogos u-flex u-flex1 u-flexColumn">
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
                                <h2>KingstonCare Logo</h2>
                            </div>
                        </div>

                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <p>
                                    The <strong>KingstonCare®</strong> logo should always be used in proportion and should not be changed or altered in any way. The KingstonCare logo has two variations:
                                </p>
                                <ul>
                                    <li><strong>Full color KingstonCare Logo</strong></li>
                                    <li><strong>Monochromatic KingstonCare Logo</strong></li>
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
                                            <img src={svgLogoKC1} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Full color - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoKC2} alt="Kingston Care" />
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
                                            <img src={svgLogoKC3} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Monochromatic - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoKC4} alt="Kingston Care" />
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
                                <h2>Ask An Expert Logo</h2>
                            </div>
                        </div>

                        <div className="l-row">
                            <div className="l-row__col l-1/1">
                                <p>
                                    Kingston’s <strong>Ask an Expert</strong> logo should always be used in proportion and should not be changed or altered in any way. Kingston’s Ask an Expert logo has two variations:
                                </p>
                                <ul>
                                    <li><strong>Full color Ask an Expert Logo</strong></li>
                                    <li><strong>Monochromatic Ask an Expert Logo</strong></li>
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
                                            <img src={svgLogoAsk1} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Full color - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoAsk2} alt="Kingston Care" />
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
                                            <img src={svgLogoAsk3} alt="Kingston Care Logo" />
                                        </div>
                                    </div>
                                    <div className="u-flex1" style={{ padding: ".5em", paddingRight: 0 }}>
                                        <p>
                                            <small>
                                                Monochromatic - over black
                                            </small>
                                        </p>
                                        <div style={{padding: "3em 5.5em",border: "1px solid black", background: "black"}}>
                                            <img src={svgLogoAsk4} alt="Kingston Care" />
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
  path: "program-logos",
  component: Pg_ProgramLogos,
  navtxt: "Program Logos",
};
