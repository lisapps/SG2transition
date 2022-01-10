import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import S_Headline from "../../3_sections/headline/S_Headline";

const Pg_Legal = () => {
  const { appState, setAppState } = useContext(AppContext);

  useEffect(() => {
    setAppState({
      ...appState,
      currentPath: "/brand/legal",
      outputName: "",
      headerName: "ISO and Legal Guidelines",
      thumb: "",
      viewHeight: null,
      description: null,
      hasjs: false,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pg-brandLegal u-flex u-flex1 u-flexColumn">
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
                            <h2>ISO Logo &amp; Legal</h2>
                        </div>
                    </div>

                    <div className="l-row">
                        <div className="l-row__col l-1/1">
                            <p>
                                The ISO logo should be used on all marketing materials except packaging and the U.S. address. Place the ISO logo on the bottom-left portion of the page approximately 0.5” in diameter.
                            </p>
                        </div>
                    </div>
                    <div className="l-row">
                        <div className="l-row__col l-1/1">
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>U.S. and Canadian Legal</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em", visibility:"hidden"}}/>
                                <div>
                                    <h3 style={{marginBottom: ".25em"}}>Offers or Promotional Legal</h3>
                                    <small style={{fontWeight:"600"}}>U.S Offer</small>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. All trademarks and registered trademarks are the property of their respective owners. Offer valid from xxx xxx–xxx xxx or while supplies last. Terms and pricing subject to change without notice. Offer limited to qualifying Kingston part numbers and is subject to availability. Valid only in the USA. Not valid with any other offer. No cash value will be substituted. Additional restrictions may apply.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em", visibility:"hidden"}}/>
                                <div>
                                    <h3>Promotional Incentive</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. Kingston Technology and the Kingston logo are either registered trademarks or trademarks of Kingston Technology Company, Inc. All trademarks and registered trademarks are the property of their respective owners. Contest winners shall be responsible for all taxes, licenses and fees. Award recipients waive any and all claims of liability and hereby release, indemnify and hold harmless Kingston, and their affiliates, subsidiaries, distributors, advertising and promotional agencies from any loss, accident or injury occurring as a result or consequences of this program or any award received through the program. Kingston reserves the right to add, modify or delete any of the policies and/or awards at any time with or without prior notice.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>ValueRAM Legal</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. ValueRAM, and the Kingston logo are either registered trademarks or trademarks of Kingston Technology Company, Inc. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Server Premier Legal</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. Server Premier, and the Kingston logo are either registered trademarks or trademarks of Kingston Technology Company, Inc. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>IronKey Legal</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. IronKey, and the Kingston logo are either registered trademarks or trademarks of Kingston Technology Company, Inc. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Kingston FURY</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. Kingston FURY and the Kingston FURY logo are trademarks of Kingston Technology Corporation. All trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <h2 style={{marginTop: "1.5em"}}>EMEA:</h2>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>England UK (EN)</h3>
                                    <p>©2021 Kingston Technology Europe Co LLP and Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury-on-Thames, Middlesex, TW16 7EP, England. Tel: +44 (0) 1932 738888 Fax: +44 (0) 1932 785469 All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>France (FR)</h3>
                                    <p>©2021 Kingston Technology Europe Co LLP et Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury-on-Thames, Middlesex, TW16 7EP, Angleterre. Tél: +44 (0) 1932 738888 Fax: +44 (0) 1932 785469 Tous droits réservés. Toutes les marques commerciales et les marques déposées sont la propriété de leurs détenteurs respectifs.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Germany (DE)</h3>
                                    <p>©2021 Kingston Technology Europe Co LLP und Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury-on-Thames, Middlesex, TW16 7EP, England. Tel: +44 (0) 1932 738888, Fax: +44 (0) 1932 785469. Alle Rechte vorbehalten. Alle Marken und eingetragenen Marken sind Eigentum ihrer jeweiligen Besitzer.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Germany (DE)</h3>
                                    <p>©2021 Kingston Technology Europe Co LLP and Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury-on-Thames, Middlesex, TW16 7EP, England. Tel: +44 (0) 1932 738888 Fax: +44 (0) 1932 785469 All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/3o6i5j45y54t8yi865x65f271y42y8k0.png" target="_blank" alt="Quality Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Ireland (IE) - Flash</h3>
                                    <p>©2021 Kingston Technology Digital International Ltd, Stratus House, College &amp; Business Technology Park, Blanchardstown Road North, Dublin, D15 PEC4, Ireland. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/3o6i5j45y54t8yi865x65f271y42y8k0.png" target="_blank" alt="Quality Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Ireland (IE) - DRAM</h3>
                                    <p>©2021 Kingston Technology International Ltd, Stratus House, College &amp; Business Technology Park, Blanchardstown Road North, Dublin, D15 PEC4, Ireland. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Italy (IT)</h3>
                                    <p>©2021 Kingston Technology Europe Co LLP e Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury-on-Thames, Middlesex, TW16 7EP, Regno Unito. Tel: +44 (0) 1932 738888 Fax: +44 (0) 1932 785469 Tutti i diritti riservati. Tutti i marchi e i marchi registrati sono proprietà dei rispettivi titolari.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Dutch (NL)</h3>
                                    <p>©2021 Kingston Technology Europe Co LLP en Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury-on-Thames, Middlesex, TW16 7EP, England. Tel: +44 (0) 1932 738888 Fax: +44 (0) 1932 785469. Alle rechten voorbehouden. Alle handelsmerken en geregistreerde handelsmerken behoren toe aan hun respectieve eigenaars.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Poland (PL)</h3>
                                    <p>©2021 Kingston Technology Europe Co LLP i Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury-on-Thames, Middlesex, TW16 7EP, England. Tel: +44 (0) 1932 738888 Faks: +44 (0) 1932 785469 Wszelkie prawa zastrzeżone. Wszelkie znaki towarowe i zastrzeżone znaki towarowe są własnością odpowiednich właścicieli.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Spain (ES)</h3>
                                    <p>©2021 Kingston Technology Europe Co LLP y Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury-on-Thames, Middlesex, TW16 7EP, Reino Unido. Tel: +44 (0) 1932 738888 Fax: +44 (0) 1932 785469 Reservados todos los derechos. Todos los nombres de empresas y marcas registradas son propiedad de sus respectivos dueños.</p>
                                </div>
                            </div>
                            <h2 style={{marginTop: "1.5em"}}>Latin America:</h2>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Spanish (Latin America) (LATAM)</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. Todos los derechos reservados. Todas las marcas comerciales y las marcas registradas son propiedad exclusiva de sus respectivos dueños.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Portuguese (Brazil) (BR)</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA. Todos os direitos reservados. Todas as marcas ou marcas registradas pertencem a seus respectivos proprietários.</p>
                                </div>
                            </div>
                            <h2 style={{marginTop: "1.5em"}}>Eastern Europe:</h2>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Russia (RU)</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 USA.Все права защищены. Все товарные марки и зарегистрированные товарные знаки являются собственностью своих законных владельцев.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Turkey (TR)</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley, CA 92708 ABD. Her hakkı saklıdır. Tüm ticari markalar ve kayıtlı ticari markalar, ilgili sahiplerinin mülküdür.</p>
                                </div>
                            </div>
                            <h2 style={{marginTop: "1.5em"}}>Canada:</h2>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>French Canadian (FRCA)</h3>
                                    <p>©2021 Kingston Technology Corporation, 17600 Newhope Street, Fountain Valley (CA) 92708, États-Unis, tous droits réservés. Toutes les marques de commerce et les marques de commerce déposées appartiennent à leurs propriétaires respectifs.</p>
                                </div>
                            </div>
                            <h2 style={{marginTop: "1.5em"}}>Far East:</h2>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Hong Kong, Taiwan (TW)</h3>
                                    <p>©2021 Kingston Technology Far East Corp. (Asia Headquarters) No. 1-5, Li-Hsin Rd. 1, Science Park, Hsin Chu, Taiwan, R.O.C. 版權所有，保留所有權利。所有商標及 註冊商標係屬於各自所有者之智慧財產權。</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>China, Taiwan (CN)</h3>
                                    <p>©2021 Kingston Technology Far East Corp. (Asia Headquarters) No. 1-5, Li-Hsin Rd. 1, Science Park, Hsin Chu, Taiwan, R.O.C. 保留所有权利。所有商标和注册商标均 为各所有人之财产。</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Japan (JP)</h3>
                                    <p>©2021 Kingston Technology Far East Corp. (Asia Headquarters) No. 1-5, Li-Hsin Rd. 1, Science Park, Hsin Chu, Taiwan, R.O.C. すべての商標および登録商標は、各所有 者に帰属します。</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Thailand (TH)</h3>
                                    <p>©2021 Kingston Technology Far East Corp. (Asia Headquarters) No. 1-5, Li-Hsin Rd. 1, Science Park, Hsin Chu, Taiwan, R.O.C. สงวนล ขิ ส ทิ ธ ิ ์ เคร ื ่องหมายการค ้ าและ เครื่องหมายการค ้าจดทะเบยี นทั ้งหมดเปน็ ทรพั ย ์สนิ ของเจ ้าของแตล่ ะราย</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Vietnam (VN)</h3>
                                    <p>©2021 Kingston Technology Far East Corp. (Asia Headquarters) No. 1-5, Li-Hsin Rd. 1, Science Park, Hsin Chu, Taiwan, R.O.C. Các nhãn hiệu thương mại đã đăng ký và các nhãn hiệu thương mại là tài sản của các chủ sở hữu tương ứng.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <img src="https://www.kingstonloda.com/AssetLink/w2526cl68o2ok6xs14ux253ael6y577i.svg" target="_blank" alt="ISO Logo" style={{maxWidth: "65px",marginRight: "1em"}}/>
                                <div>
                                    <h3>Australia / New Zealand</h3>
                                    <p>©2021 Kingston Technology Far East Corp. (Asia Headquarters) No. 1-5, Li-Hsin Rd. 1, Science Park, Hsin Chu, Taiwan, R.O.C. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <div>
                                    <p><strong>Flash Memory</strong> – Always include with any reference to capacity for any Flash product. Actual available capacity for data storage is less than as listed on the products due to formatting and other functions. See kingston.com/flashguide.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <div>
                                    <p><strong>For Packaging</strong>
                                    <br/>
                                    Actual available capacity for data storage is less than as listed on the products due to formatting and other functions. <a href="https://kingston.com/flashguide" target="_blank" alt="Kingston's Flash Guide" rel="noreferrer">See kingston.com/flashguide</a>. Debido al formateo y a otras funciones, la capacidad real disponible para el almacenamiento de datos es menos de la que se indica en los productos. Consulte kingston. com/flashguide. La capacité réelle de stockage des données est inférieure à celle indiquée, parce qu’une partie est occupée par le formatage et d’autres fonctions. Consultez kingston.com/flashguide. Aufgrund der Formatierung und anderer Funktionen ist die tatsächlich zur Verfügung stehende Speicherkapazität niedriger als auf den Produkten angegeben. Siehe kingston.com/flashguide. A capacidade disponível real para o armazenamento de dados é inferior à indicada nos produtos devido à formatação e a outras funções. Consulte kingston.com/flashguide. La capacità reale disponibile per la memorizzazione dei dati è inferiore a quella riportata sui prodotti in quanto una certa quantità di spazio viene utilizzata per la formattazione e per altre funzioni. Per ulteriori informazioni, kingston.com/flashguide. Rzeczywista pojemność dostępna do przechowywania danych jest mniejsza niż podana na produktach z uwagi na obsługę formatowania i innych funkcji. Zobacz kingston.com/flashguide. Kvůli formátování a dalším funkcím je pro ukládání dat ve skutečnosti k dispozici nižší kapacita, než se u produktů uvádí. Viz kingston. com/flashguide. ©2021 Kingston Technology Corporation. 17600 Newhope Street, Fountain Valley, CA 92708 USA. All rights reserved. All registered trademarks and trademarks are property of their respective owners. Reservados todos los derechos. Todos los nombres de empresas y marcas registradas son propiedad de sus respectivos dueños. Tous droits réservés. Toutes les marques commerciales et les marques déposées sont la propriété de leurs détenteurs respectifs. Alle Rechte vorbehalten. Alle Marken und eingetragenen Marken sind Eigentum ihrer jeweiligen Besitzer. Todos os direitos reservados. Todas as marcas comerciais e registadas pertencem aos respectivos proprietários. Tutti i diritti riservati. Tutti i marchi e i marchi registrati sono proprietà dei rispettivi titolari. Wszelkie prawa zastrzeżone. Wszelkie znaki towarowe i zastrzeżone znaki towarowe są własnością odpowiednich właścicieli. Všechna práva vyhrazena. Všechny registrované ochranné známky a ochranné známky jsou majetkem příslušných vlastníků. Kingston Digital Europe Co LLP, Kingston Court, Brooklands Close, Sunbury–on–Thames, Middlesex, TW16 7EP, UK. 遠東金士頓科技股份有限公司 Kingston Technology Far East Corporation. 臺灣新竹科學工業園區力行—路1-5號. Kingston Digital International Ltd, Stratus House, College &amp; Business Technology Park, Blanchardstown Road North, Dublin, D15 PEC4, Ireland.</p>
                                </div>
                            </div>
                            <div className="u-flex" style={{alignItems: "flex-start", marginTop: "1em"}}>
                                <div>
                                    <p><strong>Warranty</strong> – For warranty details, visit <a href="https://kingston.com/wa" target="_blank" alt="Kingston warranty details" rel="noreferrer">kingston.com/wa</a></p>
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
  path: "legal",
  component: Pg_Legal,
  navtxt: "Legal",
};
