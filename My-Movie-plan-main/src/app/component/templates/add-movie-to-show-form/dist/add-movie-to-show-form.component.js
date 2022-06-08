"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AddMovieToShowFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var operators_1 = require("rxjs/operators");
var util_1 = require("src/app/classes/util/util");
var AddMovieToShowFormComponent = /** @class */ (function () {
    function AddMovieToShowFormComponent(_fb, _dialog, _data) {
        var _this = this;
        this._fb = _fb;
        this._dialog = _dialog;
        this._data = _data;
        this.movieId = new forms_1.FormControl('', [
            forms_1.Validators.required,
            uniqueName(this._data.shows),
        ]);
        this.range = new forms_1.FormGroup({
            start: new forms_1.FormControl('', forms_1.Validators.required),
            end: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this._dialog.disableClose = true;
        this.filteredMovies = this.movieId.valueChanges.pipe(operators_1.startWith(''), operators_1.map(function (movie) { return (movie ? _this._filterMovies(movie) : _this.movies.slice()); }));
    }
    AddMovieToShowFormComponent.prototype.ngOnInit = function () {
        var _a;
        this.movies = this._data.movies;
        this.movieShows = this._data.shows;
        this.tempEndDate = ((_a = this.movieShows) === null || _a === void 0 ? void 0 : _a.length) > 0 ? util_1.Util.getTomarrow(util_1.Util.findEndDate(this.movieShows.map(function (m_show) { return m_show.end; }))) : new Date();
        this.movieShowForm = this._fb.group({
            movieId: this.movieId,
            range: this.range,
            gold: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{3}$')]),
            silver: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{3}$')]),
            general: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{3}$')])
        });
    };
    Object.defineProperty(AddMovieToShowFormComponent.prototype, "movieIdErrors", {
        get: function () {
            if (this.movieId.hasError('required'))
                return 'Please select a movie';
            else if (this.movieId.hasError('uniqueName'))
                return 'Movie is already screening on this show. select different move';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddMovieToShowFormComponent.prototype, "startDateErrors", {
        get: function () {
            var start = this.range.get('start');
            if (start === null || start === void 0 ? void 0 : start.hasError('required'))
                return 'Start Date cannot be empty';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddMovieToShowFormComponent.prototype, "endDateErrors", {
        get: function () {
            var end = this.range.get('end');
            if (end === null || end === void 0 ? void 0 : end.hasError('required'))
                return 'End date cannot be empty';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddMovieToShowFormComponent.prototype, "goldPriceErrors", {
        get: function () {
            var gold = this.movieShowForm.get('gold');
            if (gold === null || gold === void 0 ? void 0 : gold.hasError('required'))
                return 'Gold section price cannot be empty';
            else if (gold === null || gold === void 0 ? void 0 : gold.hasError('pattern'))
                return 'Price must be between 100 and 999';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddMovieToShowFormComponent.prototype, "silverPriceErrors", {
        get: function () {
            var silver = this.movieShowForm.get('silver');
            if (silver === null || silver === void 0 ? void 0 : silver.hasError('required'))
                return 'Silver section price cannot be empty';
            else if (silver === null || silver === void 0 ? void 0 : silver.hasError('pattern'))
                return 'Price must be between 100 and 999';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddMovieToShowFormComponent.prototype, "generalPriceErrors", {
        get: function () {
            var general = this.movieShowForm.get('general');
            if (general === null || general === void 0 ? void 0 : general.hasError('required'))
                return 'General section price cannot be empty';
            else if (general === null || general === void 0 ? void 0 : general.hasError('pattern'))
                return 'Price must be between 100 and 999';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    AddMovieToShowFormComponent.prototype._filterMovies = function (value) {
        return this.movies.filter(function (movie) { return movie.id == value; });
    };
    AddMovieToShowFormComponent.prototype.onMovieChange = function (event) {
        var _a, _b;
        var releaseDate = (_b = (_a = this.movies) === null || _a === void 0 ? void 0 : _a.find(function (movie) { return movie.id == event.value; })) === null || _b === void 0 ? void 0 : _b.release;
        this.startDate = (new Date(this.tempEndDate) > new Date(releaseDate)) ? this.tempEndDate : releaseDate;
        if (!this.startDate)
            this.startDate = new Date();
    };
    AddMovieToShowFormComponent.prototype.onCancel = function () {
        this._dialog.close();
    };
    AddMovieToShowFormComponent.prototype.onSubmit = function () {
        var values = this.movieShowForm.value;
        var data = {
            movieId: values.movieId,
            start: values.range.start,
            end: values.range.end,
            price: {
                gold: values.gold,
                silver: values.silver,
                general: values.general
            }
        };
        this._dialog.close({ movieShow: data });
    };
    AddMovieToShowFormComponent = __decorate([
        core_1.Component({
            selector: 'app-add-movie-to-show-form',
            templateUrl: './add-movie-to-show-form.component.html',
            styleUrls: ['./add-movie-to-show-form.component.css']
        }),
        __param(2, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], AddMovieToShowFormComponent);
    return AddMovieToShowFormComponent;
}());
exports.AddMovieToShowFormComponent = AddMovieToShowFormComponent;
function uniqueName(movieShows) {
    return function (control) {
        return movieShows ? movieShows.find(function (mShow) { return mShow.movieId == control.value; })
            ? { uniqueName: true }
            : null : null;
    };
}
