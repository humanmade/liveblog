/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar posts = [{\n  title: 'Hello World',\n  status: 'published'\n}, {\n  title: 'Hello JavaScript',\n  status: 'published'\n}, {\n  title: 'Hello API',\n  status: 'draft'\n}],\n    postList = void 0,\n    drafts = void 0;\n\npostList = posts.map(function (post) {\n  return '<li>' + post.title + '</li>';\n});\nconsole.log(postList);\n\ndrafts = posts.filter(function (post) {\n  return post.status === 'draft';\n});\nconsole.log(drafts);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzP2JiMWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcG9zdHMgPSBbe1xuICB0aXRsZTogJ0hlbGxvIFdvcmxkJyxcbiAgc3RhdHVzOiAncHVibGlzaGVkJ1xufSwge1xuICB0aXRsZTogJ0hlbGxvIEphdmFTY3JpcHQnLFxuICBzdGF0dXM6ICdwdWJsaXNoZWQnXG59LCB7XG4gIHRpdGxlOiAnSGVsbG8gQVBJJyxcbiAgc3RhdHVzOiAnZHJhZnQnXG59XSxcbiAgICBwb3N0TGlzdCA9IHZvaWQgMCxcbiAgICBkcmFmdHMgPSB2b2lkIDA7XG5cbnBvc3RMaXN0ID0gcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0KSB7XG4gIHJldHVybiAnPGxpPicgKyBwb3N0LnRpdGxlICsgJzwvbGk+Jztcbn0pO1xuY29uc29sZS5sb2cocG9zdExpc3QpO1xuXG5kcmFmdHMgPSBwb3N0cy5maWx0ZXIoZnVuY3Rpb24gKHBvc3QpIHtcbiAgcmV0dXJuIHBvc3Quc3RhdHVzID09PSAnZHJhZnQnO1xufSk7XG5jb25zb2xlLmxvZyhkcmFmdHMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);