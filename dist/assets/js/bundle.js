/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/addListMovies.ts":
/*!*********************************!*\
  !*** ./src/ts/addListMovies.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var HandleAddMovies = (function () {
    function HandleAddMovies(container, genres) {
        this.container = document.querySelector(container);
        this.genres = genres;
        this.list = [];
    }
    HandleAddMovies.prototype.getMovies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, resJSON;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch("https://api.themoviedb.org/3/discover/movie?api_key=66e3df787130147acae1d50069f3587c&language=pt-BR&with_genres=" + this.genres + "&sort_by=popularity.desc&include_adult=false&page=1&page=2&with_watch_monetization_types=flatrate")];
                    case 1:
                        response = _a.sent();
                        return [4, response.json()];
                    case 2:
                        resJSON = _a.sent();
                        this.list = resJSON.results;
                        this.addList();
                        return [2];
                }
            });
        });
    };
    HandleAddMovies.prototype.addList = function () {
        var _this = this;
        this.list.forEach(function (movie) {
            var _a;
            var li = document.createElement('li');
            li.classList.add('conteudo-item');
            li.setAttribute('id', "" + movie.id);
            var img = document.createElement('img');
            img.setAttribute('src', "https://image.tmdb.org/t/p/w500" + movie.poster_path);
            img.setAttribute('alt', "" + movie.title);
            var p = document.createElement('p');
            p.innerText = movie.title;
            li.appendChild(img);
            li.appendChild(p);
            (_a = _this.container) === null || _a === void 0 ? void 0 : _a.appendChild(li);
        });
    };
    HandleAddMovies.prototype.init = function () {
        if (this.container) {
            this.getMovies();
        }
    };
    return HandleAddMovies;
}());
exports.default = HandleAddMovies;


/***/ }),

/***/ "./src/ts/handleArrowUp.ts":
/*!*********************************!*\
  !*** ./src/ts/handleArrowUp.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var HandleArrowUp = (function () {
    function HandleArrowUp(button) {
        this.buttonToTop = document.querySelector(button);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    HandleArrowUp.prototype.addEvents = function () {
        var _a;
        window.addEventListener('scroll', this.handleScroll);
        (_a = this.buttonToTop) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.handleClick);
    };
    HandleArrowUp.prototype.handleScroll = function () {
        if (window.pageYOffset > window.innerHeight) {
            if (this.buttonToTop)
                this.buttonToTop.classList.add('in');
        }
        else {
            if (this.buttonToTop)
                this.buttonToTop.classList.remove('in');
        }
    };
    HandleArrowUp.prototype.handleClick = function () {
        window.scrollTo(0, 0);
    };
    HandleArrowUp.prototype.init = function () {
        if (this.buttonToTop) {
            this.addEvents();
        }
    };
    return HandleArrowUp;
}());
exports.default = HandleArrowUp;


/***/ }),

/***/ "./src/ts/handleClickMovies.ts":
/*!*************************************!*\
  !*** ./src/ts/handleClickMovies.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var HandleClick = (function () {
    function HandleClick(list, containerDetailsFull, buttonCloseDetails) {
        this.movies = Array.from(document.querySelectorAll(list));
        this.containerDetailsFull = document.querySelector(containerDetailsFull);
        this.buttonCloseDetails = document.querySelector(buttonCloseDetails);
        this.getInfosForDetails = this.getInfosForDetails.bind(this);
        this.detailsContainer = document.querySelector(containerDetailsFull + "-container");
        this.detailsTitle = document.querySelector(containerDetailsFull + "-container h2");
        this.detailsPoster = document.querySelector(containerDetailsFull + "-poster");
        this.detailsTag = document.querySelector(containerDetailsFull + "-tag");
        this.detailsPage = document.querySelector(containerDetailsFull + "-page");
        this.detailsGen = document.querySelector(containerDetailsFull + "-genero");
        this.detailsSinopse = document.querySelector(containerDetailsFull + "-sinopse");
        this.detailsTrailer = document.querySelector(containerDetailsFull + "-trailer");
    }
    HandleClick.prototype.addEvents = function () {
        var _this = this;
        var _a;
        (_a = this.movies) === null || _a === void 0 ? void 0 : _a.forEach(function (movie) {
            movie.addEventListener('click', function () {
                var ID = movie.getAttribute('id');
                if (ID)
                    _this.getInfosForDetails(ID);
            });
        });
    };
    HandleClick.prototype.handleCloseDetails = function () {
        var _this = this;
        var _a;
        (_a = this.buttonCloseDetails) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            if (_this.containerDetailsFull)
                _this.containerDetailsFull.style.display = 'none';
        });
    };
    HandleClick.prototype.getInfosForDetails = function (ID) {
        return __awaiter(this, void 0, void 0, function () {
            var response, resJSON, text_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch("https://api.themoviedb.org/3/movie/" + ID + "?api_key=66e3df787130147acae1d50069f3587c&append_to_response=videos&language=pt-BR")];
                    case 1:
                        response = _a.sent();
                        return [4, response.json()];
                    case 2:
                        resJSON = _a.sent();
                        if (this.detailsContainer) {
                            this.detailsContainer.style.background = "url('https://image.tmdb.org/t/p/original" + (resJSON.belongs_to_collection ? resJSON.belongs_to_collection.backdrop_path : resJSON.backdrop_path) + "')";
                        }
                        if (this.detailsTitle)
                            this.detailsTitle.innerText = resJSON.title;
                        if (this.detailsPoster)
                            this.detailsPoster.setAttribute('src', 'https://image.tmdb.org/t/p/w500/' + resJSON.poster_path);
                        if (this.detailsTag)
                            this.detailsTag.innerText = "" + (resJSON.tagline ? resJSON.tagline : 'Indisponível');
                        if (this.detailsPage)
                            this.detailsPage.innerText = "" + (resJSON.homepage ? resJSON.homepage : 'Indisponível');
                        if (this.detailsGen) {
                            text_1 = '';
                            resJSON.genres.forEach(function (genre, index) { return text_1 += genre.name + ("" + (index + 1 !== resJSON.genres.length ? ', ' : '.')); });
                            this.detailsGen.innerText = text_1;
                        }
                        if (this.detailsSinopse)
                            this.detailsSinopse.innerText = resJSON.overview;
                        if (this.detailsTrailer)
                            this.detailsTrailer.setAttribute('id', "" + (resJSON.videos.results.length > 0 ? resJSON.videos.results[0].key : ''));
                        if (this.containerDetailsFull)
                            this.containerDetailsFull.style.display = 'flex';
                        return [2];
                }
            });
        });
    };
    HandleClick.prototype.init = function () {
        if (this.movies && this.movies.length > 0 && this.containerDetailsFull && this.buttonCloseDetails) {
            this.addEvents();
            this.handleCloseDetails();
        }
        else
            throw new Error('Seletor inválido');
    };
    return HandleClick;
}());
exports.default = HandleClick;


/***/ }),

