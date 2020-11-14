(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{335:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(399)),i={id:"emulation",title:"Device and environment emulation"},c={unversionedId:"emulation",id:"version-1.2.0/emulation",isDocsHomePage:!1,title:"Device and environment emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.2.0/emulation.md",slug:"/emulation",permalink:"/playwright/docs/1.2.0/emulation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/emulation.md",version:"1.2.0",sidebar:"version-1.2.0/docs",previous:{title:"Input",permalink:"/playwright/docs/1.2.0/input"},next:{title:"Network",permalink:"/playwright/docs/1.2.0/network"}},l=[{value:"User agent",id:"user-agent",children:[]},{value:"Viewport, color scheme",id:"viewport-color-scheme",children:[]},{value:"Devices",id:"devices",children:[]},{value:"Locale &amp; timezone",id:"locale--timezone",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Geolocation",id:"geolocation",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),Object(o.a)("li",{parentName:"ul"},"locale, timezone"),Object(o.a)("li",{parentName:"ul"},"color scheme"),Object(o.a)("li",{parentName:"ul"},"geolocation"),Object(o.a)("li",{parentName:"ul"},"etc")),Object(o.a)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#user-agent"}),"User agent")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#viewport-color-scheme"}),"Viewport, color scheme")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#devices"}),"Devices")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#permissions"}),"Permissions")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#geolocation"}),"Geolocation"))),Object(o.a)("br",null),Object(o.a)("h2",{id:"user-agent"},"User agent"),Object(o.a)("p",null,"All pages created in the context above will share the user agent specified:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  userAgent: 'My user agent'\n});\n")),Object(o.a)("h4",{id:"api-reference"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"viewport-color-scheme"},"Viewport, color scheme"),Object(o.a)("p",null,"Create a context with custom viewport size:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Create context with given viewport\nconst context = await browser.newContext({\n  viewport: { width: 1280, height: 1024 }\n});\n\n// Resize viewport for individual page\nawait page.setViewportSize({ width: 1600, height: 1200 });\n\n// Emulate high-DPI\nconst context = await browser.newContext({\n  viewport: { width: 2560, height: 1440 },\n  deviceScaleFactor: 2,\n});\n\n// Create device with the dark color scheme:\nconst context = await browser.newContext({\n  colorScheme: 'dark'\n});\n\n// Change color scheme for the page\nawait page.emulateMedia({ colorScheme: 'dark' });\n")),Object(o.a)("h4",{id:"api-reference-1"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#pageemulatemediaoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"page.emulateMedia([options])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#pagesetviewportsizeviewportsize"}),Object(o.a)("inlineCode",{parentName:"a"},"page.setViewportSize(viewportSize)")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"devices"},"Devices"),Object(o.a)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, devices } =\n    require('playwright');\nconst browser = await chromium.launch();\n\nconst pixel2 = devices['Pixel 2'];\nconst context = await browser.newContext({\n  ...pixel2,\n});\n")),Object(o.a)("p",null,"All pages created in the context above will share the same device parameters."),Object(o.a)("h4",{id:"api-reference-2"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#playwrightdevices"}),Object(o.a)("inlineCode",{parentName:"a"},"playwright.devices"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"locale--timezone"},"Locale & timezone"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Emulate locale and time\nconst context = await browser.newContext({\n  locale: 'de-DE',\n  timezoneId: 'Europe/Berlin',\n});\n")),Object(o.a)("h4",{id:"api-reference-3"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"permissions"},"Permissions"),Object(o.a)("p",null,"Allow all pages in the context to show system notifications:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  permissions: ['notifications'],\n});\n")),Object(o.a)("p",null,"Grant all pages in the existing context access to current location:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await context.grantPermissions(['geolocation']);\n")),Object(o.a)("p",null,"Grant notifications access from a specific domain:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await context.grantPermissions(['notifications'], {origin: 'https://skype.com'} );\n")),Object(o.a)("p",null,"Revoke all permissions:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await context.clearPermissions();\n")),Object(o.a)("h4",{id:"api-reference-4"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsercontextgrantpermissionspermissions-options"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.grantPermissions(permissions[][, options])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsercontextclearpermissions"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.clearPermissions()")))),Object(o.a)("br",null),Object(o.a)("h2",{id:"geolocation"},"Geolocation"),Object(o.a)("p",null,"Create a context with ",Object(o.a)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  geolocation: { longitude: 48.858455, latitude: 2.294474 },\n  permissions: ['geolocation']\n});\n")),Object(o.a)("p",null,"Change the location later:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await context.setGeolocation({ longitude: 29.979097, latitude: 31.134256 });\n")),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),Object(o.a)("h4",{id:"api-reference-5"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/1.2.0/api#browsercontextsetgeolocationgeolocation"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.setGeolocation(geolocation)")))),Object(o.a)("br",null))}p.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,O=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return a?r.a.createElement(O,c(c({ref:t},s),{},{components:a})):r.a.createElement(O,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);