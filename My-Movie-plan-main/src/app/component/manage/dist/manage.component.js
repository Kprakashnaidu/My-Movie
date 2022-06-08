"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManageComponent = void 0;
var core_1 = require("@angular/core");
var util_1 = require("src/app/classes/util/util");
var add_movie_to_show_form_component_1 = require("../templates/add-movie-to-show-form/add-movie-to-show-form.component");
var show_form_component_1 = require("../templates/show-form/show-form.component");
var ManageComponent = /** @class */ (function () {
    function ManageComponent(_router, _dialog, _service, _globalService, _alertService, _activeRoute) {
        this._router = _router;
        this._dialog = _dialog;
        this._service = _service;
        this._globalService = _globalService;
        this._alertService = _alertService;
        this._activeRoute = _activeRoute;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalService.getAllAuditoriums()
            .subscribe(function (halls) { return _this.allAuditoriums = halls; });
        this._globalService.getAllMovies()
            .subscribe(function (movies) { return _this.allMovies = movies; });
        this._activeRoute.queryParams
            .subscribe(function (param) {
            if (param['movie-added'])
                _this._alertService.postionAlert('Movie Added');
            else if (param['auditorium-added'])
                _this._alertService.postionAlert('Auditorium Added');
            // else if (param['show-added'])
            //   this._alertService.postionAlert('Show Added');
            // else if (param['movie-show-added'])
            //   this._alertService.postionAlert('Movie Show Added');
        });
    };
    ManageComponent.prototype.onCinemaHallSelect = function (auditoriumId) {
        var _a;
        this.selectedCinemaHallId = auditoriumId;
        this.selectedShows = (_a = this.allAuditoriums.find(function (hall) { return hall.id == auditoriumId; })) === null || _a === void 0 ? void 0 : _a.shows;
        this.selectedShowId = 0;
        this.selectedMovieShows = [];
    };
    ManageComponent.prototype.onShowSelect = function (showId) {
        var _a;
        this.selectedShowId = showId;
        this.selectedMovieShows = (_a = this.selectedShows.find(function (show) { return show.id == showId; })) === null || _a === void 0 ? void 0 : _a.movieShows;
    };
    ManageComponent.prototype.getShowMovieName = function (movieId) {
        var _a;
        return (_a = this.allMovies.find(function (movie) { return movie.id == movieId; })) === null || _a === void 0 ? void 0 : _a.name;
    };
    ManageComponent.prototype.getShowMovieLanguage = function (movieId) {
        var _a;
        return (_a = this.allMovies.find(function (movie) { return movie.id == movieId; })) === null || _a === void 0 ? void 0 : _a.language;
    };
    ManageComponent.prototype.getMovieImage = function (movieId) {
        var _a;
        return (_a = this.allMovies.find(function (movie) { return movie.id == movieId; })) === null || _a === void 0 ? void 0 : _a.image;
    };
    ManageComponent.prototype.onAddCinemaHall = function () {
        this._router.navigate(['./add-auditorium']);
    };
    ManageComponent.prototype.onAddMovie = function () {
        this._router.navigate(['./add-movie']);
    };
    ManageComponent.prototype.onAddShow = function () {
        var _this = this;
        var dialog = this._dialog.open(show_form_component_1.ShowFormComponent, {
            width: '80%',
            data: this.selectedShows
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result === null || result === void 0 ? void 0 : result.show) {
                _this._service.addShow(_this.selectedCinemaHallId, result.show)
                    .subscribe(function (res) {
                    _this._globalService.addShow(_this.selectedCinemaHallId, res);
                    _this._alertService.postionAlert('Show Added');
                    // this.selectedShows.push(res);
                }, function (err) { return _this._alertService.postionAlert(err.error.message, 'danger-alert'); });
            }
        }, function (error) { return console.log(error); });
    };
    ManageComponent.prototype.onAddMovieToTheShow = function () {
        var _this = this;
        var _a;
        var movieShows = (_a = this.selectedShows.
            find(function (show) { return show.id == _this.selectedShowId; })) === null || _a === void 0 ? void 0 : _a.movieShows;
        var dialog = this._dialog.open(add_movie_to_show_form_component_1.AddMovieToShowFormComponent, {
            width: '90%',
            data: {
                shows: movieShows,
                movies: this.allMovies
            }
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result === null || result === void 0 ? void 0 : result.movieShow) {
                _this._service.addMovieShow(_this.selectedCinemaHallId, _this.selectedShowId, result.movieShow)
                    .subscribe(function (res) {
                    if (res) {
                        _this._globalService.addMovieShows(_this.selectedCinemaHallId, _this.selectedShowId, res);
                        _this._alertService.postionAlert('Movie Show Added');
                    }
                    // this.selectedShows.find(show => show.id == this.selectedShowId)?.movieShows?.push(res);
                }, function (err) { return _this._alertService.postionAlert(err.error.message, 'danger-alert'); });
            }
        });
    };
    ManageComponent.prototype.formatTime = function (time) {
        return util_1.Util.formatTimeToAmOrPm(time);
    };
    ManageComponent.prototype.onEditCinemaHall = function (auditoriumId) {
        alert("edit " + auditoriumId);
    };
    ManageComponent.prototype.onDeleteCinemaHall = function (auditoriumId) {
        alert("delete " + auditoriumId);
    };
    ManageComponent.prototype.onEditShow = function (showId) {
        alert("edit show " + showId);
    };
    ManageComponent.prototype.onDeleteShow = function (showId) {
        alert("delete show: " + showId);
    };
    ManageComponent.prototype.onEditMovie = function (movieId) {
        alert("edit movie " + movieId);
    };
    ManageComponent.prototype.onDeleteMovie = function (movieId) {
        alert("delete movie " + movieId);
    };
    ManageComponent = __decorate([
        core_1.Component({
            selector: 'app-manage',
            templateUrl: './manage.component.html',
            styleUrls: ['./manage.component.css']
        })
    ], ManageComponent);
    return ManageComponent;
}());
exports.ManageComponent = ManageComponent;
