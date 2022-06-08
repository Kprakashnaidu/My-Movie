"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApplicationService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var global_constants_1 = require("src/app/commons/global-constants");
var ApplicationService = /** @class */ (function () {
    function ApplicationService(_http) {
        this._http = _http;
    }
    ApplicationService.prototype.getAuditorium = function (auditoriumId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId);
    };
    ApplicationService.prototype.getAllAuditoriums = function () {
        return this._http.get(global_constants_1.GlobalConstants.GET_ALL_AUDITORIUMS_URL);
    };
    ApplicationService.prototype.addAuditorium = function (auditorium) {
        return this._http.post(global_constants_1.GlobalConstants.ADD_AUDITORIUM_URL, auditorium);
    };
    ApplicationService.prototype.updateAuditorium = function (auditorium) {
        return this._http.put(global_constants_1.GlobalConstants.UPDATE_AUDITORIUM_URL, auditorium);
    };
    ApplicationService.prototype.deleteAuditorium = function (auditoriumId) {
        return this._http["delete"](global_constants_1.GlobalConstants.DELETE_AUDITORIUM_URL + "/" + auditoriumId);
    };
    /*
      ================= Movie Service ====================
    */
    ApplicationService.prototype.getMovie = function (movieId) {
        return this._http.get(global_constants_1.GlobalConstants.MOVIE_URL + "/" + movieId, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.getAllNowPlayingAndUpComingMovies = function () {
        return this._http.get(global_constants_1.GlobalConstants.NOW_PLAYING_AND_UP_COMING_MOVIES_URL, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.getAllNowPlayingMovies = function () {
        return this._http.get(global_constants_1.GlobalConstants.NOW_PLAYING_MOVIES_URL, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.getFewNowPlayingMovies = function () {
        var params = new http_1.HttpParams().set('records', '4');
        return this._http.get(global_constants_1.GlobalConstants.NOW_PLAYING_MOVIES_URL, { params: params, headers: { skip: 'true' } });
    };
    ApplicationService.prototype.getFewUpComingMovies = function () {
        var params = new http_1.HttpParams().set('records', '4');
        return this._http.get(global_constants_1.GlobalConstants.UP_COMING_MOVIES_URL, { params: { 'records': '4' }, headers: { skip: 'true' } });
    };
    ApplicationService.prototype.getAllUpComingMovies = function () {
        return this._http.get(global_constants_1.GlobalConstants.UP_COMING_MOVIES_URL, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.getAllNotPlayingMovies = function () {
        return this._http.get(global_constants_1.GlobalConstants.NOT_PLAYING_MOVIES_URL, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.getAllMovies = function () {
        return this._http.get(global_constants_1.GlobalConstants.GET_ALL_MOVIES_URL, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.addMovie = function (movie) {
        return this._http.post(global_constants_1.GlobalConstants.ADD_MOVIE_URL, movie);
    };
    ApplicationService.prototype.updateMovie = function (movie) {
        return this._http.put(global_constants_1.GlobalConstants.UPDATE_MOVIE_URL, movie);
    };
    ApplicationService.prototype.deleteMovie = function (movieId) {
        return this._http["delete"](global_constants_1.GlobalConstants.DELETE_MOVIE_URL + "/" + movieId);
    };
    /*
      ================= Show Service ====================
    */
    ApplicationService.prototype.getShowsByMovieId = function (auditoriumId, movieId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/movie/" + movieId);
    };
    ApplicationService.prototype.getShow = function (showId) {
        return this._http.get(global_constants_1.GlobalConstants.SHOW_URL + "/" + showId);
    };
    ApplicationService.prototype.getAuditoriumShow = function (auditoriumId, showId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId);
    };
    ApplicationService.prototype.getAllShows = function () {
        return this._http.get(global_constants_1.GlobalConstants.SHOW_URL + "/all");
    };
    ApplicationService.prototype.getAllAuditoriumShows = function (auditoriumId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/all");
    };
    ApplicationService.prototype.addShow = function (auditoriumId, show) {
        return this._http.post(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/add", show);
    };
    ApplicationService.prototype.updateShow = function (auditoriumId, show) {
        return this._http.put(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/update", show);
    };
    ApplicationService.prototype.deleteShow = function (showId) {
        return this._http["delete"](global_constants_1.GlobalConstants.SHOW_URL + "/delete/" + showId);
    };
    /*
      ================= Movie Show Service ====================
    */
    ApplicationService.prototype.getAuditoriumsByMovieId = function (movieId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/movie/" + movieId);
    };
    ApplicationService.prototype.getMovieShow = function (movieShowId) {
        return this._http.get(global_constants_1.GlobalConstants.MOVIESHOWS_URL + "/" + movieShowId);
    };
    ApplicationService.prototype.getAuditoriumShowMovieShow = function (auditoriumId, showId, movieShowId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId + "/movie-show/" + movieShowId);
    };
    ApplicationService.prototype.getAllMovieShows = function () {
        return this._http.get(global_constants_1.GlobalConstants.MOVIESHOWS_URL + "/all");
    };
    ApplicationService.prototype.getAllAuditoriumShowMovieShows = function (auditoriumId, showId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId + "/movie-show/all");
    };
    ApplicationService.prototype.addMovieShow = function (auditoriumId, showId, movieShow) {
        return this._http.post(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId + "/movie-show/add", movieShow);
    };
    ApplicationService.prototype.updateMovieShow = function (auditoriumId, showId, movieShow) {
        return this._http.put(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId + "/movie-show/update", movieShow);
    };
    ApplicationService.prototype.deleteMovieShow = function (movieShowId) {
        return this._http["delete"](global_constants_1.GlobalConstants.MOVIESHOWS_URL + "/delete/" + movieShowId);
    };
    /*
      ================= Booking Service ====================
    */
    ApplicationService.prototype.getBooking = function (bookingId) {
        return this._http.get(global_constants_1.GlobalConstants.BOOKING_URL + "/" + bookingId);
    };
    ApplicationService.prototype.getAuditoriumShowMovieShowBooking = function (auditoriumId, showId, movieShowId, bookingId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId + "/movie-show/" + movieShowId + "/booking/" + bookingId);
    };
    ApplicationService.prototype.getAllBookings = function () {
        return this._http.get(global_constants_1.GlobalConstants.BOOKING_URL + "/all");
    };
    ApplicationService.prototype.getAllAuditoriumShowMovieShowBookings = function (auditoriumId, showId, movieShowId) {
        return this._http.get(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId + "/movie-show/" + movieShowId + "/booking/all");
    };
    ApplicationService.prototype.addBooking = function (auditoriumId, showId, movieShowId, booking) {
        return this._http.post(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId + "/movie-show/" + movieShowId + "/booking/add", booking);
    };
    ApplicationService.prototype.updateBooking = function (auditoriumId, showId, movieShowId, booking) {
        return this._http.put(global_constants_1.GlobalConstants.AUDITORIUM_URL + "/" + auditoriumId + "/show/" + showId + "/movie-show/" + movieShowId + "/booking/update", booking);
    };
    ApplicationService.prototype.deleteBooking = function (bookingId) {
        return this._http["delete"](global_constants_1.GlobalConstants.BOOKING_URL + "/delete/" + bookingId);
    };
    ApplicationService.prototype.getAllUserBooking = function (userId) {
        return this._http.get(global_constants_1.GlobalConstants.BOOKING_URL + "/" + userId + "/all");
    };
    /*
      ================= Now Playing, Up Coming and Not Playing Movie Shows Service ====================
    */
    ApplicationService.prototype.getAllNowPlayingAndUpComingMovieShows = function () {
        return this._http.get(global_constants_1.GlobalConstants.NOW_PLAYING_AND_UP_COMING_MOVIE_SHOWS_URL, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.getAllNowPlayingMovieShows = function () {
        return this._http.get(global_constants_1.GlobalConstants.NOW_PLAYING_MOVIE_SHOWS_URL, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.getFewNowPlayingMovieShows = function () {
        var params = new http_1.HttpParams().set('records', '4');
        return this._http.get(global_constants_1.GlobalConstants.NOW_PLAYING_MOVIE_SHOWS_URL, { params: params, headers: { skip: "true" } });
    };
    ApplicationService.prototype.getFewUpComingMovieShows = function () {
        var params = new http_1.HttpParams().set('records', '4');
        return this._http.get(global_constants_1.GlobalConstants.UP_COMING_MOVIE_SHOWS_URL, { params: { 'records': '4' }, headers: { skip: "true" } });
    };
    ApplicationService.prototype.getAllUpComingMovieShows = function () {
        return this._http.get(global_constants_1.GlobalConstants.UP_COMING_MOVIE_SHOWS_URL, { headers: { skip: "true" } });
    };
    ApplicationService.prototype.getAllNotPlayingMovieShows = function () {
        return this._http.get(global_constants_1.GlobalConstants.NOT_PLAYING_MOVIE_SHOWS_URL, { headers: { skip: "true" } });
    };
    // todo: create this endpoint
    ApplicationService.prototype.getAllBookedSeats = function (movieShowId, on) {
        // new Date('Sun May 11,2014').toLocaleDateString('fr-CA')    2014-05-11
        // let params = new HttpParams().set('on', on.toISOString().slice(0, 10));
        // let params = new HttpParams().set('on', o);
        return this._http.get(global_constants_1.GlobalConstants.MOVIESHOWS_URL + "/" + movieShowId + "/booked-seats/" + on.toLocaleDateString('fr-CA'));
    };
    /*
    ================= Booking Details ====================
    */
    ApplicationService.prototype.getBookingDetails = function (bookingId) {
        return this._http.get(global_constants_1.GlobalConstants.BOOKING_URL + "/" + bookingId + "/details");
    };
    ApplicationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApplicationService);
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
