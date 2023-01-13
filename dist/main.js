/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Ubuntu&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #141414;\\r\\n  font-family: 'Ubuntu', sans-serif;\\r\\n  margin: 90px 0 0;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  font-size: 1.2rem;\\r\\n  height: 68px;\\r\\n  padding: 0 4%;\\r\\n  transition: background-color 0.4s;\\r\\n  position: fixed;\\r\\n  background: black;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\nheader nav {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.primary-navigation {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  color: #e50914;\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  font-size: 2rem;\\r\\n  font-weight: 900;\\r\\n  margin-right: 5px;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\n.navigation-tab a {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.shows-list {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  margin: 1rem auto;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.shows-list div {\\r\\n  text-align: center;\\r\\n  border-radius: 10px;\\r\\n  color: #fff;\\r\\n  box-shadow: 0 2.4rem 4.8rem rgb(0 0 0 / 8%);\\r\\n  transition: all 0.4s;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.show-container img {\\r\\n  width: 20rem;\\r\\n}\\r\\n\\r\\n.title-like {\\r\\n  color: #fff;\\r\\n  margin: 5px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.show-title {\\r\\n  margin: 10px;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.likes-wraper {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  padding: 0.5rem 1rem;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: rgb(117, 111, 111);\\r\\n  margin-top: 5rem;\\r\\n}\\r\\n\\r\\n.lower-level {\\r\\n  padding: 30px 35px;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.showpopup {\\r\\n  opacity: 1;\\r\\n  visibility: visible;\\r\\n  overflow: scroll;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.closeBtn {\\r\\n  position: relative;\\r\\n  left: 45%;\\r\\n  top: 5%;\\r\\n  color: rgb(6, 6, 35);\\r\\n  font-size: 16px;\\r\\n  margin: 5px;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.comment-span {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.comment-span>p {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n#new-comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\nform>input {\\r\\n  margin-bottom: 10px;\\r\\n  height: 50px;\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n.insights {\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.naming {\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.submit-comment {\\r\\n  width: 20%;\\r\\n  border: 1px solid black;\\r\\n  box-shadow: 3px 3px;\\r\\n}\\r\\n\\r\\n.classification {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  opacity: 1;\\r\\n  visibility: visible;\\r\\n  overflow: scroll;\\r\\n  height: 100vh;\\r\\n  background-color: #ede3e3fc;\\r\\n  width: 60%;\\r\\n  top: 5px;\\r\\n  left: 20%;\\r\\n  position: fixed;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.popup-nav {\\r\\n  width: 100%;\\r\\n  background-color: gray;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.addcomment {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  align-content: center;\\r\\n}\\r\\n\\r\\n.popup-foot {\\r\\n  width: 100%;\\r\\n  background-color: gray;\\r\\n  text-align: center;\\r\\n  margin-top: 10px;\\r\\n  height: 4rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_create_shows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create-shows.js */ \"./src/modules/create-shows.js\");\n/* harmony import */ var _modules_base_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/base-api.js */ \"./src/modules/base-api.js\");\n\r\n\r\n\r\n\r\nconst allShowsContainer = document.querySelector('.shows-list');\r\nconst main = async () => {\r\n  const shows = await (0,_modules_base_api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const numberOfShows = shows.slice(10, 33);\r\n  (0,_modules_create_shows_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(numberOfShows, allShowsContainer);\r\n};\r\n\r\nwindow.addEventListener('load', main);\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/base-api.js":
/*!*********************************!*\
  !*** ./src/modules/base-api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getShows)\n/* harmony export */ });\nasync function getShows() {\r\n  try {\r\n    const response = await fetch('https://api.tvmaze.com/shows');\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    throw new Error(`An error occurred: ${error}`);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/base-api.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCommentSpan\": () => (/* binding */ createCommentSpan),\n/* harmony export */   \"generateComments\": () => (/* binding */ generateComments),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst postComment = async (id, user, comment) => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HsXsc6uMLmtj8MbezH0L/comments', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: user,\r\n      comment,\r\n\r\n    }),\r\n  });\r\n  const data = await response.text();\r\n  return data;\r\n};\r\n\r\nconst getComments = async (itemid) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HsXsc6uMLmtj8MbezH0L/comments?item_id=${itemid}`);\r\n\r\n  const data = await response.json();\r\n\r\n  if (!response.ok) {\r\n    return [];\r\n  }\r\n\r\n  return data;\r\n};\r\n\r\nconst createCommentSpan = (commData) => {\r\n  const commentSpan = document.createElement('span');\r\n  commentSpan.className = 'comment-span';\r\n  commentSpan.innerHTML = `\r\n      <p>${commData.creation_date}:</p>\r\n      <p>${commData.username}:</p>\r\n      <p>${commData.comment}</p>\r\n    `;\r\n  return commentSpan;\r\n};\r\n\r\nconst generateComments = async (id) => {\r\n  const innerCommentsDiv = document.createElement('div');\r\n  innerCommentsDiv.innerHTML = '';\r\n  const comments = await getComments(id);\r\n\r\n  comments.forEach((comment) => {\r\n    innerCommentsDiv.append(createCommentSpan(comment));\r\n  });\r\n  return innerCommentsDiv;\r\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/commentscounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentscounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => {\r\n  const commentCount = document.querySelectorAll('.comment-span');\r\n  return commentCount.length;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/commentscounter.js?");

/***/ }),

