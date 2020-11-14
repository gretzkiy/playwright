(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),i=(r(0),r(399)),o={id:"playwright-module",title:"Playwright module"},l={unversionedId:"api/playwright-module",id:"version-1.6.0/api/playwright-module",isDocsHomePage:!1,title:"Playwright module",description:"Playwright module provides a method to launch a browser instance.",source:"@site/versioned_docs/version-1.6.0/api/playwright-module.md",slug:"/api/playwright-module",permalink:"/playwright/docs/api/playwright-module",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.0/api/playwright-module.md",version:"1.6.0",sidebar:"version-1.6.0/api",next:{title:"class: Browser",permalink:"/playwright/docs/api/class-browser"}},c=[{value:"playwright.chromium",id:"playwrightchromium",children:[]},{value:"playwright.devices",id:"playwrightdevices",children:[]},{value:"playwright.errors",id:"playwrighterrors",children:[]},{value:"playwright.firefox",id:"playwrightfirefox",children:[]},{value:"playwright.selectors",id:"playwrightselectors",children:[]},{value:"playwright.webkit",id:"playwrightwebkit",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Playwright module provides a method to launch a browser instance.\nThe following is a typical example of using Playwright to drive automation:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(i.a)("p",null,"By default, the ",Object(i.a)("inlineCode",{parentName:"p"},"playwright")," NPM package automatically downloads browser executables during installation. The ",Object(i.a)("inlineCode",{parentName:"p"},"playwright-core")," NPM package can be used to skip automatic downloads."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"#playwrightchromium"}),"playwright.chromium")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"#playwrightdevices"}),"playwright.devices")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"#playwrighterrors"}),"playwright.errors")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"#playwrightfirefox"}),"playwright.firefox")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"#playwrightselectors"}),"playwright.selectors")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(a.a)({parentName:"li"},{href:"#playwrightwebkit"}),"playwright.webkit"))),Object(i.a)("h2",{id:"playwrightchromium"},"playwright.chromium"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[BrowserType]",">")),Object(i.a)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ","[ChromiumBrowser]","."),Object(i.a)("h2",{id:"playwrightdevices"},"playwright.devices"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Object]",">")),Object(i.a)("p",null,"Returns a list of devices to be used with ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#browsernewcontextoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"browser.newContext([options])"))," or ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#browsernewpageoptions"}),Object(i.a)("inlineCode",{parentName:"a"},"browser.newPage([options])")),". Actual list of devices can be found in ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/playwright/blob/master/src/server/deviceDescriptors.ts"}),"src/server/deviceDescriptors.ts"),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(i.a)("h2",{id:"playwrighterrors"},"playwright.errors"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"TimeoutError")," <","[function]","> A class of ","[TimeoutError]",".")))),Object(i.a)("p",null,"Playwright methods might throw errors if they are unable to fulfill a request. For example, ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])"),"\nmight fail if the selector doesn't match any nodes during the given timeframe."),Object(i.a)("p",null,"For certain types of errors Playwright uses specific error classes.\nThese classes are available via ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#playwrighterrors"}),Object(i.a)("inlineCode",{parentName:"a"},"playwright.errors")),"."),Object(i.a)("p",null,"An example of handling a timeout error:"),Object(i.a)("pre",null,Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"try {\n  await page.waitForSelector('.foo');\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n")),Object(i.a)("h2",{id:"playwrightfirefox"},"playwright.firefox"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[BrowserType]",">")),Object(i.a)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ","[FirefoxBrowser]","."),Object(i.a)("h2",{id:"playwrightselectors"},"playwright.selectors"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Selectors]",">")),Object(i.a)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.a)("a",Object(a.a)({parentName:"p"},{href:"#working-with-selectors"}),"Working with selectors")," for more information."),Object(i.a)("h2",{id:"playwrightwebkit"},"playwright.webkit"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[BrowserType]",">")),Object(i.a)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ","[WebKitBrowser]","."))}p.isMDXComponent=!0},399:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),h=a,w=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return r?n.a.createElement(w,l(l({ref:t},s),{},{components:r})):n.a.createElement(w,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);