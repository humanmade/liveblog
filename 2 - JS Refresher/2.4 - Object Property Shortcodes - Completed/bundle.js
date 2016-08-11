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

	eval("'use strict';\n\n// Create a variable named id with a value of 2\n// Create a post object with a title property of \"Hello ES6\"\n// and an id of 1\nvar id = 3,\n    post = {\n  title: 'Hello ES6'\n};\n\n// Use shorthand property notation to assign\n// an id to the post object\npost = { id: id };\n\n// Log out the post object\nconsole.log(post);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzP2JiMWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBDcmVhdGUgYSB2YXJpYWJsZSBuYW1lZCBpZCB3aXRoIGEgdmFsdWUgb2YgMlxuLy8gQ3JlYXRlIGEgcG9zdCBvYmplY3Qgd2l0aCBhIHRpdGxlIHByb3BlcnR5IG9mIFwiSGVsbG8gRVM2XCJcbi8vIGFuZCBhbiBpZCBvZiAxXG52YXIgaWQgPSAzLFxuICAgIHBvc3QgPSB7XG4gIHRpdGxlOiAnSGVsbG8gRVM2J1xufTtcblxuLy8gVXNlIHNob3J0aGFuZCBwcm9wZXJ0eSBub3RhdGlvbiB0byBhc3NpZ25cbi8vIGFuIGlkIHRvIHRoZSBwb3N0IG9iamVjdFxucG9zdCA9IHsgaWQ6IGlkIH07XG5cbi8vIExvZyBvdXQgdGhlIHBvc3Qgb2JqZWN0XG5jb25zb2xlLmxvZyhwb3N0KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);