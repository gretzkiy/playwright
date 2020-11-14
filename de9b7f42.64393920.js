(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{347:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(399)),c={id:"README",title:"Running Playwright in Docker"},o={unversionedId:"docker/README",id:"docker/README",isDocsHomePage:!1,title:"Running Playwright in Docker",description:"Dockerfile.bionic can be used to run Playwright scripts in Docker environments. This image includes all the dependencies needed to run browsers in a Docker container, including browsers.",source:"@site/docs/docker/README.md",slug:"/docker/README",permalink:"/playwright/docs/next/docker/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docker/README.md",version:"current",sidebar:"docs",previous:{title:"Test Runners",permalink:"/playwright/docs/next/test-runners"},next:{title:"Continuous Integration",permalink:"/playwright/docs/next/ci"}},l=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Image tags",id:"image-tags",children:[]},{value:"Development",id:"development",children:[{value:"Build the image",id:"build-the-image",children:[]},{value:"Push",id:"push",children:[]}]},{value:"Base images",id:"base-images",children:[{value:"Ubuntu 20",id:"ubuntu-20",children:[]},{value:"Ubuntu 18",id:"ubuntu-18",children:[]},{value:"Alpine",id:"alpine",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"Dockerfile.bionic"}),"Dockerfile.bionic")," can be used to run Playwright scripts in Docker environments. This image includes all the dependencies needed to run browsers in a Docker container, including browsers."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#pull-the-image"}),"Pull the image")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#run-the-image"}),"Run the image"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#end-to-end-tests"}),"End-to-end tests")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#crawling-and-scraping"}),"Crawling and scraping")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#using-on-ci"}),"Using on CI")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#image-tags"}),"Image tags")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#development"}),"Development"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#build-the-image"}),"Build the image")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#push"}),"Push")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#base-images"}),"Base images"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#ubuntu-20"}),"Ubuntu 20")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#ubuntu-18"}),"Ubuntu 18")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#alpine"}),"Alpine"))))),Object(i.a)("h2",{id:"usage"},"Usage"),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),Object(i.a)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/docker-mcr.microsoft.com%2Fplaywright-blue",alt:"docker hub"})))),Object(i.a)("p",null,"This image is published on ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),"Docker Hub"),"."),Object(i.a)("h3",{id:"pull-the-image"},"Pull the image"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$ docker pull mcr.microsoft.com/playwright:bionic\n")),Object(i.a)("h3",{id:"run-the-image"},"Run the image"),Object(i.a)("p",null,"By default, the Docker image will use the ",Object(i.a)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),Object(i.a)("h4",{id:"end-to-end-tests"},"End-to-end tests"),Object(i.a)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"docker run -it --rm --ipc=host mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(i.a)("h4",{id:"crawling-and-scraping"},"Crawling and scraping"),Object(i.a)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",Object(i.a)("inlineCode",{parentName:"p"},"adduser")," for it."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$ docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(i.a)("p",null,Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"seccomp_profile.json"}),Object(i.a)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is\na ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"}),"default Docker seccomp profile")," with extra user namespace cloning permissions:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"NOTE"),": Using ",Object(i.a)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag.")),Object(i.a)("h3",{id:"using-on-ci"},"Using on CI"),Object(i.a)("p",null,"See our ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/next/ci"}),"Continuous Integration guides")," for sample configs."),Object(i.a)("h2",{id:"image-tags"},"Image tags"),Object(i.a)("p",null,"See ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://mcr.microsoft.com/v2/playwright/tags/list"}),"all available image tags"),"."),Object(i.a)("h2",{id:"development"},"Development"),Object(i.a)("h3",{id:"build-the-image"},"Build the image"),Object(i.a)("p",null,"Use ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"build.sh"}),Object(i.a)("inlineCode",{parentName:"a"},"//docs/docker/build.sh"))," to build the image."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$ ./docs/docker/build.sh bionic playwright:localbuild-bionic\n")),Object(i.a)("p",null,"The image will be tagged as ",Object(i.a)("inlineCode",{parentName:"p"},"playwright:localbuild-bionic")," and could be run as:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"$ docker run --rm -it playwright:localbuild /bin/bash\n")),Object(i.a)("h3",{id:"push"},"Push"),Object(i.a)("p",null,"Docker images are published automatically by GitHub Actions. We currently publish the following\nimages:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:next")," - tip-of-tree image version."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:bionic")," - last Playwright release docker image."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"mcr.microsoft.com/playwright:sha-XXXXXXX")," - docker image for every commit that changed\ndocker files or browsers, marked with a ",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"}),"short sha")," (first 7 digits of the SHA commit).")),Object(i.a)("p",null,"Status of push to MCR can be ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://mcrflow-status-ui.azurewebsites.net/"}),"verified here")," (internal link)."),Object(i.a)("h2",{id:"base-images"},"Base images"),Object(i.a)("h3",{id:"ubuntu-20"},"Ubuntu 20"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"mcr.microsoft.com/playwright:focal")," is based on Ubuntu 20.04 LTS (Focal Fossa)."),Object(i.a)("h3",{id:"ubuntu-18"},"Ubuntu 18"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"mcr.microsoft.com/playwright:bionic")," is based on Ubuntu 18.04 LTS (Bionic Beaver)."),Object(i.a)("h3",{id:"alpine"},"Alpine"),Object(i.a)("p",null,"Browser builds for Firefox and WebKit are built for the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/GNU_C_Library"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."))}u.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return a?r.a.createElement(d,o(o({ref:t},s),{},{components:a})):r.a.createElement(d,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);