/***/ "./src/modules/create-shows.js":
/*!*************************************!*\
  !*** ./src/modules/create-shows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvement_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement-api.js */ \"./src/modules/involvement-api.js\");\n/* harmony import */ var _items_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-counter.js */ \"./src/modules/items-counter.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\r\n\r\n\r\n\r\nconst handleLikeClick = (event, likes) => {\r\n  (0,_involvement_api_js__WEBPACK_IMPORTED_MODULE_0__.setLikes)(event.target.id).then(() => {\r\n    (0,_involvement_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)().then((totalLikes) => {\r\n      (0,_items_counter_js__WEBPACK_IMPORTED_MODULE_1__.likesCounter)(event.target, totalLikes, likes);\r\n    });\r\n  });\r\n};\r\n\r\nconst createShows = (showsList, container) => {\r\n  showsList.forEach((show) => {\r\n    const { id, image: { medium }, name } = show;\r\n    const showContainer = document.createElement('div');\r\n    showContainer.id = `movie_${id}`;\r\n    showContainer.classList.add('show-container');\r\n\r\n    const img = document.createElement('img');\r\n    img.src = medium;\r\n    img.classList.add('show-img');\r\n    showContainer.appendChild(img);\r\n\r\n    const title = document.createElement('h3');\r\n    title.textContent = name;\r\n    title.classList.add('show-title');\r\n\r\n    const likeBtn = document.createElement('i');\r\n    likeBtn.classList.add('bx', 'bx-heart', 'bx-sm', 'like-btn');\r\n    likeBtn.id = showContainer.id;\r\n\r\n    const likes = document.createElement('span');\r\n    likes.classList.add('like-display');\r\n    likes.innerHTML = '0 likes';\r\n\r\n    const likesWraper = document.createElement('div');\r\n    likesWraper.classList.add('likes-wraper');\r\n    likesWraper.append(likeBtn, likes);\r\n\r\n    showContainer.append(title, likesWraper);\r\n\r\n    const commentBtn = document.createElement('button');\r\n    commentBtn.classList.add('comment-btn');\r\n    commentBtn.id = `${show.id}`;\r\n    commentBtn.textContent = 'Comment';\r\n    showContainer.appendChild(commentBtn);\r\n\r\n    container.appendChild(showContainer);\r\n\r\n    (0,_involvement_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)().then((totalLikes) => {\r\n      (0,_items_counter_js__WEBPACK_IMPORTED_MODULE_1__.likesCounter)(likeBtn, totalLikes, likes);\r\n    });\r\n    likeBtn.addEventListener('click', (event) => handleLikeClick(event, likes));\r\n  });\r\n\r\n  const popUpdiv = document.querySelector('.popup-display');\r\n  const commentsButton = document.querySelectorAll('.comment-btn');\r\n  commentsButton.forEach((button) => button.addEventListener('click', (e) => {\r\n    const movieId = e.target.id;\r\n    // call the display popup function\r\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.displayPopUp)(movieId);\r\n    popUpdiv.classList.add('showpopup');\r\n  }));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShows);\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/create-shows.js?");

/***/ }),

/***/ "./src/modules/involvement-api.js":
/*!****************************************!*\
  !*** ./src/modules/involvement-api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"setLikes\": () => (/* binding */ setLikes)\n/* harmony export */ });\nconst apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oiEzvAHZtSIWS2sLpqLB/likes';\r\n\r\nconst setLikes = async (item) => {\r\n  const getApiData = await fetch(apiUrl, {\r\n    method: 'POST',\r\n    body: JSON.stringify({ item_id: item }),\r\n    headers: {\r\n      'Content-type': 'application/json; Charset=UTF-8',\r\n    },\r\n  });\r\n\r\n  return getApiData.text();\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const getApiData = await fetch(apiUrl);\r\n  return getApiData.json();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/involvement-api.js?");

/***/ }),

