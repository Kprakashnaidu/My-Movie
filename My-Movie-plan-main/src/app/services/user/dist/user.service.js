"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    UserService.prototype.getUser = function () {
        var user_email = localStorage.getItem('user-email');
        var user_role = localStorage.getItem('user-role');
        var user_id = localStorage.getItem('user-id');
        // if (this.getToken() != null && user_email == null)
        //   this.setToken(this.getToken()!);
        if (user_email && user_role && user_id) {
            var user = {
                email: user_email,
                userRole: user_role,
                id: user_id
            };
            return user;
        }
        else
            return null;
    };
    UserService.prototype.setUser = function (user) {
        localStorage.setItem('user-email', user.email);
        localStorage.setItem('user-role', user.userRole);
        localStorage.setItem('user-id', user.id);
    };
    UserService.prototype.removeUser = function () {
        localStorage.removeItem('user-email');
        localStorage.removeItem('user-role');
        localStorage.removeItem('user-id');
        return true;
    };
    UserService.prototype.isLoggedIn = function () {
        return !!this.getUser();
    };
    UserService.prototype.isAdmin = function () {
        var user = this.getUser();
        return !!(user === null || user === void 0 ? void 0 : user.userRole) && ((user === null || user === void 0 ? void 0 : user.userRole) == 'ROLE_ADMIN' || (user === null || user === void 0 ? void 0 : user.userRole) == 'ROLE_SUPER_ADMIN');
    };
    UserService.prototype.setToken = function (token) {
        var _this = this;
        console.warn('from set Token');
        localStorage.setItem('token', token);
        this._authService.getLoggedInUser().subscribe(function (user) {
            _this.setUser(user);
        });
        return true;
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        // if (!token) {
        //   this._router.navigate(['/user/login'], { queryParams: { 'wrong': true } });
        //   return;
        // }
        return token;
    };
    UserService.prototype.removeToken = function () {
        console.warn('from remove token');
        localStorage.removeItem('token');
        this.removeUser();
        return true;
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
