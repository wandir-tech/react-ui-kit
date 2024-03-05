(self.webpackChunkquickblox_react_ui_kit=self.webpackChunkquickblox_react_ui_kit||[]).push([[181],{"./src/Presentation/ui-components/Badge/Badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BadgeCount:()=>BadgeCount,BadgeDefault:()=>BadgeDefault,BadgeMute:()=>BadgeMute,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"Badge",component:__webpack_require__("./src/Presentation/ui-components/Badge/Badge.tsx").Z,tags:["autodocs"],parameters:{layout:"centered"},args:{count:0,limit:99,mute:!1,classNames:""},argTypes:{count:{table:{defaultValue:{summary:0}},description:"Number of unread messages"},limit:{table:{defaultValue:{summary:99}},description:"Limt of message count"},mute:{table:{defaultValue:{summary:"boolean"}},description:"Display type Badge"},classNames:{table:{type:{summary:"string"}},description:"Additional classes"}}},BadgeDefault={},BadgeCount={args:{count:9}},BadgeMute={args:{limit:99,count:120,mute:!0}};BadgeDefault.parameters={...BadgeDefault.parameters,docs:{...BadgeDefault.parameters?.docs,source:{originalSource:"{}",...BadgeDefault.parameters?.docs?.source}}},BadgeCount.parameters={...BadgeCount.parameters,docs:{...BadgeCount.parameters?.docs,source:{originalSource:"{\n  args: {\n    count: 9\n  }\n}",...BadgeCount.parameters?.docs?.source}}},BadgeMute.parameters={...BadgeMute.parameters,docs:{...BadgeMute.parameters?.docs,source:{originalSource:"{\n  args: {\n    limit: 99,\n    count: 120,\n    mute: true\n  }\n}",...BadgeMute.parameters?.docs?.source}}};let __namedExportsOrder=["BadgeDefault","BadgeCount","BadgeMute"]},"./src/Presentation/ui-components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Badge_Badge});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Badge_Badge(_ref){let{count,limit,mute=!1,classNames}=_ref;return(0,jsx_runtime.jsx)("div",{className:classnames_default()("badge",{"badge--mute":mute},classNames),children:limit&&count>limit?"".concat(limit,"+"):count})}try{Badge_Badge.displayName="Badge",Badge_Badge.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},mute:{defaultValue:{value:"false"},description:"",name:"mute",required:!1,type:{name:"boolean"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Presentation/ui-components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge_Badge.__docgenInfo,name:"Badge",path:"src/Presentation/ui-components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),m=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=Presentation-ui-components-Badge-Badge-stories.fea53429.iframe.bundle.js.map