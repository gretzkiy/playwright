(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{166:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return d})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return s}));var n=t(2),o=t(6),l=(t(0),t(399)),r={id:"class-download",title:"class: Download"},d={unversionedId:"api/class-download",id:"api/class-download",isDocsHomePage:!1,title:"class: Download",description:"Download] objects are dispatched by page via the ['download' event.",source:"@site/docs/api/class-download.md",slug:"/api/class-download",permalink:"/playwright/docs/next/api/class-download",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-download.md",version:"current",sidebar:"api",previous:{title:"class: Dialog",permalink:"/playwright/docs/next/api/class-dialog"},next:{title:"class: Video",permalink:"/playwright/docs/next/api/class-video"}},c=[{value:"download.createReadStream()",id:"downloadcreatereadstream",children:[]},{value:"download.delete()",id:"downloaddelete",children:[]},{value:"download.failure()",id:"downloadfailure",children:[]},{value:"download.path()",id:"downloadpath",children:[]},{value:"download.saveAs(path)",id:"downloadsaveaspath",children:[]},{value:"download.suggestedFilename()",id:"downloadsuggestedfilename",children:[]},{value:"download.url()",id:"downloadurl",children:[]}],i={rightToc:c};function s(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"[Download]"," objects are dispatched by page via the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"#event-download"}),"'download'")," event."),Object(l.a)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed. All downloaded files are deleted when the browser closes."),Object(l.a)("p",null,"Download event is emitted once the download starts. Download path becomes available\nonce download completes:"),Object(l.a)("pre",null,Object(l.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // wait for download to start\n  page.click('a')\n]);\n// wait for download to complete\nconst path = await download.path();\n...\n")),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("strong",{parentName:"p"},"NOTE")," Browser context ",Object(l.a)("strong",{parentName:"p"},"must")," be created with the ",Object(l.a)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",Object(l.a)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(l.a)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set or set to ",Object(l.a)("inlineCode",{parentName:"p"},"false"),", download events are emitted, but the actual download is not performed and user has no access to the downloaded files.")),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadcreatereadstream"}),"download.createReadStream()")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#downloaddelete"}),"download.delete()")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadfailure"}),"download.failure()")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadpath"}),"download.path()")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadsaveaspath"}),"download.saveAs(path)")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadsuggestedfilename"}),"download.suggestedFilename()")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(n.a)({parentName:"li"},{href:"#downloadurl"}),"download.url()"))),Object(l.a)("h2",{id:"downloadcreatereadstream"},"download.createReadStream()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[null]","|","[Readable]",">>")),Object(l.a)("p",null,"Returns readable stream for current download or ",Object(l.a)("inlineCode",{parentName:"p"},"null")," if download failed."),Object(l.a)("h2",{id:"downloaddelete"},"download.delete()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(l.a)("p",null,"Deletes the downloaded file."),Object(l.a)("h2",{id:"downloadfailure"},"download.failure()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[null]","|","[string]",">>")),Object(l.a)("p",null,"Returns download error if any."),Object(l.a)("h2",{id:"downloadpath"},"download.path()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[null]","|","[string]",">>")),Object(l.a)("p",null,"Returns path to the downloaded file in case of successful download."),Object(l.a)("h2",{id:"downloadsaveaspath"},"download.saveAs(path)"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"path")," <","[string]","> Path where the download should be saved."),Object(l.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(l.a)("p",null,"Saves the download to a user-specified path."),Object(l.a)("h2",{id:"downloadsuggestedfilename"},"download.suggestedFilename()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(l.a)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),Object(l.a)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",Object(l.a)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",Object(l.a)("a",Object(n.a)({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),Object(l.a)("h2",{id:"downloadurl"},"download.url()"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(l.a)("p",null,"Returns downloaded url."))}s.isMDXComponent=!0},399:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),o=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),s=function(e){var a=o.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,w=u["".concat(r,".").concat(b)]||u[b]||p[b]||l;return t?o.a.createElement(w,d(d({ref:a},i),{},{components:t})):o.a.createElement(w,d({ref:a},i))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,r=new Array(l);r[0]=u;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d.mdxType="string"==typeof e?e:n,r[1]=d;for(var i=2;i<l;i++)r[i]=t[i];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);