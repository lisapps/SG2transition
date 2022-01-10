/* eslint-disable import/no-unresolved */
//require the class that runs all the module import functions
const Pages = require("./PageModules");

//import all the module style pages
import _styleguidePages from "../user-interface/Styleguide/4_pages/*/index.js";
import _webUI from "../user-interface/Website/3_sections/*/index.js";

/* above lines import this example type of data
{
    Pg_BrandElements: {
        default: {
            path: "elements/:active_tab",
            component: Pg_brandElements,
            navtxt: "Brand Elements"
        }
    },
    Pg_BrandGuidelines: {
        default: {
            path: "elements/:active_tab",
            component: Pg_brandElements,
            navtxt: "Brand Elements"
        }
    }
}
*/

// run brand guidelines and webcontent through "Pages" functions. Done separately bc they have different leading path parts.
Pages.use("/brand/", _styleguidePages);
Pages.use("/ui/", _webUI);

export default Pages.getData;

// export returns this kind of sample array
// [{
//   path: "[[SLUG/]]elements",
//   slug": "elements",
//   component: Pg_brandElements,
//   navtxt: "Brand Elements",
//   htmlName: "Brand Elements"
// },{
//   path: "[[SLUG/]]ambassadors",
//   slug": "ui",
//   component: S_Ambassadors,
//   navtxt: "Ambassadors",
//   icon: "ambassadors"
// }]
