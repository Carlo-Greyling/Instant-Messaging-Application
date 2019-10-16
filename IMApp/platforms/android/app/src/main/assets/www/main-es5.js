(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-window/chat-window.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-window/chat-window.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <title>Chat</title>\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css\">\r\n  <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js\"></script>\r\n</head>\r\n\r\n<body>\r\n<div class=\"container-fluid h-100\">\r\n  <div class=\"row justify-content-center h-100\">\r\n    <div class=\"col-md-4 col-xl-3 chat\"><div class=\"card mb-sm-3 mb-md-0 contacts_card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" placeholder=\"Search...\" name=\"\" class=\"form-control search\" id=\"searchID\" (keyup)=\"searchContacts()\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text search_btn\"><i class=\"fas fa-search\"></i></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body contacts_body\">\r\n        <ul class=\"contacts\" id=\"contactsUL\">\r\n          <li class=\"active\">\r\n            <div id=\"{{ i.userID }}\" class=\"d-flex bd-highlight contactList\" *ngFor=\"let i of users\" (click)=\"setActiveContact(i.userID)\">\r\n              <div class=\"img_cont\">\r\n                <img\r\n                  id=\"profile-picture\"\r\n                  src= \"{{ i.profilePicture }}\"\r\n                  class=\"rounded-circle user_img\"\r\n                >\r\n                <!-- img src=\"\" alt=\"\" (click)=\"enlargeImg()\" -->\r\n\r\n                <span class=\"{{ i.onlineIcon }}\"></span>\r\n\r\n                <!--  HTML for Modal image  -->\r\n                <div id=\"myModal\" class=\"modal\">\r\n                  <!-- The Close Button -->\r\n                  <!-- span class=\"close\" (click)=\"closeModal()\">&times;</span -->\r\n                  <span class=\"close\">&times;</span>\r\n                  <!-- Modal Content (The Image) -->\r\n                  <img class=\"modal-content\" id=\"img01\">\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Footer containing online status  -->\r\n              <div class=\"user_info\">\r\n                <span>{{ i.name }}</span>\r\n                <p>{{ i.status }}</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <hr class=\"end-of-chat\">\r\n        <hr class=\"end-of-chat\">\r\n      </div>\r\n      <div class=\"card-footer\"></div>\r\n    </div></div>\r\n    <div class=\"col-md-8 col-xl-6 chat\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header msg_head\">\r\n          <div class=\"d-flex bd-highlight\">\r\n            <div class=\"img_cont\">\r\n              <img src=\"{{ this.activeProfilePicture }}\" class=\"rounded-circle user_img\">\r\n              <span class=\"online_icon\"></span>\r\n            </div>\r\n            <div class=\"user_info\">\r\n              <span>Chat with {{ this.activeContactName }}</span>\r\n              <p>{{ message.length + ' messages' }}</p>\r\n            </div>\r\n            <div class=\"video_cam\">\r\n              <span><i id=\"video-call\" class=\"fas fa-video\" (click)=\"videoCalling()\"></i></span>\r\n              <span><i class=\"fas fa-phone\" (click)=\"voiceCalling()\"></i></span>\r\n            </div>\r\n          </div>\r\n          <span id=\"action_menu_btn\" (click)=\"openSettings()\"><i id=\"settings\" class=\"fas fa-ellipsis-v\"></i></span>\r\n        </div>\r\n        <div id=\"bodydiv\" style=\"overflow: auto; display: flex; flex-direction: column-reverse;\" class=\"card-body msg_card_body\">\r\n\r\n          <div class=\"d-flex justify-content-start mb-4\"\r\n          *ngFor=\"let i of message\">\r\n\r\n            <!-- Plain Text -->\r\n              <div *ngIf=\"i.msgType === 'msgText'\"\r\n                [ngClass]=\"{ 'msg_container_send': i.msgID === thisUserID, 'msg_container': i.msgID !== thisUserID }\">\r\n                {{ i.msgContents }}\r\n                <span\r\n                  [ngClass]=\"{ 'msg_time_send': i.msgID === thisUserID, 'msg_time': i.msgID !== thisUserID }\">\r\n                {{ i.arrivalTime }}\r\n              </span>\r\n              </div>\r\n\r\n            <!-- Images -->\r\n            <div *ngIf=\"i.msgType === 'msgImage'\"\r\n                 [ngClass]=\"{ 'msg_container_send': i.msgID === thisUserID, 'msg_container': i.msgID !== thisUserID }\" style=\"padding-left: 1px; padding-right: 1px\">\r\n              <img src=\"{{ i.msgContents }}\" style=\"width: 80%; display: block; margin-left: auto; margin-right: auto\">\r\n              <span\r\n                [ngClass]=\"{ 'msg_time_send': i.msgID === thisUserID, 'msg_time': i.msgID !== thisUserID }\">\r\n                {{ i.arrivalTime }}\r\n              </span>\r\n            </div>\r\n\r\n            <!-- Video -->\r\n            <div *ngIf=\"i.msgType === 'msgVideo'\"\r\n                 [ngClass]=\"{ 'msg_container_send': i.msgID === thisUserID, 'msg_container': i.msgID !== thisUserID }\">\r\n              {{ i.msgContents }}\r\n              <span\r\n                [ngClass]=\"{ 'msg_time_send': i.msgID === thisUserID, 'msg_time': i.msgID !== thisUserID }\">\r\n                {{ i.arrivalTime }}\r\n              </span>\r\n            </div>\r\n\r\n            <!-- Audio -->\r\n            <div *ngIf=\"i.msgType === 'msgAudio'\"\r\n                 [ngClass]=\"{ 'msg_container_send': i.msgID === thisUserID, 'msg_container': i.msgID !== thisUserID }\">\r\n              {{ i.msgContents }}\r\n              <span\r\n                [ngClass]=\"{ 'msg_time_send': i.msgID === thisUserID, 'msg_time': i.msgID !== thisUserID }\">\r\n                {{ i.arrivalTime }}\r\n              </span>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text attach_btn\"><a id=\"attachment\" (click)=\"OpenMultiMedia()\" class=\"fas fa-paperclip\"></a></span>\r\n            </div>\r\n            <input id=\"msgContainer\" (keydown.enter)=\"onGenerateNewMessage()\" type=\"text\" class=\"form-control type_msg\" placeholder=\"Type your message...\" [(ngModel)]=\"newMessage\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text send_btn\" (click)=\"onGenerateNewMessage()\"><i class=\"fas fa-location-arrow\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</body>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\r\n  <form (ngSubmit)=\"LogIn(f)\" #f=\"ngForm\">\r\n    <mat-card style=\"text-align: center; padding: 32px;\">\r\n      <img\r\n        class=\"center\"\r\n        mat-card-image\r\n        src=\"https://imgb.apk.tools/300/d/f/7/com.futurebits.instamessage.free.png\"\r\n        alt=\"app logo\">\r\n      <mat-card-content>\r\n        <h4>Welcome to InstaMessage.</h4>\r\n        <h4>{{ signInMessage }}</h4>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            id=\"usernameInput\"\r\n            class=\"form-control\"\r\n            placeholder=\"Mobile Number\"\r\n            name=\"username\"\r\n            ngModel\r\n            required>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            id=\"passwordInput\"\r\n            class=\"form-control\"\r\n            placeholder=\"Password\"\r\n            type=\"password\"\r\n            name=\"password\"\r\n            ngModel\r\n            required>\r\n        </mat-form-field>\r\n\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button\r\n          type=\"submit\"\r\n          style=\"color: white;\"\r\n          mat-raised-button color=\"primary\">Log In\r\n        </button>\r\n      </mat-card-actions>\r\n      <p>Not A Member?</p>\r\n      <button\r\n        (click)=\"onSignUpClicked()\"\r\n        type=\"signUp\"\r\n        style=\"color: white;\"\r\n        mat-raised-button color=\"primary\">Sign Up\r\n      </button>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/multimedia/multimedia.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/multimedia/multimedia.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <button mat-button (click)=\"ImageFile.click()\"><mat-icon class=\"IconStyle\">perm_media</mat-icon></button>\r\n    <input hidden type=\"file\" accept=\"image/gif, image/jpeg, image/png\" id=\"Image\" #ImageFile (change)=\"OpenImage($event)\">\r\n\r\n    <button mat-button (click)=\"VideoFile.click()\"><mat-icon class=\"IconStyle\">movie</mat-icon></button>\r\n    <input hidden type=\"file\" accept=\"video/mp4,video/x-m4v,video/*\" id=\"Video\" #VideoFile (change)=\"OpenVideo($event)\">\r\n\r\n    <button mat-button (click)=\"AudioFile.click()\"><mat-icon class=\"IconStyle\">queue_music</mat-icon></button>\r\n    <input hidden type=\"file\" accept=\"audio/*\" id=\"Audio\"#AudioFile (change)=\"OpenAudio($event)\">\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-div\">\r\n  <form #f=\"ngForm\">\r\n    <mat-card style=\"text-align: center; padding: 32px;\">\r\n      <img\r\n        class=\"center\"\r\n        mat-card-image\r\n        src=\"https://imgb.apk.tools/300/d/f/7/com.futurebits.instamessage.free.png\"\r\n        alt=\"app logo\">\r\n      <mat-card-content>\r\n        <h4>Sign Up For InstaMessage</h4>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            id=\"mobileNum\"\r\n            class=\"form-control\"\r\n            placeholder=\"Mobile Number\"\r\n            name=\"userId\"\r\n            ngModel\r\n            required>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            id=\"name\"\r\n            class=\"form-control\"\r\n            placeholder=\"Full Name\"\r\n            name=\"name\"\r\n            ngModel\r\n            required>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            id=\"passwordInput\"\r\n            class=\"form-control\"\r\n            placeholder=\"Password\"\r\n            type=\"password\"\r\n            name=\"password\"\r\n            ngModel\r\n            required>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <input\r\n            matInput\r\n            id=\"confirmPwInput\"\r\n            class=\"form-control\"\r\n            placeholder=\"Confirm Password\"\r\n            name=\"confirmPW\"\r\n            ngModel\r\n            required>\r\n        </mat-form-field>\r\n          <button mat-raised-button (click)=\"ImageFile.click()\" color=\"primary\">Upload Profile Picture</button>\r\n          <input hidden type=\"file\" accept=\"image/gif, image/jpeg, image/png\" id=\"Image\" #ImageFile (change)=\"OpenImage($event)\">\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button\r\n          (click)=\"SignUp(f)\"\r\n          type=\"submit\"\r\n          style=\"color: white;\"\r\n          mat-raised-button color=\"primary\">Sign Up\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-calling/video-calling.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-calling/video-calling.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"remote-containers\">\r\n  <div class=\"remote_calls\" *ngFor=\"let remote of remoteCalls;\" [id]=\"remote\">\r\n  </div>\r\n</div>\r\n\r\n<div id=\"agora_local\">\r\n</div>\r\n\r\n<button (click)=\"startCall()\">Start Call</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-settings/viewsettings.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-settings/viewsettings.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Not Working Yet -->\r\n<ul style=\"list-style-type: none\">\r\n  <li>\r\n    <a style=\"color: black;\" href=\"http://localhost:4200/view-settings/system.php?c=restart\"><mat-icon class=\"IconStyle\">settings_backup_restore</mat-icon>Restart</a>\r\n  </li>\r\n  <li>\r\n    <a style=\"color: black;\" href=\"system.php?c=shutdown\"><mat-icon class=\"IconStyle\">power_settings_new</mat-icon>Shutdown</a>\r\n  </li>\r\n  <li (click)=\"selectTheme()\">\r\n    <a style=\"color: black;\" href=\"\\chatWindow\"><mat-icon class=\"IconStyle\">opacity</mat-icon>Theme</a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/voice-calling/voice-calling.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/voice-calling/voice-calling.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"remote-containers\">\r\n  <div class=\"remote_calls\" *ngFor=\"let remote of remoteCalls;\" [id]=\"remote\">\r\n  </div>\r\n</div>\r\n\r\n<div id=\"agora_local\">\r\n</div>\r\n\r\n<button (click)=\"startCall()\">Start Call</button>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
/* harmony import */ var _video_calling_video_calling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-calling/video-calling.component */ "./src/app/video-calling/video-calling.component.ts");
/* harmony import */ var _voice_calling_voice_calling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voice-calling/voice-calling.component */ "./src/app/voice-calling/voice-calling.component.ts");








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'chatWindow', component: _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_5__["ChatWindowComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'videoCalling', component: _video_calling_video_calling_component__WEBPACK_IMPORTED_MODULE_6__["VideoCallingComponent"] },
    { path: 'voiceCalling', component: _voice_calling_voice_calling_component__WEBPACK_IMPORTED_MODULE_7__["VoiceCallingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _video_calling_video_calling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-calling/video-calling.component */ "./src/app/video-calling/video-calling.component.ts");
/* harmony import */ var _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multimedia/multimedia.component */ "./src/app/multimedia/multimedia.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
/* harmony import */ var _shared_share_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/share.module */ "./src/app/shared/share.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_Encoder_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/Encoder.service */ "./src/app/shared/Encoder.service.ts");
/* harmony import */ var angular_agora_rtc__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-agora-rtc */ "./node_modules/angular-agora-rtc/fesm5/angular-agora-rtc.js");
/* harmony import */ var _voice_calling_voice_calling_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./voice-calling/voice-calling.component */ "./src/app/voice-calling/voice-calling.component.ts");
/* harmony import */ var _view_settings_viewsettings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-settings/viewsettings.component */ "./src/app/view-settings/viewsettings.component.ts");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_21__);






















