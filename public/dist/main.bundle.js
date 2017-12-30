webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 500px;\n  height: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_my_story_my_story_component__ = __webpack_require__("../../../../../src/app/home/my-story/my-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_projects_projects_component__ = __webpack_require__("../../../../../src/app/home/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_skills_skills_component__ = __webpack_require__("../../../../../src/app/home/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_awards_awards_component__ = __webpack_require__("../../../../../src/app/home/awards/awards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_hobbies_hobbies_component__ = __webpack_require__("../../../../../src/app/home/hobbies/hobbies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_landing_landing_component__ = __webpack_require__("../../../../../src/app/home/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_my_story_my_story_component__["a" /* MyStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_awards_awards_component__["a" /* AwardsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_hobbies_hobbies_component__["a" /* HobbiesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_landing_landing_component__["a" /* LandingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll__["a" /* Ng2PageScrollModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/awards/awards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n font-family: sans-serif;\n text-align: center;\n text-shadow: 2px 2px gray;\n color: #9900ff;\n}\n\n.card-title {\n  text-align: center;\n  margin-bottom: 0;\n}\nh3 {\n  margin-top: 0px;\n  color: #9900ff;\n}\n.group{\n  width: 550px;\n  height: 350px;\n}\n.icons{\n  width: 200px;\n  height: 200px;\n}\nimg {\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/awards/awards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conatiner\">\n  <h1>AWARDS</h1>\n  <div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">First Place Award</h2>\n        <h3 class=\"card-title\">Pyhton Hackaton</h3>\n          <img class=\"group\" src=\"assets/group1.png\" alt=\"\">\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">First Place Award</h2>\n        <h3 class=\"card-title\">iOS Hackaton</h3>\n        <img class=\"group\" src=\"assets/iOSprize.jpg\" alt=\"\">\n\n        <!-- <img class=\"icons\" src=\"assets/iOSBelt.jpg\" alt=\"\">\n        <img class=\"icons\" src=\"assets/meanBelt.png\" alt=\"\"> -->\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">Triple Black Student</h2>\n        <h3 class=\"card-title\">Coding Dojo</h3>\n        <img class=\"group\"src=\"assets/tripleBelt.png\" alt=\"\">\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">Google Recognition</h2>\n        <h3 class=\"card-title\">SmallBizHack</h3>\n          <img class=\"group\" src=\"assets/googleHome.jpg\" alt=\"\">\n\n      </div>\n    </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/awards/awards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AwardsComponent = (function () {
    function AwardsComponent() {
    }
    AwardsComponent.prototype.ngOnInit = function () {
    };
    return AwardsComponent;
}());
AwardsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-awards',
        template: __webpack_require__("../../../../../src/app/home/awards/awards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/awards/awards.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AwardsComponent);

//# sourceMappingURL=awards.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/dreaming.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dreaming.a520985c87ae51e14494.jpg";

/***/ }),

/***/ "../../../../../src/app/home/hobbie.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hobbie.64d2bb1d76f8b1d783eb.jpg";

/***/ }),

