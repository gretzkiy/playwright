(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{198:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(2),r=t(6),l=(t(0),t(399)),i={id:"class-jshandle",title:"class: JSHandle"},o={unversionedId:"api/class-jshandle",id:"version-1.6.0/api/class-jshandle",isDocsHomePage:!1,title:"class: JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle method.",source:"@site/versioned_docs/version-1.6.0/api/class-jshandle.md",slug:"/api/class-jshandle",permalink:"/playwright/docs/api/class-jshandle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.0/api/class-jshandle.md",version:"1.6.0",sidebar:"version-1.6.0/api",previous:{title:"class: ElementHandle",permalink:"/playwright/docs/api/class-elementhandle"},next:{title:"class: ConsoleMessage",permalink:"/playwright/docs/api/class-consolemessage"}},s=[{value:"jsHandle.asElement()",id:"jshandleaselement",children:[]},{value:"jsHandle.dispose()",id:"jshandledispose",children:[]},{value:"jsHandle.evaluate(pageFunction, arg)",id:"jshandleevaluatepagefunction-arg",children:[]},{value:"jsHandle.evaluateHandle(pageFunction, arg)",id:"jshandleevaluatehandlepagefunction-arg",children:[]},{value:"jsHandle.getProperties()",id:"jshandlegetproperties",children:[]},{value:"jsHandle.getProperty(propertyName)",id:"jshandlegetpropertypropertyname",children:[]},{value:"jsHandle.jsonValue()",id:"jshandlejsonvalue",children:[]}],c={rightToc:s};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle")," method."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const windowHandle = await page.evaluateHandle(() => window);\n// ...\n")),Object(l.a)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#jshandledispose"}),"disposed"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),Object(l.a)("p",null,"JSHandle instances can be used as an argument in ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#pageevalselector-pagefunction-arg"}),Object(l.a)("inlineCode",{parentName:"a"},"page.$eval()")),", ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#pageevaluatepagefunction-arg"}),Object(l.a)("inlineCode",{parentName:"a"},"page.evaluate()"))," and ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#pageevaluatehandlepagefunction-arg"}),Object(l.a)("inlineCode",{parentName:"a"},"page.evaluateHandle()"))," methods."),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#jshandleaselement"}),"jsHandle.asElement()")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#jshandledispose"}),"jsHandle.dispose()")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#jshandleevaluatepagefunction-arg"}),"jsHandle.evaluate(pageFunction[, arg])")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#jshandleevaluatehandlepagefunction-arg"}),"jsHandle.evaluateHandle(pageFunction[, arg])")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#jshandlegetproperties"}),"jsHandle.getProperties()")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#jshandlegetpropertypropertyname"}),"jsHandle.getProperty(propertyName)")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#jshandlejsonvalue"}),"jsHandle.jsonValue()"))),Object(l.a)("h2",{id:"jshandleaselement"},"jsHandle.asElement()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[null]","|","[ElementHandle]",">")),Object(l.a)("p",null,"Returns either ",Object(l.a)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ","[ElementHandle]","."),Object(l.a)("h2",{id:"jshandledispose"},"jsHandle.dispose()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","> Promise which resolves when the object handle is successfully disposed.")),Object(l.a)("p",null,"The ",Object(l.a)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),Object(l.a)("h2",{id:"jshandleevaluatepagefunction-arg"},"jsHandle.evaluate(pageFunction","[, arg]",")"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"pageFunction")," <","[function]","> Function to be evaluated in browser context"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(l.a)("inlineCode",{parentName:"li"},"pageFunction")),Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Serializable]",">> Promise which resolves to the return value of ",Object(l.a)("inlineCode",{parentName:"li"},"pageFunction"))),Object(l.a)("p",null,"This method passes this handle as the first argument to ",Object(l.a)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(l.a)("p",null,"If ",Object(l.a)("inlineCode",{parentName:"p"},"pageFunction")," returns a ","[Promise]",", then ",Object(l.a)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),Object(l.a)("p",null,"Examples:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const tweetHandle = await page.$('.tweet .retweets');\nexpect(await tweetHandle.evaluate((node, suffix) => node.innerText, ' retweets')).toBe('10 retweets');\n")),Object(l.a)("h2",{id:"jshandleevaluatehandlepagefunction-arg"},"jsHandle.evaluateHandle(pageFunction","[, arg]",")"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"pageFunction")," <","[function]","|","[string]","> Function to be evaluated"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(l.a)("inlineCode",{parentName:"li"},"pageFunction")),Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[JSHandle]",">> Promise which resolves to the return value of ",Object(l.a)("inlineCode",{parentName:"li"},"pageFunction")," as in-page object (JSHandle)")),Object(l.a)("p",null,"This method passes this handle as the first argument to ",Object(l.a)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(l.a)("p",null,"The only difference between ",Object(l.a)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",Object(l.a)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",Object(l.a)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns in-page object (JSHandle)."),Object(l.a)("p",null,"If the function passed to the ",Object(l.a)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ","[Promise]",", then ",Object(l.a)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(l.a)("p",null,"See ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle()")," for more details."),Object(l.a)("h2",{id:"jshandlegetproperties"},"jsHandle.getProperties()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Map]","<","[string]",", ","[JSHandle]",">>>")),Object(l.a)("p",null,"The method returns a map with ",Object(l.a)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const handle = await page.evaluateHandle(() => ({window, document}));\nconst properties = await handle.getProperties();\nconst windowHandle = properties.get('window');\nconst documentHandle = properties.get('document');\nawait handle.dispose();\n")),Object(l.a)("h2",{id:"jshandlegetpropertypropertyname"},"jsHandle.getProperty(propertyName)"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"propertyName")," <","[string]","> property to get"),Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[JSHandle]",">>")),Object(l.a)("p",null,"Fetches a single property from the referenced object."),Object(l.a)("h2",{id:"jshandlejsonvalue"},"jsHandle.jsonValue()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Serializable]",">>")),Object(l.a)("p",null,"Returns a JSON representation of the object. If the object has a\n",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior"}),Object(l.a)("inlineCode",{parentName:"a"},"toJSON")),"\nfunction, it ",Object(l.a)("strong",{parentName:"p"},"will not be called"),"."),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("strong",{parentName:"p"},"NOTE")," The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references.")))}p.isMDXComponent=!0},399:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),j=n,b=u["".concat(i,".").concat(j)]||u[j]||d[j]||l;return t?r.a.createElement(b,o(o({ref:a},c),{},{components:t})):r.a.createElement(b,o({ref:a},c))}));function j(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);