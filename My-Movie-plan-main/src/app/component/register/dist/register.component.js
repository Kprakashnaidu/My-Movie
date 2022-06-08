"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_fb, _router, _auth, _validator, _userService) {
        this._fb = _fb;
        this._router = _router;
        this._auth = _auth;
        this._validator = _validator;
        this._userService = _userService;
        this.showAlert$ = new rxjs_1.BehaviorSubject(false);
        this.alertDanger$ = new rxjs_1.BehaviorSubject(false);
        this.alertMessage$ = new rxjs_1.BehaviorSubject('');
        this.hidePassword = true;
        this.genders = [
            { name: 'Male', selected: true },
            { name: 'Female', selected: false }
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this._userService.isLoggedIn())
            this._router.navigate(['/home'], { queryParams: { 'logged-in': true } });
        this.registerForm = this._fb.group({
            name: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(20),
                forms_1.Validators.pattern('^[a-zA-Z ]+$')
            ]),
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(20),
                forms_1.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
            ], this._validator.uniqueEmail),
            password: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(50),
            ]),
            mobile: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(10),
                forms_1.Validators.maxLength(10),
                forms_1.Validators.pattern('^[0-9]{10}$')
            ], this._validator.uniqueMobile),
            gender: new forms_1.FormControl('Male', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(20)
            ]),
            terms: new forms_1.FormControl(true, forms_1.Validators.requiredTrue)
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "nameErrors", {
        get: function () {
            var _a, _b;
            var name = this.registerForm.get('name');
            if (name === null || name === void 0 ? void 0 : name.hasError('required'))
                return 'Name cannot be empty';
            else if (name === null || name === void 0 ? void 0 : name.hasError('minlength'))
                return "Name should at-least be " + ((_a = name === null || name === void 0 ? void 0 : name.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength) + " characters";
            else if (name === null || name === void 0 ? void 0 : name.hasError('maxlength'))
                return "Name should not exceed " + ((_b = name === null || name === void 0 ? void 0 : name.errors) === null || _b === void 0 ? void 0 : _b.minlength.requiredLength) + " characters";
            else if (name === null || name === void 0 ? void 0 : name.hasError('pattern'))
                return 'Invalid Name';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "emailErrors", {
        get: function () {
            var _a, _b;
            var email = this.registerForm.get('email');
            if (email === null || email === void 0 ? void 0 : email.hasError('required'))
                return 'Email cannot be empty';
            else if (email === null || email === void 0 ? void 0 : email.hasError('minlength'))
                return "Email should at-least be " + ((_a = email === null || email === void 0 ? void 0 : email.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength) + " characters";
            else if (email === null || email === void 0 ? void 0 : email.hasError('maxlength'))
                return "Email should not exceed " + ((_b = email === null || email === void 0 ? void 0 : email.errors) === null || _b === void 0 ? void 0 : _b.minlength.requiredLength) + " characters";
            else if (email === null || email === void 0 ? void 0 : email.hasError('email'))
                return 'Invalid Email';
            else if (email === null || email === void 0 ? void 0 : email.hasError('unique'))
                return 'Email already exists';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwordErrors", {
        get: function () {
            var _a, _b;
            var password = this.registerForm.get('password');
            if (password === null || password === void 0 ? void 0 : password.hasError('required'))
                return 'Password cannot be empty';
            else if (password === null || password === void 0 ? void 0 : password.hasError('minlength'))
                return "Password should at-least be " + ((_a = password === null || password === void 0 ? void 0 : password.errors) === null || _a === void 0 ? void 0 : _a.minlength.requiredLength) + " characters";
            else if (password === null || password === void 0 ? void 0 : password.hasError('maxlength'))
                return "Password should not exceed " + ((_b = password === null || password === void 0 ? void 0 : password.errors) === null || _b === void 0 ? void 0 : _b.minlength.requiredLength) + " characters";
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "mobileErrors", {
        get: function () {
            var _a, _b, _c, _d;
            var mobile = this.registerForm.get('mobile');
            if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('required'))
                return 'Mobile cannot be empty';
            else if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('minlength'))
                return "Mobile should at-least be " + ((_b = (_a = mobile === null || mobile === void 0 ? void 0 : mobile.errors) === null || _a === void 0 ? void 0 : _a.minlength) === null || _b === void 0 ? void 0 : _b.requiredLength) + " characters";
            else if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('maxlength'))
                return "Mobile should not exceed " + ((_d = (_c = mobile === null || mobile === void 0 ? void 0 : mobile.errors) === null || _c === void 0 ? void 0 : _c.maxlength) === null || _d === void 0 ? void 0 : _d.requiredLength) + " characters";
            else if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('pattern'))
                return "Invalid mobile number";
            else if (mobile === null || mobile === void 0 ? void 0 : mobile.hasError('unique'))
                return 'Mobile already exists';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "termsErrors", {
        get: function () {
            var terms = this.registerForm.get('terms');
            if ((terms === null || terms === void 0 ? void 0 : terms.hasError('required')) && this.registerForm.touched)
                return 'Please accept terms and conditions';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "mobile", {
        get: function () {
            return this.registerForm.get('mobile');
        },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var sub = this._auth.registerUser(this.registerForm.value)
            .subscribe(function (res) { return _this._router.navigate(['/user/login'], { queryParams: { 'sign-up': true } }); }, function (err) {
            _this.showAlert$.next(true);
            _this.alertDanger$.next(true);
            _this.alertMessage$.next('Something went wrong');
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
