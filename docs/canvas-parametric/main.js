(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\canvas-parametric\src\main.ts */"zUnb");


/***/ }),

/***/ "5+6z":
/*!*****************************************************************!*\
  !*** ./src/app/components/people-card/people-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: PeopleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleCardComponent", function() { return PeopleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../primary-button/primary-button.component */ "ASWt");



class PeopleCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PeopleCardComponent.ɵfac = function PeopleCardComponent_Factory(t) { return new (t || PeopleCardComponent)(); };
PeopleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeopleCardComponent, selectors: [["app-people-card"]], decls: 11, vars: 0, consts: [[1, "OurPeople-author"], [1, "OurPeople_photo-container"], [1, "OurPeople_authorPhoto"], ["src", "assets/img/tom-lee_250x250.jpg", "alt", "Tom Lee photo"], [1, "OurPeople_info-container"], [1, "OurPeople_author-info"], [1, "OurPeople_authorName"], [1, "OurPeople_authorPosition"]], template: function PeopleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tom Lee, CFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Director, Responsible Investing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-primary-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_1__["PrimaryButtonComponent"]], styles: [".OurPeople-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-start;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.OurPeople-author[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid #dcdcdc;\n  padding: 15px;\n  display: flex;\n  margin-bottom: 1rem;\n}\n\n.OurPeople_photo-container[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n.OurPeople_info-container[_ngcontent-%COMP%] {\n  width: 58vw;\n}\n\n.OurPeople_authorName[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #47535f;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  text-align: left;\n}\n\n.OurPeople_authorPosition[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #47535f;\n  text-align: left;\n  line-height: 24px;\n  margin: 0;\n}\n\n.OurPeople_authorPhoto[_ngcontent-%COMP%] {\n  height: 85px;\n  width: 85px;\n  display: inline-block;\n  justify-content: center;\n}\n\n.OurPeople_authorPhoto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  -moz-border-radius: 25px;\n  -webkit-border-radius: 25px;\n  width: 100%;\n  height: auto;\n}\n\n@supports (object-fit: cover) {\n  .Author-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100%;\n    object-fit: cover;\n    object-position: center center;\n  }\n}\n\n@media (min-width: 992px) {\n  .OurPeople_photo-container[_ngcontent-%COMP%] {\n    width: 15vw;\n  }\n}\n\n@media (min-width: 992px) {\n  .OurPeople-author[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin: 0.8rem;\n    width: 16vw;\n  }\n\n  .OurPeople_photo-container[_ngcontent-%COMP%], .OurPeople_info-container[_ngcontent-%COMP%] {\n    align-self: center;\n    text-align: center;\n  }\n\n  .OurPeople_photo-container[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n\n  .OurPeople_authorName[_ngcontent-%COMP%], .OurPeople_authorPosition[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZW9wbGUtY2FyZC9wZW9wbGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSw4QkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLGNBQUE7SUFFQSxXQUFBO0VBRkY7O0VBS0E7O0lBRUUsa0JBQUE7SUFDQSxrQkFBQTtFQUZGOztFQUtBO0lBQ0UsVUFBQTtFQUZGOztFQUtBOztJQUVFLGtCQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVvcGxlLWNhcmQvcGVvcGxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3VyUGVvcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uT3VyUGVvcGxlLWF1dGhvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uT3VyUGVvcGxlX3Bob3RvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuLk91clBlb3BsZV9pbmZvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDU4dnc7XHJcbn1cclxuXHJcbi5PdXJQZW9wbGVfYXV0aG9yTmFtZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0NzUzNWY7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLk91clBlb3BsZV9hdXRob3JQb3NpdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNDc1MzVmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uT3VyUGVvcGxlX2F1dGhvclBob3RvIHtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uT3VyUGVvcGxlX2F1dGhvclBob3RvIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQHN1cHBvcnRzIChvYmplY3QtZml0OiBjb3Zlcikge1xyXG4gIC5BdXRob3ItcGhvdG8gaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLk91clBlb3BsZV9waG90by1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE1dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuT3VyUGVvcGxlLWF1dGhvciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAwLjhyZW07XHJcbiAgICAvLyBUTyBETzogc2UgcmVhbGl6byB1bmEgY29ycmVjY2nDs25cclxuICAgIHdpZHRoOiAxNnZ3O1xyXG4gIH1cclxuXHJcbiAgLk91clBlb3BsZV9waG90by1jb250YWluZXIsXHJcbiAgLk91clBlb3BsZV9pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuT3VyUGVvcGxlX3Bob3RvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gIH1cclxuXHJcbiAgLk91clBlb3BsZV9hdXRob3JOYW1lLFxyXG4gIC5PdXJQZW9wbGVfYXV0aG9yUG9zaXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-people-card',
                templateUrl: './people-card.component.html',
                styleUrls: ['./people-card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6LQs":
/*!***********************************************!*\
  !*** ./src/app/constants/routes.constants.ts ***!
  \***********************************************/
/*! exports provided: RoutesConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesConstants", function() { return RoutesConstants; });
class RoutesConstants {
}
RoutesConstants.ROUTES = {
    BUTTONS: 'buttons',
    CARDS: 'cards',
};


/***/ }),

