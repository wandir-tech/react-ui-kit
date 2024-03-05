"use strict";(self.webpackChunkquickblox_react_ui_kit=self.webpackChunkquickblox_react_ui_kit||[]).push([[594],{"./src/Presentation/ui-components/PreviewFileMessage/PreviewFileMessage.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PreviewFileMessageAudio:()=>PreviewFileMessageAudio,PreviewFileMessageDefault:()=>PreviewFileMessageDefault,PreviewFileMessageImage:()=>PreviewFileMessageImage,PreviewFileMessageVideo:()=>PreviewFileMessageVideo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"PreviewFileMessage",tags:["autodocs"],component:__webpack_require__("./src/Presentation/ui-components/PreviewFileMessage/PreviewFileMessage.tsx").Z,parameters:{layout:"centered"},argTypes:{type:{options:["document","audio","video"],control:{type:"select"},table:{defaultValue:{summary:"document"},type:{summary:"string"}},description:"File type"},name:{table:{type:{summary:"string"}},description:"Name of the file"},className:{table:{type:{summary:"string"}},description:"Additional classes"}}},PreviewFileMessageDefault={args:{name:"text document.txt"}},PreviewFileMessageAudio={args:{type:"audio",name:"audio.mp3"}},PreviewFileMessageVideo={args:{type:"video",name:"video.mp4"}},PreviewFileMessageImage={args:{src:"https://quickblox.com/wp-content/themes/QuickbloxTheme2021/img/chat-messaging.svg",name:"screenshot.jpg"}};PreviewFileMessageDefault.parameters={...PreviewFileMessageDefault.parameters,docs:{...PreviewFileMessageDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'text document.txt'\n  }\n}",...PreviewFileMessageDefault.parameters?.docs?.source}}},PreviewFileMessageAudio.parameters={...PreviewFileMessageAudio.parameters,docs:{...PreviewFileMessageAudio.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'audio',\n    name: 'audio.mp3'\n  }\n}",...PreviewFileMessageAudio.parameters?.docs?.source}}},PreviewFileMessageVideo.parameters={...PreviewFileMessageVideo.parameters,docs:{...PreviewFileMessageVideo.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'video',\n    name: 'video.mp4'\n  }\n}",...PreviewFileMessageVideo.parameters?.docs?.source}}},PreviewFileMessageImage.parameters={...PreviewFileMessageImage.parameters,docs:{...PreviewFileMessageImage.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: 'https://quickblox.com/wp-content/themes/QuickbloxTheme2021/img/chat-messaging.svg',\n    name: 'screenshot.jpg'\n  }\n}",...PreviewFileMessageImage.parameters?.docs?.source}}};let __namedExportsOrder=["PreviewFileMessageDefault","PreviewFileMessageAudio","PreviewFileMessageVideo","PreviewFileMessageImage"]},"./src/Presentation/ui-components/PreviewFileMessage/PreviewFileMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PreviewFileMessage_PreviewFileMessage});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),icons=__webpack_require__("./src/Presentation/icons/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let iconDictionary={document:icons.K,audio:icons.rR,video:icons.BA};function PreviewFileMessage_PreviewFileMessage(_ref){let{type="document",name,src,className}=_ref,Icon=iconDictionary[type];return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("preview-file-message",className),children:[src?(0,jsx_runtime.jsx)("img",{src:src,alt:"",className:"preview-file-message__image"}):(0,jsx_runtime.jsx)("span",{className:"preview-file-message__image",children:(0,jsx_runtime.jsx)(Icon,{className:"preview-file-message__icon"})}),(0,jsx_runtime.jsx)("span",{className:"preview-file-message__name",children:name})]})}try{PreviewFileMessage_PreviewFileMessage.displayName="PreviewFileMessage",PreviewFileMessage_PreviewFileMessage.__docgenInfo={description:"",displayName:"PreviewFileMessage",props:{type:{defaultValue:{value:"document"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"document"'},{value:'"audio"'},{value:'"video"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Presentation/ui-components/PreviewFileMessage/PreviewFileMessage.tsx#PreviewFileMessage"]={docgenInfo:PreviewFileMessage_PreviewFileMessage.__docgenInfo,name:"PreviewFileMessage",path:"src/Presentation/ui-components/PreviewFileMessage/PreviewFileMessage.tsx#PreviewFileMessage"})}catch(__react_docgen_typescript_loader_error){}}}]);