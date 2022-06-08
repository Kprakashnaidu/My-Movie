"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var global_constants_1 = require("src/app/commons/global-constants");
var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.registerUser = function (user) {
        return this._http.post(global_constants_1.GlobalConstants.REGISTER_URL, user, { headers: { skip: "true" } });
    };
    AuthService.prototype.checkUniqueness = function (username) {
        return this._http.get(global_constants_1.GlobalConstants.CHECK_UNIQUENESS_URL + "/" + username, { headers: { skip: "true" } });
    };
    AuthService.prototype.loginUser = function (credentials) {
        return this._http.post(global_constants_1.GlobalConstants.AUTHENTICATE_URL, credentials, { headers: { skip: "true" } });
    };
    AuthService.prototype.forgotPassword = function (credentials) {
        return this._http.put(global_constants_1.GlobalConstants.FORGOT_PASSWORD_URL, credentials, { headers: { skip: "true" } });
    };
    AuthService.prototype.updateUser = function (userId, user) {
        return this._http.put(global_constants_1.GlobalConstants.UPDATE_USER_URL + "/" + userId, user);
    };
    AuthService.prototype.getLoggedInUser = function () {
        return this._http.get(global_constants_1.GlobalConstants.GET_LOGGED_IN_USER_URL);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
