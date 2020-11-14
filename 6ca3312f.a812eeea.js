(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{211:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return i})),a.d(r,"metadata",(function(){return l})),a.d(r,"rightToc",(function(){return c})),a.d(r,"default",(function(){return s}));var t=a(2),n=a(6),o=(a(0),a(399)),i={id:"class-worker",title:"class: Worker"},l={unversionedId:"api/class-worker",id:"version-1.2.0/api/class-worker",isDocsHomePage:!1,title:"class: Worker",description:"The Worker class represents a WebWorker.",source:"@site/versioned_docs/version-1.2.0/api/class-worker.md",slug:"/api/class-worker",permalink:"/playwright/docs/1.2.0/api/class-worker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/api/class-worker.md",version:"1.2.0",sidebar:"version-1.2.0/api",previous:{title:"class: Accessibility",permalink:"/playwright/docs/1.2.0/api/class-accessibility"},next:{title:"class: BrowserServer",permalink:"/playwright/docs/1.2.0/api/class-browserserver"}},c=[{value:"event: &#39;close&#39;",id:"event-close",children:[]},{value:"worker.evaluate(pageFunction, arg)",id:"workerevaluatepagefunction-arg",children:[]},{value:"worker.evaluateHandle(pageFunction, arg)",id:"workerevaluatehandlepagefunction-arg",children:[]},{value:"worker.url()",id:"workerurl",children:[]}],p={rightToc:c};function s(e){var r=e.components,a=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(t.a)({},p,a,{components:r,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The Worker class represents a ",Object(o.a)("a",Object(t.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),".\n",Object(o.a)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation.\n",Object(o.a)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),Object(o.a)("pre",null,Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"page.on('worker', worker => {\n  console.log('Worker created: ' + worker.url());\n  worker.on('close', worker => console.log('Worker destroyed: ' + worker.url()));\n});\n\nconsole.log('Current workers:');\nfor (const worker of page.workers())\n  console.log('  ' + worker.url());\n")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(t.a)({parentName:"li"},{href:"#event-close-2"}),"event: 'close'")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(t.a)({parentName:"li"},{href:"#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(t.a)({parentName:"li"},{href:"#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(t.a)({parentName:"li"},{href:"#workerurl"}),"worker.url()"))),Object(o.a)("h2",{id:"event-close"},"event: 'close'"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"<","[Worker]",">")),Object(o.a)("p",null,"Emitted when this dedicated ",Object(o.a)("a",Object(t.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),Object(o.a)("h2",{id:"workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction","[, arg]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"pageFunction")," <","[function]","|","[string]","> Function to be evaluated in the worker context"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"arg")," <","[Serializable]","|","[JSHandle]","> Optional argument to pass to ",Object(o.a)("inlineCode",{parentName:"li"},"pageFunction")),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Serializable]",">> Promise which resolves to the return value of ",Object(o.a)("inlineCode",{parentName:"li"},"pageFunction"))),Object(o.a)("p",null,"If the function passed to the ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a ","[Promise]",", then ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluate")," would wait for the promise to resolve and return its value."),Object(o.a)("p",null,"If the function passed to the ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a non-","[Serializable]"," value, then ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluate")," resolves to ",Object(o.a)("inlineCode",{parentName:"p"},"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",Object(o.a)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.a)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.a)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.a)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.a)("inlineCode",{parentName:"p"},"-Infinity"),", and bigint literals."),Object(o.a)("h2",{id:"workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction","[, arg]",")"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"pageFunction")," <","[function]","|","[string]","> Function to be evaluated in the page context"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"arg")," <","[Serializable]","|","[JSHandle]","> Optional argument to pass to ",Object(o.a)("inlineCode",{parentName:"li"},"pageFunction")),Object(o.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[JSHandle]",">> Promise which resolves to the return value of ",Object(o.a)("inlineCode",{parentName:"li"},"pageFunction")," as in-page object (JSHandle)")),Object(o.a)("p",null,"The only difference between ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluate")," and ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," is that ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns in-page object (JSHandle)."),Object(o.a)("p",null,"If the function passed to the ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns a ","[Promise]",", then ",Object(o.a)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(o.a)("h2",{id:"workerurl"},"worker.url()"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"returns: <","[string]",">")))}s.isMDXComponent=!0},399:function(e,r,a){"use strict";a.d(r,"a",(function(){return d}));var t=a(0),n=a.n(t);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var r=n.a.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),d=t,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?n.a.createElement(m,l(l({ref:r},p),{},{components:a})):n.a.createElement(m,l({ref:r},p))}));function d(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);