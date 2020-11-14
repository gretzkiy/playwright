(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{185:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return d})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return s}));var n=t(2),o=t(6),r=(t(0),t(399)),l={id:"class-download",title:"class: Download"},d={unversionedId:"api/class-download",id:"version-1.1.0/api/class-download",isDocsHomePage:!1,title:"class: Download",description:"Download] objects are dispatched by page via the ['download' event.",source:"@site/versioned_docs/version-1.1.0/api/class-download.md",slug:"/api/class-download",permalink:"/playwright/docs/1.1.0/api/class-download",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.1.0/api/class-download.md",version:"1.1.0",sidebar:"version-1.1.0/api",previous:{title:"class: Dialog",permalink:"/playwright/docs/1.1.0/api/class-dialog"},next:{title:"class: FileChooser",permalink:"/playwright/docs/1.1.0/api/class-filechooser"}},c=[{value:"download.createReadStream()",id:"downloadcreatereadstream",children:[]},{value:"download.delete()",id:"downloaddelete",children:[]},{value:"download.failure()",id:"downloadfailure",children:[]},{value:"download.path()",id:"downloadpath",children:[]},{value:"download.suggestedFilename()",id:"downloadsuggestedfilename",children:[]},{value:"download.url()",id:"downloadurl",children:[]}],i={rightToc:c};function s(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("p",null,"[Download]"," objects are dispatched by page via the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#event-download"}),"'download'")," event."),Object(r.a)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed. All downloaded files are deleted when the browser closes."),Object(r.a)("p",null,"Download event is emitted once the download starts. Download path becomes available\nonce download completes:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // wait for download to start\n  page.click('a')\n]);\n// wait for download to complete\nconst path = await download.path();\n...\n")),Object(r.a)("blockquote",null,Object(r.a)("p",{parentName:"blockquote"},Object(r.a)("strong",{parentName:"p"},"NOTE")," Browser context ",Object(r.a)("strong",{parentName:"p"},"must")," be created with the ",Object(r.a)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",Object(r.a)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(r.a)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set or set to ",Object(r.a)("inlineCode",{parentName:"p"},"false"),", download events are emitted, but the actual download is not performed and user has no access to the downloaded files.")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadcreatereadstream"}),"download.createReadStream()")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#downloaddelete"}),"download.delete()")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadfailure"}),"download.failure()")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadpath"}),"download.path()")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadsuggestedfilename"}),"download.suggestedFilename()")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadurl"}),"download.url()"))),Object(r.a)("h2",{id:"downloadcreatereadstream"},"download.createReadStream()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[Promise]","<null|","[Readable]",">>")),Object(r.a)("p",null,"Returns readable stream for current download or ",Object(r.a)("inlineCode",{parentName:"p"},"null")," if download failed."),Object(r.a)("h2",{id:"downloaddelete"},"download.delete()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(r.a)("p",null,"Deletes the downloaded file."),Object(r.a)("h2",{id:"downloadfailure"},"download.failure()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[Promise]","<null|","[string]",">>")),Object(r.a)("p",null,"Returns download error if any."),Object(r.a)("h2",{id:"downloadpath"},"download.path()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[Promise]","<null|","[string]",">>")),Object(r.a)("p",null,"Returns path to the downloaded file in case of successful download."),Object(r.a)("h2",{id:"downloadsuggestedfilename"},"download.suggestedFilename()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(r.a)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),Object(r.a)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",Object(r.a)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),Object(r.a)("h2",{id:"downloadurl"},"download.url()"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(r.a)("p",null,"Returns downloaded url."))}s.isMDXComponent=!0},399:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var a=o.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,w=u["".concat(l,".").concat(b)]||u[b]||p[b]||r;return t?o.a.createElement(w,d(d({ref:a},i),{},{components:t})):o.a.createElement(w,d({ref:a},i))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var i=2;i<r;i++)l[i]=t[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);