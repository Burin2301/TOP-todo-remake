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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 14px;\r\n    font-family: 'Kanit', sans-serif;\r\n    box-sizing: content-box;\r\n}\r\n:root{\r\n    --amarillo-palido:#c9cf44;\r\n    --amarillo-nota:#e7d58e;\r\n    --marroncito-nice:#484738;\r\n    --beige:#adac9a;\r\n    --blue-aqua:#00e7cb;\r\n    --green-aqua:#00ad95;\r\n}\r\nbody{\r\n    background-color: var(--marroncito-nice);\r\n    flex-shrink: 1;\r\n}\r\ninput{\r\n    border: none;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader{\r\n    background-color: var(--amarillo-palido);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    height: 16vh;\r\n}\r\nheader h1{\r\n    font-size: 3rem;\r\n}\r\nheader img{\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 3   px solid black;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n/* MAIN */\r\n\r\nmain{\r\n    display: flex;\r\n}\r\naside{\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 30%;\r\n    height: 80vh;\r\n    color: var(--marroncito-nice);\r\n    padding: 10px 20px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\naside ul{\r\n    list-style: none;\r\n}\r\n.project-title{\r\n    font-size: 1.6rem;\r\n    font-weight: bold;\r\n}\r\n.project-container{\r\n    background-color: var(--amarillo-palido);\r\n    width: 180px;\r\n    padding: .2rem 1rem;\r\n}\r\n.project-list{\r\n    background-color: var(--amarillo-palido);\r\n    width: 130px;\r\n    cursor: pointer;\r\n}\r\n.input-task-div{\r\n    min-width: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: var(--amarillo-palido);\r\n}\r\n.project-plus,\r\n.task-plus{\r\n    width: 1.6rem;\r\n    height: 1.6rem;\r\n    cursor: pointer;\r\n}\r\n.project-label{\r\n    width: 100%;\r\n    display: inline-block;\r\n    padding: 2px ;\r\n    margin-right: 1rem;\r\n}\r\n.project-checkbox{\r\n    /* display: none; */\r\n}\r\n.project-checkbox:checked + label{\r\n    background-color: var(--beige);\r\n    color: var(--marroncito-nice);\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n/* TASK DIV */\r\n.task-div{\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.task-container{\r\n    width: 320px;\r\n    min-height: 250px;\r\n    background: var(--amarillo-nota);\r\n    padding: .2rem 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    justify-content: space-between;\r\n}\r\n.task-plus{\r\n    padding: 0 1rem 0 0;\r\n}\r\n.task-list-date{\r\n    font-size: .6rem;\r\n}\r\n.trask-creation{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    bottom: 0;\r\n}\r\n.task-list{\r\n    background: var(--amarillo-nota);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.inactive{\r\n    display: none;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://testing-todo/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://testing-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://testing-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://testing-todo/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://testing-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://testing-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://testing-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://testing-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://testing-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://testing-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI/body.js":
/*!************************!*\
  !*** ./src/UI/body.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   renderAside: () => (/* binding */ renderAside),\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _modules_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/tasks */ \"./src/modules/tasks.js\");\n/* harmony import */ var _styles_plus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/plus.png */ \"./src/styles/plus.png\");\n\r\n\r\n\r\n\r\nconst main = document.createElement('main')\r\n\r\nconst aside = document.createElement('aside')\r\nconst taskDiv = document.createElement('div')\r\n\r\nmain.appendChild(aside)\r\nmain.appendChild(taskDiv)\r\n\r\n// ESTRUCTURE FOR ASIDE\r\n\r\nconst projectContainer = document.createElement('div')\r\nprojectContainer.classList.add('project-container')\r\n\r\nconst projectTitle = document.createElement('h2')\r\nprojectTitle.classList.add('project-title')\r\nprojectTitle.innerText = \"Projects\"\r\n\r\nconst projectUl = document.createElement('ul')\r\nprojectUl.classList.add(\"project-ul\")\r\n\r\n\r\nfunction renderAside(array){\r\n    let projectUlContent = ''\r\n    array.forEach((project)=>{\r\n        projectUl.innerHTML = null\r\n        const projectName = project.name\r\n        projectUlContent += `\r\n        <li class=\"project-list\">\r\n            <div class=\"project-list-div\">\r\n                <input class=\"project-checkbox\" name=\"project\" type=\"radio\" id=\"${projectName}\">\r\n                <label class=\"project-label\" for=\"${projectName}\">${projectName}</label>\r\n            </div>\r\n        </li>\r\n        `\r\n    })\r\n    projectUl.innerHTML = projectUlContent\r\n}\r\n\r\n\r\n\r\n// CONTENIDO DEL DIV DONDE SE CREA EL PROJECT\r\nconst projectCreation = document.createElement('div')\r\nprojectCreation.classList.add('input-task-div')\r\n\r\nconst projectInput = document.createElement('input')\r\nprojectInput.placeholder = \"Add a new Project\"\r\nprojectInput.id = \"inputNewProject\"\r\nprojectInput.classList.add('project-list')\r\nprojectInput.type = \"text\"\r\n\r\nconst saveProjectBtn = document.createElement('img')\r\nsaveProjectBtn.classList.add(\"project-plus\")\r\nsaveProjectBtn.id = \"addProject\"\r\nsaveProjectBtn.src = _styles_plus_png__WEBPACK_IMPORTED_MODULE_2__\r\n\r\n\r\naside.appendChild(projectContainer)\r\nprojectContainer.appendChild(projectTitle)\r\nprojectContainer.appendChild(projectUl)\r\nprojectContainer.appendChild(projectCreation)\r\nprojectCreation.appendChild(projectInput)\r\nprojectCreation.appendChild(saveProjectBtn)\r\n\r\n\r\n\r\n// ESTRUCTURA TASKDIV\r\n\r\ntaskDiv.classList.add('task-div')\r\n\r\nconst taskContainer = document.createElement('div')\r\ntaskContainer.classList.add('task-container')\r\ntaskContainer.classList.add('inactive')\r\n\r\nconst taskTitle = document.createElement('h2')\r\ntaskTitle.classList.add('project-title')\r\ntaskTitle.innerText = \"Tasks\"\r\n\r\nconst taskUl = document.createElement('ul')\r\ntaskUl.classList.add(\"task-ul\")\r\n\r\n\r\nfunction renderTasks(targetId){     //COMPLETAR\r\n    let taskUlContent = ''\r\n    const targetProject= _modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectList.find(project=>project.name === targetId)\r\n    if(!targetProject)return\r\n    else if(targetProject){\r\n        console.log(targetProject.tasks)\r\n        targetProject.tasks.forEach((task)=>{\r\n            const taskName = task.name\r\n            const taskDueDate = task.date\r\n            taskUlContent += `\r\n            <li class=\"task-list-li\">\r\n                <div class=\"task-list-div\">\r\n                    <input class=\"task-checkbox\" type=\"checkbox\" id=\"${taskName}\">\r\n                    <label class=\"task-label\" for=\"${taskName}\">${taskName}</label>\r\n                    <p>${taskDueDate}</p>\r\n                </div>\r\n            </li>\r\n            `\r\n        })\r\n    }\r\n    else{\r\n        taskUlContent = \"\"\r\n    }\r\n    taskUl.innerHTML = taskUlContent\r\n}\r\n\r\n// ESTRUCTURA DIV CREACION DE TASK\r\nconst taskCreation = document.createElement('div')\r\ntaskCreation.classList.add('trask-creation')\r\n\r\nconst taskInput = document.createElement('input')\r\ntaskInput.placeholder = \"Add a new Task\"\r\ntaskInput.id = \"inputNewtask\"\r\ntaskInput.classList.add('task-list')\r\ntaskInput.type = \"text\"\r\n\r\nconst taskInputDate = document.createElement('input')\r\ntaskInputDate.id = \"inputNewtaskDate\"\r\ntaskInputDate.classList.add('task-list-date')\r\ntaskInputDate.type = \"date\"\r\n\r\nconst saveTaskBtn = document.createElement('img')\r\nsaveTaskBtn.classList.add(\"task-plus\")\r\nsaveTaskBtn.id = \"addTask\"\r\nsaveTaskBtn.src = _styles_plus_png__WEBPACK_IMPORTED_MODULE_2__\r\n\r\ntaskCreation.appendChild(saveTaskBtn)\r\ntaskCreation.appendChild(taskInput)\r\ntaskCreation.appendChild(taskInputDate)\r\n\r\ntaskDiv.appendChild(taskContainer)\r\ntaskContainer.appendChild(taskTitle)\r\ntaskContainer.appendChild(taskUl)\r\n// PARA LAS TAREAS INYECTADAS\r\ntaskContainer.appendChild(taskCreation)\r\n\r\n\n\n//# sourceURL=webpack://testing-todo/./src/UI/body.js?");

