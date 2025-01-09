"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-strikethrough";
exports.ids = ["vendor-chunks/mdast-util-gfm-strikethrough"];
exports.modules = {

/***/ "(rsc)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/lib/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughFromMarkdown: () => (/* binding */ gfmStrikethroughFromMarkdown),\n/* harmony export */   gfmStrikethroughToMarkdown: () => (/* binding */ gfmStrikethroughToMarkdown)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_markdown_lib_util_container_phrasing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing.js */ \"(rsc)/./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\");\n/* harmony import */ var mdast_util_to_markdown_lib_util_track_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-markdown/lib/util/track.js */ \"(rsc)/./node_modules/mdast-util-to-markdown/lib/util/track.js\");\n/**\n * @typedef {import('mdast').Delete} Delete\n *\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').ConstructName} ConstructName\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n */ \n\n// To do: next major: expose functions.\n// To do: next major: use `state`, state utilities.\n/**\n * List of constructs that occur in phrasing (paragraphs, headings), but cannot\n * contain strikethrough.\n * So they sort of cancel each other out.\n * Note: could use a better name.\n *\n * Note: keep in sync with: <https://github.com/syntax-tree/mdast-util-to-markdown/blob/8ce8dbf/lib/unsafe.js#L14>\n *\n * @type {Array<ConstructName>}\n */ const constructsWithoutStrikethrough = [\n    \"autolink\",\n    \"destinationLiteral\",\n    \"destinationRaw\",\n    \"reference\",\n    \"titleQuote\",\n    \"titleApostrophe\"\n];\nhandleDelete.peek = peekDelete;\n/**\n * Extension for `mdast-util-from-markdown` to enable GFM strikethrough.\n *\n * @type {FromMarkdownExtension}\n */ const gfmStrikethroughFromMarkdown = {\n    canContainEols: [\n        \"delete\"\n    ],\n    enter: {\n        strikethrough: enterStrikethrough\n    },\n    exit: {\n        strikethrough: exitStrikethrough\n    }\n};\n/**\n * Extension for `mdast-util-to-markdown` to enable GFM strikethrough.\n *\n * @type {ToMarkdownExtension}\n */ const gfmStrikethroughToMarkdown = {\n    unsafe: [\n        {\n            character: \"~\",\n            inConstruct: \"phrasing\",\n            notInConstruct: constructsWithoutStrikethrough\n        }\n    ],\n    handlers: {\n        delete: handleDelete\n    }\n};\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterStrikethrough(token) {\n    this.enter({\n        type: \"delete\",\n        children: []\n    }, token);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitStrikethrough(token) {\n    this.exit(token);\n}\n/**\n * @type {ToMarkdownHandle}\n * @param {Delete} node\n */ function handleDelete(node, _, context, safeOptions) {\n    const tracker = (0,mdast_util_to_markdown_lib_util_track_js__WEBPACK_IMPORTED_MODULE_0__.track)(safeOptions);\n    const exit = context.enter(\"strikethrough\");\n    let value = tracker.move(\"~~\");\n    value += (0,mdast_util_to_markdown_lib_util_container_phrasing_js__WEBPACK_IMPORTED_MODULE_1__.containerPhrasing)(node, context, {\n        ...tracker.current(),\n        before: value,\n        after: \"~\"\n    });\n    value += tracker.move(\"~~\");\n    exit();\n    return value;\n}\n/** @type {ToMarkdownHandle} */ function peekDelete() {\n    return \"~\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0NBVUMsR0FFc0Y7QUFDekI7QUFFOUQsdUNBQXVDO0FBQ3ZDLG1EQUFtRDtBQUVuRDs7Ozs7Ozs7O0NBU0MsR0FDRCxNQUFNRSxpQ0FBaUM7SUFDckM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFREMsYUFBYUMsSUFBSSxHQUFHQztBQUVwQjs7OztDQUlDLEdBQ00sTUFBTUMsK0JBQStCO0lBQzFDQyxnQkFBZ0I7UUFBQztLQUFTO0lBQzFCQyxPQUFPO1FBQUNDLGVBQWVDO0lBQWtCO0lBQ3pDQyxNQUFNO1FBQUNGLGVBQWVHO0lBQWlCO0FBQ3pDLEVBQUM7QUFFRDs7OztDQUlDLEdBQ00sTUFBTUMsNkJBQTZCO0lBQ3hDQyxRQUFRO1FBQ047WUFDRUMsV0FBVztZQUNYQyxhQUFhO1lBQ2JDLGdCQUFnQmY7UUFDbEI7S0FDRDtJQUNEZ0IsVUFBVTtRQUFDQyxRQUFRaEI7SUFBWTtBQUNqQyxFQUFDO0FBRUQ7OztDQUdDLEdBQ0QsU0FBU08sbUJBQW1CVSxLQUFLO0lBQy9CLElBQUksQ0FBQ1osS0FBSyxDQUFDO1FBQUNhLE1BQU07UUFBVUMsVUFBVSxFQUFFO0lBQUEsR0FBR0Y7QUFDN0M7QUFFQTs7O0NBR0MsR0FDRCxTQUFTUixrQkFBa0JRLEtBQUs7SUFDOUIsSUFBSSxDQUFDVCxJQUFJLENBQUNTO0FBQ1o7QUFFQTs7O0NBR0MsR0FDRCxTQUFTakIsYUFBYW9CLElBQUksRUFBRUMsQ0FBQyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDakQsTUFBTUMsVUFBVTFCLCtFQUFLQSxDQUFDeUI7SUFDdEIsTUFBTWYsT0FBT2MsUUFBUWpCLEtBQUssQ0FBQztJQUMzQixJQUFJb0IsUUFBUUQsUUFBUUUsSUFBSSxDQUFDO0lBQ3pCRCxTQUFTNUIsd0dBQWlCQSxDQUFDdUIsTUFBTUUsU0FBUztRQUN4QyxHQUFHRSxRQUFRRyxPQUFPLEVBQUU7UUFDcEJDLFFBQVFIO1FBQ1JJLE9BQU87SUFDVDtJQUNBSixTQUFTRCxRQUFRRSxJQUFJLENBQUM7SUFDdEJsQjtJQUNBLE9BQU9pQjtBQUNUO0FBRUEsNkJBQTZCLEdBQzdCLFNBQVN2QjtJQUNQLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3NweWRlYS1uZXh0anMvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC9saWIvaW5kZXguanM/NTFmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuRGVsZXRlfSBEZWxldGVcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5Db25zdHJ1Y3ROYW1lfSBDb25zdHJ1Y3ROYW1lXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuT3B0aW9uc30gVG9NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLkhhbmRsZX0gVG9NYXJrZG93bkhhbmRsZVxuICovXG5cbmltcG9ydCB7Y29udGFpbmVyUGhyYXNpbmd9IGZyb20gJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY29udGFpbmVyLXBocmFzaW5nLmpzJ1xuaW1wb3J0IHt0cmFja30gZnJvbSAnbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC90cmFjay5qcydcblxuLy8gVG8gZG86IG5leHQgbWFqb3I6IGV4cG9zZSBmdW5jdGlvbnMuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogdXNlIGBzdGF0ZWAsIHN0YXRlIHV0aWxpdGllcy5cblxuLyoqXG4gKiBMaXN0IG9mIGNvbnN0cnVjdHMgdGhhdCBvY2N1ciBpbiBwaHJhc2luZyAocGFyYWdyYXBocywgaGVhZGluZ3MpLCBidXQgY2Fubm90XG4gKiBjb250YWluIHN0cmlrZXRocm91Z2guXG4gKiBTbyB0aGV5IHNvcnQgb2YgY2FuY2VsIGVhY2ggb3RoZXIgb3V0LlxuICogTm90ZTogY291bGQgdXNlIGEgYmV0dGVyIG5hbWUuXG4gKlxuICogTm90ZToga2VlcCBpbiBzeW5jIHdpdGg6IDxodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvbWRhc3QtdXRpbC10by1tYXJrZG93bi9ibG9iLzhjZThkYmYvbGliL3Vuc2FmZS5qcyNMMTQ+XG4gKlxuICogQHR5cGUge0FycmF5PENvbnN0cnVjdE5hbWU+fVxuICovXG5jb25zdCBjb25zdHJ1Y3RzV2l0aG91dFN0cmlrZXRocm91Z2ggPSBbXG4gICdhdXRvbGluaycsXG4gICdkZXN0aW5hdGlvbkxpdGVyYWwnLFxuICAnZGVzdGluYXRpb25SYXcnLFxuICAncmVmZXJlbmNlJyxcbiAgJ3RpdGxlUXVvdGUnLFxuICAndGl0bGVBcG9zdHJvcGhlJ1xuXVxuXG5oYW5kbGVEZWxldGUucGVlayA9IHBlZWtEZWxldGVcblxuLyoqXG4gKiBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gc3RyaWtldGhyb3VnaC5cbiAqXG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duRXh0ZW5zaW9ufVxuICovXG5leHBvcnQgY29uc3QgZ2ZtU3RyaWtldGhyb3VnaEZyb21NYXJrZG93biA9IHtcbiAgY2FuQ29udGFpbkVvbHM6IFsnZGVsZXRlJ10sXG4gIGVudGVyOiB7c3RyaWtldGhyb3VnaDogZW50ZXJTdHJpa2V0aHJvdWdofSxcbiAgZXhpdDoge3N0cmlrZXRocm91Z2g6IGV4aXRTdHJpa2V0aHJvdWdofVxufVxuXG4vKipcbiAqIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gc3RyaWtldGhyb3VnaC5cbiAqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkV4dGVuc2lvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdmbVN0cmlrZXRocm91Z2hUb01hcmtkb3duID0ge1xuICB1bnNhZmU6IFtcbiAgICB7XG4gICAgICBjaGFyYWN0ZXI6ICd+JyxcbiAgICAgIGluQ29uc3RydWN0OiAncGhyYXNpbmcnLFxuICAgICAgbm90SW5Db25zdHJ1Y3Q6IGNvbnN0cnVjdHNXaXRob3V0U3RyaWtldGhyb3VnaFxuICAgIH1cbiAgXSxcbiAgaGFuZGxlcnM6IHtkZWxldGU6IGhhbmRsZURlbGV0ZX1cbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlclN0cmlrZXRocm91Z2godG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ2RlbGV0ZScsIGNoaWxkcmVuOiBbXX0sIHRva2VuKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRTdHJpa2V0aHJvdWdoKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAqIEBwYXJhbSB7RGVsZXRlfSBub2RlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZShub2RlLCBfLCBjb250ZXh0LCBzYWZlT3B0aW9ucykge1xuICBjb25zdCB0cmFja2VyID0gdHJhY2soc2FmZU9wdGlvbnMpXG4gIGNvbnN0IGV4aXQgPSBjb250ZXh0LmVudGVyKCdzdHJpa2V0aHJvdWdoJylcbiAgbGV0IHZhbHVlID0gdHJhY2tlci5tb3ZlKCd+ficpXG4gIHZhbHVlICs9IGNvbnRhaW5lclBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtcbiAgICAuLi50cmFja2VyLmN1cnJlbnQoKSxcbiAgICBiZWZvcmU6IHZhbHVlLFxuICAgIGFmdGVyOiAnfidcbiAgfSlcbiAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKCd+ficpXG4gIGV4aXQoKVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfSAqL1xuZnVuY3Rpb24gcGVla0RlbGV0ZSgpIHtcbiAgcmV0dXJuICd+J1xufVxuIl0sIm5hbWVzIjpbImNvbnRhaW5lclBocmFzaW5nIiwidHJhY2siLCJjb25zdHJ1Y3RzV2l0aG91dFN0cmlrZXRocm91Z2giLCJoYW5kbGVEZWxldGUiLCJwZWVrIiwicGVla0RlbGV0ZSIsImdmbVN0cmlrZXRocm91Z2hGcm9tTWFya2Rvd24iLCJjYW5Db250YWluRW9scyIsImVudGVyIiwic3RyaWtldGhyb3VnaCIsImVudGVyU3RyaWtldGhyb3VnaCIsImV4aXQiLCJleGl0U3RyaWtldGhyb3VnaCIsImdmbVN0cmlrZXRocm91Z2hUb01hcmtkb3duIiwidW5zYWZlIiwiY2hhcmFjdGVyIiwiaW5Db25zdHJ1Y3QiLCJub3RJbkNvbnN0cnVjdCIsImhhbmRsZXJzIiwiZGVsZXRlIiwidG9rZW4iLCJ0eXBlIiwiY2hpbGRyZW4iLCJub2RlIiwiXyIsImNvbnRleHQiLCJzYWZlT3B0aW9ucyIsInRyYWNrZXIiLCJ2YWx1ZSIsIm1vdmUiLCJjdXJyZW50IiwiYmVmb3JlIiwiYWZ0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js\n");

/***/ })

};
;