/***/ "ASWt":
/*!***********************************************************************!*\
  !*** ./src/app/components/primary-button/primary-button.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrimaryButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButtonComponent", function() { return PrimaryButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrimaryButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrimaryButtonComponent.ɵfac = function PrimaryButtonComponent_Factory(t) { return new (t || PrimaryButtonComponent)(); };
PrimaryButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrimaryButtonComponent, selectors: [["app-primary-button"]], decls: 3, vars: 0, consts: [[1, "button", "btn-blue"], ["href", "*", "title", "Bio"]], template: function PrimaryButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".button[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px 15px;\n  margin-top: 20px;\n  display: inline-block;\n}\n\n.button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: \"Aaux Next Bold\";\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.btn-blue[_ngcontent-%COMP%] {\n  border-color: #3997ab;\n}\n\n.btn-blue[_ngcontent-%COMP%]:hover {\n  background-color: #3997ab;\n}\n\n.btn-blue[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3997ab;\n}\n\n.btn-blue[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJ5LWJ1dHRvbi9wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uL3ByaW1hcnktYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuLmJ1dHRvbiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJBYXV4IE5leHQgQm9sZFwiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuLWJsdWUge1xyXG4gIGJvcmRlci1jb2xvcjogIzM5OTdhYjtcclxufVxyXG5cclxuLmJ0bi1ibHVlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5N2FiO1xyXG59XHJcblxyXG4uYnRuLWJsdWUgYSB7XHJcbiAgY29sb3I6ICMzOTk3YWI7XHJcbn1cclxuXHJcbi5idG4tYmx1ZTpob3ZlciBhIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimaryButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-primary-button',
                templateUrl: './primary-button.component.html',
                styleUrls: ['./primary-button.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "PBr9":
/*!***************************************************************************!*\
  !*** ./src/app/components/secondary-buttom/secondary-buttom.component.ts ***!
  \***************************************************************************/
/*! exports provided: SecondaryButtomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButtomComponent", function() { return SecondaryButtomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SecondaryButtomComponent {
    constructor() { }
    ngOnInit() {
        this.initializeData();
    }
    initializeData() {
        if (!this.buttonModel) {
            this.buttonModel = {
                class: "btn-outline-tertiary",
                text: 'Guardar'
            };
        }
    }
}
SecondaryButtomComponent.ɵfac = function SecondaryButtomComponent_Factory(t) { return new (t || SecondaryButtomComponent)(); };
SecondaryButtomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondaryButtomComponent, selectors: [["app-secondary-buttom"]], inputs: { buttonModel: "buttonModel" }, decls: 2, vars: 3, template: function SecondaryButtomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.buttonModel.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonModel.text);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Spartan:wght@400;700&display=swap\");\nbutton[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  cursor: pointer;\n  outline: none;\n  width: 140px;\n  height: 50px;\n  font-family: Spartan, sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  border: none;\n  color: #fff;\n  background: #3997ab;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  border: none;\n  color: #fff;\n  background: #ff3482;\n}\n.btn-tertiary[_ngcontent-%COMP%] {\n  border: none;\n  color: #fff;\n  background: #47535f;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border: 1px solid #3997ab;\n  color: #3997ab;\n  background: #fff;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #3997ab;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #ff3482;\n  color: #ff3482;\n  background: #fff;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #ff3482;\n}\n.btn-outline-tertiary[_ngcontent-%COMP%] {\n  border: 1px solid #47535f;\n  color: #47535f;\n  background: #fff;\n}\n.btn-outline-tertiary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #47535f;\n}\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  filter: brightness(30%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcnktYnV0dG9tL3NlY29uZGFyeS1idXR0b20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0eWxlcy9hYnN0cmFjcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFHUjtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREY7QUFLQTtFQUNFLFlBQUE7RUFDQSxXQ2hCYztFRGlCZCxtQkNoQmdCO0FEY2xCO0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0N2QmM7RUR3QmQsbUJDdEJlO0FEbUJqQjtBQU9BO0VBQ0UsWUFBQTtFQUNBLFdDOUJjO0VEK0JkLG1CQzFCbUI7QURzQnJCO0FBUUE7RUFDRSx5QkFBQTtFQUNBLGNDcENnQjtFRHFDaEIsZ0JDdENjO0FEaUNoQjtBQVFBO0VBQ0UsV0MxQ2M7RUQyQ2QsbUJDMUNnQjtBRHFDbEI7QUFTQTtFQUNFLHlCQUFBO0VBQ0EsY0MvQ2U7RURnRGYsZ0JDbERjO0FENENoQjtBQVNBO0VBQ0UsV0N0RGM7RUR1RGQsbUJDckRlO0FEK0NqQjtBQVVBO0VBQ0UseUJBQUE7RUFDQSxjQ3hEbUI7RUR5RG5CLGdCQzlEYztBRHVEaEI7QUFVQTtFQUNFLFdDbEVjO0VEbUVkLG1CQzlEbUI7QUR1RHJCO0FBVUE7RUFDRSxzQkFBQTtBQVBGO0FBVUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFQRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vjb25kYXJ5LWJ1dHRvbS9zZWNvbmRhcnktYnV0dG9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYXJ0YW46d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9hYnN0cmFjcy92YXJpYWJsZXNcIjtcclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBTcGFydGFuLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8vIGJ1dHRvbiBwcmltYXJ5XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4vLyBidXR0b24gc2Vjb25kYXJ5XHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6ICR0ZXJ0aWFyeS1jb2xvcjtcclxufVxyXG5cclxuLy8gYnV0dG9uIHRlcnRpYXJ5XHJcbi5idG4tdGVydGlhcnkge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktdGV4dC1jb2xvcjtcclxufVxyXG5cclxuLy8gQnV0dG9ucyBPdXRsaW5lXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpob3ZlciB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuXHJcbi8vIHNlY29uZGFyeSBidXR0b25cclxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRlcnRpYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAkdGVydGlhcnktY29sb3I7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiAkdGVydGlhcnktY29sb3I7XHJcbn1cclxuXHJcbi8vIFRlcnRpYXJ5IGJ1dHRvblxyXG4uYnRuLW91dGxpbmUtdGVydGlhcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS10ZXJ0aWFyeTpob3ZlciB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygzMCUpO1xyXG59XHJcbiIsIi8vIENPTE9SU1xyXG4kcHJpbWFyeS1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzM5OTdhYjtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjZmYzNDgyO1xyXG4kYm9yZGVyLWNhcmQtY29sb3I6ICNkY2RjZGM7XHJcblxyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjNDc1MzVmO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondaryButtomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secondary-buttom',
                templateUrl: './secondary-buttom.component.html',
                styleUrls: ['./secondary-buttom.component.scss']
            }]
    }], function () { return []; }, { buttonModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QfDH":
/*!************************************************!*\
  !*** ./src/app/pages/cards/cards.component.ts ***!
  \************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_people_card_people_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/people-card/people-card.component */ "5+6z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/secondary-card/secondary-card.component */ "zJL/");





function CardsComponent_app_secondary_card_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-secondary-card", 3);
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardModel", card_r1);
} }
class CardsComponent {
    constructor() {
        this.cardModel = [];
    }
    ngOnInit() {
        this.getDataCards();
    }
    getDataCards() {
        this.cardModel = [{
                img: 'assets/img/architect.PNG',
                authorName: 'Carlos Gonzales',
                authorCharge: 'Software architect',
                button: {
                    text: 'About me',
                    class: "btn-outline-tertiary"
                }
            },
            {
                img: 'assets/img/senior-dev.PNG',
                authorName: 'Andres Collazos C',
                authorCharge: 'Senior developer',
                button: {
                    text: 'BIO',
                    class: "btn-outline-primary"
                }
            },
            {
                img: 'assets/img/front-end.PNG',
                authorName: 'Tania Bertolozzi',
                authorCharge: 'User experience',
                button: {
                    text: 'Guardar',
                    class: "btn-outline-secondary"
                }
            }];
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 14, vars: 1, consts: [[1, "row"], [1, "col"], ["class", "col-12 col-sm-12 col-md-5 col-lg-4", 3, "cardModel", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-4", 3, "cardModel"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-people-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-people-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-people-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Second version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CardsComponent_app_secondary_card_13_Template, 1, 1, "app-secondary-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardModel);
    } }, directives: [_components_people_card_people_card_component__WEBPACK_IMPORTED_MODULE_1__["PeopleCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards',
                templateUrl: './cards.component.html',
                styleUrls: ['./cards.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'canvas-parametric';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container", "margin-top"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".margin-top[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _pages_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/buttons/buttons.component */ "shOA");
/* harmony import */ var _components_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/primary-button/primary-button.component */ "ASWt");
/* harmony import */ var _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/cards/cards.component */ "QfDH");
/* harmony import */ var _components_people_card_people_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/people-card/people-card.component */ "5+6z");
/* harmony import */ var _components_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/secondary-card/secondary-card.component */ "zJL/");
/* harmony import */ var _components_secondary_buttom_secondary_buttom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/secondary-buttom/secondary-buttom.component */ "PBr9");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _pages_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"],
        _components_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_6__["PrimaryButtonComponent"],
        _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"],
        _components_people_card_people_card_component__WEBPACK_IMPORTED_MODULE_8__["PeopleCardComponent"],
        _components_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_9__["SecondaryCardComponent"],
        _components_secondary_buttom_secondary_buttom_component__WEBPACK_IMPORTED_MODULE_10__["SecondaryButtomComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _pages_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"],
                    _components_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_6__["PrimaryButtonComponent"],
                    _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"],
                    _components_people_card_people_card_component__WEBPACK_IMPORTED_MODULE_8__["PeopleCardComponent"],
                    _components_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_9__["SecondaryCardComponent"],
                    _components_secondary_buttom_secondary_buttom_component__WEBPACK_IMPORTED_MODULE_10__["SecondaryButtomComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_routes_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/routes.constants */ "6LQs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavbarComponent {
    constructor() {
        this.routes = Object.assign({}, src_app_constants_routes_constants__WEBPACK_IMPORTED_MODULE_1__["RoutesConstants"].ROUTES);
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-link", "active", 3, "routerLink"], [1, "sr-only"], [1, "nav-link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Parametric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buttons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routes.BUTTONS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routes.CARDS);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "shOA":
/*!****************************************************!*\
  !*** ./src/app/pages/buttons/buttons.component.ts ***!
  \****************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/primary-button/primary-button.component */ "ASWt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_secondary_buttom_secondary_buttom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/secondary-buttom/secondary-buttom.component */ "PBr9");





function ButtonsComponent_app_secondary_buttom_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-secondary-buttom", 2);
} if (rf & 2) {
    const button_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonModel", button_r2);
} }
function ButtonsComponent_app_secondary_buttom_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-secondary-buttom", 2);
} if (rf & 2) {
    const button_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonModel", button_r3);
} }
class ButtonsComponent {
    constructor() {
        this.buttonModel = [];
        this.buttonNomalModel = [];
    }
    ngOnInit() {
        this.configButton();
        this.configNormalButtons();
    }
    configButton() {
        this.buttonModel = [
            {
                text: 'Guardar',
                class: "btn-outline-primary",
            },
            {
                text: 'Actualizar',
                class: "btn-outline-secondary",
            },
            {
                text: 'Información',
                class: "btn-outline-tertiary",
            }
        ];
    }
    configNormalButtons() {
        this.buttonNomalModel = [
            {
                text: 'Guardar',
                class: "btn-primary",
            },
            {
                text: 'Actualizar',
                class: "btn-secondary",
            },
            {
                text: 'Información',
                class: "btn-tertiary",
            }
        ];
    }
}
ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(); };
ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonsComponent, selectors: [["app-buttons"]], decls: 16, vars: 2, consts: [[1, "row"], ["class", "col-12 col-sm-3 col-md-3", 3, "buttonModel", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-3", "col-md-3", 3, "buttonModel"]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-primary-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Normal buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ButtonsComponent_app_secondary_buttom_10_Template, 1, 1, "app-secondary-buttom", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Outline buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ButtonsComponent_app_secondary_buttom_15_Template, 1, 1, "app-secondary-buttom", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttonModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttonNomalModel);
    } }, directives: [_components_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_1__["PrimaryButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_secondary_buttom_secondary_buttom_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryButtomComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buttons',
                templateUrl: './buttons.component.html',
                styleUrls: ['./buttons.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/buttons/buttons.component */ "shOA");
/* harmony import */ var _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cards/cards.component */ "QfDH");
/* harmony import */ var _constants_routes_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/routes.constants */ "6LQs");







const ROUTES = Object.assign({}, _constants_routes_constants__WEBPACK_IMPORTED_MODULE_4__["RoutesConstants"].ROUTES);
const routes = [
    { path: ROUTES.BUTTONS, component: _pages_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"] },
    { path: ROUTES.CARDS, component: _pages_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zJL/":
/*!***********************************************************************!*\
  !*** ./src/app/components/secondary-card/secondary-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: SecondaryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryCardComponent", function() { return SecondaryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _secondary_buttom_secondary_buttom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../secondary-buttom/secondary-buttom.component */ "PBr9");



class SecondaryCardComponent {
    constructor() { }
    ngOnInit() {
        this.initializeData();
    }
    initializeData() {
        if (!this.cardModel) {
            this.cardModel = {
                img: 'assets/img/avatar.png',
                authorName: 'Name...',
                authorCharge: 'Profession..'
            };
        }
        else {
            if (!this.cardModel.img) {
                this.cardModel.img = 'assets/img/avatar.png';
            }
        }
    }
}
SecondaryCardComponent.ɵfac = function SecondaryCardComponent_Factory(t) { return new (t || SecondaryCardComponent)(); };
SecondaryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondaryCardComponent, selectors: [["app-secondary-card"]], inputs: { cardModel: "cardModel" }, decls: 8, vars: 4, consts: [[1, "container-card"], [1, "container-card__container-image"], ["alt", "", 3, "src"], [1, "container-card__author-name"], [1, "container-card__author-charge"], [3, "buttonModel"]], template: function SecondaryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-secondary-buttom", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cardModel.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cardModel.authorName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cardModel.authorCharge, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonModel", ctx.cardModel.button);
    } }, directives: [_secondary_buttom_secondary_buttom_component__WEBPACK_IMPORTED_MODULE_1__["SecondaryButtomComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Spartan:wght@400;700&display=swap\");\n.container-card[_ngcontent-%COMP%] {\n  height: 245px;\n  width: 100%;\n  border-radius: 6px;\n  background-color: #fff;\n  box-shadow: 0 15px 30px 5px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin-bottom: 30px;\n}\n.container-card__container-image[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  height: 80px;\n  width: 80px;\n}\n.container-card__container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 100%;\n}\n.container-card__author-name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: Spartan, sans-serif;\n  font-weight: 700;\n  font-size: 18px;\n  color: #47535f;\n}\n.container-card__author-charge[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  font-family: Spartan, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  color: #47535f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcnktY2FyZC9zZWNvbmRhcnktY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R5bGVzL2Fic3RyYWNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUdSO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQ05jO0VET2QsOENBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0MzQmlCO0FEd0JyQjtBQU1FO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NuQ2lCO0FEK0JyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vjb25kYXJ5LWNhcmQvc2Vjb25kYXJ5LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhcnRhbjp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2Fic3RyYWNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRhaW5lci1jYXJkIHtcclxuICBoZWlnaHQ6IDI0NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgJl9fY29udGFpbmVyLWltYWdlIHsgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGFpbmVyLWltYWdlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX2F1dGhvci1uYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogU3BhcnRhbiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICB9XHJcblxyXG4gICZfX2F1dGhvci1jaGFyZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IFNwYXJ0YW4sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENPTE9SU1xyXG4kcHJpbWFyeS1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzM5OTdhYjtcclxuJHRlcnRpYXJ5LWNvbG9yOiAjZmYzNDgyO1xyXG4kYm9yZGVyLWNhcmQtY29sb3I6ICNkY2RjZGM7XHJcblxyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjNDc1MzVmO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondaryCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secondary-card',
                templateUrl: './secondary-card.component.html',
                styleUrls: ['./secondary-card.component.scss']
            }]
    }], function () { return []; }, { cardModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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