/***/ "../../../../../src/app/home/hobbies/hobbies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n font-family: sans-serif;\n text-align: center;\n text-shadow: 2px 2px gray;\n color: #9900ff;\n}\n\nh2 {\n  font-family: sans-serif;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.sports-img2{\n  margin-left: 80px;\n  width: 500px;\n  height: 550px;\n}\n.sports-img {\n  width: 500px;\n  height: 550px;\n  margin-left: 8px;\n}\n.hackathon-img2 {\n  width: 500px;\n  height: 300px;\n  margin-left: 80px;\n\n}\n.hackathon-img {\n  margin-left: 8px;\n  width: 500px;\n  height: 300px;\n}\np {\n  font-size: 17px;\n}\n\n/*.container{\n  border: 1px solid black;\n}*/\n.icons {\n  width: 50px;\n  height: 50px;\n  /*background-color:lightgrey;*/\n}\na {\n  color: #9900ff;\n  font-size: 16px;\n  font-weight: bold;\n}\nfooter {\n  padding-top: 30px;\n  border-top: 2px solid gray;\n}\n.row {\n  padding: 20px;\n  padding-bottom: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/hobbies/hobbies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>HOBBIES</h1>\n  <p>On Weekend you either can find me  at the tennis court, running, or skiing, and if I am not there It means I'm cracking code in at  new hackathon</p>\n  <p></p>\n  <h2>Sports Lover</h2>\n  <img class=\"sports-img\" src=\"assets/tennis.png\" alt=\"\">\n  <img class=\"sports-img2\"src=\"assets/ski.png\" alt=\"\">\n  <h2>Hackathon Lover</h2>\n  <img class=\"hackathon-img\"src=\"assets/VRhack.jpg\" alt=\"\">\n  <img class=\"hackathon-img2\"src=\"assets/smallhack.jpg\" alt=\"\">\n</div>\n<footer class=\"container-fluid bg-4 text-center\">\n    <h4>&copy; Copyright 2017 Liseth Cardozo Sejas</h4>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm\">\n      <img  class=\"icons img-circle\" src=\"assets/resume.png\" alt=\"\">\n        <a href=\"assets/LisethCardozoResume.pdf\">Resume</a>\n    </div>\n    <div class=\"col-sm\">\n       <img  class=\"icons img-circle\" src=\"assets/email.png\" alt=\"\">\n       <a href=\"mailto:cardzoliseth@gmail.com\">Email</a>\n    </div>\n    <div class=\"col-sm\">\n       <img  class=\"icons img-circle\" src=\"assets/linkedIn.png\" alt=\"\">\n         <a href=\"https://www.linkedin.com/in/liseth-cardozo/\">LinkedIn</a>\n    </div>\n    <div class=\"col-sm\">\n      <img  class=\"icons img-circle\" src=\"assets/github1.png\" alt=\"\">\n        <a href=\"https://github.com/SmartBunnyLis\">GitHub</a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/home/hobbies/hobbies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HobbiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HobbiesComponent = (function () {
    function HobbiesComponent() {
    }
    HobbiesComponent.prototype.ngOnInit = function () {
    };
    return HobbiesComponent;
}());
HobbiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hobbies',
        template: __webpack_require__("../../../../../src/app/home/hobbies/hobbies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/hobbies/hobbies.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HobbiesComponent);

//# sourceMappingURL=hobbies.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul, li, a {\n  display: inline-block;\n  color: black;\n}\n\n.navbar-default {\n  border-color:  #C7CAD2;\n}\n.navbar-default .navbar-nav>.active>a {\n  background-color:#f8f8f8;\n  color: black;\n}\n\n.navbar-brand span{\n  font-family: \"Dancing Script\";\n  \tfont-size: 35px;\n  \tfont-style: normal;\n  \tfont-variant: normal;\n  \tline-height: 26.4px;\n    color: #9900ff;\n\n}\n\n/* this is format the header links*/\na {\n  color: black;\n  font-size: 16px;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n#span{\n    padding-left: 110px;\n}\n\n.parallax {\n  margin-top: 50px;\n    /* The image used */\n    background-image: url(" + __webpack_require__("../../../../../src/app/home/project.jpg") + ");\n\n    /* Set a specific height */\n    min-height: 200px;\n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.break {\n  color: #9900ff;\n  text-align: left;\n  padding-left: 50px;\n  margin-top: 20px;\n  font-weight: bold;\n}\n\n.parallax-skills {\n  margin-top: 50px;\n    /* The image used */\n    background-image: url(" + __webpack_require__("../../../../../src/app/home/skills.jpg") + ");\n\n    /* Set a specific height */\n    min-height: 200px;\n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.parallax-awards {\n  margin-top: 50px;\n    /* The image used */\n    background-image: url(" + __webpack_require__("../../../../../src/app/home/dreaming.jpg") + ");\n\n    /* Set a specific height */\n    min-height: 200px;\n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.parallax-hobbies {\n  margin-top: 50px;\n    /* The image used */\n    background-image: url(" + __webpack_require__("../../../../../src/app/home/hobbie.jpg") + ");\n\n    /* Set a specific height */\n    min-height: 200px;\n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n/*.break {\n  text-shadow:\n}*/\n/*div.header div.container-fluid {\n  width: 2000px;\n  height: 1000px;\n    border-top: 2px solid black;\n    background-image: url(\"landing.png\");\n    background-repeat: no-repeat, repeat;\n}*/\n\n.break{\n /*font-family: sans-serif;*/\n /*text-align: center;*/\n padding-top: 40px;\n font-size: 50px;\n  text-shadow: 2px 2px gray;\n color: #9900ff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>My Personal Portfolio</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Dancing+Script\" />\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<body style=\"height:1500px\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n     <div class=\"navbar-header\">\n       <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar3\">\n         <span class=\"sr-only\">Toggle navigation</span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n       </button>\n       <a class=\"navbar-brand\" href=\"#\">\n         <span>Liseth Cardozo Sejas</span>\n       </a>\n     </div>\n     <div id=\"navbar3\" class=\"navbar-collapse collapse\">\n       <ul class=\"nav navbar-nav navbar-right\">\n         <li class=\"active\"><a  href=\"#\">My Story</a></li>\n         <li><a pageScroll href=\"#project\">Projects</a></li>\n         <li><a pageScroll href=\"#skills\">Skills</a></li>\n         <li><a pageScroll  href=\"#awards\">Awards</a></li>\n         <li><a pageScroll  href=\"#hobbies\">Hobbies</a></li>\n       </ul>\n     </div>\n     <!--/.nav-collapse -->\n   </div>\n    <!-- <div class=\"container header\">\n      <ul>\n        <img id=\"logo\" alt=\"\" src=\"/assets/logo.png\" >\n        <li  class=\"active\"><a  id=\"span\" pageScroll href=\"#story\">My Story</a></li>\n        <li  class=\"active\"><a pageScroll href=\"#project\">Projects</a></li>\n        <li  class=\"active\"><a pageScroll href=\"#skills\">Skills</a></li>\n        <li  class=\"active\"><a pageScroll  href=\"#awards\">Awards</a></li>\n        <li  class=\"active\"><a pageScroll  href=\"#hobbies\">Hobbies</a></li>\n      </ul>\n    </div> -->\n  </nav>\n\n\n\n\n<div class=\"container-fluid\" style=\"margin-top:40px\">\n  <div class=\"container\">\n    <app-my-story></app-my-story>\n  </div>\n  <p id=\"project\"></p>\n  <div class=\"parallax\">\n  </div>\n  <div class=\"container\">\n    <app-projects> </app-projects>\n  </div>\n\n  <p id=\"skills\"></p>\n  <div class=\"parallax-skills\">\n  </div>\n  <div class=\"container\">\n    <app-skills> </app-skills>\n  </div>\n\n  <p id=\"awards\"></p>\n  <div class=\"parallax-awards\">\n  </div>\n  <div class=\"container\">\n    <app-awards> </app-awards>\n  </div>\n\n  <p id=\"hobbies\"></p>\n  <div class=\"parallax-hobbies\">\n  </div>\n  <div class=\"container\">\n    <app-hobbies> </app-hobbies>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) { _this.fragment = fragment; });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) { }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/*.container-fluid  {\n  width: 200px;\n  height: 200px;\n  background: url(\"landing.png\") center center cover no-repeat fixed;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/home/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/home/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/my-story/my-story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parallax {\n    /* The image used */\n    /*background-image: url(\"email.png\");*/\n\n    /* Set a specific height */\n    min-height: 500px;\n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.profile-img, .story, .container{\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 50px;\n}\n\n.story {\n  margin-left: 50px;\n  width: 700px;\n}\n\nh1{\n font-family: sans-serif;\n text-align: center;\n text-shadow: 2px 2px gray;\n color: #9900ff;\n}\n\np {\n  line-height: 30px;\n  font-size: 18px;\n}\n.icons {\n  width: 50px;\n  height: 50px;\n  /*background-color:lightgrey;*/\n}\na {\n  color: #9900ff;\n  font-size: 16px;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/my-story/my-story.component.html":
/***/ (function(module, exports) {

module.exports = "<p id=\"story\"></p>\n<div class=\"container\">\n  <h1>MY STORY</h1>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n      <img class=\"img-responsive\" src=\"assets/profile.png\" alt=\"\">\n  </div>\n  <div class=\"col-lg-8\">\n\n    <p>I am a self-taught Software Engineer, who fell in love with coding the moment I solved my first algorithm.\n      I’m a tech knowledge seeker, and I learned 3 full technology stacks within 3 months. I come from a non traditional coding background and I have a diverse background. I studied Chemical Engineering, marketing, business, and accounting in order to find my true passion, and I'm happy I finally discovered it \"Coding\"!\n       </p>\n       <p>If you are interested in learning more, feel free to get in touch with me:</p>\n       <div class=\"row\">\n         <div class=\"col-sm\">\n           <img  class=\"icons img-circle\" src=\"assets/resume.png\" alt=\"\">\n             <a href=\"assets/LisethCardozoResume.pdf\">Resume</a>\n         </div>\n         <div class=\"col-sm\">\n            <img  class=\"icons img-circle\" src=\"assets/email.png\" alt=\"\">\n            <a href=\"mailto:cardzoliseth@gmail.com\">Email</a>\n         </div>\n         <div class=\"col-sm\">\n            <img  class=\"icons img-circle\" src=\"assets/linkedIn.png\" alt=\"\">\n              <a href=\"https://www.linkedin.com/in/liseth-cardozo/\">LinkedIn</a>\n         </div>\n         <div class=\"col-sm\">\n           <img  class=\"icons img-circle\" src=\"assets/github1.png\" alt=\"\">\n             <a href=\"https://github.com/SmartBunnyLis\">GitHub</a>\n         </div>\n       </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/my-story/my-story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyStoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyStoryComponent = (function () {
    function MyStoryComponent() {
    }
    MyStoryComponent.prototype.ngOnInit = function () {
    };
    return MyStoryComponent;
}());
MyStoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-story',
        template: __webpack_require__("../../../../../src/app/home/my-story/my-story.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/my-story/my-story.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MyStoryComponent);

//# sourceMappingURL=my-story.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/project.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "project.682555c63d0a040b4cff.jpg";

/***/ }),

