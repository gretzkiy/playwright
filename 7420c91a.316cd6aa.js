(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{222:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),o=a(6),r=(a(0),a(399)),i={id:"files",title:"File handling"},l={unversionedId:"files",id:"version-1.5.0/files",isDocsHomePage:!1,title:"File handling",description:"Upload files",source:"@site/versioned_docs/version-1.5.0/files.md",slug:"/files",permalink:"/playwright/docs/1.5.0/files",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.5.0/files.md",version:"1.5.0"},c=[{value:"Upload files",id:"upload-files",children:[]},{value:"Handle file downloads",id:"handle-file-downloads",children:[]}],p={rightToc:c};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"upload-files"},"Upload files"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Select one file\nawait page.setInputFiles('input#upload', 'myfile.pdf');\n\n// Select multiple files\nawait page.setInputFiles('input#upload', ['file1.txt', 'file2.txt']);\n\n// Remove all the selected files\nawait page.setInputFiles('input#upload', []);\n\n// Upload buffer from memory\nawait page.setInputFiles('input#upload', {\n  name: 'file.txt',\n  mimeType: 'text/plain',\n  buffer: Buffer.from('this is test')\n});\n")),Object(r.a)("p",null,"You can select input files for upload using the ",Object(r.a)("inlineCode",{parentName:"p"},"page.setInputFiles")," method. It expects first argument to point to an ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"input element")," with the type ",Object(r.a)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". Empty array clears the selected files."),Object(r.a)("h4",{id:"example"},"Example"),Object(r.a)("p",null,Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"examples/upload.js"}),"This script")," uploads a file to an ",Object(r.a)("inlineCode",{parentName:"p"},"input")," element that accepts file uploads."),Object(r.a)("h4",{id:"api-reference"},"API reference"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#pagesetinputfilesselector-value-options"}),"page.setInputFiles(selector, files[, options])")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#framesetinputfilesselector-value-options"}),"frame.setInputFiles(selector, files[, options])")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#elementhandlesetinputfilesfiles-options"}),"elementHandle.setInputFiles(files[, options])"))),Object(r.a)("br",null),Object(r.a)("h2",{id:"handle-file-downloads"},"Handle file downloads"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // <-- start waiting for the download\n  page.click('button#delayed-download') // <-- perform the action that directly or indirectly initiates it.\n]);\nconst path = await download.path();\n")),Object(r.a)("p",null,"For every attachment downloaded by the page, ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#event-download"}),Object(r.a)("inlineCode",{parentName:"a"},'"download"'))," event is emitted. If you create a browser context with the ",Object(r.a)("inlineCode",{parentName:"p"},"acceptDownloads: true"),", all these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#class-download"}),Object(r.a)("inlineCode",{parentName:"a"},"Download"))," object from the event."),Object(r.a)("h4",{id:"variations"},"Variations"),Object(r.a)("p",null,"If you have no idea what initiates the download, you can still handle the event:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('download', download => download.path().then(console.log));\n")),Object(r.a)("p",null,"Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve."),Object(r.a)("h4",{id:"api-reference-1"},"API reference"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#class-download"}),Object(r.a)("inlineCode",{parentName:"a"},"Download"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md#event-download"}),Object(r.a)("inlineCode",{parentName:"a"},"page.on('download')"))),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api.md##pagewaitforeventevent-optionsorpredicate"}),Object(r.a)("inlineCode",{parentName:"a"},"page.waitForEvent(event)")))))}s.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||r;return a?o.a.createElement(m,l(l({ref:t},p),{},{components:a})):o.a.createElement(m,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);