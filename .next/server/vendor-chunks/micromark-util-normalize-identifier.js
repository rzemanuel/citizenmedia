"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-normalize-identifier";
exports.ids = ["vendor-chunks/micromark-util-normalize-identifier"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-normalize-identifier/dev/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-util-normalize-identifier/dev/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeIdentifier: () => (/* binding */ normalizeIdentifier)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/values.js */ \"(rsc)/./node_modules/micromark-util-symbol/values.js\");\n\n/**\n * Normalize an identifier (as found in references, definitions).\n *\n * Collapses markdown whitespace, trim, and then lower- and uppercase.\n *\n * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their\n * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different\n * uppercase character (U+0398 (`Θ`)).\n * So, to get a canonical form, we perform both lower- and uppercase.\n *\n * Using uppercase last makes sure keys will never interact with default\n * prototypal values (such as `constructor`): nothing in the prototype of\n * `Object` is uppercase.\n *\n * @param {string} value\n *   Identifier to normalize.\n * @returns {string}\n *   Normalized identifier.\n */ function normalizeIdentifier(value) {\n    return value// Collapse markdown whitespace.\n    .replace(/[\\t\\n\\r ]+/g, micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__.values.space)// Trim.\n    .replace(/^ | $/g, \"\")// Some characters are considered “uppercase”, but if their lowercase\n    // counterpart is uppercased will result in a different uppercase\n    // character.\n    // Hence, to get that form, we perform both lower- and uppercase.\n    // Upper case makes sure keys will not interact with default prototypal\n    // methods: no method is uppercase.\n    .toLowerCase().toUpperCase();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXIvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNEO0FBRXREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkMsR0FDTSxTQUFTQyxvQkFBb0JDLEtBQUs7SUFDdkMsT0FDRUEsS0FDRSxnQ0FBZ0M7S0FDL0JDLE9BQU8sQ0FBQyxlQUFlSCxtRUFBTUEsQ0FBQ0ksS0FBSyxDQUNwQyxRQUFRO0tBQ1BELE9BQU8sQ0FBQyxVQUFVLEdBQ25CLHFFQUFxRTtJQUNyRSxpRUFBaUU7SUFDakUsYUFBYTtJQUNiLGlFQUFpRTtJQUNqRSx1RUFBdUU7SUFDdkUsbUNBQW1DO0tBQ2xDRSxXQUFXLEdBQ1hDLFdBQVc7QUFFbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcHlkZWEtbmV4dGpzLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyL2Rldi9pbmRleC5qcz9lZGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dmFsdWVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvdmFsdWVzLmpzJ1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbiBpZGVudGlmaWVyIChhcyBmb3VuZCBpbiByZWZlcmVuY2VzLCBkZWZpbml0aW9ucykuXG4gKlxuICogQ29sbGFwc2VzIG1hcmtkb3duIHdoaXRlc3BhY2UsIHRyaW0sIGFuZCB0aGVuIGxvd2VyLSBhbmQgdXBwZXJjYXNlLlxuICpcbiAqIFNvbWUgY2hhcmFjdGVycyBhcmUgY29uc2lkZXJlZCDigJx1cHBlcmNhc2XigJ0sIHN1Y2ggYXMgVSswM0Y0IChgz7RgKSwgYnV0IGlmIHRoZWlyXG4gKiBsb3dlcmNhc2UgY291bnRlcnBhcnQgKFUrMDNCOCAoYM64YCkpIGlzIHVwcGVyY2FzZWQgd2lsbCByZXN1bHQgaW4gYSBkaWZmZXJlbnRcbiAqIHVwcGVyY2FzZSBjaGFyYWN0ZXIgKFUrMDM5OCAoYM6YYCkpLlxuICogU28sIHRvIGdldCBhIGNhbm9uaWNhbCBmb3JtLCB3ZSBwZXJmb3JtIGJvdGggbG93ZXItIGFuZCB1cHBlcmNhc2UuXG4gKlxuICogVXNpbmcgdXBwZXJjYXNlIGxhc3QgbWFrZXMgc3VyZSBrZXlzIHdpbGwgbmV2ZXIgaW50ZXJhY3Qgd2l0aCBkZWZhdWx0XG4gKiBwcm90b3R5cGFsIHZhbHVlcyAoc3VjaCBhcyBgY29uc3RydWN0b3JgKTogbm90aGluZyBpbiB0aGUgcHJvdG90eXBlIG9mXG4gKiBgT2JqZWN0YCBpcyB1cHBlcmNhc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIElkZW50aWZpZXIgdG8gbm9ybWFsaXplLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgTm9ybWFsaXplZCBpZGVudGlmaWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSWRlbnRpZmllcih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlXG4gICAgICAvLyBDb2xsYXBzZSBtYXJrZG93biB3aGl0ZXNwYWNlLlxuICAgICAgLnJlcGxhY2UoL1tcXHRcXG5cXHIgXSsvZywgdmFsdWVzLnNwYWNlKVxuICAgICAgLy8gVHJpbS5cbiAgICAgIC5yZXBsYWNlKC9eIHwgJC9nLCAnJylcbiAgICAgIC8vIFNvbWUgY2hhcmFjdGVycyBhcmUgY29uc2lkZXJlZCDigJx1cHBlcmNhc2XigJ0sIGJ1dCBpZiB0aGVpciBsb3dlcmNhc2VcbiAgICAgIC8vIGNvdW50ZXJwYXJ0IGlzIHVwcGVyY2FzZWQgd2lsbCByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdXBwZXJjYXNlXG4gICAgICAvLyBjaGFyYWN0ZXIuXG4gICAgICAvLyBIZW5jZSwgdG8gZ2V0IHRoYXQgZm9ybSwgd2UgcGVyZm9ybSBib3RoIGxvd2VyLSBhbmQgdXBwZXJjYXNlLlxuICAgICAgLy8gVXBwZXIgY2FzZSBtYWtlcyBzdXJlIGtleXMgd2lsbCBub3QgaW50ZXJhY3Qgd2l0aCBkZWZhdWx0IHByb3RvdHlwYWxcbiAgICAgIC8vIG1ldGhvZHM6IG5vIG1ldGhvZCBpcyB1cHBlcmNhc2UuXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnRvVXBwZXJDYXNlKClcbiAgKVxufVxuIl0sIm5hbWVzIjpbInZhbHVlcyIsIm5vcm1hbGl6ZUlkZW50aWZpZXIiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzcGFjZSIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-normalize-identifier/dev/index.js\n");

/***/ })

};
;