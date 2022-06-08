"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_fb, _authService, _userService, _router, _activeRoute) {
        this._fb = _fb;
        this._authService = _authService;
        this._userService = _userService;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this.showAlert$ = new rxjs_1.BehaviorSubject(false);
        this.alertDanger$ = new rxjs_1.BehaviorSubject(false);
        this.alertMessage$ = new rxjs_1.BehaviorSubject('');
        this.hidePassword = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        this.redirect = (_a = window.history.state) === null || _a === void 0 ? void 0 : _a.redirect;
        // console.log(this._globalService.isLoggedIn());
        if (this._userService.isLoggedIn())
            this._router.navigate(['/home'], { queryParams: { 'logged-in': true } });
        this._activeRoute.queryParams
            .subscribe(function (param) {
            if (param['sign-up']) {
                _this.showAlert$.next(true);
                _this.alertDanger$.next(false);
                _this.alertMessage$.next('Registration successful. Please login');
            }
            else if (param['logout']) {
                _this.showAlert$.next(true);
                _this.alertDanger$.next(false);
                _this.alertMessage$.next('Logout successful.');
            }
            else if (param['booking']) {
                _this.showAlert$.next(true);
                _this.alertDanger$.next(true);
                _this.alertMessage$.next('Please Login to book tickets.');
            }
            else if (param['wrong']) {
                _this.showAlert$.next(true);
                _this.alertDanger$.next(true);
                _this.alertMessage$.next('Something went wrong please login.');
            }
            else if (param['error']) {
                _this.showAlert$.next(true);
                _this.alertDanger$.next(true);
                _this.alertMessage$.next(param['error']);
            }
            else if (param['login']) {
                _this.showAlert$.next(true);
                _this.alertDanger$.next(true);
                _this.alertMessage$.next(param['error']);
            }
        });
        this.loginForm = this._fb.group({
            username: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(4)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(4)])
        });
    };
    Object.defineProperty(LoginComponent.prototype, "usernameErrors", {
        get: function () {
            var _a;
            var username = this.loginForm.get('username');
            if (username === null || username === void 0 ? void 0 : username.hasError('required'))
                return 'Username cannot be empty';
            else if (username === null || username === void 0 ? void 0 : username.hasError('minlength'))
                return "Username should at-least be " + ((_a = username === null || username === void 0 ? void 0 : username.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength) + " characters";
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "passwordErrors", {
        get: function () {
            var _a;
            var password = this.loginForm.get('password');
            if (password === null || password === void 0 ? void 0 : password.hasError('required'))
                return 'Password cannot be empty';
            else if (password === null || password === void 0 ? void 0 : password.hasError('minlength'))
                return "Password should at-least be " + ((_a = password === null || password === void 0 ? void 0 : password.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength) + " characters";
            return '';
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.valid)
            this._authService.loginUser(this.loginForm.value)
                .subscribe(function (res) {
                if (res.token)
                    if (_this._userService.setToken(res.token))
                        _this._router.navigate([_this.redirect ? _this.redirect : '/home'], { queryParams: { 'login': true } });
                    else
                        _this._router.navigate(['/home'], { queryParams: { 'logged-in': true } });
            }, function (err) {
                _this.alertMessage$.next(err);
                console.warn(err);
                _this.showAlert$.next(true);
                _this.alertDanger$.next(true);
            });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
