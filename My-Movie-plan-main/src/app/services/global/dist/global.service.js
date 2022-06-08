"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.GlobalService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var GlobalService = /** @class */ (function () {
    function GlobalService(_service) {
        this._service = _service;
        this.auditoriums = [];
        this.movies = [];
        this.movieShows = [];
        this.nowPlayingMovies = [];
        this.upComingMovies = [];
    }
    GlobalService.prototype.getAllAuditoriums = function () {
        var _this = this;
        if (!this.auditoriums || this.auditoriums.length < 1) {
            console.warn("Calling All Auditoriums");
            return this._service.getAllAuditoriums().pipe(operators_1.map(function (halls) {
                _this.auditoriums = halls;
                console.table(_this.auditoriums);
                return _this.auditoriums;
            }));
        }
        else
            return rxjs_1.of(this.auditoriums);
    };
    GlobalService.prototype.getAllMovies = function () {
        var _this = this;
        if (!this.movies || this.movies.length < 1) {
            console.warn("Calling All Movies");
            return this._service.getAllMovies().pipe(operators_1.map(function (movies) {
                _this.movies = movies;
                return _this.movies;
            }));
        }
        else
            return rxjs_1.of(this.movies);
    };
    GlobalService.prototype.getAllMovieShows = function () {
        var _this = this;
        if (!this.movieShows || this.movieShows.length < 1) {
            console.warn("Calling All Movie Shows");
            return this._service.getAllMovieShows().pipe(operators_1.map(function (m_shows) {
                _this.movieShows = m_shows;
                return _this.movieShows;
            }));
        }
        else
            return rxjs_1.of(this.movieShows);
    };
    GlobalService.prototype.getAllUpComingMovies = function () {
        var _this = this;
        return this._service.getAllUpComingMovieShows().pipe(operators_1.map(function (m_shows) {
            _this.upComingMovies = [];
            m_shows.forEach(function (m_show) {
                _this.getAllMovies().subscribe(function (movies) {
                    _this.upComingMovies.push(movies.find(function (movie) { return movie.id == m_show.movieId; }));
                });
            });
            console.error(_this.upComingMovies);
            return _this.upComingMovies;
        }));
    };
    GlobalService.prototype.getAllNowPlayingMovies = function () {
        var _this = this;
        return this._service.getAllNowPlayingMovieShows().pipe(operators_1.map(function (m_shows) {
            _this.nowPlayingMovies = [];
            m_shows.forEach(function (m_show) {
                _this.getAllMovies().subscribe(function (movies) {
                    _this.nowPlayingMovies.push(movies.find(function (movie) { return movie.id == m_show.movieId; }));
                });
            });
            return _this.nowPlayingMovies;
        }));
    };
    GlobalService.prototype.getAllNowPlayingAndUpComing = function () {
        var _this = this;
        return this._service.getAllNowPlayingAndUpComingMovieShows().pipe(operators_1.map(function (m_shows) {
            _this.nowPlayingMovies = [];
            m_shows.forEach(function (m_show) {
                _this.getAllMovies().subscribe(function (movies) {
                    _this.nowPlayingMovies.push(movies.find(function (movie) { return movie.id == m_show.movieId; }));
                });
            });
            return _this.nowPlayingMovies;
        }));
    };
    GlobalService.prototype.getFewNowPlayingMovies = function () {
        var _this = this;
        return this._service.getFewNowPlayingMovieShows().pipe(operators_1.map(function (m_shows) {
            _this.nowPlayingMovies = [];
            m_shows.forEach(function (m_show) {
                _this.getAllMovies().subscribe(function (movies) {
                    _this.nowPlayingMovies.push(movies.find(function (movie) { return movie.id == m_show.movieId; }));
                });
            });
            return _this.nowPlayingMovies;
        }));
    };
    GlobalService.prototype.getFewUpComingMovies = function () {
        var _this = this;
        return this._service.getFewUpComingMovieShows().pipe(operators_1.map(function (m_shows) {
            _this.nowPlayingMovies = [];
            m_shows.forEach(function (m_show) {
                _this.getAllMovies().subscribe(function (movies) {
                    _this.nowPlayingMovies.push(movies.find(function (movie) { return movie.id == m_show.movieId; }));
                });
            });
            return _this.nowPlayingMovies;
        }));
    };
    GlobalService.prototype.addMovie = function (movie) {
        this.movies.push(movie);
        console.table(this.movies);
    };
    GlobalService.prototype.addAuditorium = function (auditorium) {
        this.auditoriums.push(auditorium);
        console.table(this.auditoriums);
    };
    GlobalService.prototype.addShow = function (auditoriumId, show) {
        var _a;
        var shows = (_a = this.auditoriums.find(function (hall) { return hall.id == auditoriumId; })) === null || _a === void 0 ? void 0 : _a.shows;
        if (!shows)
            shows = [];
        shows.push(show);
        console.table(shows);
    };
    GlobalService.prototype.addMovieShows = function (auditoriumId, showId, movieShow) {
        var _a, _b;
        var m_shows = (_b = (_a = this.auditoriums.find(function (hall) { return hall.id == auditoriumId; })) === null || _a === void 0 ? void 0 : _a.shows.find(function (show) { return show.id == showId; })) === null || _b === void 0 ? void 0 : _b.movieShows;
        if (!m_shows)
            m_shows = [];
        m_shows.push(movieShow);
        console.table(m_shows);
    };
    GlobalService.prototype.addBooking = function (auditoriumId, showId, movieShowId, booking) {
        var _a, _b, _c, _d;
        var bookings = (_d = (_c = (_b = (_a = this.auditoriums
            .find(function (hall) { return hall.id == auditoriumId; })) === null || _a === void 0 ? void 0 : _a.shows.find(function (show) { return show.id == showId; })) === null || _b === void 0 ? void 0 : _b.movieShows) === null || _c === void 0 ? void 0 : _c.find(function (m_show) { return m_show.id == movieShowId; })) === null || _d === void 0 ? void 0 : _d.bookings;
        bookings.push(booking);
        console.table(bookings);
    };
    GlobalService.prototype.getAuditoriumNames = function () {
        return this.getAllAuditoriums().pipe(operators_1.map(function (halls) {
            return halls ? __spreadArrays(new Set(halls.map(function (hall) { return hall.name; }))) : [];
        }));
    };
    GlobalService.prototype.getMovieNames = function () {
        return this.getAllMovies().pipe(operators_1.map(function (movies) {
            return movies ? __spreadArrays(new Set(movies.map(function (movie) { return movie.name; }))) : [];
        }));
    };
    GlobalService.prototype.setTempSelectMembers = function (tempSelectMembers) {
        this.tempSelectMembers = tempSelectMembers;
    };
    GlobalService.prototype.getTempSelectMembers = function () {
        return this.tempSelectMembers;
    };
    GlobalService.prototype.setTempScreen = function (tempScreen) {
        this.tempScreen = tempScreen;
    };
    GlobalService.prototype.getTempScreen = function () {
        return this.tempScreen;
    };
    GlobalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;
