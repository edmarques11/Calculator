(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,function(_,e,a){"use strict";var t=a(0),r=a.n(t);a(20);e.a=function(_){var e="button ";return e+=_.operation?"operation":"",e+=_.double?"double":"",e+=_.triple?"triple":"",r.a.createElement("button",{onClick:function(e){return _.click&&_.click(e.target.innerHTML)},className:e},_.label)}},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var _media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(12),_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_Calculator_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(19),_Calculator_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_8__),_components_Button__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1),_components_Display__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(10),initialState={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},Calculator=function(_Component){Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator,_Component);var _super=Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.a)(Calculator);function Calculator(_){var e;return Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Calculator),(e=_super.call(this,_)).state=Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),e.clearMemory=e.clearMemory.bind(Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.setOperation=e.setOperation.bind(Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.addDigit=e.addDigit.bind(Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,[{key:"clearMemory",value:function(){this.setState(Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState))}},{key:"setOperation",value:function setOperation(operation){if(0===this.state.current)this.setState({operation:operation,current:1,clearDisplay:!0});else{var equals="="===operation,currentOperation=this.state.operation,values=Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);try{values[0]=eval("".concat(values[0]," ").concat(currentOperation," ").concat(values[1]))}catch(e){values[0]=this.state.values[0]}values[1]=0,this.setState({displayValue:values[0],operation:equals?null:operation,current:equals?0:1,clearDisplay:!equals,values:values})}}},{key:"addDigit",value:function(_){if("."!==_||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+_;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==_){var a=this.state.current,t=parseFloat(e),r=Object(_media_edmarques_Edmarques_C_digo_Web_Moderno_com_JavaScript_2020_Exerc_cios_Web_20_21_22_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);r[a]=t,this.setState({values:r})}}}},{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Display__WEBPACK_IMPORTED_MODULE_10__.a,{value:this.state.displayValue}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"AC",click:function(){return _.clearMemory()},triple:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"/",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"7",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"8",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"9",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"*",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"4",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"5",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"6",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"-",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"1",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"2",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"3",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"+",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"0",click:this.addDigit,double:!0}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:".",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_9__.a,{label:"=",click:this.setOperation,operation:!0})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"produtor"},"Make by\xa0",react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a",{href:"https://www.instagram.com/edmarques.lima/"},"Edmarques Lima"),"."))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7__.Component)},,,function(_,e,a){"use strict";var t=a(0),r=a.n(t);a(21);e.a=function(_){return r.a.createElement("div",{className:"display"},_.value)}},,,function(_,e,a){_.exports=a(22)},,,,,function(_,e,a){},function(_,e,a){},function(_,e,a){},function(_,e,a){},function(_,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),c=a(6),o=a.n(c),l=(a(18),a(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Calculator"),r.a.createElement(l.a,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.11c73bdb.chunk.js.map