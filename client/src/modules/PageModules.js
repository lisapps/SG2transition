const path = require("path");

class PageModules {
  #routes = [];
  #stickyRoutes = [];
  #moduleBlocks = {};
  #pathLog = [];

  use(path, modules) {
    let moduleNames = [];
    let defaultObj, moduleName, modulePath, fullPath;

    for (const prop in modules) {
      defaultObj = modules[prop]["default"];
      moduleName = defaultObj.navtxt;

      // Join Paths and validate
      modulePath = defaultObj.path;
      if (modulePath === undefined) continue;
      if (modulePath != "/") {
        fullPath = path + modulePath;
      } else {
        fullPath = modulePath;
      }
      fullPath = fullPath.replace("//", "/");
      if (this.#pathLog.indexOf(fullPath) >= 0) {
        console.warn("Path assigned for module", moduleName, "is already taken by another module");
        continue;
      } else if (fullPath === "/brand/web-ui") {
        //adding exception to Pages starting with /brand for this one
        fullPath = "/web-ui";
        this.#pathLog.push(fullPath);
        defaultObj.path = fullPath;
      } else {
        this.#pathLog.push(fullPath);
        defaultObj.path = fullPath;
      }

      // place modules in correct arrays whether it's sticky or not
      if (defaultObj.sticky) this.#stickyRoutes.push(defaultObj);
      else {
        moduleNames.push(moduleName);
        this.#moduleBlocks[moduleName] = defaultObj;
      }
    }

    moduleNames.sort();

    // arranges the modules in alphabetical order
    for (let a = 0; a < moduleNames.length; a++) {
      moduleName = moduleNames[a];
      this.#routes.push(this.#moduleBlocks[moduleName]);
    }
  }

  get getData() {
    return this.#stickyRoutes.concat(this.#routes);
  }
}

module.exports = new PageModules();
