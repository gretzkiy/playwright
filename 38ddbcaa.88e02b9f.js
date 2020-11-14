(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=(a(0),a(399)),c={id:"test-runners",title:"Test Runners"},i={unversionedId:"test-runners",id:"test-runners",isDocsHomePage:!1,title:"Test Runners",description:"With a few lines of code, you can hook up Playwright to your favorite JavaScript test runner.",source:"@site/docs/test-runners.md",slug:"/test-runners",permalink:"/playwright/docs/next/test-runners",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/test-runners.md",version:"current",sidebar:"docs",previous:{title:"Page Object Models",permalink:"/playwright/docs/next/pom"},next:{title:"Running Playwright in Docker",permalink:"/playwright/docs/next/docker/README"}},s=[{value:"Jest / Jasmine",id:"jest--jasmine",children:[]},{value:"AVA",id:"ava",children:[]},{value:"Mocha",id:"mocha",children:[]},{value:"Multiple Browsers",id:"multiple-browsers",children:[]}],l={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"With a few lines of code, you can hook up Playwright to your favorite JavaScript test runner."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#jest--jasmine"}),"Jest / Jasmine")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#ava"}),"AVA")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#mocha"}),"Mocha")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#multiple-browsers"}),"Multiple Browsers"))),Object(o.a)("br",null),Object(o.a)("br",null),Object(o.a)("h2",{id:"jest--jasmine"},"Jest / Jasmine"),Object(o.a)("p",null,"For Jest, ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/playwright-community/jest-playwright"}),"jest-playwright")," can be used. However for a light-weight solution, requiring playwright directly works fine. Jest shares it's syntax with Jasmine, so this applies to Jasmine as well."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {chromium} = require('playwright');\nconst expect = require('expect');\nlet browser;\nlet page;\nbeforeAll(async () => {\n  browser = await chromium.launch();\n});\nafterAll(async () => {\n  await browser.close();\n});\nbeforeEach(async () => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\n\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  expect(await page.title()).toBe('Example Domain');\n});\n")),Object(o.a)("br",null),Object(o.a)("h2",{id:"ava"},"AVA"),Object(o.a)("p",null,"Tests run concurrently in AVA, so a single page variable cannot be shared between tests. Instead, create new pages with a macro function."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {chromium} = require('playwright');\nconst test = require('ava').default;\nconst browserPromise = chromium.launch();\n\nasync function pageMacro(t, callback) {\n  const browser = await browserPromise;\n  const page = await browser.newPage();\n  try {\n    await callback(t, page);\n  } finally {\n    await page.close();\n  }\n}\n\ntest('should work', pageMacro, async (t, page) => {\n  await page.goto('https://www.example.com/');\n  t.is(await page.title(), 'Example Domain');\n});\n")),Object(o.a)("br",null),Object(o.a)("h2",{id:"mocha"},"Mocha"),Object(o.a)("p",null,"Mocha looks very similar to the Jest/Jasmine setup, and functions in the same way."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {chromium} = require('playwright');\nconst assert = require('assert');\nlet browser;\nbefore(async() => {\n  browser = await chromium.launch();\n});\nafter(async () => {\n  await browser.close();\n});\nlet page;\nbeforeEach(async() => {\n  page = await browser.newPage();\n});\nafterEach(async () => {\n  await page.close();\n});\n\nit('should work', async () => {\n  await page.goto('https://www.example.com/');\n  assert.equal(await page.title(), 'Example Domain');\n});\n")),Object(o.a)("br",null),Object(o.a)("h2",{id:"multiple-browsers"},"Multiple Browsers"),Object(o.a)("p",null,"These simple examples can be extended to support multiple browsers using an environment variable."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {chromium, webkit, firefox} = require('playwright');\nconst browserName = process.env.BROWSER || 'webkit';\nlet browser;\nbeforeAll(async() => {\n  browser = await {chromium, webkit, firefox}[browserName].launch();\n});\n")),Object(o.a)("p",null,"Then set ",Object(o.a)("inlineCode",{parentName:"p"},"BROWSER=firefox")," to run your tests with firefox, or any other browser."))}u.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,w=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return a?r.a.createElement(w,i(i({ref:t},l),{},{components:a})):r.a.createElement(w,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);