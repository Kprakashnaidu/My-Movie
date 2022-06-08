"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForgotPasswordComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(_fb, _auth, _validator, _userService, _router) {
        this._fb = _fb;
        this._auth = _auth;
        this._validator = _validator;
        this._userService = _userService;
        this._router = _router;
        this.showAlert$ = new rxjs_1.BehaviorSubject(false);
        this.alertDanger$ = new rxjs_1.BehaviorSubject(false);
        this.alertMessage$ = new rxjs_1.BehaviorSubject('');
        this.hidePassword = true;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        if (this._userService.isLoggedIn())
            this._router.navigate(['/home'], { queryParams: { 'logged-in': true } });
        this.forgotPasswordForm = this._fb.group({
            username: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(4)], this._validator.isEmailOrMobilePresent),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(4)])
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "username", {
        get: function () {
            return this.forgotPasswordForm.get('username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ForgotPasswordComponent.prototype, "usernameErrors", {
        get: function () {
            var _a;
            var username = this.forgotPasswordForm.get('username');
            if (username === null || username === void 0 ? void 0 : username.hasError('required'))
                return 'Username cannot be empty';
            else if (username === null || username === void 0 ? void 0 : username.hasError('present'))
                return "Username doesn't exists";
            else if (username === null || username === void 0 ? void 0 : username.hasError('minlength'))
                return "Username should at-least be " + ((_a = username === null || username === void 0 ? void 0 : username.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength) + " characters";
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ForgotPasswordComponent.prototype, "passwordErrors", {
        get: function () {
            var _a;
            var password = this.forgotPasswordForm.get('password');
            if (password === null || password === void 0 ? void 0 : password.hasError('required'))
                return 'Password cannot be empty';
            else if (password === null || password === void 0 ? void 0 : password.hasError('minlength'))
                return "Password should at-least be " + ((_a = password === null || password === void 0 ? void 0 : password.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength) + " characters";
            return '';
        },
        enumerable: false,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this._auth.forgotPassword(this.forgotPasswordForm.value)
            .subscribe(function (res) {
            _this.showAlert$.next(true);
            _this.alertDanger$.next(false);
            _this.alertMessage$.next(res.message);
            if (res.statusCode == 200)
                _this.passwordForm.resetForm();
        }, function (err) {
            _this.showAlert$.next(true);
            _this.alertDanger$.next(true);
            _this.alertMessage$.next('Something went wrong');
        });
    };
    __decorate([
        core_1.ViewChild(forms_1.FormGroupDirective)
    ], ForgotPasswordComponent.prototype, "passwordForm");
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.css']
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