/***/ }),

/***/ "./src/UI/header.js":
/*!**************************!*\
  !*** ./src/UI/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _styles_sol_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/sol.png */ \"./src/styles/sol.png\");\n\r\n\r\nconst header = document.createElement('header')\r\nheader.classList.add('header')\r\nconst headerTitle = document.createElement('h1')\r\nheaderTitle.innerText = 'STUFF I HAVE TO DO'\r\n\r\nconst modeIconImg = document.createElement('img')\r\nmodeIconImg.src = _styles_sol_png__WEBPACK_IMPORTED_MODULE_0__\r\nmodeIconImg.classList.add('mode-icon')\r\n\r\nheader.appendChild(headerTitle)\r\nheader.appendChild(modeIconImg)\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://testing-todo/./src/UI/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _UI_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/header */ \"./src/UI/header.js\");\n/* harmony import */ var _UI_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/body */ \"./src/UI/body.js\");\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/functions */ \"./src/modules/functions.js\");\n/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/projects */ \"./src/modules/projects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderScreen(){\r\n    const contentDiv = document.querySelector('.content')\r\n    contentDiv.appendChild(_UI_header__WEBPACK_IMPORTED_MODULE_1__.header)\r\n    contentDiv.appendChild(_UI_body__WEBPACK_IMPORTED_MODULE_2__.main)\r\n    ;(0,_UI_body__WEBPACK_IMPORTED_MODULE_2__.renderAside)(_modules_projects__WEBPACK_IMPORTED_MODULE_4__.projectList)\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', renderScreen)\r\n\r\n;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_3__.buttonListener)()\n\n//# sourceURL=webpack://testing-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonListener: () => (/* binding */ buttonListener),\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject),\n/* harmony export */   createNewTask: () => (/* binding */ createNewTask),\n/* harmony export */   isChecked: () => (/* binding */ isChecked)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _UI_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/body */ \"./src/UI/body.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n\r\n\r\n\r\n\r\nfunction createNewProject(){\r\n    const projectInput = document.getElementById('inputNewProject')\r\n    const newProjectName = projectInput.value\r\n    if(newProjectName===\"\")return\r\n    if(_projects__WEBPACK_IMPORTED_MODULE_0__.projectList.some((project)=>project.name === newProjectName))return\r\n    const newProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(newProjectName)\r\n    _projects__WEBPACK_IMPORTED_MODULE_0__.projectList.push(newProject)\r\n    projectInput.value = ''\r\n}\r\n\r\nfunction createNewTask(){\r\n    const taskInput = document.getElementById('inputNewtask')\r\n    const taskInputValue = taskInput\r\n    const taskInputDate = document.getElementById('inputNewtaskDate')\r\n    const newTaskName = taskInput.value\r\n    const newTaskDate = taskInputDate.value\r\n    const projectSelected = document.querySelector('.active-project').id\r\n    if(newTaskName === '')return\r\n    if(_tasks__WEBPACK_IMPORTED_MODULE_2__.taskList.find((task)=>task.name === newTaskName))return\r\n    const newTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(newTaskName, newTaskDate, projectSelected)\r\n    _tasks__WEBPACK_IMPORTED_MODULE_2__.taskList.push(newTask)\r\n    taskInputValue.value = \"\"\r\n    taskInputDate.value = \"\"\r\n    console.log(_tasks__WEBPACK_IMPORTED_MODULE_2__.taskList)\r\n    console.log(projectSelected)\r\n}\r\n\r\nfunction isChecked(targetId){\r\n    const taskListContainer = document.querySelector('.task-container')\r\n    const checkbox = document.querySelector(`#${targetId}`)\r\n    if(!checkbox.checked)checkbox.classList.remove('active-project')\r\n    if(checkbox.checked){\r\n        checkbox.classList.add('active-project')\r\n        const targetProject = _projects__WEBPACK_IMPORTED_MODULE_0__.projectList.find((project)=>project.name === targetId)\r\n        taskListContainer.classList.remove('inactive')\r\n        ;(0,_UI_body__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(targetProject)\r\n    }\r\n}\r\n\r\nfunction buttonListener(){\r\ndocument.addEventListener('click', function(e){\r\n    if(e.target.id=== 'addProject'){\r\n        createNewProject()\r\n        renderAside(_projects__WEBPACK_IMPORTED_MODULE_0__.projectList)\r\n    }\r\n    if(e.target.className == 'project-checkbox'){\r\n        const targetId = e.target.id\r\n        isChecked(targetId)\r\n        ;(0,_UI_body__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(targetId)\r\n\r\n    }\r\n    if(e.target.id === 'addTask'){\r\n        createNewTask()\r\n        ;(0,_UI_body__WEBPACK_IMPORTED_MODULE_1__.renderTasks)('project2')\r\n    }\r\n\r\n})\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://testing-todo/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\nclass Project{\r\n    constructor(name, tasks){\r\n        this.name = name,\r\n        this.tasks = []\r\n    }\r\n    // SETTER\r\n    setName(name){\r\n        this.name = name\r\n    }\r\n    setTask(newTask){\r\n        this.tasks.push(newTask)\r\n    }\r\n    // GETTER\r\n    getProjectName(){\r\n        return this.name\r\n    }\r\n    getTasks(){\r\n        return this.tasks\r\n    }\r\n}\r\n\r\nconst projectList = []\r\nconst project1 = new Project('project1')\r\nconst project2 = new Project('project2')\r\nprojectList.push(project1)\r\nprojectList.push(project2)\r\n\r\nproject1.setTask({name:\"Tarea 1\",date:\"12/10/2023\"})\r\nproject1.setTask({name:\"Tarea 2\",date:\"12/24/2023\"})\r\n\r\nproject2.setTask({name:\"Tarea 3\",date:\"12/12/2023\"})\r\nproject2.setTask({name:\"Tarea 4\",date:\"12/16/2023\"})\r\nproject2.setTask({name:\"Tarea 5\",date:\"12/15/2023\"})\r\n\r\nfunction createProject(name){\r\n    return {name:name, tasks:[]}\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://testing-todo/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\nclass Task{\r\n    constructor(name, dueDate, project, complete){\r\n        this.name = name,\r\n        this.dueDate = dueDate\r\n        this.project = project\r\n        this.complete = false\r\n    }\r\n    // SETTER\r\n    setName(name){\r\n        this.name = name\r\n    }\r\n    setDueDate(date){\r\n        this.dueDate = date\r\n    }\r\n    // GETTER\r\n    getTaskName(){\r\n        return this.name\r\n    }\r\n    getDueDate(){\r\n        return this.dueDate\r\n    }\r\n}\r\n\r\nconst taskList = []\r\n\r\nfunction createTask(name, date, project){\r\n    return {name:name, dueDate:date, project:project}\r\n}\r\n\r\n\n\n//# sourceURL=webpack://testing-todo/./src/modules/tasks.js?");

/***/ }),

/***/ "./src/styles/plus.png":
/*!*****************************!*\
  !*** ./src/styles/plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f694abc8f8556409ac17.png\";\n\n//# sourceURL=webpack://testing-todo/./src/styles/plus.png?");

/***/ }),

/***/ "./src/styles/sol.png":
/*!****************************!*\
  !*** ./src/styles/sol.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d077f67f17c616a9ddb.png\";\n\n//# sourceURL=webpack://testing-todo/./src/styles/sol.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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