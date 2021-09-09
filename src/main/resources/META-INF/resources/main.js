(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LUCAMARTINELLI\workspace.MY-WORK\quizabulous\quizabulous\src\main\angular\quizabulous-ng\src\main.ts */"zUnb");


/***/ }),

/***/ "4is1":
/*!********************************************************************************************************************!*\
  !*** ./src/app/homepages/master-home/master-quest-carousel/master-carousel-view/master-carousel-view.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: MasterCarouselViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCarouselViewComponent", function() { return MasterCarouselViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "bold": a0 }; };
class MasterCarouselViewComponent {
    constructor() { }
    ngOnInit() {
    }
    isCorrect(id) {
        if (this.quest.correctAnswer === id)
            return true;
        return false;
    }
}
MasterCarouselViewComponent.ɵfac = function MasterCarouselViewComponent_Factory(t) { return new (t || MasterCarouselViewComponent)(); };
MasterCarouselViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterCarouselViewComponent, selectors: [["app-master-carousel-view"]], inputs: { quest: "quest" }, decls: 16, vars: 17, consts: [[1, "container"], [1, "question"], [1, "answers"], [3, "ngClass"]], template: function MasterCarouselViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quest.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isCorrect(1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quest.answer1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isCorrect(2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quest.answer2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isCorrect(3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quest.answer3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isCorrect(4)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quest.answer4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["div[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\r\n    font-family: NormalText;\r\n    font-size: 1em;\r\n}\r\n\r\n.bold[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.question[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n}\r\n\r\n.answers[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.answers[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    clear: both;\r\n    padding: 2px;\r\n    border-top: 1px solid black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1jYXJvdXNlbC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoibWFzdGVyLWNhcm91c2VsLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiwgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogTm9ybWFsVGV4dDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmFuc3dlcnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFuc3dlcnMgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "6Cfb":
/*!************************************************************************!*\
  !*** ./src/app/homepages/competitor-home/competitor-home.component.ts ***!
  \************************************************************************/
/*! exports provided: CompetitorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorHomeComponent", function() { return CompetitorHomeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _user_answer_to_user_answer_to_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-answer-to/user-answer-to.component */ "ukS/");





class CompetitorHomeComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.jwt = this.cookieMng.getCookie("user.jwt");
    }
    ngOnInit() {
        let getNameUrl = "/user-manager/get-name";
        if (window.location.port === "4200") {
            getNameUrl = "http://localhost/user-manager/get-name";
        }
        this.rest.sendGetRawText(getNameUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt,
            "Accept": "text/plain"
        })).subscribe(resp => {
            this.username = resp.body;
        }, err => {
            console.error(err);
        });
    }
    exit() {
        let confermation = window.confirm("Sei sicuro di uscire? Ci mancherai " + this.username + " :'(");
        if (confermation) {
            this.cookieMng.deleteCookie("user.jwt");
            window.location.href = "/";
        }
    }
}
CompetitorHomeComponent.ɵfac = function CompetitorHomeComponent_Factory(t) { return new (t || CompetitorHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
CompetitorHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompetitorHomeComponent, selectors: [["app-competitor-home"]], decls: 9, vars: 1, consts: [[1, "toolbar"], [1, "title"], [1, "exit-btn"], [3, "click"]], template: function CompetitorHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompetitorHomeComponent_Template_button_click_5_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-user-answer-to");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome ", ctx.username, "");
    } }, directives: [_user_answer_to_user_answer_to_component__WEBPACK_IMPORTED_MODULE_4__["UserAnswerToComponent"]], styles: [".toolbar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-flex;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    background-image: url(\"/assets/img/login-bg.jpg\");\r\n    background-repeat: repeat-x;\r\n    background-position: top;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-family: Title;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    margin: auto 10px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%] {\r\n\r\n    margin-left: auto;\r\n    padding-left: 5px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.exit-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    border: none;\r\n    background-color: rgba(120, 120, 120, 0.5);\r\n    padding: 0 10px;\r\n    transition: all 0.2s linear;\r\n}\r\n\r\n.exit-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    background-color: rgba(120, 120, 120);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBldGl0b3ItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlEQUFpRDtJQUNqRCwyQkFBMkI7SUFDM0Isd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDIiwiZmlsZSI6ImNvbXBldGl0b3ItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9sb2dpbi1iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbn1cclxuXHJcbi50b29sYmFyIGRpdixcclxuLnRvb2xiYXIgYnV0dG9uLFxyXG4udG9vbGJhciBsYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogVGl0bGU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4udG9vbGJhciAudGl0bGUge1xyXG4gICAgbWFyZ2luOiBhdXRvIDEwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi50b29sYmFyIC5leGl0LWJ0biB7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4uZXhpdC1idG4gYnV0dG9uIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIwLCAxMjAsIDEyMCwgMC41KTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxufVxyXG5cclxuLmV4aXQtYnRuIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjAsIDEyMCwgMTIwKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "A8sk":
/*!*********************************!*\
  !*** ./src/app/cookie-utils.ts ***!
  \*********************************/
/*! exports provided: CookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const COOKIE_CONSENT = 'allowed-cookie-banner';
const COOKIE_CONSENT_EXPIRE_DAYS = 180;
class CookieManager {
    constructor() {
        this.isConsented = false;
        this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    }
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    setCookie(name, value, expireDays, path = '') {
        let d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires = `expires=${d.toUTCString()}`;
        let cpath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
    consent(isConsent, e) {
        if (isConsent) {
            this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
        return this.isConsented;
    }
}
CookieManager.ɵfac = function CookieManager_Factory(t) { return new (t || CookieManager)(); };
CookieManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieManager, factory: CookieManager.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bwjg":
/*!*******************************************************************************************************!*\
  !*** ./src/app/homepages/competitor-home/user-answer-to/user-quest-form/user-quest-form.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserQuestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserQuestFormComponent", function() { return UserQuestFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class UserQuestFormComponent {
    constructor(rest) {
        this.rest = rest;
        this.answered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    submitAnswer() {
        if (!window.confirm("Hai selezionato la risposta " + this.answer + " confermi l'invio?")) {
            return;
        }
        let sendAnswerUrl = "/user/answer-to";
        if (window.location.port === "4200") {
            sendAnswerUrl = "http://localhost/user/answer-to";
        }
        this.rest.sendPost(sendAnswerUrl, this.answer, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt,
            "content-type": "text/plain"
        })).subscribe(() => {
            console.log("Risposta inviata");
            this.answered.emit(true);
        }, err => {
            if (err.status === 423) {
                alert("Mi dispiace, risposta nulla - tempo scaduto.\nIl master ha chiuso il poll.");
            }
            else {
                console.error(err);
            }
            this.answered.emit(true);
        });
    }
}
UserQuestFormComponent.ɵfac = function UserQuestFormComponent_Factory(t) { return new (t || UserQuestFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"])); };
UserQuestFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserQuestFormComponent, selectors: [["app-user-quest-form"]], inputs: { quest: "quest", jwt: "jwt" }, outputs: { answered: "answered" }, decls: 20, vars: 9, consts: [[1, "container"], [3, "ngSubmit"], [1, "quest-text"], [3, "innerHTML"], [1, "answer-options"], [1, "answer-option"], ["type", "radio", "name", "answer", "value", "1", 3, "ngModel", "ngModelChange"], ["for", "answer1", 3, "innerHTML"], ["type", "radio", "name", "answer", "value", "2", 3, "ngModel", "ngModelChange"], ["for", "answer2", 3, "innerHTML"], ["type", "radio", "name", "answer", "value", "3", 3, "ngModel", "ngModelChange"], ["for", "answer3", 3, "innerHTML"], ["type", "radio", "name", "answer", "value", "4", 3, "ngModel", "ngModelChange"], ["for", "answer4", 3, "innerHTML"], [1, "submit-btn"], ["type", "submit"]], template: function UserQuestFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserQuestFormComponent_Template_form_ngSubmit_1_listener() { return ctx.submitAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserQuestFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserQuestFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserQuestFormComponent_Template_input_ngModelChange_12_listener($event) { return ctx.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserQuestFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.answer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Invia risposta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.quest.question, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.quest.answer1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.quest.answer2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.quest.answer3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.answer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.quest.answer4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".quest-text[_ngcontent-%COMP%] {\r\n    margin: 5px 10px;\r\n    border: 2px solid grey;\r\n    padding: 2px;\r\n    text-align: justify;\r\n}\r\n\r\n.answer-options[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.answer-option[_ngcontent-%COMP%] {\r\n    clear: both;\r\n    width: calc(100% - 22px);\r\n    margin: 15px 10px;\r\n    padding: 1px;\r\n    border: 1px solid lightgray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcXVlc3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoidXNlci1xdWVzdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3QtdGV4dCB7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5hbnN3ZXItb3B0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmFuc3dlci1vcHRpb24ge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjJweCk7XHJcbiAgICBtYXJnaW46IDE1cHggMTBweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "E9uI":
/*!*********************************!*\
  !*** ./src/app/rest-service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RestService {
    constructor(http) {
        this.http = http;
    }
    sendPostRawText(url, body, headers) {
        // call
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendGetRawText(url, headers) {
        // call
        return this.http.get(url, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendPost(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'json'
        });
    }
    sendGet(url, headers) {
        return this.http.get(url, {
            headers,
            observe: 'response'
        });
    }
    getImage(url, headers) {
        return this.http.get(url, {
            headers,
            responseType: 'blob'
        });
    }
    sendGetBlob(url, headers) {
        // call
        return this.http.get(url, {
            headers,
            observe: 'response',
            responseType: 'blob'
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LPbs":
/*!************************************************************************************************************!*\
  !*** ./src/app/homepages/master-home/master-poll-mng/master-poll-results/master-poll-results.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MasterPollResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPollResultsComponent", function() { return MasterPollResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MasterPollResultsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1.value);
} }
class MasterPollResultsComponent {
    constructor() {
        this.resultMap = new Map();
    }
    ngOnInit() {
        const keys = Object.keys(this.pollResults);
        keys.forEach(k => {
            const v = this.pollResults[k];
            this.resultMap.set(k, v.toString());
        });
    }
}
MasterPollResultsComponent.ɵfac = function MasterPollResultsComponent_Factory(t) { return new (t || MasterPollResultsComponent)(); };
MasterPollResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterPollResultsComponent, selectors: [["app-master-poll-results"]], inputs: { pollResults: "pollResults" }, decls: 5, vars: 3, consts: [[1, "container"], ["class", "competitor-answers", 4, "ngFor", "ngForOf"], [1, "competitor-answers"], [1, "competitor-name"], [1, "competitor-answer"]], template: function MasterPollResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ultimo poll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MasterPollResultsComponent_div_3_Template, 6, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.resultMap));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: ["h3[_ngcontent-%COMP%] {\r\n    font-family: Subtitle;\r\n    font-size: 0.8em;\r\n}\r\n\r\n.competitor-answers[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border: 1px solid darkgray;\r\n    background-color: lightgray;\r\n    margin: 10px 0;\r\n}\r\n\r\n.competitor-answer[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1wb2xsLXJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJtYXN0ZXItcG9sbC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBmb250LWZhbWlseTogU3VidGl0bGU7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uY29tcGV0aXRvci1hbnN3ZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uY29tcGV0aXRvci1hbnN3ZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "Sr7X":
/*!************************************************************************************!*\
  !*** ./src/app/homepages/master-home/master-poll-mng/master-poll-mng.component.ts ***!
  \************************************************************************************/
/*! exports provided: MasterPollMngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPollMngComponent", function() { return MasterPollMngComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _master_poll_results_master_poll_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master-poll-results/master-poll-results.component */ "LPbs");







function MasterPollMngComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MasterPollMngComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.closeAndGetResults(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Chiudi il poll e vedi risultati");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MasterPollMngComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-master-poll-results", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pollResults", ctx_r1.pollResults);
} }
class MasterPollMngComponent {
    constructor(cookieMng, rest) {
        this.rest = rest;
        this.statusPoll = "Caricamento...";
        this.btnClicked = false;
        this.jwt = cookieMng.getCookie("user.jwt");
    }
    ngOnInit() {
        // Every 3 sec
        this.getStatusPoll();
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(3000);
        this.subscription = source.subscribe(() => this.getStatusPoll());
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getStatusPoll() {
        let statusPollUrl = "/user-manager/poll-status";
        if (window.location.port === "4200")
            statusPollUrl = "http://localhost/user-manager/poll-status";
        this.rest.sendGetRawText(statusPollUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt,
            "Accept": "text/plain"
        })).subscribe(resp => {
            if (resp.body === "Open")
                this.statusPoll = "Aperto";
            else if (resp.body === "Close")
                this.statusPoll = "Chiuso";
            else
                this.statusPoll = resp.body;
        }, err => {
            console.error(err);
        }, () => {
            this.btnClicked = false;
        });
    }
    closeAndGetResults() {
        this.btnClicked = true;
        this.pollResults = undefined;
        let closeAndResultsUrl = "/master/close-and-get-answers";
        if (window.location.port === "4200")
            closeAndResultsUrl = "http://localhost/master/close-and-get-answers";
        this.rest.sendGet(closeAndResultsUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt,
            "Accept": "application/json"
        })).subscribe(resp => {
            console.log(resp.body);
            this.pollResults = resp.body;
        }, err => {
            console.error(err);
        });
    }
}
MasterPollMngComponent.ɵfac = function MasterPollMngComponent_Factory(t) { return new (t || MasterPollMngComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_3__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"])); };
MasterPollMngComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MasterPollMngComponent, selectors: [["app-master-poll-mng"]], decls: 8, vars: 3, consts: [[1, "container"], [1, "poll-status"], [3, "innerHTML"], [1, "open-poll-section"], ["class", "close-poll", 4, "ngIf"], ["class", "poll-results", 4, "ngIf"], [1, "close-poll"], [3, "click"], [1, "poll-results"], [3, "pollResults"]], template: function MasterPollMngComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Status del poll: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MasterPollMngComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MasterPollMngComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.statusPoll, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.statusPoll === "Aperto" && !ctx.btnClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pollResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _master_poll_results_master_poll_results_component__WEBPACK_IMPORTED_MODULE_6__["MasterPollResultsComponent"]], styles: ["label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    font-family: Subtitle;\r\n    font-size: 0.9em;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    font-family: NormalText;\r\n    font-size: 1.5em;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    border: 2px dotted grey;\r\n    padding: 25px 0;\r\n    margin: 15px 0;\r\n}\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin: 10px 0;\r\n    width: 100%;\r\n}\r\n.close-poll[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 5px 0;\r\n    border: none;\r\n    background-color: rgb(180, 20, 20);\r\n    color: white;\r\n}\r\n.close-poll[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    background-color: rgb(90, 20, 20);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1wb2xsLW1uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6Im1hc3Rlci1wb2xsLW1uZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwsIHNwYW4sIGRpdiwgaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6IFN1YnRpdGxlO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IE5vcm1hbFRleHQ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCBncmV5O1xyXG4gICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZGl2IHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jbG9zZS1wb2xsIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMCwgMjApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2UtcG9sbCBidXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgMjAsIDIwKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie-utils */ "A8sk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logged-user/logged-user.component */ "x9oe");
/* harmony import */ var _home_login_home_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-login/home-login.component */ "W6tu");





