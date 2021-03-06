"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var application_1 = require("src/app/interfaces/application");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_authService) {
        this._authService = _authService;
        this.user = new rxjs_1.BehaviorSubject(new application_1.UserImpl());
        this.user$ = this.user.asObservable();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getLoggedInUser().subscribe(function (user) { return _this.user.next(user); });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