var agoraConfig = {
    AppID: 'c67eefb21d494c1787c7fe20b83dc5b6',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _video_calling_video_calling_component__WEBPACK_IMPORTED_MODULE_6__["VideoCallingComponent"],
                _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_7__["MultimediaComponent"],
                _view_settings_viewsettings_component__WEBPACK_IMPORTED_MODULE_20__["ViewsettingsComponent"],
                _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_8__["ChatWindowComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _voice_calling_voice_calling_component__WEBPACK_IMPORTED_MODULE_19__["VoiceCallingComponent"],
                _view_settings_viewsettings_component__WEBPACK_IMPORTED_MODULE_20__["ViewsettingsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_lz_string__WEBPACK_IMPORTED_MODULE_21__["LZStringModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                // This shared module contains angular material modules (In one module for more cleaner code)
                _shared_share_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                angular_agora_rtc__WEBPACK_IMPORTED_MODULE_18__["AngularAgoraRtcModule"].forRoot(agoraConfig)
            ],
            providers: [_shared_Encoder_service__WEBPACK_IMPORTED_MODULE_17__["EncoderService"],
                ng_lz_string__WEBPACK_IMPORTED_MODULE_21__["LZStringService"]],
            entryComponents: [
                _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_7__["MultimediaComponent"],
                _view_settings_viewsettings_component__WEBPACK_IMPORTED_MODULE_20__["ViewsettingsComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-window/chat-window.component.scss":
/*!********************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, html {\n  height: auto;\n  margin: 0;\n  background: black;\n  background: linear-gradient(to right, gray, gray, black);\n  /*background: -webkit-linear-gradient(to right, #F5B7B1, #F1948A, #EC7063);\n  background: linear-gradient(to right, #F5B7B1, #F1948A, #EC7063);*/\n}\n\n.chat {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.card {\n  height: 100vh;\n  padding: 16px;\n  border-radius: 15px !important;\n  background-color: rgba(0, 0, 0, 0.4) !important;\n}\n\n.contacts_body {\n  padding: 0.75rem 0 !important;\n  overflow-y: auto;\n  white-space: nowrap;\n}\n\n.msg_card_body {\n  overflow-y: auto;\n}\n\n.card-header {\n  border-radius: 15px 15px 0 0 !important;\n  border-bottom: 0 !important;\n}\n\n.card-footer {\n  border-radius: 0 0 15px 15px !important;\n  border-top: 0 !important;\n}\n\n.container {\n  align-content: center;\n}\n\n.search {\n  border-radius: 15px 0 0 15px !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n}\n\n.search:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.type_msg {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  height: 60px !important;\n  overflow-y: auto;\n}\n\n.type_msg:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.attach_btn {\n  border-radius: 15px 0 0 15px !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.send_btn {\n  border-radius: 0 15px 15px 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.search_btn {\n  border-radius: 0 15px 15px 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.contacts {\n  list-style: none;\n  padding: 0;\n}\n\n.contacts li {\n  width: 100% !important;\n  padding: 5px;\n  margin-bottom: 15px !important;\n}\n\n.active {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.user_img {\n  height: 70px;\n  width: 70px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.img_cont {\n  position: relative;\n  height: 70px;\n  width: 70px;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/ opacity */\n}\n\n/* Modal Content (Image) */\n\n.modal-content {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n}\n\n.modal-content, #caption {\n  -webkit-animation-name: zoom;\n          animation-name: zoom;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n}\n\n@-webkit-keyframes zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n/* The Close Button */\n\n.close {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n\n@media only screen and (max-width: 700px) {\n  .modal-content {\n    width: 100%;\n  }\n}\n\n.online_icon {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  background-color: #4cd137;\n  border-radius: 50%;\n  bottom: 0.2em;\n  right: 0.4em;\n  border: 1.5px solid white;\n}\n\n.offline {\n  background-color: #c23616 !important;\n}\n\n.user_info {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 15px;\n}\n\n.user_info span {\n  font-size: 20px;\n  color: white;\n}\n\n.user_info p {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.video_cam {\n  margin-left: 50px;\n  margin-top: 5px;\n}\n\n.video_cam span {\n  color: white;\n  font-size: 20px;\n  cursor: pointer;\n  margin-right: 20px;\n}\n\n.msg_container {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 10px;\n  border-radius: 25px;\n  background-color: #82c;\n  padding: 10px;\n  position: relative;\n  max-width: 90%;\n}\n\n.msg_container_send {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: auto;\n  border-radius: 25px;\n  background-color: deepskyblue;\n  padding: 10px;\n  position: relative;\n  max-width: 90%;\n}\n\n.msg_time {\n  position: absolute;\n  left: 0;\n  bottom: -18px;\n  color: white;\n  font-size: 10px;\n}\n\n.msg_time_send {\n  position: absolute;\n  right: 0;\n  bottom: -18px;\n  color: white;\n  font-size: 10px;\n}\n\n.msg_head {\n  position: relative;\n}\n\n#action_menu_btn {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: white;\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.action_menu {\n  z-index: 1;\n  position: absolute;\n  padding: 15px 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  border-radius: 15px;\n  top: 30px;\n  right: 15px;\n  display: none;\n}\n\n.action_menu ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.action_menu ul li {\n  width: 100%;\n  padding: 10px 15px;\n  margin-bottom: 5px;\n}\n\n.action_menu ul li i {\n  padding-right: 10px;\n}\n\n.action_menu ul li:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n@media (max-width: 576px) {\n  .contacts_card {\n    margin-bottom: 15px !important;\n  }\n}\n\n.d-flex.bd-highlight {\n  margin-bottom: 10px;\n}\n\n.contactList:hover {\n  background-color: grey;\n}\n\n.end-of-chat {\n  margin: 1px;\n}\n\n.fas {\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC13aW5kb3cvQzpcXFVzZXJzXFxMb3VpcyBTY2hlZXBlcnNcXERlc2t0b3BcXElUUlcgMzIyXFx0ZXN0L3NyY1xcYXBwXFxjaGF0LXdpbmRvd1xcY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQtd2luZG93L2NoYXQtd2luZG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUVBLHdEQUFBO0VBQ0E7b0VBQUE7QUNFRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUlFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQ0FBQTtBQ0RGOztBREdBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsdUNBQUE7RUFDQSwyQkFBQTtBQ0VGOztBREFBO0VBQ0UsdUNBQUE7RUFDQSx3QkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7QUNJRjs7QURGQTtFQUNFLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDS0Y7O0FESEE7RUFDRSwyQkFBQTtFQUNBLHVCQUFBO0FDTUY7O0FESkE7RUFDRSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FETEE7RUFDRSwyQkFBQTtFQUNBLHVCQUFBO0FDUUY7O0FETkE7RUFDRSx1Q0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNTRjs7QURQQTtFQUNFLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1VGOztBRFJBO0VBQ0UsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDV0Y7O0FEVEE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNZRjs7QURWQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDYUY7O0FEWEE7RUFDRSxvQ0FBQTtBQ2NGOztBRFpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ2VGOztBRFpBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2VGOztBRFpBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLGtCQUFBO0VBQW9CLHdCQUFBO0VBQ3BCLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW1DLHFCQUFBO0FDd0JyQzs7QURyQkEsMEJBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3dCRjs7QURyQkE7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ3dCRjs7QURyQkE7RUFDRTtJQUFNLG1CQUFBO0VDeUJOO0VEeEJBO0lBQUksbUJBQUE7RUMyQko7QUFDRjs7QUQ5QkE7RUFDRTtJQUFNLG1CQUFBO0VDeUJOO0VEeEJBO0lBQUksbUJBQUE7RUMyQko7QUFDRjs7QUR6QkEscUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDMkJGOztBRHhCQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDMkJGOztBRHhCQSx3Q0FBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtFQzJCRjtBQUNGOztBRHhCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQzBCRjs7QUR4QkE7RUFDRSxvQ0FBQTtBQzJCRjs7QUR6QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUM0QkY7O0FEMUJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUM2QkY7O0FEM0JBO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FDOEJGOztBRDVCQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQytCRjs7QUQ3QkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2dDRjs7QUQ5QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2lDRjs7QUQvQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2tDRjs7QURoQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNtQ0Y7O0FEakNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDb0NGOztBRGxDQTtFQUNFLGtCQUFBO0FDcUNGOztBRG5DQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNzQ0Y7O0FEcENBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDdUNGOztBRHJDQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUN3Q0Y7O0FEdENBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUN5Q0Y7O0FEdkNBO0VBQ0UsbUJBQUE7QUMwQ0Y7O0FEdkNBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FDMENGOztBRHhDQTtFQUNFO0lBQ0UsOEJBQUE7RUMyQ0Y7QUFDRjs7QUR4Q0E7RUFDRSxtQkFBQTtBQzBDRjs7QUR2Q0E7RUFDRSxzQkFBQTtBQzBDRjs7QUR2Q0E7RUFDRSxXQUFBO0FDMENGOztBRHZDQTtFQUNFLGtCQUFBO0FDMENGIiwiZmlsZSI6InNyYy9hcHAvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LGh0bWx7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JheSwgZ3JheSwgYmxhY2spO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JheSwgZ3JheSwgYmxhY2spO1xyXG4gIC8qYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGNUI3QjEsICNGMTk0OEEsICNFQzcwNjMpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0Y1QjdCMSwgI0YxOTQ4QSwgI0VDNzA2Myk7Ki9cclxufVxyXG5cclxuLmNoYXR7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcbi5jYXJke1xyXG4gIC8vIDY1N3B4XHJcbiAgLy8gbWF4LXdpZHRoOiAxMDAlO1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhY3RzX2JvZHl7XHJcbiAgcGFkZGluZzogIDAuNzVyZW0gMCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ubXNnX2NhcmRfYm9keXtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5jYXJkLWhlYWRlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWZvb3RlcntcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zZWFyY2h7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjowICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoOmZvY3Vze1xyXG4gIGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnR5cGVfbXNne1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjowICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi50eXBlX21zZzpmb2N1c3tcclxuICBib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hdHRhY2hfYnRue1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMCAwIDE1cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMykgIWltcG9ydGFudDtcclxuICBib3JkZXI6MCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VuZF9idG57XHJcbiAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjowICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZWFyY2hfYnRue1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMTVweCAxNXB4IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMykgIWltcG9ydGFudDtcclxuICBib3JkZXI6MCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFjdHN7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jb250YWN0cyBsaXtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuLnVzZXJfaW1ne1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxuICBib3JkZXI6MS41cHggc29saWQgI2Y1ZjZmYTtcclxufVxyXG5cclxuLmltZ19jb250e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAoSW1hZ2UpICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCwgI2NhcHRpb24ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tIHtcclxuICBmcm9tIHt0cmFuc2Zvcm06c2NhbGUoMCl9XHJcbiAgdG8ge3RyYW5zZm9ybTpzY2FsZSgxKX1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogI2JiYjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5vbmxpbmVfaWNvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOjE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDEzNztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm90dG9tOiAwLjJlbTtcclxuICByaWdodDogMC40ZW07XHJcbiAgYm9yZGVyOjEuNXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5vZmZsaW5le1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjM2MTYgIWltcG9ydGFudDtcclxufVxyXG4udXNlcl9pbmZve1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4udXNlcl9pbmZvIHNwYW57XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udXNlcl9pbmZvIHB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbn1cclxuLnZpZGVvX2NhbXtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnZpZGVvX2NhbSBzcGFue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ubXNnX2NvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG59XHJcbi5tc2dfY29udGFpbmVyX3NlbmR7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbn1cclxuLm1zZ190aW1le1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTE4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4ubXNnX3RpbWVfc2VuZHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6MDtcclxuICBib3R0b206IC0xOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLm1zZ19oZWFke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jYWN0aW9uX21lbnVfYnRue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmFjdGlvbl9tZW51e1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFjdGlvbl9tZW51IHVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmFjdGlvbl9tZW51IHVsIGxpe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmFjdGlvbl9tZW51IHVsIGxpIGl7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbn1cclxuLmFjdGlvbl9tZW51IHVsIGxpOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNTc2cHgpe1xyXG4gIC5jb250YWN0c19jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmQtZmxleC5iZC1oaWdobGlnaHQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0TGlzdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmVuZC1vZi1jaGF0IHtcclxuICBtYXJnaW46IDFweDtcclxufVxyXG5cclxuLmZhcyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiIsImJvZHksIGh0bWwge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBncmF5LCBncmF5LCBibGFjayk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JheSwgZ3JheSwgYmxhY2spO1xuICAvKmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjVCN0IxLCAjRjE5NDhBLCAjRUM3MDYzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjVCN0IxLCAjRjE5NDhBLCAjRUM3MDYzKTsqL1xufVxuXG4uY2hhdCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhY3RzX2JvZHkge1xuICBwYWRkaW5nOiAwLjc1cmVtIDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1zZ19jYXJkX2JvZHkge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWFyY2gge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2g6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udHlwZV9tc2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnR5cGVfbXNnOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmF0dGFjaF9idG4ge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbmRfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2hfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250YWN0cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWN0cyBsaSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4udXNlcl9pbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmNWY2ZmE7XG59XG5cbi5pbWdfY29udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4vKiBNb2RhbCBDb250ZW50IChJbWFnZSkgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQsICNjYXB0aW9uIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb207XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbn1cblxuQGtleWZyYW1lcyB6b29tIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2YxZjFmMTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICNiYmI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAubW9kYWwtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5vbmxpbmVfaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDEzNztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3R0b206IDAuMmVtO1xuICByaWdodDogMC40ZW07XG4gIGJvcmRlcjogMS41cHggc29saWQgd2hpdGU7XG59XG5cbi5vZmZsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMzYxNiAhaW1wb3J0YW50O1xufVxuXG4udXNlcl9pbmZvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi51c2VyX2luZm8gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlcl9pbmZvIHAge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi52aWRlb19jYW0ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4udmlkZW9fY2FtIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tc2dfY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MmM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG5cbi5tc2dfY29udGFpbmVyX3NlbmQge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG5cbi5tc2dfdGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5tc2dfdGltZV9zZW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5tc2dfaGVhZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2FjdGlvbl9tZW51X2J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFjdGlvbl9tZW51IHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0b3A6IDMwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWN0aW9uX21lbnUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5hY3Rpb25fbWVudSB1bCBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmFjdGlvbl9tZW51IHVsIGxpIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWN0aW9uX21lbnUgdWwgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWN0c19jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5kLWZsZXguYmQtaGlnaGxpZ2h0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRhY3RMaXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLmVuZC1vZi1jaGF0IHtcbiAgbWFyZ2luOiAxcHg7XG59XG5cbi5mYXMge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.ts ***!
  \******************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_messages_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/messages.model */ "./src/app/shared/messages.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../multimedia/multimedia.component */ "./src/app/multimedia/multimedia.component.ts");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/firebase.service */ "./src/app/shared/firebase.service.ts");
/* harmony import */ var _view_settings_viewsettings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-settings/viewsettings.component */ "./src/app/view-settings/viewsettings.component.ts");







var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent(dialog, snackBar, firebaseService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.firebaseService = firebaseService;
        this.thisUserID = localStorage.getItem('currentUserId');
        this.title = 'instant-messaging-app';
        this.modal = document.getElementById('myModal');
        this.img = document.getElementById('profile-picture');
        this.modalImg = document.getElementById('img01');
        this.users = [];
        this.message = [];
        this.newMessageArr = [];
        this.initialGetMessage = false;
        this.arrDiff = 0;
        this.arrDiffMessageArr = [];
        /*users: Users[] = [
          new Users('0765843028', 'Keanu Jooste', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/60937380_2227964937285183_6900601698239119360_n.jpg?_nc_cat=106&_nc_oc=AQmjhYtcyLXTRQ9EjwQGp70e3OYU16x3YMCc7ODLc-uvgPqj_BBvs-T6p5EsgzeoTho&_nc_ht=scontent-jnb1-1.xx&oh=9c51d38a12ea4a82dc6aeea28465c637&oe=5E10F323', 'online_icon'),
          new Users('0713304416', 'Jeandre Pretorius', 'left 7 mins ago', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/19904938_1911186905828058_7381270267279841437_n.jpg?_nc_cat=100&_nc_oc=AQk0FJdBM1FmI9KAtrOOyLOxmKXV8rzdBkoERbDf-yk-LBsac1A5ldVwbLej1TZAI3k&_nc_ht=scontent-jnb1-1.xx&oh=37bebc49635c6f06cbdf814f9a1ad4ae&oe=5E0C581E', 'online_icon offline'),
          new Users('0731102348', 'Stiaan Bouwer', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/16938651_1420230568048345_476885994405757357_n.jpg?_nc_cat=108&_nc_oc=AQlqb8ODhECeR4rP0EjCsIOLNEdv22u9fS3CAUDaTtj0tM_UVTBxp8rb8PBAYbPcm-U&_nc_ht=scontent-jnb1-1.xx&oh=8735366cef0719e77c8139048879ee0e&oe=5E04B854', 'online_icon'),
          new Users('0815817200', 'Eduan Naude', 'left 30 mins ago', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/41215967_2073383522693329_4417942590620434432_n.jpg?_nc_cat=104&_nc_oc=AQk_-RsprR49AV__tXA09KVzvb3g3V-Du7r_9ZsFp5I5QXvU64IYEo05WbvQ1aO9gGc&_nc_ht=scontent-jnb1-1.xx&oh=7289a5f55c7c797e0814554f0aa82b60&oe=5E0F949B', 'online_icon offline'),
          new Users('0824189002', 'Ernst Blignaut', 'online', 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/41991171_2204128929876901_2659512653843529728_n.jpg?_nc_cat=100&_nc_oc=AQmfXWDIka8j7Ylz30Uokz0190eIjvShDDT2fZw2eC-TF-S2C7CODkxED5wqjtiRNsk&_nc_ht=scontent-jnb1-1.xx&oh=ada48dbae40d52ef629194f7d068adea&oe=5E03C633', 'online_icon'),
        ];
      
        message: Messages[] = [
          new Messages(1234, 'msg1', 'msgText', '14:29'),
          new Messages(2222, 'msg2', 'msgText', '14:29'),
          new Messages(1234, 'msg3', 'msgText', '14:30'),
          new Messages(3211, 'msg4', 'msgText', '14:30'),
        ];*/
        // Get the <span> element that closes the modal
        this.span = document.getElementsByClassName('close')[0];
    }
    ChatWindowComponent.prototype.setActiveContact = function (userID) {
        if (userID !== this.activeContact) {
            this.activeContact = userID;
        }
        else {
            return;
        }
        for (this.i = 0; this.i < this.users.length; this.i++) {
            if (this.users[this.i].userID === this.activeContact) {
                this.activeContactName = this.users[this.i].name;
                this.activeProfilePicture = this.users[this.i].profilePicture;
            }
        }
        this.message = this.firebaseService.getMessages(userID);
        return this.activeContact;
    };
    // Just to give info the application user
    ChatWindowComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    ChatWindowComponent.prototype.videoCalling = function () {
        window.location.href = '/videoCalling';
    };
    ChatWindowComponent.prototype.voiceCalling = function () {
        window.location.href = '/voiceCalling';
    };
    /*constructor(public app: FirebaseApp) {
  
    }*/
    /*enlargeImg() {
      this.modal.style.display = 'Block';
      this.modalImg.src = this.img.src;
    }*/
    // When the user clicks on <span> (x), close the modal
    /*closeModal() {
      this.modal.style.display = 'none';
    }*/
    ChatWindowComponent.prototype.searchContacts = function () {
        this.input = document.getElementById('searchID');
        this.filter = this.input.value.toUpperCase();
        this.ul = document.getElementById('contactsUL');
        this.li = this.ul.getElementsByTagName('li');
        for (this.i = 0; this.i < this.li.length; this.i++) {
            this.a = this.li[this.i].getElementsByTagName('a')[0];
            this.txtValue = this.a.textContent || this.a.innerText;
            if (this.txtValue.toUpperCase().indexOf(this.filter) > -1) {
                this.li[this.i].style.display = '';
            }
            else {
                this.li[this.i].style.display = 'none';
            }
        }
    };
    // Opening the multimedia popup
    ChatWindowComponent.prototype.OpenMultiMedia = function () {
        console.log('Opening the Multi-Media Component');
        var bodyRect = document.body.getBoundingClientRect();
        var elemRect = document.getElementById('attachment').getBoundingClientRect();
        var right = bodyRect.right - elemRect.right;
        var top = elemRect.top - bodyRect.top;
        var dialogRef = this.dialog.open(_multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_4__["MultimediaComponent"], {
            // This is only if we wish to send parameters to the popup component
            data: {
                UserId: 0,
                ContactId: 0,
                ActiveContact: this.activeContact
            },
            panelClass: 'MultimediaCSS',
            position: { right: right - 350 + 'px', top: top - 120 + 'px' }
        });
        // If wish to apply a action after popup close
        dialogRef.afterClosed().subscribe(function () {
            console.log('Multi-Media Component popup has closed');
        });
    };
    ChatWindowComponent.prototype.openSettings = function () {
        console.log('Opening the Multi-Media Component');
        var bodyRect = document.body.getBoundingClientRect();
        var elemRect = document.getElementById('settings').getBoundingClientRect();
        var right = bodyRect.right - elemRect.right;
        var top = elemRect.top - bodyRect.top;
        var dialogRef = this.dialog.open(_view_settings_viewsettings_component__WEBPACK_IMPORTED_MODULE_6__["ViewsettingsComponent"], {
            // This is only if we wish to send parameters to the popup component
            data: {
                UserId: 0,
                ContactId: 0
            },
            panelClass: 'MultimediaCSS',
            position: { right: right + 'px', top: top + 'px' }
        });
        // If wish to apply a action after popup close
        dialogRef.afterClosed().subscribe(function () {
            console.log('Multi-Media Component popup has closed');
        });
    };
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openSnackBar('Login Successful', 'close');
        this.users = this.firebaseService.getUserProfiles();
        var myID = localStorage.getItem('currentUserId');
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].userID === myID) {
                this.setActiveContact(this.users[i].openChatUserIds[0]);
            }
        }
        /*this.users = this.firebaseService.getUserProfiles();
        console.log(this.users.toString());
        this.setActiveContact(this.users[0].userID);*/
        this.interval = setInterval(function () {
            _this.message.length = 0;
            if (_this.initialGetMessage === false) {
                _this.message = _this.firebaseService.getMessages(_this.activeContact);
                _this.initialGetMessage = true;
            }
            if (_this.initialGetMessage === true) {
                _this.newMessageArr = _this.updateMessages();
                if (_this.message.length < _this.newMessageArr.length) {
                    _this.arrDiff = _this.message.length - _this.newMessageArr.length;
                    for (var i = _this.arrDiff; i === 0; i--) {
                        _this.message.unshift(_this.newMessageArr[i]);
                        _this.arrDiffMessageArr.unshift(_this.newMessageArr[i]);
                    }
                }
            }
            _this.arrDiff = 0;
        }, 15000);
        /*this.activeContact = this.users[0].userID;
        this.activeContactName = this.users[0].name;
        this.activeProfilePicture = this.users[0].profilePicture;*/
        console.log(this.users);
        // this.setActiveContact(this.users[0].userID);
        /*this.activeContact = this.users[0].userID;
        this.activeContactName = this.users[0].name;
        this.activeProfilePicture = this.users[0].profilePicture;*/
    };
    ChatWindowComponent.prototype.updateMessages = function () {
        // this.message = this.firebaseService.getMessages(this.activeContact);
        return this.firebaseService.getMessages(this.activeContact);
    };
    ChatWindowComponent.prototype.onGenerateNewMessage = function () {
        this.today = new Date();
        this.msgMinutes = this.today.getMinutes();
        this.msgHours = this.today.getHours();
        if (this.msgHours < 10) {
            this.msgHours = '0' + this.msgHours;
        }
        if (this.msgMinutes < 10) {
            this.msgMinutes = '0' + this.msgMinutes;
        }
        var newMessage = new _shared_messages_model__WEBPACK_IMPORTED_MODULE_2__["Messages"](this.thisUserID, this.newMessage, 'msgText', this.msgHours + ':' + this.msgMinutes);
        this.message.unshift(newMessage);
        this.firebaseService.newMessage(newMessage, this.activeContact);
        this.newMessage = '';
    };
    ChatWindowComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
    ]; };
    ChatWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-window',
            template: __webpack_require__(/*! raw-loader!./chat-window.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-window/chat-window.component.html"),
            styles: [__webpack_require__(/*! ./chat-window.component.scss */ "./src/app/chat-window/chat-window.component.scss")]
        })
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url(\"https://images.unsplash.com/photo-1502949298791-393048291bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80\") no-repeat;\n  background-size: 100% 100%;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nbutton {\n  width: 100%;\n}\n\n.image {\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  position: absolute;\n  z-index: -10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxMb3VpcyBTY2hlZXBlcnNcXERlc2t0b3BcXElUUlcgMzIyXFx0ZXN0L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUtBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAyOTQ5Mjk4NzkxLTM5MzA0ODI5MWJiOD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTUwMiZxPTgwXCIpIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuIiwiLm1haW4tZGl2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAyOTQ5Mjk4NzkxLTM5MzA0ODI5MWJiOD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTUwMiZxPTgwXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcwJTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTA7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/firebase.service */ "./src/app/shared/firebase.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // DONT EDIT!!!
    LoginComponent.prototype.LogIn = function (form) {
        var value = form.value;
        this.firebaseService.userSignIn(value.username, value.password);
    };
    LoginComponent.prototype.onSignUpClicked = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            providers: [_shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/multimedia/multimedia.component.scss":
/*!******************************************************!*\
  !*** ./src/app/multimedia/multimedia.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".IconStyle {\n  height: 48px;\n  width: 48px;\n  font-size: 48px;\n  margin: 10px;\n}\n\n.custom-modalbox mat-dialog-container {\n  background: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGltZWRpYS9DOlxcVXNlcnNcXExvdWlzIFNjaGVlcGVyc1xcRGVza3RvcFxcSVRSVyAzMjJcXHRlc3Qvc3JjXFxhcHBcXG11bHRpbWVkaWFcXG11bHRpbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL211bHRpbWVkaWEvbXVsdGltZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURHRTtFQUNJLGdCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9tdWx0aW1lZGlhL211bHRpbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSWNvblN0eWxle1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogNDhweDtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsYm94IHtcclxuICBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgfVxyXG59XHJcbiIsIi5JY29uU3R5bGUge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmN1c3RvbS1tb2RhbGJveCBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/multimedia/multimedia.component.ts":
/*!****************************************************!*\
  !*** ./src/app/multimedia/multimedia.component.ts ***!
  \****************************************************/
/*! exports provided: MultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaComponent", function() { return MultimediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_Encoder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Encoder.service */ "./src/app/shared/Encoder.service.ts");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/firebase.service */ "./src/app/shared/firebase.service.ts");





