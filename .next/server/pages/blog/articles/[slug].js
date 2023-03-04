"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/articles/[slug]";
exports.ids = ["pages/blog/articles/[slug]"];
exports.modules = {

/***/ "./pages/blog/articles/[slug].js":
/*!***************************************!*\
  !*** ./pages/blog/articles/[slug].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// The page for each post\nfunction Post({ frontmatter , content  }) {\n    const { title , author , category , date , bannerImage , tags  } = frontmatter;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: bannerImage\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/next-portfolio/pages/blog/articles/[slug].js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/next-portfolio/pages/blog/articles/[slug].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    author,\n                    \" || \",\n                    date\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/next-portfolio/pages/blog/articles/[slug].js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    category,\n                    \" || \",\n                    tags.join()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/next-portfolio/pages/blog/articles/[slug].js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: markdown_it__WEBPACK_IMPORTED_MODULE_3___default()().render(content)\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jalmanzar/Desktop/projects/next-portfolio/pages/blog/articles/[slug].js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jalmanzar/Desktop/projects/next-portfolio/pages/blog/articles/[slug].js\",\n        lineNumber: 10,\n        columnNumber: 12\n    }, this);\n}\n// Generating the paths for each post\nasync function getStaticPaths() {\n    // Get list of all files from our posts directory\n    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(\"articles\");\n    // Generate a path for each one\n    const paths = files.map((fileName)=>({\n            params: {\n                slug: fileName.replace(\".md\", \"\")\n            }\n        }));\n    // return list of paths\n    return {\n        paths,\n        fallback: false\n    };\n}\n// Generate the static props for the page\nasync function getStaticProps({ params: { slug  }  }) {\n    const fileName = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`articles/${slug}.md`, \"utf-8\");\n    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileName);\n    return {\n        props: {\n            frontmatter,\n            content\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2FydGljbGVzL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDYTtBQUNKO0FBRTdCLHlCQUF5QjtBQUNWLFNBQVNHLEtBQUssRUFBQ0MsWUFBVyxFQUFFQyxRQUFPLEVBQUMsRUFBRTtJQUVqRCxNQUFNLEVBQUNDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRUMsWUFBVyxFQUFFQyxLQUFJLEVBQUMsR0FBR1A7SUFFM0QscUJBQU8sOERBQUNROzswQkFDSiw4REFBQ0M7Z0JBQUlDLEtBQUtKOzs7Ozs7MEJBQ1YsOERBQUNLOzBCQUFJVDs7Ozs7OzBCQUNMLDhEQUFDVTs7b0JBQUlUO29CQUFPO29CQUFLRTs7Ozs7OzswQkFDakIsOERBQUNROztvQkFBSVQ7b0JBQVM7b0JBQUtHLEtBQUtPLElBQUk7Ozs7Ozs7MEJBQzVCLDhEQUFDQztnQkFBSUMseUJBQXlCO29CQUFFQyxRQUFRbkIsa0RBQUVBLEdBQUdvQixNQUFNLENBQUNqQjtnQkFBUzs7Ozs7Ozs7Ozs7O0FBRXJFLENBQUM7QUFFRCxxQ0FBcUM7QUFDOUIsZUFBZWtCLGlCQUFpQjtJQUNyQyxpREFBaUQ7SUFDakQsTUFBTUMsUUFBUXhCLHFEQUFjLENBQUM7SUFDN0IsK0JBQStCO0lBQy9CLE1BQU0wQixRQUFRRixNQUFNRyxHQUFHLENBQUMsQ0FBQ0MsV0FBYztZQUNyQ0MsUUFBUTtnQkFDTkMsTUFBTUYsU0FBU0csT0FBTyxDQUFDLE9BQU87WUFDaEM7UUFDRjtJQUNBLHVCQUF1QjtJQUN2QixPQUFPO1FBQ0xMO1FBQ0FNLFVBQVUsS0FBSztJQUNqQjtBQUNGLENBQUM7QUFHRCx5Q0FBeUM7QUFDbEMsZUFBZUMsZUFBZSxFQUFFSixRQUFRLEVBQUVDLEtBQUksRUFBRSxHQUFFLEVBQUU7SUFDdkQsTUFBTUYsV0FBVzVCLHNEQUFlLENBQUMsQ0FBQyxTQUFTLEVBQUU4QixLQUFLLEdBQUcsQ0FBQyxFQUFFO0lBQ3hELE1BQU0sRUFBRUssTUFBTS9CLFlBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdKLGtEQUFNQSxDQUFDMkI7SUFDOUMsT0FBTztRQUNMUSxPQUFPO1lBQ0xoQztZQUNBQztRQUNGO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9wYWdlcy9ibG9nL2FydGljbGVzL1tzbHVnXS5qcz8wYzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgbWQgZnJvbSAnbWFya2Rvd24taXQnO1xuXG4vLyBUaGUgcGFnZSBmb3IgZWFjaCBwb3N0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtmcm9udG1hdHRlciwgY29udGVudH0pIHtcblxuICAgIGNvbnN0IHt0aXRsZSwgYXV0aG9yLCBjYXRlZ29yeSwgZGF0ZSwgYmFubmVySW1hZ2UsIHRhZ3N9ID0gZnJvbnRtYXR0ZXJcblxuICAgIHJldHVybiA8bWFpbj5cbiAgICAgICAgPGltZyBzcmM9e2Jhbm5lckltYWdlfS8+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPGgyPnthdXRob3J9IHx8IHtkYXRlfTwvaDI+XG4gICAgICAgIDxoMz57Y2F0ZWdvcnl9IHx8IHt0YWdzLmpvaW4oKX08L2gzPlxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWQoKS5yZW5kZXIoY29udGVudCkgfX0gLz5cbiAgICA8L21haW4+XG59XG5cbi8vIEdlbmVyYXRpbmcgdGhlIHBhdGhzIGZvciBlYWNoIHBvc3RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgLy8gR2V0IGxpc3Qgb2YgYWxsIGZpbGVzIGZyb20gb3VyIHBvc3RzIGRpcmVjdG9yeVxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKFwiYXJ0aWNsZXNcIik7XG4gIC8vIEdlbmVyYXRlIGEgcGF0aCBmb3IgZWFjaCBvbmVcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVOYW1lKSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogZmlsZU5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcbiAgICB9LFxuICB9KSk7XG4gIC8vIHJldHVybiBsaXN0IG9mIHBhdGhzXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5cbi8vIEdlbmVyYXRlIHRoZSBzdGF0aWMgcHJvcHMgZm9yIHRoZSBwYWdlXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGZzLnJlYWRGaWxlU3luYyhgYXJ0aWNsZXMvJHtzbHVnfS5tZGAsICd1dGYtOCcpO1xuICAgIGNvbnN0IHsgZGF0YTogZnJvbnRtYXR0ZXIsIGNvbnRlbnQgfSA9IG1hdHRlcihmaWxlTmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGZyb250bWF0dGVyLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSxcbiAgICB9O1xuICB9Il0sIm5hbWVzIjpbImZzIiwibWF0dGVyIiwibWQiLCJQb3N0IiwiZnJvbnRtYXR0ZXIiLCJjb250ZW50IiwidGl0bGUiLCJhdXRob3IiLCJjYXRlZ29yeSIsImRhdGUiLCJiYW5uZXJJbWFnZSIsInRhZ3MiLCJtYWluIiwiaW1nIiwic3JjIiwiaDEiLCJoMiIsImgzIiwiam9pbiIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVuZGVyIiwiZ2V0U3RhdGljUGF0aHMiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwicGF0aHMiLCJtYXAiLCJmaWxlTmFtZSIsInBhcmFtcyIsInNsdWciLCJyZXBsYWNlIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/articles/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/articles/[slug].js"));
module.exports = __webpack_exports__;

})();