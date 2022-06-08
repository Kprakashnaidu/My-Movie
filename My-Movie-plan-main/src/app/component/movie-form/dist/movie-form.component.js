"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieFormComponent = void 0;
var keycodes_1 = require("@angular/cdk/keycodes");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var application_validator_1 = require("src/app/classes/validators/application-validator");
var global_constants_1 = require("src/app/commons/global-constants");
var MovieFormComponent = /** @class */ (function () {
    function MovieFormComponent(_fb, _service, _router, _globalService, _alertService) {
        var _this = this;
        this._fb = _fb;
        this._service = _service;
        this._router = _router;
        this._globalService = _globalService;
        this._alertService = _alertService;
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA];
        this.languageField = new forms_1.FormControl();
        this.languages = ['English'];
        this.todayDate = new Date();
        this.filteredLanguages = this.languageField.valueChanges.pipe(operators_1.startWith(null), operators_1.map(function (genre) { return genre ? _this._filter(genre) : _this.allLanguages.slice(); }));
    }
    MovieFormComponent.prototype.areYouSure = function () {
        return confirm('Are you sure to leave the page?');
    };
    MovieFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalService.getMovieNames()
            .subscribe(function (movieNames) { return _this.allMovieNames = movieNames; });
        this.allLanguages = global_constants_1.GlobalConstants.ALL_LANGUAGES;
        this.allGenres = global_constants_1.GlobalConstants.ALL_GENERS;
        this.movieForm = this._fb.group({
            name: new forms_1.FormControl('', [
                forms_1.Validators.required,
                application_validator_1.ApplicationValidator.uniqueMovieName(this.allMovieNames)
            ]),
            release: new forms_1.FormControl('', forms_1.Validators.required),
            image: new forms_1.FormControl('', forms_1.Validators.required),
            bgImage: new forms_1.FormControl('', forms_1.Validators.required),
            caption: new forms_1.FormControl(''),
            story: new forms_1.FormControl('', forms_1.Validators.required),
            duration: new forms_1.FormControl('', forms_1.Validators.required),
            // genres: new FormArray([new FormControl('', Validators.required)]),
            languages: this.languageField,
            genres: new forms_1.FormArray([new forms_1.FormControl('', [forms_1.Validators.required,
                    application_validator_1.ApplicationValidator.validMovieGenre(this.allGenres)])]),
            casts: new forms_1.FormArray([new forms_1.FormGroup({
                    isCast: new forms_1.FormControl('yes'),
                    name: new forms_1.FormControl('', forms_1.Validators.required),
                    role: new forms_1.FormControl('', forms_1.Validators.required),
                    image: new forms_1.FormControl('', forms_1.Validators.required)
                })]),
            crews: new forms_1.FormArray([new forms_1.FormGroup({
                    isCast: new forms_1.FormControl('no'),
                    name: new forms_1.FormControl('', forms_1.Validators.required),
                    role: new forms_1.FormControl('', forms_1.Validators.required),
                    image: new forms_1.FormControl('', forms_1.Validators.required)
                })])
        });
    };
    MovieFormComponent.prototype.addLanguage = function (event) {
        var value = (event.value || '').trim();
        var canAdd = true;
        // Add our genre
        if (!value) {
            canAdd = false;
            this._alertService.defaultAlert('Cannot add empty value');
        }
        if (this.languages.find(function (language) { return language.toLowerCase() == value.toLowerCase(); })) {
            canAdd = false;
            this._alertService.defaultAlert('Language already added');
        }
        if (!this.allLanguages.find(function (language) { return language.toLowerCase() == value.toLowerCase(); })) {
            canAdd = false;
            this._alertService.defaultAlert('Unknown language. Please select language from the list');
        }
        if (canAdd)
            this.languages.push(value);
        // Clear the input value
        // event.chipInput!.clear();
        event.input.value = '';
        this.languageField.setValue(null);
    };
    MovieFormComponent.prototype.removeLanguage = function (genre) {
        if (!(this.languages.length <= 1)) {
            var index = this.languages.indexOf(genre);
            if (index >= 0) {
                this.languages.splice(index, 1);
            }
        }
        else
            this._alertService.defaultAlert('At least one Language must be provided');
    };
    MovieFormComponent.prototype.selectedLanguage = function (event) {
        if (this.allLanguages.find(function (language) { return language.toLowerCase() == event.option.viewValue.toLowerCase(); })) {
            if (!this.languages.find(function (language) { return language.toLowerCase() == event.option.viewValue.toLowerCase(); })) {
                this.languages.push(event.option.viewValue);
                this.languageInput.nativeElement.value = '';
                this.languageField.setValue(null);
            }
            else
                this._alertService.defaultAlert('Language already added');
        }
        else
            this._alertService.defaultAlert('Unknown language. Please select language from the list');
    };
    MovieFormComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allLanguages.filter(function (language) { return language.toLowerCase().indexOf(filterValue) === 0; });
    };
    Object.defineProperty(MovieFormComponent.prototype, "validMovieDetails", {
        get: function () {
            var movie = this.movieForm;
            return (movie.get('name') && movie.get('release') && movie.get('image') &&
                movie.get('bgImage') && movie.get('story') && movie.get('duration'));
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MovieFormComponent.prototype, "nameErrors", {
        get: function () {
            var name = this.movieForm.get('name');
            if (name === null || name === void 0 ? void 0 : name.hasError('required'))
                return 'Name cannot be null';
            else if (name === null || name === void 0 ? void 0 : name.hasError('uniqueName'))
                return 'Movie name already exists';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "releaseErrors", {
        get: function () {
            var release = this.movieForm.get('release');
            if (release === null || release === void 0 ? void 0 : release.hasError('required'))
                return 'Release Date cannot be null';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "storyErrors", {
        get: function () {
            var story = this.movieForm.get('story');
            if (story === null || story === void 0 ? void 0 : story.hasError('required'))
                return 'Story cannot be null';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "durationErrors", {
        get: function () {
            var duration = this.movieForm.get('duration');
            if (duration === null || duration === void 0 ? void 0 : duration.hasError('required'))
                return 'Duration cannot be null';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "imageErrors", {
        get: function () {
            var image = this.movieForm.get('image');
            if (image === null || image === void 0 ? void 0 : image.hasError('required'))
                return 'Image field cannot be null';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "bgImageErrors", {
        get: function () {
            var bgImage = this.movieForm.get('bgImage');
            if (bgImage === null || bgImage === void 0 ? void 0 : bgImage.hasError('required'))
                return 'Background Image cannot be null';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "genres", {
        get: function () {
            return this.movieForm.get('genres');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "crews", {
        get: function () {
            return this.movieForm.get('crews');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieFormComponent.prototype, "casts", {
        get: function () {
            return this.movieForm.get('casts');
        },
        enumerable: false,
        configurable: true
    });
    MovieFormComponent.prototype.addGenre = function () {
        if (this.genres.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields first');
            return;
        }
        this.genres.push(new forms_1.FormControl('', [forms_1.Validators.required,
            application_validator_1.ApplicationValidator.validMovieGenre(this.allGenres),
            application_validator_1.ApplicationValidator.uniqueFacility(this.genres.value)]));
    };
    MovieFormComponent.prototype.removeGenre = function (index) {
        if (this.genres.length <= 1) {
            this._alertService.defaultAlert('At least one Genre must be provided');
            return;
        }
        if (confirm('Do you want to remove the Genre?'))
            this.genres.removeAt(index);
    };
    // addLanguage(): void {
    //   if (this.languages.status == "INVALID") {
    //     this._alertService.defaultAlert('Please complete the above fields first');
    //     return;
    //   }
    //   this.languages.push(new FormControl('', [Validators.required, this._validator.validMovieLanguage]));
    // }
    // removeLanguage(index: number): void {
    //   if (this.languages.length <= 1) {
    //     this._alertService.defaultAlert('At least one language must be provided');
    //     // this._bar.open('At least one language must be provided', 'OK', { duration: 3000 });
    //     return
    //   }
    //   if (confirm('Do you want to remove the Language?'))
    //     this.languages.removeAt(index);
    // }
    MovieFormComponent.prototype.addCrew = function () {
        if (this.crews.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields first');
            return;
        }
        this.crews.push(new forms_1.FormGroup({
            isCast: new forms_1.FormControl('no'),
            name: new forms_1.FormControl('', forms_1.Validators.required),
            role: new forms_1.FormControl('', forms_1.Validators.required),
            image: new forms_1.FormControl('', forms_1.Validators.required)
        }));
    };
    MovieFormComponent.prototype.removeCrew = function (index) {
        if (this.crews.length <= 1) {
            this._alertService.defaultAlert('At least one Crew details must be provided');
            return;
        }
        if (confirm('Do you want to remove the Crew?'))
            this.crews.removeAt(index);
    };
    MovieFormComponent.prototype.addCast = function () {
        if (this.casts.status == "INVALID") {
            this._alertService.defaultAlert('Please complete the above fields first');
            return;
        }
        this.casts.push(new forms_1.FormGroup({
            isCast: new forms_1.FormControl('yes'),
            name: new forms_1.FormControl('', forms_1.Validators.required),
            role: new forms_1.FormControl('', forms_1.Validators.required),
            image: new forms_1.FormControl('', forms_1.Validators.required)
        }));
    };
    MovieFormComponent.prototype.removeCast = function (index) {
        if (this.casts.length <= 1) {
            this._alertService.defaultAlert('At least one Cast details must be provided');
            return;
        }
        if (confirm('Do you want to remove the Cast?'))
            this.casts.removeAt(index);
    };
    MovieFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a;
        var count = 0;
        var movie = this.movieForm.value;
        movie.addedOn = new Date();
        movie.year = (_a = movie.release) === null || _a === void 0 ? void 0 : _a.getFullYear().toString();
        this.languages.forEach(function (language) {
            movie.language = language;
            _this._service.addMovie(movie)
                .subscribe(function (res) { return _this._globalService.addMovie(res); }, function (err) { return _this._alertService.postionAlert(err.error.message, 'danger-alert'); });
            count++;
        });
        if (count >= this.languages.length)
            this._router.navigate(['/admin/manage'], { queryParams: { 'movie-added': true } });
    };
    __decorate([
        core_1.ViewChild('languageInput')
    ], MovieFormComponent.prototype, "languageInput");
    __decorate([
        core_1.ViewChild('auto')
    ], MovieFormComponent.prototype, "matAutocomplete");
    MovieFormComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-form',
            templateUrl: './movie-form.component.html',
            styleUrls: ['./movie-form.component.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated,
            providers: [application_validator_1.ApplicationValidator]
        })
    ], MovieFormComponent);
    return MovieFormComponent;
}());
exports.MovieFormComponent = MovieFormComponent;
// function uniqueMovieName(movieNames: string[]): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: boolean } | null => {
//     return movieNames ? movieNames
//       .find(name => name.toLowerCase() == control.value.toLowerCase())
//       ? { 'uniqueName': true }
//       : null : null;
//   };
// }