var MultimediaComponent = /** @class */ (function () {
    function MultimediaComponent(snackBar, dialogRef, data, encodeService, firebaseService) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.encodeService = encodeService;
        this.firebaseService = firebaseService;
        this.thisUserID = localStorage.getItem('currentUserId');
        this.message = [];
    }
    MultimediaComponent.prototype.ngOnInit = function () {
    };
    MultimediaComponent.prototype.Close = function () {
        this.dialogRef.close();
    };
    MultimediaComponent.prototype.OpenImage = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // The file is in this event
                console.log(event.target.files[0].name);
                this.encodeService.Base64EncodeImage(event.target.files[0], event.target.files[0].name, this.data.UserId, this.data.ContactId, this.data.ActiveContact);
                this.openSnackBar('Image Send', 'Close');
                this.dialogRef.close();
                return [2 /*return*/];
            });
        });
    };
    MultimediaComponent.prototype.OpenVideo = function (event) {
        // The file is in this event
        console.log(event.target.files[0].name);
        this.encodeService.Base64EncodeVideo(event.target.files[0], event.target.files[0].name, this.data.UserId, this.data.ContactId, this.data.ActiveContact);
        this.openSnackBar('Video file send', 'Close');
        this.dialogRef.close();
    };
    MultimediaComponent.prototype.OpenAudio = function (event) {
        // The file is in this event
        console.log(event.target.files[0].name);
        this.encodeService.Base64EncodeAudio(event.target.files[0], event.target.files[0].name, this.data.UserId, this.data.ContactId, this.data.ActiveContact);
        this.openSnackBar('Audio file send', 'Close');
        this.dialogRef.close();
    };
    MultimediaComponent.prototype.testSnackBar = function () {
        this.openSnackBar('Keep calm and Code', 'Close');
    };
    // We will use this message method to tell the user if the message where send successfully or not
    MultimediaComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    MultimediaComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _shared_Encoder_service__WEBPACK_IMPORTED_MODULE_3__["EncoderService"] },
        { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    MultimediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multimedia',
            template: __webpack_require__(/*! raw-loader!./multimedia.component.html */ "./node_modules/raw-loader/index.js!./src/app/multimedia/multimedia.component.html"),
            styles: [__webpack_require__(/*! ./multimedia.component.scss */ "./src/app/multimedia/multimedia.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], MultimediaComponent);
    return MultimediaComponent;
}());



/***/ }),

