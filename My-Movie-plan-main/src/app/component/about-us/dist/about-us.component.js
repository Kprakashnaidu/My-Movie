"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutUsComponent = void 0;
var core_1 = require("@angular/core");
var global_constants_1 = require("src/app/commons/global-constants");
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.title = global_constants_1.GlobalConstants.APP_NAME;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-about-us',
            templateUrl: './about-us.component.html',
            styleUrls: ['./about-us.component.css']
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;