/***/ "./src/modules/items-counter.js":
/*!**************************************!*\
  !*** ./src/modules/items-counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemsCounter\": () => (/* binding */ itemsCounter),\n/* harmony export */   \"likesCounter\": () => (/* binding */ likesCounter)\n/* harmony export */ });\nconst itemsCounter = (items) => {\r\n  if (!Array.isArray(items)) {\r\n    return 0;\r\n  }\r\n  return items.length;\r\n};\r\n\r\nconst likesCounter = (target, likesArray, likesContainer) => {\r\n  const item = likesArray.find((item) => item.item_id === target.id);\r\n  if (item) {\r\n    likesContainer.innerHTML = `${item.likes} likes`;\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/items-counter.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addcommentEvent\": () => (/* binding */ addcommentEvent),\n/* harmony export */   \"createPopUp\": () => (/* binding */ createPopUp),\n/* harmony export */   \"displayPopUp\": () => (/* binding */ displayPopUp),\n/* harmony export */   \"fetchMovieDetails\": () => (/* binding */ fetchMovieDetails)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _commentscounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentscounter.js */ \"./src/modules/commentscounter.js\");\n\r\n\r\n\r\n// Create a function that fetches a movie\r\nconst fetchMovieDetails = async (id) => {\r\n  const BASE_MOVIE_URL = 'https://api.tvmaze.com/shows';\r\n  const response = await fetch(`${BASE_MOVIE_URL}/${id}`);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n// Create a function that adds a comment and display it\r\nconst addcommentEvent = async () => {\r\n  const newCommentForm = document.querySelector('#new-comment');\r\n\r\n  const addcommentButton = document.querySelector('.submit-comment');\r\n\r\n  newCommentForm.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    // const addcommentButton = document.querySelector('.submit-comment');\r\n    const user = newCommentForm.elements.name;\r\n    const { comment } = newCommentForm.elements;\r\n\r\n    await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(addcommentButton.id, user.value, comment.value);\r\n    const movieCommentDisplay = document.querySelector('.comment-list');\r\n    const movieCommentsDiv = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.generateComments)(addcommentButton.id);\r\n    movieCommentDisplay.innerHTML = '';\r\n    movieCommentDisplay.append(movieCommentsDiv);\r\n\r\n    const commentCountSpan = document.querySelector('.count-comments');\r\n    const commentNumber = (0,_commentscounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    commentCountSpan.textContent = `${commentNumber}`;\r\n\r\n    newCommentForm.reset();\r\n  });\r\n};\r\n\r\n// Create a function that closes the popup\r\nconst addClosePopUpEvent = () => {\r\n  const popUpdiv = document.querySelector('.popup-display');\r\n  const closeBtn = document.querySelector('.closeBtn');\r\n  closeBtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    popUpdiv.classList.remove('showpopup');\r\n    popUpdiv.innerHTML = '';\r\n  });\r\n};\r\n\r\n// Create a function that creates a popup\r\nconst createPopUp = (movieDetails) => {\r\n  const {\r\n    name, id, image, genres, runtime, premiered, language,\r\n  } = movieDetails;\r\n  const divElement = document.createElement('div');\r\n  divElement.className = 'popup-container';\r\n  divElement.innerHTML = `\r\n            <nav class=\"popup-nav\">\r\n                <p>Movie details page</p>\r\n            </nav>\r\n            <button class=\"closeBtn\">X</button>\r\n            <img src=\"${image.medium}\" alt=\"Comments image\" width=\"200\" height=\"200\">\r\n            <div><h2>${name}</h2></div>\r\n            <div class=\"classification\">\r\n                <h3>Genres: [${genres}]</h3>\r\n                <h3>Runtime: ${runtime} minutes</h3>\r\n                <h3>Premiered: ${premiered}</h3>\r\n                <h3>Language: ${language}</h3>\r\n            </div>\r\n            <h3>Comments (<span class=\"count-comments\"></span>)</h3>\r\n            <div class=\"comment-list\">\r\n            </div>\r\n            <div class=\"addcomment\">\r\n                <h2>Add a comment</h2>\r\n                <form id=\"new-comment\">\r\n                <input class=\"naming\" id=\"name\" type=\"text\" placeholder=\"Your name\">\r\n                <input class=\"insights\" id=\"comment\" type=\"text\" placeholder=\"Your insights\">\r\n                <button class=\"submit-comment\" id=\"${id}\" type=\"submit\">Comment</button>\r\n                </form>\r\n            </div>\r\n            <footer class=\"popup-foot\">footer</footer>\r\n              `;\r\n  return divElement;\r\n};\r\n\r\n// create a function that displays a popup\r\nconst displayPopUp = async (id) => {\r\n  const popUpdiv = document.querySelector('.popup-display');\r\n  popUpdiv.innerHTML = '';\r\n\r\n  const movieDetails = await fetchMovieDetails(id);\r\n\r\n  popUpdiv.append(createPopUp(movieDetails));\r\n\r\n  const movieCommentDisplay = document.querySelector('.comment-list');\r\n  const movieCommentsDiv = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.generateComments)(id);\r\n  movieCommentDisplay.innerHTML = '';\r\n  movieCommentDisplay.append(movieCommentsDiv);\r\n\r\n  const commentCountSpan = document.querySelector('.count-comments');\r\n  const commentNumber = (0,_commentscounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  commentCountSpan.textContent = `${commentNumber}`;\r\n\r\n  addcommentEvent();\r\n\r\n  addClosePopUpEvent();\r\n};\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;