/***/ "./src/app/shared/Encoder.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/Encoder.service.ts ***!
  \*******************************************/
/*! exports provided: EncoderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncoderService", function() { return EncoderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase.service */ "./src/app/shared/firebase.service.ts");
/* harmony import */ var _messages_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.model */ "./src/app/shared/messages.model.ts");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_5__);






var EncoderService = /** @class */ (function () {
    function EncoderService(firebaseService, lz) {
        this.firebaseService = firebaseService;
        this.lz = lz;
        this.EncryptionPassword = 'CodingWizard';
        this.thisUserID = localStorage.getItem('currentUserId');
        this.message = [];
    }
    // Encode Image to base64 and upload
    EncoderService.prototype.Base64EncodeImage = function (theFile, fileName, UserId, ContactId, active) {
        var _this = this;
        this.activeContact = active;
        var reader = new FileReader();
        reader.readAsDataURL(theFile);
        var result;
        reader.onload = function (e) {
            result = reader.result;
            console.log(result);
            _this.onGenerateNewImageMessage(result);
            // this.firebaseService.uploadImage(UserId, ContactId, result, fileName);
        };
    };
    // Just a Base64 Image Encoder
    EncoderService.prototype.Base64Encoder = function (theFile) {
        var reader = new FileReader();
        reader.readAsDataURL(theFile);
        var result;
        reader.onload = function (e) {
            result = reader.result;
            console.log(result);
            return result;
        };
    };
    // Encode Video to base64 and upload
    EncoderService.prototype.Base64EncodeVideo = function (theFile, fileName, UserId, ContactId, active) {
        var _this = this;
        this.activeContact = active;
        var reader = new FileReader();
        reader.readAsDataURL(theFile);
        var result;
        reader.onload = function (e) {
            result = reader.result;
            console.log(result);
            _this.onGenerateNewVideoMessage(result);
            // this.firebaseService.uploadVideo(UserId, ContactId, result, fileName);
        };
    };
    // Encode Audio to base64 and upload
    EncoderService.prototype.Base64EncodeAudio = function (theFile, fileName, UserId, ContactId, active) {
        var _this = this;
        this.activeContact = active;
        var reader = new FileReader();
        reader.readAsDataURL(theFile);
        var result;
        reader.onload = function (e) {
            result = reader.result;
            console.log(result);
            _this.onGenerateNewAudioMessage(result);
            // this.firebaseService.uploadAudio(UserId, ContactId, result, fileName);
        };
    };
    // Base64 Decoder
    // Het dit nie nodig nie want ons kan dit direk display op HTML van base64
    // bv: <img id="myImage" src="base64String">
    // Encrypt Make research on a encryption method (SHA-256 is a one way hashing)
    EncoderService.prototype.EncryptTextMessage = function (message) {
        return crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(message.trim(), this.EncryptionPassword).toString();
    };
    // Decrypt the Encrypted File
    EncoderService.prototype.DecryptTextMessage = function (encryptedMessage) {
        return crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(encryptedMessage.trim(), this.EncryptionPassword).toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
    };
    // Download File using a Base64String
    EncoderService.prototype.DownloadBase64 = function (b64) {
        var base64string = this.lz.decompress(b64);
        var byteCharacters = atob(base64string);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray]);
        if (navigator.msSaveBlob) {
            var filename = 'base64media';
            navigator.msSaveBlob(blob, filename);
        }
        else {
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('visibility', 'hidden');
            link.download = 'base64media';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    EncoderService.prototype.onGenerateNewImageMessage = function (imageBase64String) {
        var base64string = this.lz.compress(imageBase64String);
        this.today = new Date();
        this.msgMinutes = this.today.getMinutes();
        this.msgHours = this.today.getHours();
        if (this.msgHours < 10) {
            this.msgHours = '0' + this.msgHours;
        }
        if (this.msgMinutes < 10) {
            this.msgMinutes = '0' + this.msgMinutes;
        }
        var newMessage = new _messages_model__WEBPACK_IMPORTED_MODULE_4__["Messages"](localStorage.getItem('currentUserId'), base64string, 'msgImage', this.msgHours + ':' + this.msgMinutes);
        this.message.unshift(newMessage);
        this.firebaseService.newMessage(newMessage, this.activeContact);
    };
    EncoderService.prototype.onGenerateNewVideoMessage = function (imageBase64String) {
        var base64string = this.lz.compress(imageBase64String);
        this.today = new Date();
        this.msgMinutes = this.today.getMinutes();
        this.msgHours = this.today.getHours();
        if (this.msgHours < 10) {
            this.msgHours = '0' + this.msgHours;
        }
        if (this.msgMinutes < 10) {
            this.msgMinutes = '0' + this.msgMinutes;
        }
        var newMessage = new _messages_model__WEBPACK_IMPORTED_MODULE_4__["Messages"](localStorage.getItem('currentUserId'), base64string, 'msgVideo', this.msgHours + ':' + this.msgMinutes);
        this.message.unshift(newMessage);
        this.firebaseService.newMessage(newMessage, this.activeContact);
    };
    EncoderService.prototype.onGenerateNewAudioMessage = function (imageBase64String) {
        var base64string = this.lz.compress(imageBase64String);
        this.today = new Date();
        this.msgMinutes = this.today.getMinutes();
        this.msgHours = this.today.getHours();
        if (this.msgHours < 10) {
            this.msgHours = '0' + this.msgHours;
        }
        if (this.msgMinutes < 10) {
            this.msgMinutes = '0' + this.msgMinutes;
        }
        var newMessage = new _messages_model__WEBPACK_IMPORTED_MODULE_4__["Messages"](localStorage.getItem('currentUserId'), base64string, 'msgAudio', this.msgHours + ':' + this.msgMinutes);
        this.message.unshift(newMessage);
        this.firebaseService.newMessage(newMessage, this.activeContact);
    };
    EncoderService.prototype.profilePicBase64 = function (theFile, fileName) {
        // Do Conversion
        // localStorage.setItem('base64PP', result);
        var reader = new FileReader();
        reader.readAsDataURL(theFile);
        var result;
        reader.onload = function (e) {
            result = reader.result;
            console.log(result);
            localStorage.setItem('base64PP', result);
        };
    };
    EncoderService.ctorParameters = function () { return [
        { type: _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
        { type: ng_lz_string__WEBPACK_IMPORTED_MODULE_5__["LZStringService"] }
    ]; };
    EncoderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        // This class is used to Encode multi-media files into a Base64
        // and to encrypt and decrypt anything
    ], EncoderService);
    return EncoderService;
}());



