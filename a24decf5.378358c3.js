(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(399)),i={id:"evaluationargument",title:"EvaluationArgument"},u={unversionedId:"api/evaluationargument",id:"version-1.5.0/api/evaluationargument",isDocsHomePage:!1,title:"EvaluationArgument",description:"Playwright evaluation methods like page.evaluate(pageFunction[, arg]) take a single optional argument. This argument can be a mix of [Serializable] values and [JSHandle] or [ElementHandle] instances. Handles are automatically converted to the value they represent.",source:"@site/versioned_docs/version-1.5.0/api/evaluationargument.md",slug:"/api/evaluationargument",permalink:"/playwright/docs/1.5.0/api/evaluationargument",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.0/api/evaluationargument.md",version:"1.5.0",sidebar:"version-1.5.0/api",previous:{title:"class: WebKitBrowser",permalink:"/playwright/docs/1.5.0/api/class-webkitbrowser"},next:{title:"Environment Variables",permalink:"/playwright/docs/1.5.0/api/environment-variables"}},l=[],c={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Playwright evaluation methods like ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")," take a single optional argument. This argument can be a mix of ","[Serializable]"," values and ","[JSHandle]"," or ","[ElementHandle]"," instances. Handles are automatically converted to the value they represent."),Object(o.a)("p",null,"See examples for various scenarios:"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// A primitive value.\nawait page.evaluate(num => num, 42);\n\n// An array.\nawait page.evaluate(array => array.length, [1, 2, 3]);\n\n// An object.\nawait page.evaluate(object => object.foo, { foo: 'bar' });\n\n// A single handle.\nconst button = await page.$('button');\nawait page.evaluate(button => button.textContent, button);\n\n// Alternative notation using elementHandle.evaluate.\nawait button.evaluate((button, from) => button.textContent.substring(from), 5);\n\n// Object with multiple handles.\nconst button1 = await page.$('.button1');\nconst button2 = await page.$('.button2');\nawait page.evaluate(\n    o => o.button1.textContent + o.button2.textContent,\n    { button1, button2 });\n\n// Obejct destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nawait page.evaluate(\n    ({ button1, button2 }) => button1.textContent + button2.textContent,\n    { button1, button2 });\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\nawait page.evaluate(\n    ([b1, b2]) => b1.textContent + b2.textContent,\n    [button1, button2]);\n\n// Any non-cyclic mix of serializables and handles works.\nawait page.evaluate(\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo),\n    { button1, list: [button2], foo: null });\n")))}s.isMDXComponent=!0},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,g=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(g,u(u({ref:t},c),{},{components:n})):r.a.createElement(g,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);