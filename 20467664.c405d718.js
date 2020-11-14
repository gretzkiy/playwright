(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(399)),i={id:"class-chromiumcoverage",title:"class: ChromiumCoverage"},c={unversionedId:"api/class-chromiumcoverage",id:"api/class-chromiumcoverage",isDocsHomePage:!1,title:"class: ChromiumCoverage",description:"Coverage gathers information about parts of JavaScript and CSS that were used by the page.",source:"@site/docs/api/class-chromiumcoverage.md",slug:"/api/class-chromiumcoverage",permalink:"/playwright/docs/next/api/class-chromiumcoverage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-chromiumcoverage.md",version:"current",sidebar:"api",previous:{title:"class: ChromiumBrowserContext",permalink:"/playwright/docs/next/api/class-chromiumbrowsercontext"},next:{title:"class: CDPSession",permalink:"/playwright/docs/next/api/class-cdpsession"}},l=[{value:"chromiumCoverage.startCSSCoverage(options)",id:"chromiumcoveragestartcsscoverageoptions",children:[]},{value:"chromiumCoverage.startJSCoverage(options)",id:"chromiumcoveragestartjscoverageoptions",children:[]},{value:"chromiumCoverage.stopCSSCoverage()",id:"chromiumcoveragestopcsscoverage",children:[]},{value:"chromiumCoverage.stopJSCoverage()",id:"chromiumcoveragestopjscoverage",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Coverage gathers information about parts of JavaScript and CSS that were used by the page."),Object(o.a)("p",null,"An example of using JavaScript coverage to produce Istambul report for page load:"),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\nconst v8toIstanbul = require('v8-to-istanbul');\n\n(async() => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.coverage.startJSCoverage();\n  await page.goto('https://chromium.org');\n  const coverage = await page.coverage.stopJSCoverage();\n  for (const entry of coverage) {\n    const converter = new v8toIstanbul('', 0, { source: entry.source });\n    await converter.load();\n    converter.applyCoverage(entry.functions);\n    console.log(JSON.stringify(converter.toIstanbul()));\n  }\n  await browser.close();\n})();\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#chromiumcoveragestartcsscoverageoptions"}),"chromiumCoverage.startCSSCoverage([options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#chromiumcoveragestartjscoverageoptions"}),"chromiumCoverage.startJSCoverage([options])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#chromiumcoveragestopcsscoverage"}),"chromiumCoverage.stopCSSCoverage()")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(r.a)({parentName:"li"},{href:"#chromiumcoveragestopjscoverage"}),"chromiumCoverage.stopJSCoverage()"))),Object(o.a)("h2",{id:"chromiumcoveragestartcsscoverageoptions"},"chromiumCoverage.startCSSCoverage(","[options]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"options")," <","[Object]","> Set of configurable options for coverage",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"resetOnNavigation")," <","[boolean]","> Whether to reset coverage on every navigation. Defaults to ",Object(o.a)("inlineCode",{parentName:"li"},"true"),"."))),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","> Promise that resolves when coverage is started")),Object(o.a)("h2",{id:"chromiumcoveragestartjscoverageoptions"},"chromiumCoverage.startJSCoverage(","[options]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"options")," <","[Object]","> Set of configurable options for coverage",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"resetOnNavigation")," <","[boolean]","> Whether to reset coverage on every navigation. Defaults to ",Object(o.a)("inlineCode",{parentName:"li"},"true"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"reportAnonymousScripts")," <","[boolean]","> Whether anonymous scripts generated by the page should be reported. Defaults to ",Object(o.a)("inlineCode",{parentName:"li"},"false"),"."))),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","> Promise that resolves when coverage is started")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"NOTE")," Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",Object(o.a)("inlineCode",{parentName:"p"},"eval")," or ",Object(o.a)("inlineCode",{parentName:"p"},"new Function"),". If ",Object(o.a)("inlineCode",{parentName:"p"},"reportAnonymousScripts")," is set to ",Object(o.a)("inlineCode",{parentName:"p"},"true"),", anonymous scripts will have ",Object(o.a)("inlineCode",{parentName:"p"},"__playwright_evaluation_script__")," as their URL.")),Object(o.a)("h2",{id:"chromiumcoveragestopcsscoverage"},"chromiumCoverage.stopCSSCoverage()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Array]","<","[Object]",">>> Promise that resolves to the array of coverage reports for all stylesheets",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"url")," <","[string]","> StyleSheet URL"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"text")," <","[string]","> StyleSheet content, if available."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"ranges")," <","[Array]","<","[Object]",">> StyleSheet ranges that were used. Ranges are sorted and non-overlapping.",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"start")," <","[number]","> A start offset in text, inclusive"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"end")," <","[number]","> An end offset in text, exclusive")))))),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"NOTE")," CSS Coverage doesn't include dynamically injected style tags without sourceURLs.")),Object(o.a)("h2",{id:"chromiumcoveragestopjscoverage"},"chromiumCoverage.stopJSCoverage()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Array]","<","[Object]",">>> Promise that resolves to the array of coverage reports for all scripts",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"url")," <","[string]","> Script URL"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"scriptId")," <","[string]","> Script ID"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"source")," <","[string]","> Script content, if applicable."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"functions")," <","[Array]","<","[Object]",">> V8-specific coverage format.",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"functionName")," <","[string]",">"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"isBlockCoverage")," <","[boolean]",">"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"ranges")," <","[Array]","<","[Object]",">>",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"count")," <","[number]",">"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"startOffset")," <","[number]",">"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"endOffset")," <","[number]",">")))))))),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"NOTE")," JavaScript Coverage doesn't include anonymous scripts by default. However, scripts with sourceURLs are\nreported.")))}p.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),b=r,g=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return a?n.a.createElement(g,c(c({ref:t},s),{},{components:a})):n.a.createElement(g,c({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);