/***/ }),

/***/ "./src/app/shared/firebase.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/firebase.service.ts ***!
  \********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _messages_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.model */ "./src/app/shared/messages.model.ts");
/* harmony import */ var _users_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.model */ "./src/app/shared/users.model.ts");






var FirebaseService = /** @class */ (function () {
    function FirebaseService(db, router) {
        this.db = db;
        this.router = router;
        this.openChatUserIds = [];
        this.userProfilesArr = [];
        this.messagesArr = [];
        this.ChatIdFinal = '';
    }
    FirebaseService.prototype.userSignIn = function (userId, password) {
        var _this = this;
        var usersRef = this.db.collection('users').doc(userId);
        var getDoc = usersRef.get().toPromise()
            .then(function (doc) {
            if (!doc.exists) {
                console.log('not found'); // add toastr notification
            }
            else {
                if (doc.data().password === password) {
                    _this.router.navigate(['chatWindow']);
                    localStorage.setItem('currentUserId', userId);
                }
            }
        }).catch(function (err) {
            console.log('Error', err); // add toastr notification
        });
    };
    // TODO: Sign up
    FirebaseService.prototype.createUser = function (userId, name, password) {
        var base64ProPic = localStorage.getItem('base64PP');
        var ChatsIdArr = []; // 0123456789_9876543210
        var openChatUserIds = []; // 0123456789
        var data = {
            name: name,
            status: 'online',
            profilePicture: base64ProPic,
            onlineIcon: 'online_icon',
            userId: userId,
            password: password,
            ChatsIdArr: ChatsIdArr,
            openChatUserIds: openChatUserIds
        };
        var usersRef = this.db.collection('users').doc(userId);
        usersRef.set(data);
    };
    /*createUser(userId, name, password) {
      const data = {
        name,
        status: 'null',
        profilePicture: 'null',
        onlineIcon: 'null',
        userId,
        password
      };
      const usersRef = this.db.collection('users').doc(userId);
      usersRef.set(data);
    }*/
    FirebaseService.prototype.getUserProfiles = function () {
        var _this = this;
        var userRef = this.db.collection('users').doc(localStorage.getItem('currentUserId'));
        var getDoc = userRef.get().toPromise()
            .then(function (doc) {
            if (!doc.exists) {
                console.log('not found'); // add toastr notification
            }
            else {
                _this.openChatUserIds = doc.data().openChatUserIds;
                for (var i = 0; i < _this.openChatUserIds.length; i++) {
                    var ref = _this.db.collection('users').doc(_this.openChatUserIds[i]);
                    var document_1 = ref.get().toPromise()
                        .then(function (udoc) {
                        if (!udoc.exists) {
                            console.log('not found'); // add toastr notification
                        }
                        else {
                            _this.userProfilesArr.push(new _users_model__WEBPACK_IMPORTED_MODULE_5__["Users"](udoc.data().userId, udoc.data().name, udoc.data().status, udoc.data().profilePicture, udoc.data().onlineIcon, doc.data().openChatUserIds));
                        }
                    }).catch(function (err) {
                        console.log('Error', err); // add toastr notification
                    });
                }
            }
        }).catch(function (err) {
            console.log('Error', err); // add toastr notification
        });
        console.log(this.userProfilesArr);
        return this.userProfilesArr;
    };
    FirebaseService.prototype.getMessages = function (friendId) {
        var _this = this;
        var arrTimeArray = [];
        var msgContentsArray = [];
        var msgIdArray = [];
        var msgTypeArray = [];
        var ChatIDV1 = localStorage.getItem('currentUserId') + '_' + friendId;
        var chatsRef = this.db.collection('chats').doc(ChatIDV1);
        var getDoc = chatsRef.get().toPromise()
            .then(function (doc) {
            if (!doc.exists) {
                console.log('not found'); // add toastr notification
                _this.messagesArr = _this.getMessagesWithOtherChatId(friendId);
            }
            else {
                arrTimeArray = doc.data().arrivalTime;
                msgContentsArray = doc.data().msgContents;
                msgIdArray = doc.data().msgId;
                msgTypeArray = doc.data().msgType;
                // Messages(msgID: number, msgContents: string, msgType: string, arrivalTime: string)
                for (var i = 0; i < msgIdArray.length; i++) {
                    _this.messagesArr.push(new _messages_model__WEBPACK_IMPORTED_MODULE_4__["Messages"](msgIdArray[i], msgContentsArray[i], msgTypeArray[i], arrTimeArray[i]));
                }
            }
        }).catch(function (err) {
            console.log('Error', err); // add toastr notification
        });
        console.log(this.messagesArr);
        return this.messagesArr;
    };
    FirebaseService.prototype.getMessagesWithOtherChatId = function (friendId) {
        var _this = this;
        var arrTimeArray = [];
        var msgContentsArray = [];
        var msgIdArray = [];
        var msgTypeArray = [];
        var ChatIDV2 = friendId + '_' + localStorage.getItem('currentUserId');
        var chatsRef = this.db.collection('chats').doc(ChatIDV2);
        var getDoc = chatsRef.get().toPromise()
            .then(function (doc) {
            if (!doc.exists) {
                /*const data = {
                  arrivalTime: arrTimeArray,
                  msgContents: msgContentsArray,
                  msgId: msgIdArray,
                  msgType: msgTypeArray
                };
      
                chatsRef.set(data);*/
            }
            else {
                arrTimeArray = doc.data().arrivalTime;
                msgContentsArray = doc.data().msgContents;
                msgIdArray = doc.data().msgId;
                msgTypeArray = doc.data().msgType;
                // Messages(msgID: number, msgContents: string, msgType: string, arrivalTime: string)
                for (var i = 0; i < msgIdArray.length; i++) {
                    _this.messagesArr.push(new _messages_model__WEBPACK_IMPORTED_MODULE_4__["Messages"](msgIdArray[i], msgContentsArray[i], msgTypeArray[i], arrTimeArray[i]));
                }
            }
        }).catch(function (err) {
            console.log('Error', err); // add toastr notification
        });
        console.log(this.messagesArr);
        return this.messagesArr;
    };
    FirebaseService.prototype.newMessage = function (newMessage, friendId) {
        var _this = this;
        var arrTimeArray = [];
        var msgContentsArray = [];
        var msgIdArray = [];
        var msgTypeArray = [];
        var ChatIDV1 = localStorage.getItem('currentUserId') + '_' + friendId;
        var chatRef = this.db.collection('chats').doc(ChatIDV1);
        var getDoc = chatRef.get().toPromise()
            .then(function (doc) {
            if (!doc.exists) {
                console.log('not found'); // add toastr notification
                _this.newMessageWithOtherChatId(newMessage, friendId);
            }
            else {
                arrTimeArray = doc.data().arrivalTime;
                msgContentsArray = doc.data().msgContents;
                msgIdArray = doc.data().msgId;
                msgTypeArray = doc.data().msgType;
                arrTimeArray.unshift(newMessage.arrivalTime);
                msgContentsArray.unshift(newMessage.msgContents);
                msgIdArray.unshift(newMessage.msgID);
                msgTypeArray.unshift(newMessage.msgType);
                var data = {
                    arrivalTime: arrTimeArray,
                    msgContents: msgContentsArray,
                    msgId: msgIdArray,
                    msgType: msgTypeArray
                };
                chatRef.set(data);
            }
        }).catch(function (err) {
            console.log('Error', err); // add toastr notification
        });
    };
    FirebaseService.prototype.newMessageWithOtherChatId = function (newMessage, friendId) {
        var arrTimeArray = [];
        var msgContentsArray = [];
        var msgIdArray = [];
        var msgTypeArray = [];
        var ChatIDV2 = friendId + '_' + localStorage.getItem('currentUserId');
        var chatRef = this.db.collection('chats').doc(ChatIDV2);
        var getDoc = chatRef.get().toPromise()
            .then(function (doc) {
            if (!doc.exists) {
                console.log('not found'); // TODO: Create chat id
            }
            else {
                arrTimeArray = doc.data().arrivalTime;
                msgContentsArray = doc.data().msgContents;
                msgIdArray = doc.data().msgId;
                msgTypeArray = doc.data().msgType;
                arrTimeArray.unshift(newMessage.arrivalTime);
                msgContentsArray.unshift(newMessage.msgContents);
                msgIdArray.unshift(newMessage.msgID);
                msgTypeArray.unshift(newMessage.msgType);
                var data = {
                    arrivalTime: arrTimeArray,
                    msgContents: msgContentsArray,
                    msgId: msgIdArray,
                    msgType: msgTypeArray
                };
                chatRef.set(data);
            }
        }).catch(function (err) {
            console.log('Error', err); // add toastr notification
        });
    };
    FirebaseService.prototype.newChat = function (userId) {
        var _this = this;
        var name = '';
        var status = '';
        var profilePicture = '';
        var onlineIcon = '';
        var myUserID = '';
        var password = '';
        var ChatsIdArr = []; // 0123456789_9876543210
        var openChatUserIds = []; // 0123456789
        var userRef = this.db.collection('users').doc(localStorage.getItem('currentUserId'));
        var getDoc = userRef.get().toPromise()
            .then(function (doc) {
            if (!doc.exists) {
                console.log('not found'); // add toastr notification
            }
            else {
                name = doc.data().name;
                status = doc.data().status;
                profilePicture = doc.data().profilePicture;
                onlineIcon = doc.data().onlineIcon;
                myUserID = doc.data().myUserID;
                password = doc.data().password;
                ChatsIdArr = doc.data().ChatsIdArr;
                openChatUserIds = doc.data().openChatUserIds;
                openChatUserIds.unshift(userId);
                var newChatID = myUserID + '_' + userId;
                ChatsIdArr.unshift(newChatID);
                var data = {
                    name: name,
                    status: status,
                    profilePicture: profilePicture,
                    onlineIcon: onlineIcon,
                    myUserID: myUserID,
                    password: password,
                    ChatsIdArr: ChatsIdArr,
                    openChatUserIds: openChatUserIds,
                };
                var usersRef = _this.db.collection('users').doc(myUserID);
                usersRef.set(data);
            }
        }).catch(function (err) {
            console.log('Error', err); // add toastr notification
        });
    };
    FirebaseService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/shared/material-components.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/material-components.module.ts ***!
  \******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"]
];
var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: modules,
            exports: modules
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/messages.model.ts":
/*!******************************************!*\
  !*** ./src/app/shared/messages.model.ts ***!
  \******************************************/
/*! exports provided: Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
var Messages = /** @class */ (function () {
    function Messages(msgID, msgContents, msgType, arrivalTime) {
        this.msgID = msgID;
        this.msgContents = msgContents;
        this.msgType = msgType;
        this.arrivalTime = arrivalTime;
    }
    Messages.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Messages;
}());



/***/ }),