function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logged-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(cookieMng) {
        this.cookieMng = cookieMng;
        this.cookieJWT = "";
        this.cookieJWT = this.cookieMng.getCookie('user.jwt');
    }
    getJWT() {
        return this.cookieJWT;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_1__["CookieManager"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getJWT());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getJWT());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_3__["LoggedUserComponent"], _home_login_home_login_component__WEBPACK_IMPORTED_MODULE_4__["HomeLoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W6tu":
/*!****************************************************!*\
  !*** ./src/app/home-login/home-login.component.ts ***!
  \****************************************************/
/*! exports provided: HomeLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLoginComponent", function() { return HomeLoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookie-utils */ "A8sk");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HomeLoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Server Error, Aia! sentite lo sviluppatore (scarso)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.serverErrorMsg);
} }
class HomeLoginComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.serverError = false;
        this.serverErrorMsg = null;
    }
    ngOnInit() {
    }
    submitLogin() {
        this.serverError = true;
        this.serverErrorMsg = null;
        let loginUrl = "/login";
        if (window.location.port === "4200")
            loginUrl = "http://localhost/login";
        this.rest.sendPostRawText(loginUrl, this.teamCode, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "content-type": "text/plain"
        })).subscribe(r => {
            console.log("Ok from login:" + r);
            this.cookieMng.setCookie('user.jwt', r.body, 1);
            window.location.href = "/";
        }, err => {
            this.error = err;
            if (err.status >= 500) {
                this.serverError = true;
                this.serverErrorMsg = err.message;
            }
        });
    }
    getError() {
        return this.error;
    }
}
HomeLoginComponent.ɵfac = function HomeLoginComponent_Factory(t) { return new (t || HomeLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
HomeLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeLoginComponent, selectors: [["app-home-login"]], decls: 9, vars: 2, consts: [[1, "container"], [1, "login-form", 3, "ngSubmit"], [1, "form-container"], ["for", "teamCode", 1, "form-title"], ["type", "text", "id", "teamCode", "name", "teamCode", 3, "ngModel", "ngModelChange"], ["type", "submit"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function HomeLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeLoginComponent_Template_form_ngSubmit_1_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Inserisci il codice partecipante");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeLoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.teamCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeLoginComponent_div_8_Template, 5, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.serverError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/img/login-bg.jpg\");\r\n    background-repeat: repeat;\r\n    height: 100vh\r\n}\r\n\r\n.form-title[_ngcontent-%COMP%] {\r\n    font-family: Title;\r\n    font-size: 2em;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top:10%; \r\n    left:10%; \r\n    right:0; \r\n    bottom:0;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    padding: 5% 2%;\r\n    background-color: rgba(120, 120, 120, 0.5);\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n    min-height: 25px;\r\n    margin: 15px 0;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {   \r\n    font-family: Subtitle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlEQUFpRDtJQUNqRCx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsMENBQTBDO0lBQzFDLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImhvbWUtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvbG9naW4tYmcuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwdmhcclxufVxyXG5cclxuLmZvcm0tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGxlO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoxMCU7IFxyXG4gICAgbGVmdDoxMCU7IFxyXG4gICAgcmlnaHQ6MDsgXHJcbiAgICBib3R0b206MDtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBhZGRpbmc6IDUlIDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjUpO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSBpbnB1dCxcclxuLmxvZ2luLWZvcm0gbGFiZWwsXHJcbi5sb2dpbi1mb3JtIGJ1dHRvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gICAgbWluLWhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSBpbnB1dCxcclxuLmxvZ2luLWZvcm0gYnV0dG9uIHsgICBcclxuICAgIGZvbnQtZmFtaWx5OiBTdWJ0aXRsZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "YaMJ":
/*!*******************************!*\
  !*** ./src/app/vo/QuestVO.ts ***!
  \*******************************/
/*! exports provided: QuestVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestVO", function() { return QuestVO; });
class QuestVO {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_login_home_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-login/home-login.component */ "W6tu");
/* harmony import */ var _logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logged-user/logged-user.component */ "x9oe");
/* harmony import */ var _homepages_master_home_master_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepages/master-home/master-home.component */ "jETa");
/* harmony import */ var _homepages_competitor_home_competitor_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepages/competitor-home/competitor-home.component */ "6Cfb");
/* harmony import */ var _homepages_master_home_master_custom_quest_master_custom_quest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepages/master-home/master-custom-quest/master-custom-quest.component */ "b8gm");
/* harmony import */ var _homepages_master_home_master_poll_mng_master_poll_mng_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepages/master-home/master-poll-mng/master-poll-mng.component */ "Sr7X");
/* harmony import */ var _homepages_master_home_master_poll_mng_master_poll_results_master_poll_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepages/master-home/master-poll-mng/master-poll-results/master-poll-results.component */ "LPbs");
/* harmony import */ var _homepages_competitor_home_user_answer_to_user_answer_to_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepages/competitor-home/user-answer-to/user-answer-to.component */ "ukS/");
/* harmony import */ var _homepages_competitor_home_user_answer_to_user_quest_form_user_quest_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepages/competitor-home/user-answer-to/user-quest-form/user-quest-form.component */ "Bwjg");
/* harmony import */ var _homepages_master_home_master_score_master_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepages/master-home/master-score/master-score.component */ "eMgW");
/* harmony import */ var _homepages_master_home_master_quest_carousel_master_quest_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./homepages/master-home/master-quest-carousel/master-quest-carousel.component */ "ujG2");
/* harmony import */ var _homepages_master_home_master_quest_carousel_master_carousel_view_master_carousel_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepages/master-home/master-quest-carousel/master-carousel-view/master-carousel-view.component */ "4is1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_login_home_login_component__WEBPACK_IMPORTED_MODULE_4__["HomeLoginComponent"],
        _logged_user_logged_user_component__WEBPACK_IMPORTED_MODULE_5__["LoggedUserComponent"],
        _homepages_master_home_master_home_component__WEBPACK_IMPORTED_MODULE_6__["MasterHomeComponent"],
        _homepages_competitor_home_competitor_home_component__WEBPACK_IMPORTED_MODULE_7__["CompetitorHomeComponent"],
        _homepages_master_home_master_custom_quest_master_custom_quest_component__WEBPACK_IMPORTED_MODULE_8__["MasterCustomQuestComponent"],
        _homepages_master_home_master_poll_mng_master_poll_mng_component__WEBPACK_IMPORTED_MODULE_9__["MasterPollMngComponent"],
        _homepages_master_home_master_poll_mng_master_poll_results_master_poll_results_component__WEBPACK_IMPORTED_MODULE_10__["MasterPollResultsComponent"],
        _homepages_competitor_home_user_answer_to_user_answer_to_component__WEBPACK_IMPORTED_MODULE_11__["UserAnswerToComponent"],
        _homepages_competitor_home_user_answer_to_user_quest_form_user_quest_form_component__WEBPACK_IMPORTED_MODULE_12__["UserQuestFormComponent"],
        _homepages_master_home_master_score_master_score_component__WEBPACK_IMPORTED_MODULE_13__["MasterScoreComponent"],
        _homepages_master_home_master_quest_carousel_master_quest_carousel_component__WEBPACK_IMPORTED_MODULE_14__["MasterQuestCarouselComponent"],
        _homepages_master_home_master_quest_carousel_master_carousel_view_master_carousel_view_component__WEBPACK_IMPORTED_MODULE_15__["MasterCarouselViewComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "b8gm":
/*!********************************************************************************************!*\
  !*** ./src/app/homepages/master-home/master-custom-quest/master-custom-quest.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MasterCustomQuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterCustomQuestComponent", function() { return MasterCustomQuestComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_vo_QuestVO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/vo/QuestVO */ "YaMJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = function (a0) { return { "rotate-triangle": a0 }; };
const _c1 = function (a0) { return { "hide": a0 }; };
class MasterCustomQuestComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.isVisile = true;
        this.jwt = this.cookieMng.getCookie("user.jwt");
    }
    sendCustomQuest() {
        if (!window.confirm("Sicuro di inviare e avviare la quest?")) {
            return;
        }
        let newQuestUrl = "/master/start-custom-quest";
        if (window.location.port === "4200")
            newQuestUrl = "http://localhost/master/start-custom-quest";
        let body = new src_app_vo_QuestVO__WEBPACK_IMPORTED_MODULE_1__["QuestVO"]();
        body.question = this.questField;
        body.answer1 = this.answer1;
        body.answer2 = this.answer2;
        body.answer3 = this.answer3;
        body.answer4 = this.answer4;
        body.correctAnswer = Number.parseInt(this.correctAnswer);
        this.rest.sendPost(newQuestUrl, body, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "content-type": "application/json",
            "Authorization": "Bearer " + this.jwt
        })).subscribe(() => {
            this.questField = "";
            this.answer1 = "";
            this.answer2 = "";
            this.answer3 = "";
            this.answer4 = "";
            this.correctAnswer = undefined;
            window.alert("Richiesta effettuata, poll aperto");
        }, err => {
            console.error(err);
        });
    }
    showHide() {
        this.isVisile = !this.isVisile;
    }
    titleText() {
        if (!this.isVisile)
            return "Custom Quest";
        else
            return "";
    }
}
MasterCustomQuestComponent.ɵfac = function MasterCustomQuestComponent_Factory(t) { return new (t || MasterCustomQuestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_3__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"])); };
MasterCustomQuestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MasterCustomQuestComponent, selectors: [["app-master-custom-quest"]], decls: 48, vars: 13, consts: [[1, "container"], [1, "show-component", 3, "click"], [3, "innerHTML"], [1, "triangle"], ["height", "15", "width", "15", 1, "triangle-svg", 3, "ngClass"], ["points", "6,1 2,10 10,10"], [1, "contents", 3, "ngClass"], [1, "custom-quest-form", 3, "ngSubmit"], [1, "form-container"], [1, "quest"], ["id", "quest", "name", "questField", 1, "quest-field", 3, "ngModel", "ngModelChange"], [1, "answers"], ["for", "answer1", 1, "a1lbl"], ["id", "answer1", "name", "answer1", 1, "answer1", 3, "ngModel", "ngModelChange"], ["for", "answer2", 1, "a2lbl"], ["id", "answer2", "name", "answer2", 1, "answer2", 3, "ngModel", "ngModelChange"], ["for", "answer3", 1, "a3lbl"], ["id", "answer3", "name", "answer3", 1, "answer3", 3, "ngModel", "ngModelChange"], ["for", "answer4", 1, "a4lbl"], ["id", "answer4", "name", "answer4", 1, "answer4", 3, "ngModel", "ngModelChange"], [1, "correct-answer"], ["id", "correctAnswer", "name", "correctAnswer", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "submit"], ["type", "submit", 1, "submit-btn"]], template: function MasterCustomQuestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MasterCustomQuestComponent_Template_div_click_1_listener() { return ctx.showHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Sorry, your browser does not support inline SVG. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function MasterCustomQuestComponent_Template_form_ngSubmit_8_listener() { return ctx.sendCustomQuest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Quest personalizzata:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MasterCustomQuestComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.questField = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Risposte proposte:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MasterCustomQuestComponent_Template_input_ngModelChange_20_listener($event) { return ctx.answer1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MasterCustomQuestComponent_Template_input_ngModelChange_24_listener($event) { return ctx.answer2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MasterCustomQuestComponent_Template_input_ngModelChange_28_listener($event) { return ctx.answer3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MasterCustomQuestComponent_Template_input_ngModelChange_32_listener($event) { return ctx.answer4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Correct answer is:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MasterCustomQuestComponent_Template_select_ngModelChange_36_listener($event) { return ctx.correctAnswer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Invia quest personalizzata");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.titleText(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, !ctx.isVisile));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, !ctx.isVisile));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.questField);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.answer1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.answer2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.answer3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.answer4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.correctAnswer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"]], styles: ["div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    font-family: NormalText;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px black;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.triangle[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-left: auto;\r\n    margin-right: 5px;\r\n}\r\n\r\n.triangle-svg[_ngcontent-%COMP%] {\r\n    transition-duration: 0.5s;\r\n    transition-property: transform;\r\n}\r\n\r\n.show-component[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-radius: 5px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    animation-duration: 4s;\r\n}\r\n\r\n.contents[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.rotate-triangle[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg);\r\n    -webkit-transform: rotate(180deg);\r\n}\r\n\r\n\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    padding: 5% 2%;\r\n}\r\n\r\n.quest-field[_ngcontent-%COMP%] {\r\n    width: calc(100% - 6.5px);\r\n    height: 100px;\r\n    text-align: start;\r\n    -webkit-text-orientation: upright;\r\n            text-orientation: upright;\r\n}\r\n\r\n.answers[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    margin-bottom: 10px;\r\n    font-size: 1em;\r\n}\r\n\r\n.answers[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    width: 5%;\r\n    min-width: 10px;\r\n    font-size: 1em;\r\n}\r\n\r\n.answers[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-flex;\r\n}\r\n\r\n.answer2[_ngcontent-%COMP%], .answer4[_ngcontent-%COMP%] {\r\n    background-color: lightgray;\r\n}\r\n\r\n.correct-answer[_ngcontent-%COMP%] {\r\n    width: calc(100% - 12px);\r\n    display: flex;\r\n    padding: 5px;\r\n    border: 1px solid grey;\r\n}\r\n\r\n.correct-answer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    height: 25px;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1jdXN0b20tcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7O0FBR0EsU0FBUzs7QUFFVDtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoibWFzdGVyLWN1c3RvbS1xdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LCBzcGFuLCBsYWJlbCwgaW5wdXQsIHRleHRhcmVhLCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IE5vcm1hbFRleHQ7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRyaWFuZ2xlIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50cmlhbmdsZS1zdmcge1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxufVxyXG5cclxuLnNob3ctY29tcG9uZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxufVxyXG5cclxuLmNvbnRlbnRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucm90YXRlLXRyaWFuZ2xlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcblxyXG4vKiBGT1JNICovXHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBhZGRpbmc6IDUlIDIlO1xyXG59XHJcblxyXG4ucXVlc3QtZmllbGQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYuNXB4KTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XHJcbn1cclxuXHJcbi5hbnN3ZXJzIGlucHV0IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5hbnN3ZXJzIGxhYmVsIHtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIG1pbi13aWR0aDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbi5hbnN3ZXJzIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uYW5zd2VyMiwgLmFuc3dlcjQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uY29ycmVjdC1hbnN3ZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5jb3JyZWN0LWFuc3dlciBzZWxlY3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "eMgW":
/*!******************************************************************************!*\
  !*** ./src/app/homepages/master-home/master-score/master-score.component.ts ***!
  \******************************************************************************/
/*! exports provided: MasterScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterScoreComponent", function() { return MasterScoreComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MasterScoreComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r1.value);
} }
const _c0 = function (a0) { return { "rotate-triangle": a0 }; };
const _c1 = function (a0) { return { "hide": a0 }; };
class MasterScoreComponent {
    constructor(cookieMng, rest) {
        this.rest = rest;
        this.isVisible = true;
        this.resultMap = new Map();
        this.jwt = cookieMng.getCookie("user.jwt");
    }
    titleText() {
        if (!this.isVisible)
            return "Risultati finali";
        else
            return "";
    }
    showHide() {
        this.isVisible = !this.isVisible;
    }
    getResultScore() {
        let statusPollUrl = "/master/get-scores";
        if (window.location.port === "4200")
            statusPollUrl = "http://localhost/master/get-scores";
        this.rest.sendGet(statusPollUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt,
            "Accept": "application/json"
        })).subscribe(resp => {
            const body = resp.body;
            const keys = Object.keys(body);
            keys.forEach(k => {
                const v = body[k];
                this.resultMap.set(k, v.toString());
            });
        }, err => {
            console.error(err);
        });
    }
}
MasterScoreComponent.ɵfac = function MasterScoreComponent_Factory(t) { return new (t || MasterScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
MasterScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MasterScoreComponent, selectors: [["app-master-score"]], decls: 20, vars: 10, consts: [[1, "container"], [1, "show-component", 3, "click"], [3, "innerHTML"], [1, "triangle"], ["height", "15", "width", "15", 1, "triangle-svg", 3, "ngClass"], ["points", "6,1 2,10 10,10"], [1, "contents", 3, "ngClass"], [1, "refresh-btn", 3, "click"], [1, "table-title"], ["class", "competitor-results", 4, "ngFor", "ngForOf"], [1, "competitor-results"], [1, "competitor-name"], [1, "competitor-points"]], template: function MasterScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MasterScoreComponent_Template_div_click_1_listener() { return ctx.showHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sorry, your browser does not support inline SVG. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MasterScoreComponent_Template_button_click_8_listener() { return ctx.getResultScore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Refresh risultati");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Punti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MasterScoreComponent_tr_18_Template, 6, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.titleText(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !ctx.isVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, !ctx.isVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 4, ctx.resultMap));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]], styles: ["div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], table[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    font-family: NormalText;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px black;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.triangle[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-left: auto;\r\n    margin-right: 5px;\r\n}\r\n\r\n.triangle-svg[_ngcontent-%COMP%] {\r\n    transition-duration: 0.5s;\r\n    transition-property: transform;\r\n}\r\n\r\n.show-component[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-radius: 5px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    animation-duration: 4s;\r\n}\r\n\r\n.contents[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.rotate-triangle[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg);\r\n    -webkit-transform: rotate(180deg);\r\n}\r\n\r\n\r\n\r\n.contents[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.contents[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-top: 1px black solid;\r\n}\r\n\r\n.refresh-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 5px 0;\r\n    padding: 5px 0;\r\n    background-color: lightskyblue;\r\n    border: none;\r\n}\r\n\r\n.refresh-btn[_ngcontent-%COMP%]:active {\r\n    background-color: cyan;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlDQUFpQztBQUNyQzs7QUFHQSxVQUFVOztBQUVWO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoibWFzdGVyLXNjb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsIHNwYW4sIHRhYmxlLCB0ZCwgdHIsIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogTm9ybWFsVGV4dDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udHJpYW5nbGUge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRyaWFuZ2xlLXN2ZyB7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uc2hvdy1jb21wb25lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG59XHJcblxyXG4uY29udGVudHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yb3RhdGUtdHJpYW5nbGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuXHJcbi8qIFRhYmxlICovXHJcblxyXG4uY29udGVudHMgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50cyB0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XHJcbn1cclxuXHJcbi5yZWZyZXNoLWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnJlZnJlc2gtYnRuOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "jETa":
/*!****************************************************************!*\
  !*** ./src/app/homepages/master-home/master-home.component.ts ***!
  \****************************************************************/
/*! exports provided: MasterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterHomeComponent", function() { return MasterHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var _master_poll_mng_master_poll_mng_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master-poll-mng/master-poll-mng.component */ "Sr7X");
/* harmony import */ var _master_custom_quest_master_custom_quest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-custom-quest/master-custom-quest.component */ "b8gm");
/* harmony import */ var _master_score_master_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./master-score/master-score.component */ "eMgW");
/* harmony import */ var _master_quest_carousel_master_quest_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master-quest-carousel/master-quest-carousel.component */ "ujG2");






class MasterHomeComponent {
    constructor(cookieMng) {
        this.cookieMng = cookieMng;
    }
    exit() {
        let confermation = window.confirm("Sei sicuro di uscire? Ci mancherai master :'(");
        if (confermation) {
            this.cookieMng.deleteCookie("user.jwt");
            window.location.href = "/";
        }
    }
}
MasterHomeComponent.ɵfac = function MasterHomeComponent_Factory(t) { return new (t || MasterHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_1__["CookieManager"])); };
MasterHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterHomeComponent, selectors: [["app-master-home"]], decls: 15, vars: 0, consts: [[1, "toolbar"], [1, "title"], [1, "exit-btn"], [3, "click"], [1, "close-poll"], [1, "custom-quest"], [1, "score-summary"], [1, "quest-carousel"]], template: function MasterHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterHomeComponent_Template_button_click_5_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-master-poll-mng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-master-custom-quest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-master-score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-master-quest-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_master_poll_mng_master_poll_mng_component__WEBPACK_IMPORTED_MODULE_2__["MasterPollMngComponent"], _master_custom_quest_master_custom_quest_component__WEBPACK_IMPORTED_MODULE_3__["MasterCustomQuestComponent"], _master_score_master_score_component__WEBPACK_IMPORTED_MODULE_4__["MasterScoreComponent"], _master_quest_carousel_master_quest_carousel_component__WEBPACK_IMPORTED_MODULE_5__["MasterQuestCarouselComponent"]], styles: [".toolbar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-flex;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    background-image: url(\"/assets/img/login-bg.jpg\");\r\n    background-repeat: repeat-x;\r\n    background-position: top;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-family: Title;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    margin: auto 10px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   .exit-btn[_ngcontent-%COMP%] {\r\n\r\n    margin-left: auto;\r\n    padding-left: 5px;\r\n    height: 50px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.exit-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    border: none;\r\n    background-color: rgba(120, 120, 120, 0.5);\r\n    padding: 0 10px;\r\n    transition: all 0.2s linear;\r\n}\r\n\r\n.exit-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    background-color: rgba(120, 120, 120);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDIiwiZmlsZSI6Im1hc3Rlci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2xvZ2luLWJnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxufVxyXG5cclxuLnRvb2xiYXIgZGl2LFxyXG4udG9vbGJhciBidXR0b24sXHJcbi50b29sYmFyIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBUaXRsZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi50b29sYmFyIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IGF1dG8gMTBweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnRvb2xiYXIgLmV4aXQtYnRuIHtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5leGl0LWJ0biBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjUpO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG59XHJcblxyXG4uZXhpdC1idG4gYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMCwgMTIwLCAxMjApO1xyXG59Il19 */"] });


/***/ }),

/***/ "ujG2":
/*!************************************************************************************************!*\
  !*** ./src/app/homepages/master-home/master-quest-carousel/master-quest-carousel.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MasterQuestCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterQuestCarouselComponent", function() { return MasterQuestCarouselComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _master_carousel_view_master_carousel_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master-carousel-view/master-carousel-view.component */ "4is1");






function MasterQuestCarouselComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-master-carousel-view", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("quest", ctx_r0.questSelected);
} }
const _c0 = function (a0) { return { "rotate-triangle": a0 }; };
const _c1 = function (a0) { return { "hide": a0 }; };
class MasterQuestCarouselComponent {
    constructor(cookieMng, rest) {
        this.rest = rest;
        this.isVisible = true;
        this.selectedId = "";
        this.currentId = 0;
        this.jwt = cookieMng.getCookie("user.jwt");
    }
    ngOnInit() {
        let maxNumUrl = "/master/saved-quests-number";
        if (window.location.port === "4200")
            maxNumUrl = "http://localhost/master/saved-quests-number";
        this.rest.sendGetRawText(maxNumUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt,
            "Accept": "text/plain"
        })).subscribe(resp => {
            this.maxQuests = Number(resp.body);
        }, err => {
            console.error(err);
        });
    }
    titleText() {
        if (!this.isVisible)
            return "Quest configurate";
        else
            return "";
    }
    showHide() {
        this.isVisible = !this.isVisible;
    }
    inputCheck() {
        const newVal = document.getElementById("selectedId").value;
        if (newVal === "") {
            this.selectedId = newVal;
        }
        else if (newVal.includes(".")) {
            document.getElementById("selectedId").value = this.selectedId;
        }
        else if (!Number.isInteger(Number(newVal))) {
            document.getElementById("selectedId").value = this.selectedId;
        }
        else {
            this.selectedId = newVal;
        }
    }
    getQuestSelected() {
        const id = Number(this.selectedId);
        this.getQuest(id);
    }
    getQuest(id) {
        id--;
        let getByIdUrl = "/master/saved-quests/" + id;
        if (window.location.port === "4200")
            getByIdUrl = "http://localhost/master/saved-quests/" + id;
        this.rest.sendGet(getByIdUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt,
            "Accept": "application/json"
        })).subscribe(resp => {
            this.questSelected = resp.body;
        }, err => {
            console.error(err);
        });
    }
    increaseDisabled() {
        if (this.currentId < this.maxQuests)
            return false;
        return true;
    }
    increase() {
        this.currentId++;
        this.getQuest(this.currentId);
    }
    decrease() {
        this.currentId--;
        this.getQuest(this.currentId);
    }
    decreaseDisabled() {
        if (this.currentId > 1)
            return false;
        return true;
    }
}
MasterQuestCarouselComponent.ɵfac = function MasterQuestCarouselComponent_Factory(t) { return new (t || MasterQuestCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
MasterQuestCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MasterQuestCarouselComponent, selectors: [["app-master-quest-carousel"]], decls: 20, vars: 12, consts: [[1, "container"], [1, "show-component", 3, "click"], [3, "innerHTML"], [1, "triangle"], ["height", "15", "width", "15", 1, "triangle-svg", 3, "ngClass"], ["points", "6,1 2,10 10,10"], [1, "contents", 3, "ngClass"], [1, "navigation-menu"], [1, "move-left", 3, "disabled", "click"], [1, "go-to-elem"], ["type", "text", "name", "selectedId", "id", "selectedId", 3, "keyup"], [1, "by-id-btn", 3, "click"], [1, "move-right", 3, "disabled", "click"], ["class", "carousel-elem", 4, "ngIf"], [1, "carousel-elem"], [3, "quest"]], template: function MasterQuestCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MasterQuestCarouselComponent_Template_div_click_1_listener() { return ctx.showHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sorry, your browser does not support inline SVG. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MasterQuestCarouselComponent_Template_button_click_9_listener() { return ctx.decrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function MasterQuestCarouselComponent_Template_input_keyup_14_listener() { return ctx.inputCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MasterQuestCarouselComponent_Template_button_click_15_listener() { return ctx.getQuestSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "vai");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MasterQuestCarouselComponent_Template_button_click_17_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MasterQuestCarouselComponent_div_19_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.titleText(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, !ctx.isVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, !ctx.isVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.decreaseDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.currentId, " / ", ctx.maxQuests, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.increaseDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.questSelected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _master_carousel_view_master_carousel_view_component__WEBPACK_IMPORTED_MODULE_5__["MasterCarouselViewComponent"]], styles: ["div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    font-family: NormalText;\r\n    font-size: 1.1em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 10px black;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.triangle[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-left: auto;\r\n    margin-right: 5px;\r\n}\r\n\r\n.triangle-svg[_ngcontent-%COMP%] {\r\n    transition-duration: 0.5s;\r\n    transition-property: transform;\r\n}\r\n\r\n.show-component[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-radius: 5px;\r\n    background-color: lightgray;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    animation-duration: 4s;\r\n}\r\n\r\n.contents[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.rotate-triangle[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg);\r\n    -webkit-transform: rotate(180deg);\r\n}\r\n\r\n\r\n\r\n.navigation-menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    padding: 10px 0;\r\n}\r\n\r\n.navigation-menu[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    max-width: 50px;\r\n    margin-right: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1xdWVzdC1jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlDQUFpQztBQUNyQzs7QUFHQSxhQUFhOztBQUNiO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoibWFzdGVyLXF1ZXN0LWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsIHNwYW4sIGlucHV0LCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IE5vcm1hbFRleHQ7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRyaWFuZ2xlIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50cmlhbmdsZS1zdmcge1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxufVxyXG5cclxuLnNob3ctY29tcG9uZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxufVxyXG5cclxuLmNvbnRlbnRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucm90YXRlLXRyaWFuZ2xlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcblxyXG4vKiBOYXYgbWVudSAqL1xyXG4ubmF2aWdhdGlvbi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tbWVudSBpbnB1dCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ukS/":
/*!**************************************************************************************!*\
  !*** ./src/app/homepages/competitor-home/user-answer-to/user-answer-to.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserAnswerToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAnswerToComponent", function() { return UserAnswerToComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_quest_form_user_quest_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-quest-form/user-quest-form.component */ "Bwjg");







function UserAnswerToComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("In attesa del Master ", ctx_r0.loadingDots, "");
} }
function UserAnswerToComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nuova quest disponibile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-user-quest-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("answered", function UserAnswerToComponent_div_2_Template_app_user_quest_form_answered_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.answered($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("quest", ctx_r1.quest)("jwt", ctx_r1.jwt);
} }
class UserAnswerToComponent {
    constructor(cookieMng, rest) {
        this.rest = rest;
        // Every 5 sec
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        // Every 1 sec
        this.sourceDots = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        this.loadingDots = ".";
        this.jwt = cookieMng.getCookie("user.jwt");
    }
    ngOnInit() {
        this.verifyQuest();
        this.subscription = this.source.subscribe(() => this.verifyQuest());
        this.subscriptionDots = this.sourceDots.subscribe(() => this.dots());
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscriptionDots.unsubscribe();
    }
    verifyQuest() {
        let getActualQuestUrl = "/user/actual-quest";
        if (window.location.port === "4200")
            getActualQuestUrl = "http://localhost/user/actual-quest";
        let getPollStatusUrl = "/user/new-quest-available";
        if (window.location.port === "4200")
            getPollStatusUrl = "http://localhost/user/new-quest-available";
        this.rest.sendGetRawText(getPollStatusUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt
        })).subscribe(resp => {
            if (resp.body === "true") {
                this.subscription.unsubscribe();
                this.getQuest(getActualQuestUrl);
            }
        }, err => {
            console.error(err);
        });
    }
    getQuest(url) {
        this.rest.sendGet(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.jwt,
            "Accept": "application/json"
        })).subscribe(resp => {
            if (resp.status === 200) {
                this.quest = resp.body;
            }
            else {
                console.error(resp);
                this.subscription = this.source.subscribe(() => this.verifyQuest());
            }
        }, err => {
            console.error(err);
            this.subscription = this.source.subscribe(() => this.verifyQuest());
        });
    }
    answered(answered) {
        if (answered) {
            this.quest = undefined;
            this.subscription = this.source.subscribe(() => this.verifyQuest());
        }
    }
    dots() {
        if (this.loadingDots === ".") {
            this.loadingDots = "..";
        }
        else if (this.loadingDots === "..") {
            this.loadingDots = "...";
        }
        else if (this.loadingDots === "...") {
            this.loadingDots = ".";
        }
    }
}
UserAnswerToComponent.ɵfac = function UserAnswerToComponent_Factory(t) { return new (t || UserAnswerToComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_3__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"])); };
UserAnswerToComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserAnswerToComponent, selectors: [["app-user-answer-to"]], decls: 3, vars: 2, consts: [[1, "container"], [4, "ngIf"], [3, "quest", "jwt", "answered"]], template: function UserAnswerToComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserAnswerToComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserAnswerToComponent_div_2_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.quest);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.quest);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _user_quest_form_user_quest_form_component__WEBPACK_IMPORTED_MODULE_6__["UserQuestFormComponent"]], styles: ["h3[_ngcontent-%COMP%] {\r\n    font-family: Subtitle;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 0.9em;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%], span[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n    font-family: NormalText;\r\n    font-size: 1.2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYW5zd2VyLXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InVzZXItYW5zd2VyLXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBmb250LWZhbWlseTogU3VidGl0bGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbmRpdiwgc3BhbiwgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCwgbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IE5vcm1hbFRleHQ7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ "x9oe":
/*!******************************************************!*\
  !*** ./src/app/logged-user/logged-user.component.ts ***!
  \******************************************************/
/*! exports provided: LoggedUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUserComponent", function() { return LoggedUserComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookie-utils */ "A8sk");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _homepages_master_home_master_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../homepages/master-home/master-home.component */ "jETa");
/* harmony import */ var _homepages_competitor_home_competitor_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../homepages/competitor-home/competitor-home.component */ "6Cfb");







function LoggedUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-master-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoggedUserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-competitor-home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoggedUserComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.jwt = cookieMng.getCookie("user.jwt");
    }
    ngOnInit() {
        let loginUrl = "/user-manager/get-role";
        if (window.location.port === "4200")
            loginUrl = "http://localhost/user-manager/get-role";
        this.rest.sendGetRawText(loginUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "content-type": "text/plain",
            "Authorization": "Bearer " + this.jwt
        })).subscribe(r => {
            this.myRole = r.body;
        }, err => {
            console.error(err);
        });
    }
}
LoggedUserComponent.ɵfac = function LoggedUserComponent_Factory(t) { return new (t || LoggedUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
LoggedUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoggedUserComponent, selectors: [["app-logged-user"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function LoggedUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoggedUserComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoggedUserComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myRole === "master");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myRole === "competitor");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _homepages_master_home_master_home_component__WEBPACK_IMPORTED_MODULE_5__["MasterHomeComponent"], _homepages_competitor_home_competitor_home_component__WEBPACK_IMPORTED_MODULE_6__["CompetitorHomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dnZWQtdXNlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map