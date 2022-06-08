"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuditoriumFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var application_validator_1 = require("src/app/classes/validators/application-validator");
var global_constants_1 = require("src/app/commons/global-constants");
var AuditoriumFormComponent = /** @class */ (function () {
    function AuditoriumFormComponent(_fb, _alertService, _service, _router, _globalService) {
        this._fb = _fb;
        this._alertService = _alertService;
        this._service = _service;
        this._router = _router;
        this._globalService = _globalService;
        this.showNames = global_constants_1.GlobalConstants.SHOW_NAMES;
    }
    AuditoriumFormComponent.prototype.areYouSure = function () {
        return confirm('Are you sure to leave the page?');
    };
    AuditoriumFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalService.getAuditoriumNames()
            .subscribe(function (halls) { return _this.allAuditoriumNames = halls; });
        this.allFacilities = global_constants_1.GlobalConstants.HALL_FACILITIES;
        this.allSafeties = global_constants_1.GlobalConstants.HALL_SAFETIES;
        this.auditoriumForm = this._fb.group({
            name: new forms_1.FormControl('', [
                forms_1.Validators.required,
                uniqueAuditoriumName(this.allAuditoriumNames)
            ]),
            image: new forms_1.FormControl(''),
            email: new forms_1.FormControl('', forms_1.Validators.required),
            customerCareNo: new forms_1.FormControl('', forms_1.Validators.required),
            address: new forms_1.FormControl('', forms_1.Validators.required),
            seatCapacity: new forms_1.FormControl(100, forms_1.Validators.required),
            facilities: new forms_1.FormArray([]),
            safeties: new forms_1.FormArray([]),
            shows: new forms_1.FormArray([])
        });
    };
    Object.defineProperty(AuditoriumFormComponent.prototype, "shows", {
        get: function () {
            return this.auditoriumForm.get('shows');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditoriumFormComponent.prototype, "facilities", {
        get: function () {
            return this.auditoriumForm.get('facilities');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditoriumFormComponent.prototype, "safeties", {
        get: function () {
            return this.auditoriumForm.get('safeties');
        },
        enumerable: false,
        configurable: true
    });
    AuditoriumFormComponent.prototype.addFacility = function () {
        if (this.facilities.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields');
            return;
        }
        this.facilities.push(new forms_1.FormControl('', [forms_1.Validators.required,
            application_validator_1.ApplicationValidator.uniqueFacility(this.facilities.value)]));
    };
    AuditoriumFormComponent.prototype.addSafety = function () {
        if (this.safeties.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields');
            return;
        }
        this.safeties.push(new forms_1.FormControl('', [forms_1.Validators.required,
            application_validator_1.ApplicationValidator.uniqueSafeties(this.safeties.value)]));
    };
    Object.defineProperty(AuditoriumFormComponent.prototype, "nameErrors", {
        get: function () {
            var name = this.auditoriumForm.get('name');
            if (name === null || name === void 0 ? void 0 : name.hasError('required'))
                return "Name cannot be empty";
            else if (name === null || name === void 0 ? void 0 : name.hasError('uniqueName'))
                return "Auditorium already exists";
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditoriumFormComponent.prototype, "addressErrors", {
        get: function () {
            var address = this.auditoriumForm.get('address');
            if (address === null || address === void 0 ? void 0 : address.hasError('required'))
                return 'Address cannot be empty';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditoriumFormComponent.prototype, "emailErrors", {
        get: function () {
            var email = this.auditoriumForm.get('email');
            if (email === null || email === void 0 ? void 0 : email.hasError('required'))
                return 'Email cannot be empty';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditoriumFormComponent.prototype, "customerCareNoErrors", {
        get: function () {
            var customerCareNo = this.auditoriumForm.get('customerCareNo');
            if (customerCareNo === null || customerCareNo === void 0 ? void 0 : customerCareNo.hasError('required'))
                return 'Customer Care cannot be empty';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    AuditoriumFormComponent.prototype.addShow = function () {
        if (this.shows.status == 'INVALID') {
            this._alertService.defaultAlert('Please complete the above fields');
            return;
        }
        this.shows.push(new forms_1.FormGroup({
            name: new forms_1.FormControl('', [forms_1.Validators.required, application_validator_1.ApplicationValidator.uniqueShowName(this.shows.value)]),
            startTime: new forms_1.FormControl('', [forms_1.Validators.required, application_validator_1.ApplicationValidator.uniqueShowTime(this.shows.value)])
        }));
    };
    AuditoriumFormComponent.prototype.removeFacility = function (index) {
        if (confirm("Do you want to remove the Facility: " + (index + 1)))
            this.facilities.removeAt(index);
    };
    AuditoriumFormComponent.prototype.removeSafety = function (index) {
        if (confirm("Do you want to remove the Safety: " + (index + 1)))
            this.safeties.removeAt(index);
    };
    AuditoriumFormComponent.prototype.removeShow = function (index) {
        if (confirm("Do you want to remove the show: " + (index + 1)))
            this.shows.removeAt(index);
    };
    AuditoriumFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this._service.addAuditorium(this.auditoriumForm.value)
            .subscribe(function (res) {
            _this._globalService.addAuditorium(res);
            _this._router.navigate(['/admin/manage'], { queryParams: { 'auditorium-added': true } });
        }, function (err) { return _this._alertService.postionAlert(err.error.message, 'danger-alert'); });
    };
    AuditoriumFormComponent = __decorate([
        core_1.Component({
            selector: 'app-auditorium-form',
            templateUrl: './auditorium-form.component.html',
            styleUrls: ['./auditorium-form.component.css']
        })
    ], AuditoriumFormComponent);
    return AuditoriumFormComponent;
}());
exports.AuditoriumFormComponent = AuditoriumFormComponent;
function uniqueAuditoriumName(auditoriumNames) {
    return function (control) {
        return auditoriumNames ? auditoriumNames
            .find(function (name) { return name.toLowerCase() == control.value.toLowerCase(); })
            ? { 'uniqueName': true }
            : null : null;
    };
}