/***/ "./src/app/shared/share.module.ts":
/*!****************************************!*\
  !*** ./src/app/shared/share.module.ts ***!
  \****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-components.module */ "./src/app/shared/material-components.module.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialComponentsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialComponentsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            ],
            declarations: [],
            entryComponents: [],
            providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"], useValue: 'en-ZA' },
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/users.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/users.model.ts ***!
  \***************************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users(userID, name, status, profilePicture, onlineIcon, openChatUserIds) {
        this.userID = userID;
        this.name = name;
        this.status = status;
        this.profilePicture = profilePicture;
        this.onlineIcon = onlineIcon;
        this.openChatUserIds = openChatUserIds;
    }
    Users.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return Users;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url(\"https://images.unsplash.com/photo-1502949298791-393048291bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80\") no-repeat;\n  background-size: 100% 100%;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nbutton {\n  width: 100%;\n}\n\n.image {\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  position: absolute;\n  z-index: -10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcTG91aXMgU2NoZWVwZXJzXFxEZXNrdG9wXFxJVFJXIDMyMlxcdGVzdC9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtS0FBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdntcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMjk0OTI5ODc5MS0zOTMwNDgyOTFiYjg/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE1MDImcT04MFwiKSBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTEwO1xyXG59XHJcbiIsIi5tYWluLWRpdiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMjk0OTI5ODc5MS0zOTMwNDgyOTFiYjg/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE1MDImcT04MFwiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/firebase.service */ "./src/app/shared/firebase.service.ts");
/* harmony import */ var _shared_Encoder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Encoder.service */ "./src/app/shared/Encoder.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(snackBar, firebaseService, encodeService) {
        this.snackBar = snackBar;
        this.firebaseService = firebaseService;
        this.encodeService = encodeService;
        this.base64DP = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.SignUp = function (form) {
        var value = form.value;
        this.firebaseService.createUser(value.userId, value.name, value.password);
    };
    SignupComponent.prototype.OpenImage = function (event) {
        var _this = this;
        console.log(event.target.files[0].name);
        this.encodeService.profilePicBase64(event.target.files[0], event.target.files[0].name);
        // This is just to make sure the Async base64 are loaded to the local storage. Give some time
        (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Do something before delay
                        console.log('before delay');
                        this.openSnackBar('Please Wait....', 'Close');
                        return [4 /*yield*/, this.delay(1500)];
                    case 1:
                        _a.sent();
                        // Do something after
                        console.log('after delay');
                        this.openSnackBar('Profile Picture Ready for Sign Up', 'Close');
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    SignupComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    SignupComponent.prototype.UploadProfilePicture = function () {
        // send file to this.encoder.service.profilePicBase64();
    };
    SignupComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _shared_Encoder_service__WEBPACK_IMPORTED_MODULE_3__["EncoderService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/video-calling/video-calling.component.scss":
/*!************************************************************!*\
  !*** ./src/app/video-calling/video-calling.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#agora_local {\n  position: absolute;\n  height: 250px;\n  width: 250px;\n  display: inline-block;\n  top: 20px;\n  left: 20px;\n}\n\n.remote-containers div {\n  position: relative;\n  height: 500px;\n  width: 500px;\n  border-radius: 25px;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tY2FsbGluZy9DOlxcVXNlcnNcXExvdWlzIFNjaGVlcGVyc1xcRGVza3RvcFxcSVRSVyAzMjJcXHRlc3Qvc3JjXFxhcHBcXHZpZGVvLWNhbGxpbmdcXHZpZGVvLWNhbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvLWNhbGxpbmcvdmlkZW8tY2FsbGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tY2FsbGluZy92aWRlby1jYWxsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fnb3JhX2xvY2Fse1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yZW1vdGUtY29udGFpbmVycyBkaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuIiwiI2Fnb3JhX2xvY2FsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuXG4ucmVtb3RlLWNvbnRhaW5lcnMgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/video-calling/video-calling.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/video-calling/video-calling.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoCallingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallingComponent", function() { return VideoCallingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_agora_rtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-agora-rtc */ "./node_modules/angular-agora-rtc/fesm5/angular-agora-rtc.js");



var VideoCallingComponent = /** @class */ (function () {
    function VideoCallingComponent(agoraService) {
        this.agoraService = agoraService;
        this.remoteCalls = [];
        this.agoraService.createClient();
    }
    VideoCallingComponent.prototype.startCall = function () {
        var _this = this;
        this.agoraService.client.join(null, '1000', null, function (uid) {
            _this.localStream = _this.agoraService.createStream(uid, true, null, null, true, false);
            _this.localStream.setVideoProfile('720p_3');
            _this.subscribeToStreams();
        });
    };
    VideoCallingComponent.prototype.subscribeToStreams = function () {
        var _this = this;
        this.localStream.on('accessAllowed', function () {
            console.log('accessAllowed');
        });
        // The user has denied access to the camera and mic.
        this.localStream.on('accessDenied', function () {
            console.log('accessDenied');
        });
        this.localStream.init(function () {
            console.log('getUserMedia successfully');
            _this.localStream.play('agora_local');
            _this.agoraService.client.publish(_this.localStream, 
            // tslint:disable-next-line:only-arrow-functions
            function (err) {
                console.log('Publish local stream error: ' + err);
            });
            _this.agoraService.client.on('stream-published', 
            // tslint:disable-next-line:only-arrow-functions
            function (evt) {
                console.log('Publish local stream successfully');
            });
        }, 
        // tslint:disable-next-line:only-arrow-functions
        function (err) {
            console.log('getUserMedia failed', err);
        });
        this.agoraService.client.on('error', function (err) {
            console.log('Got error msg:', err.reason);
            if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
                _this.agoraService.client.renewChannelKey('', function () {
                    console.log('Renew channel key successfully');
                }, function (err) {
                    console.log('Renew channel key failed: ', err);
                });
            }
        });
        this.agoraService.client.on('stream-added', function (evt) {
            var stream = evt.stream;
            _this.agoraService.client.subscribe(stream, function (err) {
                console.log('Subscribe stream failed', err);
            });
        });
        this.agoraService.client.on('stream-subscribed', function (evt) {
            var stream = evt.stream;
            if (!_this.remoteCalls.includes("agora_remote" + stream.getId())) {
                _this.remoteCalls.push("agora_remote" + stream.getId());
                setTimeout(function () { return stream.play("agora_remote" + stream.getId()); }, 2000);
            }
        });
        this.agoraService.client.on('stream-removed', function (evt) {
            var stream = evt.stream;
            stream.stop();
            _this.remoteCalls = _this.remoteCalls.filter(function (call) { return call !== "#agora_remote" + stream.getId(); });
            console.log("Remote stream is removed " + stream.getId());
        });
        this.agoraService.client.on('peer-leave', function (evt) {
            var stream = evt.stream;
            if (stream) {
                stream.stop();
                _this.remoteCalls = _this.remoteCalls.filter(function (call) { return call === "#agora_remote" + stream.getId(); });
                console.log(evt.uid + " left from this channel");
            }
        });
    };
    VideoCallingComponent.prototype.ngOnInit = function () {
    };
    VideoCallingComponent.ctorParameters = function () { return [
        { type: angular_agora_rtc__WEBPACK_IMPORTED_MODULE_2__["AngularAgoraRtcService"] }
    ]; };
    VideoCallingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-calling',
            template: __webpack_require__(/*! raw-loader!./video-calling.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-calling/video-calling.component.html"),
            styles: [__webpack_require__(/*! ./video-calling.component.scss */ "./src/app/video-calling/video-calling.component.scss")]
        })
    ], VideoCallingComponent);
    return VideoCallingComponent;
}());



