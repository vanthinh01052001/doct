"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/internmap";
exports.ids = ["vendor-chunks/internmap"];
exports.modules = {

/***/ "(ssr)/./node_modules/internmap/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/internmap/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InternMap: () => (/* binding */ InternMap),\n/* harmony export */   InternSet: () => (/* binding */ InternSet)\n/* harmony export */ });\nclass InternMap extends Map {\n  constructor(entries, key = keyof) {\n    super();\n    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});\n    if (entries != null) for (const [key, value] of entries) this.set(key, value);\n  }\n  get(key) {\n    return super.get(intern_get(this, key));\n  }\n  has(key) {\n    return super.has(intern_get(this, key));\n  }\n  set(key, value) {\n    return super.set(intern_set(this, key), value);\n  }\n  delete(key) {\n    return super.delete(intern_delete(this, key));\n  }\n}\n\nclass InternSet extends Set {\n  constructor(values, key = keyof) {\n    super();\n    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});\n    if (values != null) for (const value of values) this.add(value);\n  }\n  has(value) {\n    return super.has(intern_get(this, value));\n  }\n  add(value) {\n    return super.add(intern_set(this, value));\n  }\n  delete(value) {\n    return super.delete(intern_delete(this, value));\n  }\n}\n\nfunction intern_get({_intern, _key}, value) {\n  const key = _key(value);\n  return _intern.has(key) ? _intern.get(key) : value;\n}\n\nfunction intern_set({_intern, _key}, value) {\n  const key = _key(value);\n  if (_intern.has(key)) return _intern.get(key);\n  _intern.set(key, value);\n  return value;\n}\n\nfunction intern_delete({_intern, _key}, value) {\n  const key = _key(value);\n  if (_intern.has(key)) {\n    value = _intern.get(key);\n    _intern.delete(key);\n  }\n  return value;\n}\n\nfunction keyof(value) {\n  return value !== null && typeof value === \"object\" ? value.valueOf() : value;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW50ZXJubWFwL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLGlCQUFpQixTQUFTLFlBQVk7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLGlCQUFpQixTQUFTLFlBQVk7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3QvLi9ub2RlX21vZHVsZXMvaW50ZXJubWFwL3NyYy9pbmRleC5qcz9kZjQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbnRlcm5NYXAgZXh0ZW5kcyBNYXAge1xuICBjb25zdHJ1Y3RvcihlbnRyaWVzLCBrZXkgPSBrZXlvZikge1xuICAgIHN1cGVyKCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge19pbnRlcm46IHt2YWx1ZTogbmV3IE1hcCgpfSwgX2tleToge3ZhbHVlOiBrZXl9fSk7XG4gICAgaWYgKGVudHJpZXMgIT0gbnVsbCkgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZW50cmllcykgdGhpcy5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiBzdXBlci5nZXQoaW50ZXJuX2dldCh0aGlzLCBrZXkpKTtcbiAgfVxuICBoYXMoa2V5KSB7XG4gICAgcmV0dXJuIHN1cGVyLmhhcyhpbnRlcm5fZ2V0KHRoaXMsIGtleSkpO1xuICB9XG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldChpbnRlcm5fc2V0KHRoaXMsIGtleSksIHZhbHVlKTtcbiAgfVxuICBkZWxldGUoa2V5KSB7XG4gICAgcmV0dXJuIHN1cGVyLmRlbGV0ZShpbnRlcm5fZGVsZXRlKHRoaXMsIGtleSkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcm5TZXQgZXh0ZW5kcyBTZXQge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMsIGtleSA9IGtleW9mKSB7XG4gICAgc3VwZXIoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7X2ludGVybjoge3ZhbHVlOiBuZXcgTWFwKCl9LCBfa2V5OiB7dmFsdWU6IGtleX19KTtcbiAgICBpZiAodmFsdWVzICE9IG51bGwpIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB0aGlzLmFkZCh2YWx1ZSk7XG4gIH1cbiAgaGFzKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhhcyhpbnRlcm5fZ2V0KHRoaXMsIHZhbHVlKSk7XG4gIH1cbiAgYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN1cGVyLmFkZChpbnRlcm5fc2V0KHRoaXMsIHZhbHVlKSk7XG4gIH1cbiAgZGVsZXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN1cGVyLmRlbGV0ZShpbnRlcm5fZGVsZXRlKHRoaXMsIHZhbHVlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW50ZXJuX2dldCh7X2ludGVybiwgX2tleX0sIHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IF9rZXkodmFsdWUpO1xuICByZXR1cm4gX2ludGVybi5oYXMoa2V5KSA/IF9pbnRlcm4uZ2V0KGtleSkgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuX3NldCh7X2ludGVybiwgX2tleX0sIHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IF9rZXkodmFsdWUpO1xuICBpZiAoX2ludGVybi5oYXMoa2V5KSkgcmV0dXJuIF9pbnRlcm4uZ2V0KGtleSk7XG4gIF9pbnRlcm4uc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGludGVybl9kZWxldGUoe19pbnRlcm4sIF9rZXl9LCB2YWx1ZSkge1xuICBjb25zdCBrZXkgPSBfa2V5KHZhbHVlKTtcbiAgaWYgKF9pbnRlcm4uaGFzKGtleSkpIHtcbiAgICB2YWx1ZSA9IF9pbnRlcm4uZ2V0KGtleSk7XG4gICAgX2ludGVybi5kZWxldGUoa2V5KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleW9mKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/internmap/src/index.js\n");

/***/ })

};
;