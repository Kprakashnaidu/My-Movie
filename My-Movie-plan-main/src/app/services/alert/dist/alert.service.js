"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlertService = void 0;
var core_1 = require("@angular/core");
var AlertService = /** @class */ (function () {
    function AlertService(_bar) {
        this._bar = _bar;
    }
    AlertService.prototype.postionAlert = function (message, action, alertClass, duration, verticalPosition, horizontalPosition) {
        if (action === void 0) { action = 'OK'; }
        if (alertClass === void 0) { alertClass = 'success-alert'; }
        if (duration === void 0) { duration = 5000; }
        if (verticalPosition === void 0) { verticalPosition = 'top'; }
        if (horizontalPosition === void 0) { horizontalPosition = 'end'; }
        this._bar.open(message, action, {
            duration: 5000,
            verticalPosition: verticalPosition,
            horizontalPosition: horizontalPosition,
            panelClass: [alertClass]
        });
    };
    AlertService.prototype.defaultAlert = function (message, action, duration) {
        if (action === void 0) { action = 'OK'; }
        if (duration === void 0) { duration = 3000; }
        this._bar.open(message, action, { duration: duration });
    };
    AlertService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