/***/ }),

/***/ "./src/app/view-settings/viewsettings.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/view-settings/viewsettings.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".IconStyle {\n  height: 48px;\n  width: 48px;\n  font-size: 48px;\n  margin: 10px;\n}\n\n.custom-modalbox mat-dialog-container {\n  background: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1zZXR0aW5ncy9DOlxcVXNlcnNcXExvdWlzIFNjaGVlcGVyc1xcRGVza3RvcFxcSVRSVyAzMjJcXHRlc3Qvc3JjXFxhcHBcXHZpZXctc2V0dGluZ3NcXHZpZXdzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy1zZXR0aW5ncy92aWV3c2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0U7RUFDSSxnQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvdmlldy1zZXR0aW5ncy92aWV3c2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSWNvblN0eWxle1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogNDhweDtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsYm94IHtcclxuICBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgfVxyXG59XHJcbiIsIi5JY29uU3R5bGUge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmN1c3RvbS1tb2RhbGJveCBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/view-settings/viewsettings.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view-settings/viewsettings.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsettingsComponent", function() { return ViewsettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ViewsettingsComponent = /** @class */ (function () {
    function ViewsettingsComponent(snackBar, dialogRef, data, dialog) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
    }
    ViewsettingsComponent_1 = ViewsettingsComponent;
    ViewsettingsComponent.prototype.ngOnInit = function () {
    };
    ViewsettingsComponent.prototype.selectTheme = function () {
        console.log('Opening the Multi-Media Component');
        var bodyRect = document.body.getBoundingClientRect();
        var elemRect = document.getElementById('settings').getBoundingClientRect();
        var right = bodyRect.right - elemRect.right;
        var top = elemRect.top - bodyRect.top;
        var dialogRef = this.dialog.open(ViewsettingsComponent_1, {
            // This is only if we wish to send parameters to the popup component
            data: {
                UserId: 0,
                ContactId: 0
            },
            panelClass: 'MultimediaCSS',
            position: { right: right + 'px', top: top + 'px' }
        });
        // If wish to apply a action after popup close
        dialogRef.afterClosed().subscribe(function () {
            console.log('Multi-Media Component popup has closed');
        });
    };
    ViewsettingsComponent.prototype.Close = function () {
        this.dialogRef.close();
    };
    ViewsettingsComponent.prototype.testSnackBar = function () {
        this.openSnackBar('Keep calm and Code', 'Close');
    };
    // We will use this message method to tell the user if the message where send successfully or not
    ViewsettingsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    var ViewsettingsComponent_1;
    ViewsettingsComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    ViewsettingsComponent = ViewsettingsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewsettings',
            template: __webpack_require__(/*! raw-loader!./viewsettings.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-settings/viewsettings.component.html"),
            styles: [__webpack_require__(/*! ./viewsettings.component.scss */ "./src/app/view-settings/viewsettings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ViewsettingsComponent);
    return ViewsettingsComponent;
}());



