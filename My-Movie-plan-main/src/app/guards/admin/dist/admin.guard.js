"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminGuard = void 0;
var core_1 = require("@angular/core");
var AdminGuard = /** @class */ (function () {
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    function AdminGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this._userService.isAdmin())
            return true;
        else
            this._router.navigate(['/home'], { queryParams: { 'un-authorized': true } });
        return false;
    };
    AdminGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AdminGuard);
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;
