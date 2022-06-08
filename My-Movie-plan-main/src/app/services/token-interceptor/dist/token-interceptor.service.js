"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenInterceptorService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var user_service_1 = require("../user/user.service");
var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(_injector, _router) {
        this._injector = _injector;
        this._router = _router;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var userService = this._injector.get(user_service_1.UserService);
        var token = userService.getToken();
        if (req.headers.get('skip') && token) {
            req.headers["delete"]('skip');
            req = this.setToken(req, token);
        }
        else if (!req.headers.get("skip")) {
            req = this.setToken(req, token);
        }
        // return next.handle(req);
        return next.handle(req).pipe(operators_1.catchError(function (err) {
            var _a;
            var error = err || ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) || err.statusText;
            if (error == 'Invalid Token') {
                console.warn(error);
                userService.removeToken();
                _this._router.navigate(['/user/login'], { queryParams: { 'error': "" + error } });
            }
            return rxjs_1.throwError(error);
        }));
    };
    TokenInterceptorService.prototype.setToken = function (req, token) {
        if (!token)
            this._router.navigate(['/user/login'], { queryParams: { 'login': true } });
        return req.clone({
            setHeaders: {
                'Authorization': "Bearer " + token
            }
        });
    };
    TokenInterceptorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());
exports.TokenInterceptorService = TokenInterceptorService;