/***/ }),

/***/ "./src/app/voice-calling/voice-calling.component.scss":
/*!************************************************************!*\
  !*** ./src/app/voice-calling/voice-calling.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#agora_local {\n  position: absolute;\n  height: 250px;\n  width: 250px;\n  display: inline-block;\n  top: 20px;\n  left: 20px;\n}\n\n.remote-containers div {\n  position: relative;\n  height: 500px;\n  width: 500px;\n  border-radius: 25px;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm9pY2UtY2FsbGluZy9DOlxcVXNlcnNcXExvdWlzIFNjaGVlcGVyc1xcRGVza3RvcFxcSVRSVyAzMjJcXHRlc3Qvc3JjXFxhcHBcXHZvaWNlLWNhbGxpbmdcXHZvaWNlLWNhbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZvaWNlLWNhbGxpbmcvdm9pY2UtY2FsbGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdm9pY2UtY2FsbGluZy92b2ljZS1jYWxsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fnb3JhX2xvY2Fse1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yZW1vdGUtY29udGFpbmVycyBkaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuIiwiI2Fnb3JhX2xvY2FsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuXG4ucmVtb3RlLWNvbnRhaW5lcnMgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/voice-calling/voice-calling.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/voice-calling/voice-calling.component.ts ***!
  \**********************************************************/
/*! exports provided: VoiceCallingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceCallingComponent", function() { return VoiceCallingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_agora_rtc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-agora-rtc */ "./node_modules/angular-agora-rtc/fesm5/angular-agora-rtc.js");



var VoiceCallingComponent = /** @class */ (function () {
    function VoiceCallingComponent(agoraService) {
        this.agoraService = agoraService;
        this.remoteCalls = [];
        this.agoraService.createClient();
    }
    VoiceCallingComponent.prototype.startCall = function () {
        var _this = this;
        this.agoraService.client.join(null, '1000', null, function (uid) {
            _this.localStream = _this.agoraService.createStream(uid, true, null, null, true, false);
            _this.localStream.setVideoProfile('720p_3');
            _this.subscribeToStreams();
        });
    };
    VoiceCallingComponent.prototype.subscribeToStreams = function () {
        var _this = this;
        this.localStream.on('accessAllowed', function () {
            console.log('accessAllowed');
        });
        // The user has denied access to the camera and mic.
        this.localStream.on('accessDenied', function () {
            console.log('accessDenied');
        });
        this.localStream.init(function () {
            console.log('getUserMedia successfully');
            _this.localStream.play('agora_local');
            _this.agoraService.client.publish(_this.localStream, 
            // tslint:disable-next-line:only-arrow-functions
            function (err) {
                console.log('Publish local stream error: ' + err);
            });
            _this.agoraService.client.on('stream-published', 
            // tslint:disable-next-line:only-arrow-functions
            function (evt) {
                console.log('Publish local stream successfully');
            });
        }, 
        // tslint:disable-next-line:only-arrow-functions
        function (err) {
            console.log('getUserMedia failed', err);
        });
        this.agoraService.client.on('error', function (err) {
            console.log('Got error msg:', err.reason);
            if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
                _this.agoraService.client.renewChannelKey('', function () {
                    console.log('Renew channel key successfully');
                }, function (err) {
                    console.log('Renew channel key failed: ', err);
                });
            }
        });
        this.agoraService.client.on('stream-added', function (evt) {
            var stream = evt.stream;
            _this.agoraService.client.subscribe(stream, function (err) {
                console.log('Subscribe stream failed', err);
            });
        });
        this.agoraService.client.on('stream-subscribed', function (evt) {
            var stream = evt.stream;
            if (!_this.remoteCalls.includes("agora_remote" + stream.getId())) {
                _this.remoteCalls.push("agora_remote" + stream.getId());
                setTimeout(function () { return stream.play("agora_remote" + stream.getId()); }, 2000);
            }
        });
        this.agoraService.client.on('stream-removed', function (evt) {
            var stream = evt.stream;
            stream.stop();
            _this.remoteCalls = _this.remoteCalls.filter(function (call) { return call !== "#agora_remote" + stream.getId(); });
            console.log("Remote stream is removed " + stream.getId());
        });
        this.agoraService.client.on('peer-leave', function (evt) {
            var stream = evt.stream;
            if (stream) {
                stream.stop();
                _this.remoteCalls = _this.remoteCalls.filter(function (call) { return call === "#agora_remote" + stream.getId(); });
                console.log(evt.uid + " left from this channel");
            }
        });
    };
    VoiceCallingComponent.prototype.ngOnInit = function () {
    };
    VoiceCallingComponent.ctorParameters = function () { return [
        { type: angular_agora_rtc__WEBPACK_IMPORTED_MODULE_2__["AngularAgoraRtcService"] }
    ]; };
    VoiceCallingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-voice-calling',
            template: __webpack_require__(/*! raw-loader!./voice-calling.component.html */ "./node_modules/raw-loader/index.js!./src/app/voice-calling/voice-calling.component.html"),
            styles: [__webpack_require__(/*! ./voice-calling.component.scss */ "./src/app/voice-calling/voice-calling.component.scss")]
        })
    ], VoiceCallingComponent);
    return VoiceCallingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBM1YP4sLqDIVPaeyFnQVYuCVrjwkgvRx8',
        authDomain: 'itrw322-60f9e.firebaseapp.com',
        databaseURL: 'https://itrw322-60f9e.firebaseio.com',
        projectId: 'itrw322-60f9e',
        storageBucket: '',
        messagingSenderId: '163571698105',
        appId: '1:163571698105:web:d039e4401487dc96'
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Louis Scheepers\Desktop\ITRW 322\test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map