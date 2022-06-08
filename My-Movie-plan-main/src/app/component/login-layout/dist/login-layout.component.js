"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginLayoutComponent = void 0;
var core_1 = require("@angular/core");
var global_constants_1 = require("src/app/commons/global-constants");
var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
        this.title = global_constants_1.GlobalConstants.APP_NAME;
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-login-layout',
            templateUrl: './login-layout.component.html',
            styleUrls: ['./login-layout.component.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated
        })
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());
exports.LoginLayoutComponent = LoginLayoutComponent;
