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

	eval("'use strict';\n\nvar posts = [{\n  title: 'Hello World',\n  status: 'published'\n}, {\n  title: 'Hello JavaScript',\n  status: 'published'\n}, {\n  title: 'Hello API',\n  status: 'draft'\n}],\n    postList = void 0,\n    drafts = void 0;\n\n// Rewrite map with an arrow function\npostList = posts.map(function (post) {\n  return '<li>' + post.title + '</li>';\n});\n\nconsole.log(postList);\n\n// Rewrite filter with an arrow function\ndrafts = posts.filter(function (post) {\n  return post.status === 'draft';\n});\n\nconsole.log(drafts);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzP2JiMWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcG9zdHMgPSBbe1xuICB0aXRsZTogJ0hlbGxvIFdvcmxkJyxcbiAgc3RhdHVzOiAncHVibGlzaGVkJ1xufSwge1xuICB0aXRsZTogJ0hlbGxvIEphdmFTY3JpcHQnLFxuICBzdGF0dXM6ICdwdWJsaXNoZWQnXG59LCB7XG4gIHRpdGxlOiAnSGVsbG8gQVBJJyxcbiAgc3RhdHVzOiAnZHJhZnQnXG59XSxcbiAgICBwb3N0TGlzdCA9IHZvaWQgMCxcbiAgICBkcmFmdHMgPSB2b2lkIDA7XG5cbi8vIFJld3JpdGUgbWFwIHdpdGggYW4gYXJyb3cgZnVuY3Rpb25cbnBvc3RMaXN0ID0gcG9zdHMubWFwKGZ1bmN0aW9uIChwb3N0KSB7XG4gIHJldHVybiAnPGxpPicgKyBwb3N0LnRpdGxlICsgJzwvbGk+Jztcbn0pO1xuXG5jb25zb2xlLmxvZyhwb3N0TGlzdCk7XG5cbi8vIFJld3JpdGUgZmlsdGVyIHdpdGggYW4gYXJyb3cgZnVuY3Rpb25cbmRyYWZ0cyA9IHBvc3RzLmZpbHRlcihmdW5jdGlvbiAocG9zdCkge1xuICByZXR1cm4gcG9zdC5zdGF0dXMgPT09ICdkcmFmdCc7XG59KTtcblxuY29uc29sZS5sb2coZHJhZnRzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);