/***/ "../../../../../src/app/home/projects/next.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "next.5ca143e4b71455e24315.png";

/***/ }),

/***/ "../../../../../src/app/home/projects/prev.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "prev.2345bf417edc6a63c411.png";

/***/ }),

/***/ "../../../../../src/app/home/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%;\n  height: 100%;\n}\n.left-div\n{\n  display: inline-block;\n  width: 797px;\n  vertical-align: top;\n}\n.right-div\n{\n  display: inline-block;\n  max-width: 310px;\n  text-align: left;\n  padding: 10px 17px 10px 17px;\n}\n@media screen and (max-width: 600px)\n{\n  .left-div, .right-div\n  {\n    max-width: 100%;\n  }\n}\n\n.container {\n  margin-top: 20px;\n  padding: 5px;\n}\n.projects-list {\n  margin-top: 30px;\n}\n p {\n  font-size: 16px;\n  margin-bottom: 0;\n }\n h1{\n  font-family: sans-serif;\n  text-align: center;\n  text-shadow: 2px 2px gray;\n  color: #9900ff;\n }\n.icons {\n  width: 70px;\n  height: 70px;\n}\n.icons1 {\n  width: 50px;\n  height: 50px;\n}\n.icons3 {\n  width: 60px;\n  height: 60px;\n}\n.icons2 {\n  width: 80px;\n  height: 55px;\n}\n#material {\n  margin:0 10px 0 30px;\n}\n#google-icon {\n  margin-right: 10px;\n}\n.title {\n  margin-top: 0;\n  color: #9900ff;\n}\nh5 {\n  font-weight: bold;\n}\n.tech {\n  padding-bottom: 10px;\n}\n#concepts{\n  margin: 0;\n  text-align: center;\n}\n#kitties {\n  margin: 0;\n  padding-left: 30px;\n}\n.smart {\n  font-size: 14px;\n}\n.smart-li{\n  font-size: 12px;\n}\n.alarm-li{\n  font-size: 13px;\n}\n\n.alarm-p {\n    font-size: 15px;\n}\n\n.more-info{\n  padding-right: 40px;\n  font-size: 16px;\n  color:  #9900ff;\n}\n.info {\n  margin-top: 3px;\n}\n.carousel-control-prev-icon{\n  background-image: url(" + __webpack_require__("../../../../../src/app/home/projects/next.png") + ");\n  width: 20px;\n  height: 15px;\n}\n.carousel-control-next-icon{\n  background-image: url(" + __webpack_require__("../../../../../src/app/home/projects/prev.png") + ");\n  width: 20px;\n  height: 15px;\n}\n\n.carousel-indicators li {\n  box-shadow: 1px 1px 3px grey;\n}\n\n.carousel-indicators .active {\n    background-color: #9900ff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title>Projects</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n\n<body>\n  <h1>PROJECTS</h1>\n  <div class=\"container\">\n    <div class=\"left-div\">\n      <div id=\"smartList\" class=\"carousel slide\" data-ride=\"carousel\">\n\n        <!-- Indicators -->\n        <ul class=\"carousel-indicators\">\n          <li data-target=\"#smartList\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#smartList\" data-slide-to=\"1\"></li>\n          <li data-target=\"#smartList\" data-slide-to=\"2\"></li>\n        </ul>\n\n        <!-- The slideshow -->\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src=\"assets/smartList1.png\" alt=\"SmartList Project\">\n\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"assets/smartList2.png\"  alt=\"SmartList Project\" >\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"assets/smartList3.png\"  alt=\"SmartList Project\">\n          </div>\n        </div>\n\n        <!-- Left and right controls -->\n        <a class=\"carousel-control-prev\" href=\"#smartList\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#smartList\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\"></span>\n        </a>\n\n      </div>\n    </div>\n\n    <div  class=\"right-div right-text\">\n      <h4 class=\"title\">SMARTLIST</h4>\n      <h5>Python Hackaton - First Place Award</h5>\n      <p class=\"smart\"> Web application that helps users to keep track of theirs tasks in a SMART way.</p>\n      <p class=\"smart\">Team of 3; I implemented the backend, database, and Google API.</p>\n      <h5>WHAT I LEARNED:</h5>\n      <ul class=\"smart-li\">\n        <li>OOP Design</li>\n        <li>RESTful API</li>\n        <li>HTTP Protocol</li>\n        <li>Integration of Backend and Database</li>\n        <li>Django ORMs</li>\n        <li>Use Google API</li>\n      </ul>\n      <h5>CHALLENGES:</h5>\n      <ul class=\"smart-li\">\n        <li>Inplememt Facebook OAuth.</li>\n      </ul>\n      <h5>TECHNOLOGIES:</h5>\n      <img class=\"icons1\" src=\"assets/icons/HTML.png\" alt=\"\">\n      <img class=\"icons1\" src=\"assets/icons/CSS.png\" alt=\"\">\n      <img class=\"icons1\" src=\"assets/icons/JavaScript.png\" alt=\"\">\n      <img class=\"icons1\" src=\"assets/icons/python.png\" alt=\"\">\n      <img class=\"icons1\" src=\"assets/icons/django.png\" alt=\"\">\n      <img id =\"material\" class=\"icons1\" src=\"assets/icons/materialize.png\" alt=\"\">\n      <img id=\"google-icon\" class=\"icons2\" src=\"assets/google.png\" alt=\"\">\n      <img class=\"icons1\" src=\"assets/icons/mysql.png\" alt=\"\">\n      <div class=\"info\">\n        <a class =\"more-info\" href=\"https://www.youtube.com/watch?v=PWZoVjEnCrc&feature=youtu.be\"> #Video-Demo</a>\n        <a  class =\"more-info\" href=\"https://github.com/SmartBunnyLis/SmartList_App\">#GitHub</a>\n      </div>\n    </div>\n  </div>\n  <!--Algo Alarm Carousel  -->\n  <div class=\"container\">\n    <div class=\"left-div\">\n      <div id=\"algoAlarm\" class=\"carousel slide\" data-ride=\"carousel\">\n\n        <!-- Indicators -->\n        <ul class=\"carousel-indicators\">\n          <li data-target=\"#algoAlarm\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#algoAlarm\" data-slide-to=\"1\"></li>\n          <li data-target=\"#algoAlarm\" data-slide-to=\"2\"></li>\n        </ul>\n\n        <!-- The slideshow -->\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img  class=\"img-responsive\" src=\"assets/algoAlarm1.png\" alt=\"New York\">\n\n          </div>\n          <div class=\"carousel-item\">\n            <img  class=\"img-responsive\" src=\"assets/algoAlarm2.png\"  alt=\"Chicago\">\n          </div>\n          <div class=\"carousel-item\">\n            <img  class=\"img-responsive\" src=\"assets/algoAlarm3.png\"  alt=\"Los Angeles\">\n          </div>\n        </div>\n\n        <!-- Left and right controls -->\n        <a class=\"carousel-control-prev\" href=\"#algoAlarm\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#algoAlarm\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\"></span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"right-div\">\n      <h4 class=\"title\">ALGOALARM</h4>\n      <h5>iOS Hackaton- First Place Award</h5>\n      <p class=\"alarm-p\">iPhone App; A unique alarm that forces you to wake up.</p>\n      <p class=\"alarm-p\">Team of 4; I implemented Core Motion Framework and User Interface</p>\n\n      <h5>WHAT I LEARNED:</h5>\n      <ul class=\"alarm-li\">\n        <li>iOS Development</li>\n        <li>CoreMotion FrameWork</li>\n        <li>Fundeamentals of Swift</li>\n        <li>User Interface</li>\n        <li>Implement AVFoundation</li>\n        <li>Debbuging Code</li>\n      </ul>\n      <h5>CHALLENGES:</h5>\n      <ul class=\"alarm-li\">\n        <li>Implement a new Framework</li>\n        <li>Built an App in less than 24 hrs</li>\n      </ul>\n      <h5 class=\"tech\">TECHNOLOGIES:</h5>\n      <img class=\"icons3\" src=\"assets/xcode.png\" alt=\"\">\n      <img class=\"icons3\" src=\"assets/icons/iOS_Swift.png\" alt=\"\">\n      <img class=\"icons3\" src=\"assets/coreMotion.png\" alt=\"\">\n      <img class=\"icons3\" src=\"assets/iOS.png\" alt=\"\">\n      <div class=\"info\">\n        <a class =\"more-info\" href=\"https://www.youtube.com/watch?v=PWZoVjEnCrc&feature=youtu.be\"> #Video-Demo</a>\n        <a  class =\"more-info\" href=\"https://github.com/SmartBunnyLis/AlgoAlarm-App\">#GitHub</a>\n      </div>\n    </div>\n  </div>\n  <!--Berries Carousel   -->\n  <div class=\"container\">\n    <div class=\"left-div\">\n  <div id=\"berries\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#berries\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#berries\" data-slide-to=\"1\"></li>\n      <li data-target=\"#berries\" data-slide-to=\"2\"></li>\n    </ul>\n\n    <!-- The slideshow -->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"assets/berries1.png\" alt=\"\">\n\n      </div>\n      <div class=\"carousel-item\">\n        <img  src=\"assets/berries2.png\"  alt=\"\">\n      </div>\n      <div class=\"carousel-item\">\n      <img src=\"assets/berries3.png\"  alt=\"\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#berries\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#berries\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n\n  </div>\n</div>\n<div class=\"right-div\">\n  <h4 class=\"title\">BARRIE'S BARRIES</h4>\n  <h5>iOS Hackaton- First Place Award</h5>\n  <p class=\"alarm-p\">iPhone App; A Fun Game for kids. Perfect for road trips, and avoid listening are we there yet?</p>\n  <p class=\"alarm-p\">Team of 4; I implented mapKit framework, MKMapView, UI Controllers</p>\n  <h5>WHAT I LEARNED:</h5>\n  <ul class=\"alarm-li\">\n    <li>iOS Development </li>\n    <li>mapKit framework Integration </li>\n    <li>Annotations and Overlays</li>\n    <li>OOP Design </li>\n    <li>Synchronize functions</li>\n  </ul>\n  <h5>CHALLENGES:</h5>\n  <ul class=\"alarm-li\">\n    <li>Costumize annotations</li>\n    <li>No sleep for 24hr</li>\n  </ul>\n  <h5 class=\"tech\">TECHNOLOGIES:</h5>\n  <img class=\"icons3\" src=\"assets/xcode.png\" alt=\"\">\n  <img class=\"icons3\" src=\"assets/mapkit.png\" alt=\"\">\n  <img class=\"icons3\" src=\"assets/icons/iOS_Swift.png\" alt=\"\">\n  <img class=\"icons3\" src=\"assets/iOS.png\" alt=\"\">\n  <div class=\"info\">\n    <a class =\"more-info\" href=\"https://www.youtube.com/watch?v=PWZoVjEnCrc&feature=youtu.be\">#Video-Demo</a>\n    <a  class =\"more-info\" href=\"https://github.com/SmartBunnyLis/Barry-Berries-App\">#GitHub</a>\n  </div>\n</div>\n\n</div>\n<div class=\"container\">\n  <div class=\"left-div\">\n    <div id=\"clone-pages\" class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#clone-pages\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#clone-pages\" data-slide-to=\"1\"></li>\n        <li data-target=\"#clone-pages\" data-slide-to=\"2\"></li>\n        <li data-target=\"#clone-pages\" data-slide-to=\"3\"></li>\n        <li data-target=\"#clone-pages\" data-slide-to=\"4\"></li>\n        <li data-target=\"#clone-pages\" data-slide-to=\"5\"></li>\n        <li data-target=\"#clone-pages\" data-slide-to=\"6\"></li>\n        <li data-target=\"#clone-pages\" data-slide-to=\"7\"></li>\n        <li data-target=\"#clone-pages\" data-slide-to=\"8\"></li>\n      </ul>\n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"assets/pythonWeb2.png\" alt=\"New York\">\n        </div>\n        <div class=\"carousel-item\">\n          <img  src=\"assets/pythonWeb1.png\"  alt=\"Chicago\">\n        </div>\n        <div class=\"carousel-item\">\n        <img src=\"assets/pythonWeb4.png\"  alt=\"Los Angeles\">\n      </div>\n      <div class=\"carousel-item\">\n      <img  src=\"assets/internetWeb6.png\"  alt=\"Chicago\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/internet2.png\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n    <img src=\"assets/internetWeb7.png\"  alt=\"Los Angeles\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/django8.png\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n    <img src=\"assets/django7.png\"  alt=\"Los Angeles\">\n    </div>\n    <div class=\"carousel-item\">\n      <img  src=\"assets/django6.png\"  alt=\"Chicago\">\n    </div>\n      </div>\n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#clone-pages\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#clone-pages\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n\n    </div>\n  </div>\n  <div class=\"right-div\">\n    <h4 class=\"title\"> STATIC PAGES CLONE</h4>\n    <p>Applied HTML and CSS fundamental</p>\n    <p id=\"concepts\">concepts</p>\n    <h5>WHAT I LEARNED:</h5>\n    <ul>\n      <li>HTML PCS Relationship</li>\n      <li>Common Tags Used</li>\n      <li>CSS Basic Selectors</li>\n      <li>Undertanding Values and Units</li>\n      <li>Position Property</li>\n      <li>Box Model</li>\n      <li>Lego Concept</li>\n    </ul>\n    <h5>CHALLENGES:</h5>\n    <ul>\n      <li>Positioning object proportionally</li>\n    </ul>\n    <h5 class=\"tech\">TECHNOLOGIES:</h5>\n    <img class=\"icons\" src=\"assets/icons/HTML.png\" alt=\"\">\n    <img class=\"icons\" src=\"assets/icons/CSS.png\" alt=\"\">\n    <div class=\"info\">\n      <a  class =\"more-info\" href=\"https://github.com/SmartBunnyLis/Python-Page\">#GitHub</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"left-div\">\n    <div id=\"kitties\" class=\"carousel slide\" data-ride=\"carousel\">\n\n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#kitties\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#kitties\" data-slide-to=\"1\"></li>\n        <li data-target=\"#kitties\" data-slide-to=\"2\"></li>\n      </ul>\n\n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"assets/kitties6.png\" alt=\"kitties\">\n\n        </div>\n        <div class=\"carousel-item\">\n          <img  src=\"assets/kitties8.png\"  alt=\"kitties\">\n        </div>\n        <div class=\"carousel-item\">\n        <img src=\"assets/kitties7.png\"  alt=\"kitties\">\n        </div>\n      </div>\n\n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#kitties\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#kitties\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n\n    </div>\n  </div>\n  <div class=\"right-div\">\n    <h4 class=\"title\">CUTE KITTY BLOCKS</h4>\n    <p>Applied HTML, CSS, Bootstrap</p>\n    <p id=\"kitties\">fundamental concepts</p>\n    <h5>WHAT I LEARNED:</h5>\n    <ul>\n      <li>Box Model</li>\n      <li>CSS Grid</li>\n      <li>Images Layouts</li>\n      <li>Responsive Design</li>\n      <li>Position Property</li>\n      <li>Attention to Detail</li>\n      <li>Custumize Design</li>\n    </ul>\n    <h5>Challenges:</h5>\n    <ul>\n      <li>Making the website responsive</li>\n    </ul>\n\n    <h5 class=\"tech\">TECHNOLOGIES:</h5>\n    <img class=\"icons\" src=\"assets/icons/HTML.png\" alt=\"\">\n    <img class=\"icons\" src=\"assets/icons/CSS.png\" alt=\"\">\n    <img class=\"icons\" src=\"assets/icons/bootstrap.png\" alt=\"\">\n    <div class=\"info\">\n      <a  class =\"more-info\" href=\"https://github.com/SmartBunnyLis/kitty-display-project\">#GitHub</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"left-div\">\n    <div id=\"pacman\" class=\"carousel slide\" data-ride=\"carousel\">\n\n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#pacman\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#pacman\" data-slide-to=\"1\"></li>\n        <li data-target=\"#pacman\" data-slide-to=\"2\"></li>\n      </ul>\n\n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"assets/pacman3.png\" alt=\"Pacman Game\">\n\n        </div>\n        <div class=\"carousel-item\">\n          <img  src=\"assets/pacman2.png\"  alt=\"Pacman Game\">\n        </div>\n        <div class=\"carousel-item\">\n        <img src=\"assets/pacman1.png\"  alt=\"Pacman Game\">\n        </div>\n      </div>\n\n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#pacman\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#pacman\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n\n    </div>\n  </div>\n  <div class=\"right-div\">\n    <h4 class=\"title\">MY VERSION OF PACMAN</h4>\n    <p>My first game I ever built with JS</p>\n    <h5>WHAT I LEARNED:</h5>\n    <ul>\n      <li>JavaScript fundamentals</li>\n      <li>Manipulation of the DOM</li>\n      <li>Implement Game Logic</li>\n      <li>Debugging JS Code</li>\n      <li>Math Library</li>\n    </ul>\n    <h5>CHALLENGES:</h5>\n    <ul>\n      <li>Stop playing the game.</li>\n      <li>Gaming can be addicted.</li>\n    </ul>\n    <h5 class=\"tech\">TECHNOLOGIES:</h5>\n    <img class=\"icons\" src=\"assets/icons/HTML.png\" alt=\"\">\n    <img class=\"icons\" src=\"assets/icons/CSS.png\" alt=\"\">\n    <img class=\"icons\" src=\"assets/icons/JavaScript.png\" alt=\"\">\n    <div class=\"info\">\n      <a class =\"more-info\" href=\"https://www.youtube.com/watch?v=PWZoVjEnCrc&feature=youtu.be\"> #Video-Demo</a>\n      <a  class =\"more-info\" href=\"https://github.com/SmartBunnyLis/Pacman-Game\">#GitHub</a>\n    </div>\n  </div>\n</div>\n\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/home/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/home/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/skills.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "skills.1fddb9f308e7aea3413c.jpg";

