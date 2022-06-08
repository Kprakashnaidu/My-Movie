"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApplicationValidator = void 0;
var core_1 = require("@angular/core");
var util_1 = require("../util/util");
var ApplicationValidator = /** @class */ (function () {
    function ApplicationValidator() {
    }
    ApplicationValidator_1 = ApplicationValidator;
    ApplicationValidator.uniqueAuditoriumName = function (auditoriumNames) {
        return function (control) {
            return auditoriumNames ? auditoriumNames
                .find(function (name) { return name.toLowerCase() == control.value.toLowerCase(); })
                ? { 'uniqueName': true }
                : null : null;
        };
    };
    ApplicationValidator.uniqueMovieName = function (movieNames) {
        return function (control) {
            return movieNames ? movieNames
                .find(function (name) { return name.toLowerCase() == control.value.toLowerCase(); })
                ? { 'uniqueName': true }
                : null : null;
        };
    };
    ApplicationValidator.validMovieGenre = function (genres) {
        return function (control) {
            return genres ? genres
                .find(function (genre) { return genre.toLowerCase() == control.value.toLowerCase(); })
                ? null
                : { 'validGenre': true } : null;
        };
    };
    ApplicationValidator.uniqueFacility = function (facilities) {
        return function (control) {
            return facilities ? facilities.find(function (facility) { return facility.toLowerCase() == control.value.toLowerCase(); })
                ? { 'uniqueName': true }
                : null : null;
        };
    };
    ApplicationValidator.uniqueSafeties = function (safeties) {
        return function (control) {
            return safeties ? safeties.find(function (safety) { return safety.toLowerCase() == control.value.toLowerCase(); })
                ? { 'uniqueName': true }
                : null : null;
        };
    };
    ApplicationValidator.uniqueShowName = function (shows) {
        return function (control) {
            return shows ? shows.find(function (show) { return show.name.toLowerCase() == control.value.toLowerCase(); })
                ? { 'uniqueName': true }
                : null : null;
        };
    };
    ApplicationValidator.uniqueShowTime = function (shows) {
        return function (control) {
            var _a;
            if (shows) {
                var isNotValid = false;
                for (var i = 0; i < (shows === null || shows === void 0 ? void 0 : shows.length); i++)
                    if (!ApplicationValidator_1.isTimeDifferenceValid((_a = shows[i]) === null || _a === void 0 ? void 0 : _a.startTime, control.value)) {
                        isNotValid = true;
                        break;
                    }
                return isNotValid ? { 'uniqueTime': true } : null;
            }
            else
                return null;
        };
    };
    ApplicationValidator.isTimeDifferenceValid = function (previous, present) {
        var p_time = util_1.Util.extractTimeAndConvertToNumber(previous);
        var n_time = util_1.Util.extractTimeAndConvertToNumber(present);
        var difference = p_time - n_time;
        return difference >= 10000000 || difference <= -10000000 ? true : false;
    };
    var ApplicationValidator_1;
    ApplicationValidator = ApplicationValidator_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApplicationValidator);
    return ApplicationValidator;
}());
exports.ApplicationValidator = ApplicationValidator;
