/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar names = 'Lexi';\n//total US states\nvar states = 50;\n//result of adding 5 and 4\nvar x = (5 + 4);\n//Function declaration\nfunction sayHello(num1, num2) {\n    console.log('Hello World!');\n    return num1 + num2;\n}\nsayHello(5, 4);\n//say Hello World! with function\nfunction checkAge(age, names) {\n    if (age <= 20) {\n        alert(\"Sorry \" + names + \", you aren't old enough to view this page!\");\n    }\n}\ncheckAge(21, 'Charles');\ncheckAge(27, 'Abby');\ncheckAge(18, 'James');\ncheckAge(17, 'John');\nvar veggies = ['Broccoli', 'Celery', 'Spinach', 'Kale'];\nfor (var _i = 0, veggies_1 = veggies; _i < veggies_1.length; _i++) {\n    var veg = veggies_1[_i];\n    console.log(veg);\n}\nvar object1 = {\n    names: 'Karen',\n    age: 33,\n};\nvar object2 = {\n    names: 'Yoda',\n    age: 10,\n};\nvar object3 = {\n    names: 'Kitty',\n    age: 13,\n};\nvar object4 = {\n    names: 'Ted',\n    age: 21,\n};\nvar object5 = {\n    names: 'Linda',\n    age: 24,\n};\ncheckAge(33, 'Karen');\ncheckAge(10, 'Yoda');\ncheckAge(13, 'Kitty');\ncheckAge(21, 'Ted');\ncheckAge(24, 'Linda');\nfunction getLength(word) {\n    if (word.length % 2 == 0) {\n        return ('The world is nice and even!');\n    }\n    else {\n        return ('The world is an odd place!');\n    }\n}\nconsole.log(getLength('hello world'));\n//\n\n\n//# sourceURL=webpack:///./script.ts?");

/***/ })

/******/ });