/***/ "./src/ts/handleIframe.ts":
/*!********************************!*\
  !*** ./src/ts/handleIframe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var HandleIframe = (function () {
    function HandleIframe(buttonOpen, buttonClose, containerWrapperFull) {
        this.buttonAnchorOpen = document.querySelector(buttonOpen);
        this.buttonClose = document.querySelector(buttonClose);
        this.wrapperFull = document.querySelector(containerWrapperFull);
        this.iframe = document.querySelector('iframe');
    }
    HandleIframe.prototype.handleOpen = function () {
        var _this = this;
        var _a;
        (_a = this.buttonAnchorOpen) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var _a, _b;
            var ID = (_a = _this.buttonAnchorOpen) === null || _a === void 0 ? void 0 : _a.getAttribute('id');
            (_b = _this.iframe) === null || _b === void 0 ? void 0 : _b.setAttribute('src', "//www.youtube.com/embed/" + (ID ? ID : 'xkvcuMjZwik') + "?autoplay=1&mute=1&origin=http://localhost&hl=pt&modestbranding=1&fs=1&autohide=1");
            if (_this.wrapperFull)
                _this.wrapperFull.style.display = 'flex';
        });
    };
    HandleIframe.prototype.handleClose = function () {
        var _this = this;
        var _a;
        (_a = this.buttonClose) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var _a;
            if (_this.wrapperFull)
                _this.wrapperFull.style.display = 'none';
            (_a = _this.iframe) === null || _a === void 0 ? void 0 : _a.setAttribute('src', "//www.youtube.com/embed/xkvcuMjZwik?origin=http://localhost&hl=pt&modestbranding=1&fs=1&autohide=1");
        });
    };
    HandleIframe.prototype.init = function () {
        this.handleOpen();
        this.handleClose();
    };
    return HandleIframe;
}());
exports.default = HandleIframe;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var addListMovies_1 = __importDefault(__webpack_require__(/*! ./addListMovies */ "./src/ts/addListMovies.ts"));
var handleClickMovies_1 = __importDefault(__webpack_require__(/*! ./handleClickMovies */ "./src/ts/handleClickMovies.ts"));
var handleIframe_1 = __importDefault(__webpack_require__(/*! ./handleIframe */ "./src/ts/handleIframe.ts"));
var handleArrowUp_1 = __importDefault(__webpack_require__(/*! ./handleArrowUp */ "./src/ts/handleArrowUp.ts"));
var sectionFiccao = new addListMovies_1.default('.ficcao', 878).init();
var sectionComedia = new addListMovies_1.default('.comedia', 35).init();
var sectionDrama = new addListMovies_1.default('.drama', 18).init();
var sectionMisterio = new addListMovies_1.default('.misterio', 9648).init();
var sectionAventura = new addListMovies_1.default('.aventura', 12).init();
var sectionAnimacao = new addListMovies_1.default('.crime', 80).init();
var isReady = new MutationObserver(function (mutations) {
    if (mutations.length === 20) {
        var clickEvents = new handleClickMovies_1.default('.conteudo-item', '.details', '.close').init();
        isReady.disconnect();
    }
});
isReady.observe(document.querySelector('.crime'), {
    childList: true
});
var iframe = new handleIframe_1.default('.details-trailer', '.close-iframe', '.videoWrapper-full').init();
var arrowUp = new handleArrowUp_1.default('.arrow_up').init();


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map