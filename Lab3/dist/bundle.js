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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\src\\\\index.js: Unexpected token (22:6)\\n\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 22 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"conv\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 23 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"conv-board\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 24 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 25 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"status\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mКонвертер\\u001b[39m из рублей в доллары\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser._raise (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:742:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Parser.raise (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:729:17)\\n    at Parser.unexpected (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8757:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10052:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9602:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9582:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9452:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9425:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9380:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10193:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9947:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9602:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9582:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9452:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9425:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9380:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9332:23)\\n    at Parser.parseReturnStatement (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11448:28)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11129:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11081:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11656:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11642:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11626:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10634:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10617:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10579:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12081:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11998:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\sasha\\\\YandexDisk\\\\Домашки\\\\РТПО\\\\Лабы\\\\Lab2\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11940:10)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });