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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__issue_issue_module__ = __webpack_require__("../../../../../src/app/issue/issue.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/user/reset-password/reset-password.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__issue_issue_module__["a" /* IssueModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot([
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
                { path: 'reset-password/:resetauth', component: __WEBPACK_IMPORTED_MODULE_12__user_reset_password_reset_password_component__["a" /* ResetPasswordComponent */], pathMatch: 'full' },
                { path: '', redirectTo: 'login', pathMatch: 'full' }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppService = (function () {
    function AppService(http) {
        this.http = http;
        //private url= 'http://localhost:3001';
        this.url = 'https://api.sarthinow.club';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    AppService.prototype.getName = function () {
        this.Name = this.getUserInfoFromLocalstorage()["Name"];
        alert(this.Name);
        return this.Name;
    };
    AppService.prototype.getEmail = function () {
        this.Email = this.getUserInfoFromLocalstorage()["email"];
        return this.Email;
    };
    AppService.prototype.getauthToken = function () {
        this.authToken = __WEBPACK_IMPORTED_MODULE_4_ng2_cookies_ng2_cookies__["Cookie"].get('authtoken');
        console.log("Auth token:" + this.authToken);
        return this.authToken;
    };
    AppService.prototype.signupFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('Name', data.Name)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    };
    AppService.prototype.signinFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    };
    AppService.prototype.logoutFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('userId', data);
        this.getauthToken();
        return this.http.post(this.url + "/api/v1/users/logout?authToken=" + this.authToken, params);
    };
    AppService.prototype.raiseIssue = function (data) {
        this.getauthToken();
        return this.http.post(this.url + "/api/v1/users/issue?authToken=" + this.authToken, data);
    };
    AppService.prototype.getIssue = function (useremailId, skip) {
        this.getauthToken();
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('email', useremailId)
            .set('authToken', this.authToken);
        return this.http.post(this.url + "/api/v1/users/all/issue?skip=" + skip, params);
    };
    AppService.prototype.searchIssueservice = function (usersearch, skip) {
        this.getauthToken();
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('search', usersearch)
            .set('authToken', this.authToken);
        return this.http.post(this.url + "/api/v1/users/search?skip=" + skip, params);
    };
    AppService.prototype.viewsingleIssue = function (IssueId) {
        this.getauthToken();
        var myResposne = this.http.get(this.url + "/api/v1/users/view" + "/" + IssueId + ("?authToken=" + this.authToken));
        return myResposne;
    };
    AppService.prototype.editsingleissue = function (IssueId, data) {
        this.getauthToken();
        var myResposne = this.http.put(this.url + "/api/v1/users/edit" + "/" + IssueId + ("?authToken=" + this.authToken), data);
        return myResposne;
    };
    AppService.prototype.viewallComments = function (issueId, skip) {
        console.log(issueId);
        console.log(skip);
        this.getauthToken();
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('issueId', issueId)
            .set('authToken', this.authToken);
        return this.http.post(this.url + "/api/v1/users/view-comment?skip=" + skip, params);
    };
    AppService.prototype.postComment = function (comment, issueId, username) {
        this.getauthToken();
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('commenttext', comment)
            .set('authToken', this.authToken);
        var myResposne = this.http.post(this.url + '/api/v1/users/comment' + '/' + issueId + '/' + username, params);
        return myResposne;
    };
    AppService.prototype.addnewWatcher = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('IssueId', data.IssueId)
            .set('email', data.email);
        return this.http.post(this.url + "/api/v1/users/addwatcher", params);
    };
    AppService.prototype.viewWatcherUser = function (IssueId, email) {
        return this.http.get(this.url + '/api/v1/users/viewwatcher' + '/' + IssueId + '/' + email);
    };
    AppService.prototype.resetuserpassword = function (resetauth, password) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('password', password);
        return this.http.put(this.url + '/api/v1/users/reset-password' + '/' + resetauth, params);
    };
    AppService.prototype.emailVerify = function (email) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpParams */]()
            .set('email', email);
        return this.http.post(this.url + '/api/v1/users/email', params);
    };
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/issue/issue-create/issue-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchspace{\r\n    color: green;\r\n    margin-left:12%;\r\n    margin-right: 10%\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue/issue-create/issue-create.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<nav class=\"navbar  navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/create\">Create Issue</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/issue\">Issue</a>\n        </li>\n     <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/login\" (click)=\"logout()\">Logout</a>\n      </li>-->\n    </ul>\n    <!--<span class=\"my-2 my-lg-1 mr-2\">Hello</span>-->\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)] = \"searchText\">\n      <button class=\"btn btn-secondary my-2 my-sm-0 mr-3\"  type=\"submit\" [routerLink] = \"['/search',searchText]\">Search</button>\n      </form>\n        <app-user-details [userName]=\"loginUser\"></app-user-details>\n  </div>\n</nav>\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-8 searchspace\">\n        <h2 class=\"form-signin-heading\">Raise Issue</h2>\n  \n        <br>\n        <span>Title: </span>\n        <input type=\"text\" id=\"title\" class=\"form-control\" [(ngModel)]=\"title\" placeholder=\"Title\" required autofocus>\n        <br>\n        <span>Assignee Email: </span>\n         <input type=\"email\" id=\"assignemail\" class=\"form-control\" [(ngModel)]=\"assignemail\" placeholder=\"Email address\" required>\n         <br>\n         <span>Description: </span>\n         <input type=\"text\" id=\"description\" class=\"form-control\" [(ngModel)]=\"description\" placeholder=\"Description\" required autofocus>\n          <br>\n          <span>Status Of Code: </span>\n  \n         <select [(ngModel)]=\"status\" #Issuestatus=\"ngModel\" name=\"status\" class=\"form-control\"  id=\"Issuestatus\" required>\n          <option *ngFor=\"let Issuestatus of category\" [value]=\"Issuestatus\">{{Issuestatus}}</option>\n         </select>\n  \n          <br>\n  \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"createIssue()\">Create</button>\n  \n     </div>\n  </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/issue/issue-create/issue-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssueCreateComponent = (function () {
    function IssueCreateComponent(AppService, router, toastr, vcr) {
        var _this = this;
        this.AppService = AppService;
        this.router = router;
        this.toastr = toastr;
        this.category = ["backlog", "in-progress", "in-test", "done"];
        this.createIssue = function () {
            if (!_this.title) {
                _this.toastr.warning('Enter title of Issue');
            }
            else if (!_this.assignemail) {
                _this.toastr.warning('Enter the assignee emailId');
            }
            else if (!_this.description) {
                _this.toastr.warning('Enter the description of an Issue');
            }
            else if (!_this.status) {
                _this.toastr.warning('Select an status of Issue');
            }
            else {
                var data = {
                    title: _this.title,
                    assignemail: _this.assignemail,
                    description: _this.description,
                    status: _this.status,
                    reportername: _this.reportername,
                    reporteremail: _this.reporteremail
                };
                _this.AppService.raiseIssue(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Issue created sucessfully');
                        console.log(apiResponse);
                        setTimeout(function () {
                            _this.router.navigate(['/view', apiResponse.data.IssueId]);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            }
        };
        this.toastr.setRootViewContainerRef(vcr);
        this.loginUser = AppService.getName();
        this.reportername = this.loginUser;
        this.reporteremail = AppService.getEmail();
        alert(this.reporteremail);
    }
    IssueCreateComponent.prototype.ngOnInit = function () {
    };
    return IssueCreateComponent;
}());
IssueCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-issue-create',
        template: __webpack_require__("../../../../../src/app/issue/issue-create/issue-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issue/issue-create/issue-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], IssueCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=issue-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/issue/issue-edit/issue-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchspace{\r\n    color: green;\r\n    margin-left:12%;\r\n    margin-right: 10%\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue/issue-edit/issue-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<nav class=\"navbar  navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/create\">Create Issue</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/issue\">Issue</a>\n        </li>\n     <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/login\" (click)=\"logout()\">Logout</a>\n      </li>-->\n    </ul>\n    <!--<span class=\"my-2 my-lg-1 mr-2\">Hello</span>-->\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)] = \"searchText\">\n      <button class=\"btn btn-secondary my-2 my-sm-0 mr-3\"  type=\"submit\" [routerLink] = \"['/search',searchText]\">Search</button>\n      </form>\n        <app-user-details [userName]=\"loginUser\"></app-user-details>\n  </div>\n</nav>\n\n<div class=\"container\"  *ngIf=\"currentIssue\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-8 searchspace\">\n        <span>Title: </span>\n        <input type=\"text\" class=\"form-control\"  name=\"Issuetitle\" #title=\"ngModel\"[(ngModel)]=\"currentIssue.title\" placeholder=\"Title\" required autofocus>\n        <br>\n        <span>Assignee Email: </span>\n         <input type=\"email\" class=\"form-control\" name=\"Issueassignemail\" #assignemail=\"ngModel\"[(ngModel)]=\"currentIssue.assignemail\" placeholder=\"Email address\" required>\n         <br>\n         <span>Description: </span>\n         <input type=\"text\"  class=\"form-control\" name=\"Issuedescription\" #description=\"ngModel\" [(ngModel)]=\"currentIssue.description\" placeholder=\"Description\" required autofocus>\n          <br>\n          <span>Status Of Code: </span>\n  \n          <select [(ngModel)]=\"currentIssue.status\" #status=\"ngModel\" name=\"Issuestatus\" class=\"form-control\" id=\"category\" required>\n            <option>{{currentIssue.status}}</option>\n            <option *ngFor=\"let status of possibleCategories\" [value]=\"status\">{{status}}</option>\n          </select>\n          <br>\n          <button class=\"btn btn-lg btn-primary btn-block\"  type=\"button\" (click)=\"editIssue()\">Edit</button>\n\n    </div>\n    </div>\n    </div>\n   "

/***/ }),

/***/ "../../../../../src/app/issue/issue-edit/issue-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssueEditComponent = (function () {
    function IssueEditComponent(AppService, _route, router, toastr, vcr) {
        var _this = this;
        this.AppService = AppService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.possibleCategories = ["backlog", "in-progress", "in-test", "done"];
        this.viewIssue = function () {
            _this.AppService.viewsingleIssue(_this.IssueId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success(apiResponse.message);
                    _this.currentIssue = apiResponse.data;
                    _this.previous_assignemail = _this.currentIssue.assignemail;
                    _this.currentIssue.previousemail = _this.previous_assignemail;
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.editIssue = function () {
            console.log(_this.currentIssue);
            _this.AppService.editsingleissue(_this.IssueId, _this.currentIssue)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success(apiResponse.message);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.toastr.setRootViewContainerRef(vcr);
        this.loginUser = AppService.getName();
        this.email = AppService.getEmail();
        this.IssueId = this._route.snapshot.paramMap.get('IssueId');
    }
    IssueEditComponent.prototype.ngOnInit = function () {
        this.viewIssue();
    };
    return IssueEditComponent;
}());
IssueEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-issue-edit',
        template: __webpack_require__("../../../../../src/app/issue/issue-edit/issue-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issue/issue-edit/issue-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], IssueEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=issue-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/issue/issue-user/issue-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchspace{\r\n    color: green;\r\n    margin-left:12%;\r\n    margin-right: 10%\r\n}\r\n.moverightleft{\r\n    margin-left:50%;\r\n    margin-right: 20%\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue/issue-user/issue-user.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<nav class=\"navbar  navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/create\">Create Issue</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/issue\">Issue</a>\n        </li>\n     <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/login\" (click)=\"logout()\">Logout</a>\n      </li>-->\n    </ul>\n    <!--<span class=\"my-2 my-lg-1 mr-2\">Hello</span>-->\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)] = \"searchText\">\n      <button class=\"btn btn-secondary my-2 my-sm-0 mr-3\"  type=\"submit\" [routerLink] = \"['/search',searchText]\">Search</button>\n      </form>\n        <app-user-details [userName]=\"loginUser\"></app-user-details>\n  </div>\n</nav>\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-8 searchspace\">\n  \n  <span>Search: </span>\n\n  <label for=\"inputSearch\" class=\"sr-only\">Search</label>\n\n  <input type=\"text\" id=\"Search\" class=\"form-control\" [(ngModel)]=\"Search\" placeholder=\"Search in Grid\" required autofocus>\n  <br>\n  <table class=\"table table-hover table-bordered\">\n    <thead class=\"thead thead-light fixed\">\n      <tr>\n        <th scope=\"col\" (click)=\"sort('status')\">Status\n          <i class=\"fa fa-chevron-up\"  *ngIf=\"key == 'status' && reverse === false\" ></i>\n          <i class=\"fa fa-chevron-down\" *ngIf=\"key == 'status' && reverse === true\"></i>\n        </th>\n       \n        <th scope=\"col\" (click)=\"sort('title')\">Title\n          <i class=\"fa fa-chevron-up\" *ngIf=\"key == 'title' && reverse === false\" ></i>\n          <i class=\"fa fa-chevron-down\" *ngIf=\"key == 'title' && reverse === true\"></i>\n        </th>\n        \n        <th scope=\"col\" (click)=\"sort('reporteremail')\">Reporter\n          <i class=\"fa fa-chevron-up\" *ngIf=\" key == 'reporteremail' && reverse === false\" ></i>\n          <i class=\"fa fa-chevron-down\" *ngIf=\" key == 'reporteremail' && reverse === true\"></i>\n        </th>\n        <th scope=\"col\" (click)=\"sort('date')\">Date\n          <i class=\"fa fa-chevron-up\" *ngIf=\" key == 'date' && reverse === false\" ></i>\n          <i class=\"fa fa-chevron-down\" *ngIf=\" key == 'date' && reverse === true\"></i>\n        </th>\n  \n      </tr>\n    </thead>\n  \n    <tbody *ngIf = \"allIssue\" class=\"table-striped\">\n     <tr class=\"table-default thead-dark\" [routerLink] = \"['/view',issue.IssueId]\" *ngFor = \"let issue of allIssue | orderBy: key : reverse | filter : Search\">\n        <td>{{issue.status}}</td>\n        <td>{{issue.title}}</td>\n        <td>{{issue.reportername}}</td>\n        <td>{{issue.createdOn | date}}</td>\n  \n        </tr>\n    </tbody>\n    </table>\n    <div class=\"row\">\n      <div class=\"col-sm-6\" >\n          <button class=\"btn btn-secondary moverightleft\" type=\"button\" (click)='listPreviousIssues()' value=\"Previous\">Prev</button>\n    </div>\n    <div class=\"col-sm-4\" >\n        <button class=\"btn btn-secondary moverightleft\" type=\"button\" (click)='listMoreIssues()' value=\"Next\">Next</button>\n      \n      </div>\n    </div>\n\n  </div>\n</div>\n</div>\n\n  \n\n  \n\n\n    "

/***/ }),

/***/ "../../../../../src/app/issue/issue-user/issue-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssueUserComponent = (function () {
    function IssueUserComponent(AppService, router, toastr, vcr) {
        var _this = this;
        this.AppService = AppService;
        this.router = router;
        this.toastr = toastr;
        this.pageValue = 1;
        this.getAllIssue = function () {
            _this.AppService.getIssue(_this.email, _this.pageValue)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.allIssue = apiResponse.data;
                    console.log(_this.allIssue);
                }
                else {
                    _this.toastr.success(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.listMoreIssues = function () {
            _this.pageValue = _this.pageValue + 1;
            _this.allIssue = [];
            _this.getAllIssue();
        };
        this.listPreviousIssues = function () {
            _this.pageValue = _this.pageValue - 1;
            if (_this.pageValue < 1) {
                _this.pageValue = 1;
                _this.toastr.error('Page value cant be less then 1');
            }
            else {
                _this.allIssue = [];
                _this.getAllIssue();
            }
        };
        this.toastr.setRootViewContainerRef(vcr);
        this.loginUser = AppService.getName();
        alert(this.loginUser);
        this.email = AppService.getEmail();
    }
    IssueUserComponent.prototype.ngOnInit = function () {
        this.getAllIssue();
    };
    return IssueUserComponent;
}());
IssueUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-issue-user',
        template: __webpack_require__("../../../../../src/app/issue/issue-user/issue-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issue/issue-user/issue-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], IssueUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=issue-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/issue/issue-view/issue-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchspace{\r\n    color: green;\r\n    margin-left:12%;\r\n    margin-right: 10%\r\n}\r\n.time-right {\r\n    float: right;\r\n    color: #aaa;\r\n  }\r\n  .darker {\r\n    border-color: #ccc;\r\n    background-color: #ddd;\r\n   \r\n  }\r\n  .center {\r\n    text-align: center\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue/issue-view/issue-view.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<nav class=\"navbar  navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/create\">Create Issue</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/issue\">Issue</a>\n        </li>\n     <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/login\" (click)=\"logout()\">Logout</a>\n      </li>-->\n    </ul>\n    <!--<span class=\"my-2 my-lg-1 mr-2\">Hello</span>-->\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)] = \"searchText\">\n      <button class=\"btn btn-secondary my-2 my-sm-0 mr-3\"  type=\"submit\" [routerLink] = \"['/search',searchText]\">Search</button>\n      </form>\n        <app-user-details [userName]=\"loginUser\"></app-user-details>\n  </div>\n</nav>\n<div class=\"container\" *ngIf=\"currentIssue\" style=\"border: 1px solid black\">\n  <div class=\"row\">\n      <div class=\"col-12\" style=\"color: green;\">Reporter Name: {{currentIssue.reportername}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\" style=\"color: green;\">Assignee Email: {{currentIssue.assignemail}}</div>\n   </div>\n   <div class=\"row\">\n    <div class=\"col-12\" style=\"color: green;\">Craeted Date: {{currentIssue.createdOn | date}}</div>\n   </div>\n</div>\n<div class=\"container\" style=\"border: 1px solid black\">\n  <div class=\"row\">\n      <div class=\"col-12\" style=\"color: green;\">Issue Title: {{currentIssue.title}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\" style=\"color: green;\">Issue Description: {{currentIssue.description}}</div>\n   </div>\n   <div class=\"row\">\n    <div class=\"col-12\" style=\"color: green;\">Issue status: {{currentIssue.status}}</div>\n   </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/edit',currentIssue.IssueId]\">Edit</a>\n  </div>\n  <div class=\"col-6\" *ngIf=\"watcherMember\">\n    <a class=\"btn btn-primary\" id=\"test\" style=\"float:left;\" (click) = \"addWatcher()\">Watcher</a>\n  </div>\n  </div>\n</div>\n<h4 class=\"center\" style=\"color: green;\">Comments</h4>\n<!--<div #scrollMe [scrollTop]=\"(scrollToChatTop)?0:scrollMe.scrollHeight\"  *ngIf=\"previousData\">!-->\n    <ul *ngIf=\"previousData\">\n\n        <p class=\"center\" (click)=\"listMoreIssues()\">Load Previous comment</p>\n        <p class=\"center\" *ngIf=\"loadingPreviouscomment == true\">Loading...</p>\n      </ul>\n      \n        <div class=\"container card\">\n          <div class=\"form-group\">\n            <div class=\"card card-body\" *ngIf = \"commentsList\">\n                <table class=\"table table \">\n                    <thead class=\"thead-dark\">\n                      <tr>\n                        <th scope=\"col\">Commentor</th>\n                        <th scope=\"col\">comments</th>\n                      </tr>\n                    </thead>\n      \n                    <tbody *ngIf = \"commentsList\" class=\"table-striped \">\n                        <tr class=\"table-default\" *ngFor = \"let comment of commentsList\">\n                           <td id = \"commentor\">{{comment.commentuser}}</td>\n                           <td id=\"commentText\">{{comment.commenttext}}</td>\n                           </tr>\n                       </tbody>\n                       </table>\n              <div *ngFor = \"let comment of commentsList\">\n                \n              </div>\n            </div>\n\n<!--</div>-->\n<div class=\"container\">\n  <div class=\"row\">\n<button type = \"submit\" class=\"btn btn-lg btn-info\" style=\"float:right;\" (click) = \"comment()\">Post</button>\n<textarea class=\"form-control\" name = \"comment\" [(ngModel)] = \"postissueComment\"id=\"postissueCommentArea\" rows=\"3\" spellcheck=\"false\"  placeholder=\"Enter your comment here\"></textarea>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/issue/issue-view/issue-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IssueViewComponent = (function () {
    function IssueViewComponent(AppService, _route, router, toastr, vcr) {
        var _this = this;
        this.AppService = AppService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.currentIssue = [];
        this.commentsList = [];
        this.pageValue = 1;
        this.scrollToChatTop = false;
        this.loadingPreviouscomment = false;
        this.previousData = [];
        this.watcherMember = true;
        this.viewIssue = function () {
            _this.AppService.viewsingleIssue(_this.IssueId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success(apiResponse.message);
                    _this.currentIssue = apiResponse.data;
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.viewComment = function () {
            _this.AppService.viewallComments(_this.IssueId, _this.pageValue)
                .subscribe(function (apiResonse) {
                if (apiResonse.status === 200) {
                    _this.toastr.success(apiResonse.message);
                    _this.previousData = _this.commentsList.concat(apiResonse.data);
                    _this.commentsList = _this.previousData;
                    console.log(_this.commentsList);
                    setTimeout(function () {
                        _this.loadingPreviouscomment = false;
                    }, 2000);
                }
                else {
                    setTimeout(function () {
                        _this.loadingPreviouscomment = false;
                    }, 2000);
                    _this.toastr.error(apiResonse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.listMoreIssues = function () {
            _this.pageValue = _this.pageValue + 1;
            _this.scrollToChatTop = true;
            _this.loadingPreviouscomment = true;
            _this.viewComment();
        };
        this.comment = function () {
            _this.AppService.postComment(_this.postissueComment, _this.IssueId, _this.loginUser)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success(apiResponse.message);
                    _this.previousData = _this.commentsList.concat(apiResponse.data);
                    _this.commentsList = _this.previousData;
                    _this.postissueComment = "";
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.addWatcher = function () {
            var data = {
                IssueId: _this.IssueId,
                email: _this.email
            };
            _this.AppService.addnewWatcher(data).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success(apiResponse.message);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.viewWatcher = function () {
            _this.AppService.viewWatcherUser(_this.IssueId, _this.email).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.watcherMember = false;
                    alert(_this.watcherMember);
                    _this.toastr.success(apiResponse.message);
                }
                else {
                    _this.watcherMember = true;
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.toastr.setRootViewContainerRef(vcr);
        this.loginUser = AppService.getName();
        this.email = AppService.getEmail();
        this.IssueId = this._route.snapshot.paramMap.get('IssueId');
    }
    IssueViewComponent.prototype.ngOnInit = function () {
        this.viewWatcher();
        this.viewIssue();
        this.viewComment();
    };
    return IssueViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], IssueViewComponent.prototype, "scrollMe", void 0);
IssueViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-issue-view',
        template: __webpack_require__("../../../../../src/app/issue/issue-view/issue-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issue/issue-view/issue-view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object])
], IssueViewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=issue-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/issue/issue.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__issue_user_issue_user_component__ = __webpack_require__("../../../../../src/app/issue/issue-user/issue-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__("../../../../../src/app/issue/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__issue_create_issue_create_component__ = __webpack_require__("../../../../../src/app/issue/issue-create/issue-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__issue_view_issue_view_component__ = __webpack_require__("../../../../../src/app/issue/issue-view/issue-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__issue_edit_issue_edit_component__ = __webpack_require__("../../../../../src/app/issue/issue-edit/issue-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var IssueModule = (function () {
    function IssueModule() {
    }
    return IssueModule;
}());
IssueModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forChild([
                { path: 'issue', component: __WEBPACK_IMPORTED_MODULE_2__issue_user_issue_user_component__["a" /* IssueUserComponent */] },
                { path: 'create', component: __WEBPACK_IMPORTED_MODULE_12__issue_create_issue_create_component__["a" /* IssueCreateComponent */] },
                { path: 'search/:searchText', component: __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */], pathMatch: 'full' },
                { path: 'view/:IssueId', component: __WEBPACK_IMPORTED_MODULE_13__issue_view_issue_view_component__["a" /* IssueViewComponent */], pathMatch: 'full' },
                { path: 'edit/:IssueId', component: __WEBPACK_IMPORTED_MODULE_14__issue_edit_issue_edit_component__["a" /* IssueEditComponent */], pathMatch: 'full' }
            ]),
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__issue_user_issue_user_component__["a" /* IssueUserComponent */], __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_12__issue_create_issue_create_component__["a" /* IssueCreateComponent */], __WEBPACK_IMPORTED_MODULE_13__issue_view_issue_view_component__["a" /* IssueViewComponent */], __WEBPACK_IMPORTED_MODULE_14__issue_edit_issue_edit_component__["a" /* IssueEditComponent */]]
    })
], IssueModule);

//# sourceMappingURL=issue.module.js.map

/***/ }),

/***/ "../../../../../src/app/issue/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchspace{\r\n    color: green;\r\n    margin-left:12%;\r\n    margin-right: 10%\r\n}\r\n.moverightleft{\r\n    margin-left:50%;\r\n    margin-right: 20%\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<nav class=\"navbar  navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/create\">Create Issue</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/issue\">Issue</a>\n      </li>\n     <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/login\" (click)=\"logout()\">Logout</a>\n      </li>-->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" name=\"search\" placeholder=\"Search\" [(ngModel)] = \"searchText\">\n        <button class=\"btn btn-secondary my-2 my-sm-0 mr-3\"  (click)='listsearch()'>Search</button>\n      </form>\n        <app-user-details [userName]=\"loginUser\"></app-user-details>\n  </div>\n</nav>\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-8 searchspace\">\n\n<span>Search: </span>\n\n<label for=\"inputSearch\" class=\"sr-only\">Search</label>\n\n<input type=\"text\" id=\"SearchPlace\" class=\"form-control\" [(ngModel)]=\"SearchPlace\" placeholder=\"Search in Grid\" required autofocus>\n<br>\n<table class=\"table table-hover table-bordered\">\n  <thead class=\"thead thead-light fixed\">\n    <tr>\n      <th scope=\"col\" (click)=\"sort('status')\">Status\n        <i class=\"fa fa-chevron-up\"  *ngIf=\"key == 'status' && reverse === false\" ></i>\n        <i class=\"fa fa-chevron-down\" *ngIf=\"key == 'status' && reverse === true\"></i>\n      </th>\n     \n      <th scope=\"col\" (click)=\"sort('title')\">Title\n        <i class=\"fa fa-chevron-up\" *ngIf=\"key == 'title' && reverse === false\" ></i>\n        <i class=\"fa fa-chevron-down\" *ngIf=\"key == 'title' && reverse === true\"></i>\n      </th>\n      \n      <th scope=\"col\" (click)=\"sort('reporteremail')\">Reporter\n        <i class=\"fa fa-chevron-up\" *ngIf=\" key == 'reporteremail' && reverse === false\" ></i>\n        <i class=\"fa fa-chevron-down\" *ngIf=\" key == 'reporteremail' && reverse === true\"></i>\n      </th>\n      <th scope=\"col\" (click)=\"sort('date')\">Date\n        <i class=\"fa fa-chevron-up\" *ngIf=\" key == 'date' && reverse === false\" ></i>\n        <i class=\"fa fa-chevron-down\" *ngIf=\" key == 'date' && reverse === true\"></i>\n      </th>\n\n    </tr>\n  </thead>\n\n  <tbody *ngIf = \"allsearchIssue\" class=\"table-striped\">\n   <tr class=\"table-default thead-dark\" [routerLink] = \"['/view',searchIssuedata.IssueId]\" *ngFor = \"let searchIssuedata of allsearchIssue | filter : SearchPlace\">\n      <td>{{searchIssuedata.status}}</td>\n      <td>{{searchIssuedata.title}}</td>\n      <td>{{searchIssuedata.reportername}}</td>\n      <td>{{searchIssuedata.createdOn | date}}</td>\n\n      </tr>\n  </tbody>\n  </table>\n  <div class=\"row\">\n    <div class=\"col-sm-6\" >\n        <button class=\"btn btn-secondary moverightleft\" type=\"button\" (click)='listPreviousIssues()' value=\"Previous\">Prev</button>\n  </div>\n  <div class=\"col-sm-4\" >\n      <button class=\"btn btn-secondary moverightleft\" type=\"button\" (click)='listMoreIssues()' value=\"Next\">Next</button>\n    \n    </div>\n  </div>\n\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/issue/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(_route, router, AppService, toastr, vcr) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.AppService = AppService;
        this.toastr = toastr;
        this.pageValue = 1;
        this.searchIssuedetail = function () {
            _this.AppService.searchIssueservice(_this.searchIssue, _this.pageValue)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.allsearchIssue = apiResponse.data;
                    console.log(_this.allsearchIssue);
                }
                else {
                    _this.allsearchIssue = [];
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.listMoreIssues = function () {
            _this.pageValue = _this.pageValue + 1;
            _this.allsearchIssue = [];
            _this.searchIssuedetail();
        };
        this.listPreviousIssues = function () {
            _this.pageValue = _this.pageValue - 1;
            if (_this.pageValue < 1) {
                _this.pageValue = 1;
                _this.toastr.error('Page value cant be less then 1');
            }
            else {
                _this.allsearchIssue = [];
                _this.searchIssuedetail();
            }
        };
        this.listsearch = function () {
            _this.searchIssue = _this.searchText;
            _this.searchIssuedetail();
        };
        this.toastr.setRootViewContainerRef(vcr);
        this.loginUser = AppService.getName();
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchIssue = this._route.snapshot.paramMap.get('searchText');
        this.searchIssuedetail();
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/issue/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/issue/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], SearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_details_user_details_component__ = __webpack_require__("../../../../../src/app/shared/user-details/user-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__user_details_user_details_component__["a" /* UserDetailsComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__user_details_user_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user-details/user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"my-2 my-lg-1 mr-1\">\n    <h4 style=\"color:aqua\"> {{firstName}} <i class=\"fa fa-sign-out\" style=\"font-size:20px;color:blue\" (click)=\"goToLogout()\"></i>\n    </h4>\n</span>"

/***/ }),

/***/ "../../../../../src/app/shared/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = (function () {
    function UserDetailsComponent(AppService, router, toastr, vcr) {
        var _this = this;
        this.AppService = AppService;
        this.router = router;
        this.toastr = toastr;
        this.goToLogout = function () {
            var UserId = _this.AppService.getUserInfoFromLocalstorage()["userId"];
            _this.AppService.logoutFunction(UserId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success('Logout successful');
                    setTimeout(function () {
                        _this.router.navigate(['/']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.fullname = this.userName.split(" ");
        this.firstName = this.fullname[0];
    };
    return UserDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserDetailsComponent.prototype, "userName", void 0);
UserDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__("../../../../../src/app/shared/user-details/user-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/user-details/user-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], UserDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Reset Password</h2>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Enter Password</label>\n\n    <input type=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"emailFunction()\">Submit</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(AppService, _route, router, toastr, vcr) {
        var _this = this;
        this.AppService = AppService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.emailFunction = function () {
            _this.AppService.emailVerify(_this.email)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success(apiResponse.message);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__("../../../../../src/app/user/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/forgot-password/forgot-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], ForgotPasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n  \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n      <span class=\"navbar-toggler-icon\"></span>\n  \n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n  \n      <ul class=\"navbar-nav\">\n  \n        <li class=\"nav-item\">\n  \n          <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n  \n        </li>\n  \n      </ul>\n  \n    </div>\n  \n  </nav>\n  \n  <div class=\"row p-0 m-0\">\n  \n    <div class=\"col-sm\"></div>\n  \n    <div class=\"col-sm p-5\">\n  \n      <h2 class=\"form-signin-heading\">Please sign in</h2>\n  \n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  \n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n  \n      <br>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n  \n      <br>\n  \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n\n      <br>\n\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"forgotPassword()\">Forgot Password</button>\n\n      <a href=\"/auth/google\"> <button class=\"btn btn-lg btn-primary btn-block\"type=\"button\">Facebook</button></a>\n    </div>\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.forgotPassword = function () {
            _this.router.navigate(['/forgot-password']);
        };
        this.goToSignUp = function () {
            _this.router.navigate(['/sign-up']);
        };
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    alert(apiResponse.message);
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        console.log(apiResponse.data.authToken);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('UserId', apiResponse.data.userDetails.userId);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('Userdetail', apiResponse.data.userDetails.Name + ' ' + apiResponse.data.userDetails.email + '' + apiResponse.data.authToken);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        console.log(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('authtoken'));
                        // alert(this.appService.getUserInfoFromLocalstorage()["userId"]);
                        alert(_this.appService.getName());
                        _this.toastr.success('Signin successful');
                        _this.router.navigate(['/issue']);
                    }
                    else if (apiResponse.status == 404) {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signinFunction
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Reset Password</h2>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Enter Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"retypepassword\" class=\"form-control\" [(ngModel)]=\"retypepassword\" #confirmpassword=\"ngModel\" (focusout) =\"verifyPassword()\" placeholder=\"Password\" required>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"resetFunction()\">Submit</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(AppService, _route, router, toastr, vcr) {
        var _this = this;
        this.AppService = AppService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.verifyPassword = function (event) {
            if (_this.retypepassword != _this.password) {
                _this.toastr.warning('Password doesnt match');
            }
            else {
                _this.toastr.success('Input and confirm passowrd match');
            }
        };
        this.resetFunction = function () {
            _this.AppService.resetuserpassword(_this.resetauth, _this.password)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success(apiResponse.message);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        };
        this.toastr.setRootViewContainerRef(vcr);
        this.resetauth = this._route.snapshot.paramMap.get('resetauth');
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__("../../../../../src/app/user/reset-password/reset-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/reset-password/reset-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], ResetPasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">Issue Tracker</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Sign Up</h2>\n\n    <br>\n\n    <span>Name: </span>\n\n    <label for=\"inputFirstName\" class=\"sr-only\">Name</label>\n\n    <input type=\"text\" id=\"Name\" class=\"form-control\" [(ngModel)]=\"Name\" placeholder=\"Name\" required autofocus>\n\n    <br>\n\n\n    <span>Email: </span>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"email\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n    <br>\n\n    <span>Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"password\" #userpassword=\"ngModel\" placeholder=\"Password\" required>\n\n    <br>\n    <span>Retype-Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"retypepassword\" class=\"form-control\" [(ngModel)]=\"retypepassword\" #confirmpassword=\"ngModel\" (focusout) =\"verifyPassword()\" placeholder=\"Password\" required>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.verifyPassword = function (event) {
            if (_this.retypepassword != _this.password) {
                _this.toastr.warning('Password doesnt match');
                _this.result = 'False';
            }
            else {
                _this.result = 'True';
            }
        };
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        };
        this.signupFunction = function () {
            if (!_this.Name) {
                _this.toastr.warning('enter your name');
            }
            else if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    Name: _this.Name,
                    email: _this.email,
                    password: _this.password
                };
                console.log(data);
                if (_this.result == 'True') {
                    _this.appService.signupFunction(data)
                        .subscribe(function (apiResponse) {
                        console.log(apiResponse);
                        if (apiResponse.status === 200) {
                            _this.toastr.success('Signup successful');
                            setTimeout(function () {
                                _this.goToSignIn();
                            }, 2000);
                        }
                        else {
                            _this.toastr.error(apiResponse.message);
                        }
                    }, function (err) {
                        _this.toastr.error('some error occured');
                    });
                } // end condition
            }
        }; // end signupFunction
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/user/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], SignupComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/user/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/user/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forChild([
                { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
                { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_9__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] }
            ])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__reset_password_reset_password_component__["a" /* ResetPasswordComponent */], __WEBPACK_IMPORTED_MODULE_9__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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