/***/ }),

/***/ "../../../../../src/app/home/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projec-list {\n  margin-top: 30px;\n}\nh1{\n font-family: sans-serif;\n text-align: center;\n text-shadow: 2px 2px gray;\n color: #9900ff;\n}\nh2 {\n  text-align: center;\n  color: #5c5757;\n}\n\n.languages, .backend, .front-end, .dataBase, .others{\n  height: 150px;\n  width: 1020px;\n}\n/*img {\n  margin-right: 30px;\n\n}*/\n\n.backend img, #amazon {\n  margin-right: 30px;\n}\n\n.dataBase img {\n  margin-right: 50px;\n}\n.front-end img {\n  margin-right: 50px;\n}\n.others img {\n  margin-right: 40px;\n}\n.languages img {\n  margin-right: 40px;\n}\n#javaScript {\n  margin-left: 45px;\n  margin-right: 60px;\n}\n#ruby, #bootstrap, #mongoDB, #iOS {\n  margin-right: 0;\n}\n\n#css {\n  margin-left: 21.3px;\n}\n\n\n#html, #django{\n  margin-left: 20px;\n}\n\n.logo {\n  display: inline-block;\n  width: 200px;\n}\n#postgresql{\n  margin-left: 25px;\n}\n#gitHub {\n  margin-left: 15px;\n}\n#git {\n  margin-right: 10px;\n}\n#restful {\n  margin-right: 18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>SKILLS</h1>\n<div class=\"\">\n  <div class=\"container languages\">\n    <img src=\"/assets/python.png\"   alt=\"\">\n    <img src=\"/assets/swift.png\"  alt=\"\">\n    <img id=\"javaScript\" src=\"/assets/JavaScript-logo.png\" alt=\"\">\n    <img src=\"/assets/typescript.png\" alt=\"\">\n    <img id=\"ruby\" src=\"/assets/ruby.png\" alt=\"\">\n  </div>\n  <div class=\"container front-end\">\n    <img id=\"html\" src=\"/assets/html.png\"  alt=\"\">\n    <img id=\"css\" src=\"/assets/css.png\" alt=\"\">\n    <img src=\"/assets/angular.png\"  alt=\"\">\n    <img src=\"/assets/materialize.png\" alt=\"\">\n    <img id=\"bootstrap\" src=\"/assets/bootstrap-logo.png\" alt=\"\">\n  </div>\n  <div class=\" container backend\">\n    <img src=\"/assets/node.png\" alt=\"\">\n    <img src=\"/assets/fire.png\" alt=\"\">\n    <img src=\"/assets/flask.png\" alt=\"\">\n    <img src=\"/assets/rails.png\" alt=\"\">\n    <img id=\"django\" src=\"/assets/django.png\" alt=\"\">\n  </div>\n  <div class=\" container dataBase\">\n    <img id=\"postgresql\" src=\"/assets/postgresql-logo.png\" alt=\"\">\n    <img src=\"/assets/mySQL.png\" alt=\"\">\n    <img src=\"/assets/squile.png\" alt=\"\">\n    <img id=\"mongoDB\" src=\"/assets/mongoDB.png\" alt=\"\">\n  </div>\n  <div class=\"container others\">\n    <img id=\"gitHub\" src=\"/assets/github.png\" alt=\"\">\n    <img id=\"amazon\" src=\"/assets/amazon.png\" alt=\"\">\n    <img id=\"restful\" src=\"/assets/restful.png\" alt=\"\">\n    <img id=\"git\"src=\"/assets/git.png\" alt=\"\">\n    <img id=\"iOS\" src=\"/assets/iOS.png\" alt=\"\">\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = (function () {
    function SkillsComponent(_router) {
        this._router = _router;
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skills',
        template: __webpack_require__("../../../../../src/app/home/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/skills/skills.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _a || Object])
], SkillsComponent);

var _a;
//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map