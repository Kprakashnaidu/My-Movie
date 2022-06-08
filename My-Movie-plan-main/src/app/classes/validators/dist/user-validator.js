"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserValidator = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var UserValidator = /** @class */ (function () {
    function UserValidator(_service) {
        this._service = _service;
    }
    UserValidator.required = function (control) {
        return control.value.length <= 0 ? { 'required': true } : null;
    };
    Object.defineProperty(UserValidator.prototype, "uniqueEmail", {
        get: function () {
            var _this = this;
            return function (control) {
                return _this._service.checkUniqueness(control.value)
                    .pipe(operators_1.map(function (res) {
                    console.log(res.token);
                    return res.token ? { unique: true } : null;
                }));
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserValidator.prototype, "uniqueMobile", {
        get: function () {
            var _this = this;
            return function (control) {
                return _this._service.checkUniqueness(control.value)
                    .pipe(operators_1.map(function (res) {
                    console.log(res.token);
                    return res.token ? { unique: true } : null;
                }));
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserValidator.prototype, "isEmailOrMobilePresent", {
        get: function () {
            var _this = this;
            return function (control) {
                return _this._service.checkUniqueness(control.value)
                    .pipe(operators_1.map(function (res) {
                    console.log(res.token);
                    return res.token ? null : { present: true };
                }));
            };
        },
        enumerable: false,
        configurable: true
    });
    UserValidator = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserValidator);
    return UserValidator;
}());
exports.UserValidator = UserValidator;
