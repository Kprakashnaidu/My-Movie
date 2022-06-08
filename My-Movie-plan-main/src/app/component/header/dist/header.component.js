"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var global_constants_1 = require("src/app/commons/global-constants");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.title = global_constants_1.GlobalConstants.APP_NAME;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(this._userService.getUser());
        this.router = this._router;
        this.service = this._userService;
    };
    HeaderComponent.prototype.onLogout = function () {
        if (confirm('Do you want to logout?')) {
            if (this._userService.removeToken())
                this._router.navigate(['/user/login'], { queryParams: { 'logout': 'true' } });
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
