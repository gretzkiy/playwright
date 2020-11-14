(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{337:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var i=a(2),r=a(6),n=(a(0),a(399)),o={id:"class-filechooser",title:"class: FileChooser"},l={unversionedId:"api/class-filechooser",id:"version-1.2.0/api/class-filechooser",isDocsHomePage:!1,title:"class: FileChooser",description:"FileChooser] objects are dispatched by the page in the ['filechooser' event.",source:"@site/versioned_docs/version-1.2.0/api/class-filechooser.md",slug:"/api/class-filechooser",permalink:"/playwright/docs/1.2.0/api/class-filechooser",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/api/class-filechooser.md",version:"1.2.0",sidebar:"version-1.2.0/api",previous:{title:"class: Download",permalink:"/playwright/docs/1.2.0/api/class-download"},next:{title:"class: Keyboard",permalink:"/playwright/docs/1.2.0/api/class-keyboard"}},s=[{value:"fileChooser.element()",id:"filechooserelement",children:[]},{value:"fileChooser.isMultiple()",id:"filechooserismultiple",children:[]},{value:"fileChooser.page()",id:"filechooserpage",children:[]},{value:"fileChooser.setFiles(files, options)",id:"filechoosersetfilesfiles-options",children:[]}],c={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.a)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.a)("p",null,"[FileChooser]"," objects are dispatched by the page in the ",Object(n.a)("a",Object(i.a)({parentName:"p"},{href:"#event-filechooser"}),"'filechooser'")," event."),Object(n.a)("pre",null,Object(n.a)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"page.on('filechooser', async (fileChooser) => {\n  await fileChooser.setFiles('/tmp/myfile.pdf');\n});\n")),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(i.a)({parentName:"li"},{href:"#filechooserelement"}),"fileChooser.element()")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(i.a)({parentName:"li"},{href:"#filechooserismultiple"}),"fileChooser.isMultiple()")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(i.a)({parentName:"li"},{href:"#filechooserpage"}),"fileChooser.page()")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("a",Object(i.a)({parentName:"li"},{href:"#filechoosersetfilesfiles-options"}),"fileChooser.setFiles(files[, options])"))),Object(n.a)("h2",{id:"filechooserelement"},"fileChooser.element()"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"returns: <","[ElementHandle]",">")),Object(n.a)("p",null,"Returns input element associated with this file chooser."),Object(n.a)("h2",{id:"filechooserismultiple"},"fileChooser.isMultiple()"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"returns: <","[boolean]",">")),Object(n.a)("p",null,"Returns whether this file chooser accepts multiple files."),Object(n.a)("h2",{id:"filechooserpage"},"fileChooser.page()"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},"returns: <","[Page]",">")),Object(n.a)("p",null,"Returns page this file chooser belongs to."),Object(n.a)("h2",{id:"filechoosersetfilesfiles-options"},"fileChooser.setFiles(files","[, options]",")"),Object(n.a)("ul",null,Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"files")," <","[string]","|","[Array]","<","[string]",">|","[Object]","|","[Array]","<","[Object]",">>",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"name")," <","[string]","> ","[File]"," name ",Object(n.a)("strong",{parentName:"li"},"required")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"mimeType")," <","[string]","> ","[File]"," type ",Object(n.a)("strong",{parentName:"li"},"required")),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"buffer")," <","[Buffer]","> File content ",Object(n.a)("strong",{parentName:"li"},"required")))),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(n.a)("ul",{parentName:"li"},Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"noWaitAfter")," <","[boolean]","> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",Object(n.a)("inlineCode",{parentName:"li"},"false"),"."),Object(n.a)("li",{parentName:"ul"},Object(n.a)("inlineCode",{parentName:"li"},"timeout")," <","[number]","> Maximum time in milliseconds, defaults to 30 seconds, pass ",Object(n.a)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(n.a)("a",Object(i.a)({parentName:"li"},{href:"#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)")," or ",Object(n.a)("a",Object(i.a)({parentName:"li"},{href:"#pagesetdefaulttimeouttimeout"}),"page.setDefaultTimeout(timeout)")," methods."))),Object(n.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(n.a)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",Object(n.a)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the ",Object(n.a)("a",Object(i.a)({parentName:"p"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". For empty array, clears the selected files."))}p.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(a),b=i,m=f["".concat(o,".").concat(b)]||f[b]||u[b]||n;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);