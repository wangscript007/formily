(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{137:function(e,t,a){var r={"./bash":122,"./bash.js":122,"./css":123,"./css.js":123,"./htmlbars":124,"./htmlbars.js":124,"./javascript":125,"./javascript.js":125,"./scss":126,"./scss.js":126,"./typescript":127,"./typescript.js":127};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=137},93:function(e,t,a){"use strict";var r=a(133),n=(a(134),a(135)),c=(a(136),function(){return r.createElement(r.Fragment,{},r.createElement("h1",{id:"reset",className:"react-demo-h1"},"Reset"),r.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),r.createElement("p",{className:"react-demo-p"},"用于快速重置，其内部自动做与 Form 组件的通讯，无需写过多的重置相关的处理逻辑"),r.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),r.createElement(n,{code:"import { Reset } from '@uform/next(antd)'\n",justCode:!0,lang:"javascript"}),r.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),r.createElement("p",{className:"react-demo-p"},"继承 next-button / ",r.createElement("a",{href:"https://ant.design/components/button-cn/",className:"react-demo-a"},"ant-button")),r.createElement("blockquote",{className:"react-demo-blockquote"},r.createElement("p",{className:"react-demo-p"},"注意：如果要实现默认值重置，必须在 Field 级别设置 default 属性才生效，如果是在\nForm 级别传 value 或 defaultValue 是不能实现默认值重置的")),r.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),r.createElement(n,{code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { SchemaForm, FormButtonGroup, Reset } from '@uform/next(antd)'\n\nReactDOM.render(\n  <SchemaForm>\n    <FormButtonGroup offset={7} sticky align=\"center\">\n      <Reset />\n      // 自定义文案\n      <Reset>自定义重置文案</Reset>\n    </FormButtonGroup>\n  </SchemaForm>,\n  document.getElementById('root')\n)\n",justCode:!0,lang:"javascript"}))});c.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=c}}]);