"use strict";
exports.__esModule = true;
exports.GlobalConstants = void 0;
var GlobalConstants = /** @class */ (function () {
    function GlobalConstants() {
    }
    GlobalConstants.APP_NAME = 'NMS Cinemas';
    GlobalConstants.SHOW_NAMES = ['Morning Show', 'Matinee', 'First Show', 'Second Show'];
    GlobalConstants.ALL_GENERS = ['Comedy', 'Romance', 'Action', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Crime', 'War'];
    GlobalConstants.ALL_LANGUAGES = ['English', 'Hindi', 'Telugu', 'Kanada', 'Tamil', 'Malayalam', 'Urdu', 'Marathi', 'Punjabi'];
    GlobalConstants.HALL_SAFETIES = ['Thermal Scanning', 'Contactless Security ChecK', 'Hand Sanitizers Available',
        'Sanitization Before Every Show', 'In-Cinema Social Distancing',
        'Contactless Food Service', 'Packaged Food and Beverage', 'Daily Temperature Checks for Staff',
        'Deep Cleaning of Restrooms', 'Limited Occupancy In Restrooms', 'Sanitized / Sterilized 3D Glasses'];
    GlobalConstants.HALL_FACILITIES = ['MTicket', 'Wheel Chair Facility', 'Recliner Seats', 'Parking Facility', 'Food Court', 'Ticket Cancellation', 'f & B'];
    GlobalConstants.ROOT_URL = 'http://34.204.2.214:5555/my-movie-plan';
    GlobalConstants.REGISTER_URL = GlobalConstants.ROOT_URL + "/user/sign-up";
    GlobalConstants.CHECK_UNIQUENESS_URL = GlobalConstants.ROOT_URL + "/user/check";
    GlobalConstants.UPDATE_USER_URL = GlobalConstants.ROOT_URL + "/user/update";
    GlobalConstants.GET_LOGGED_IN_USER_URL = GlobalConstants.ROOT_URL + "/user/get-user";
    GlobalConstants.AUTHENTICATE_URL = GlobalConstants.ROOT_URL + "/user/authenticate";
    GlobalConstants.UNIQUE_USER_URL = GlobalConstants.ROOT_URL + "/user/check";
    GlobalConstants.FORGOT_PASSWORD_URL = GlobalConstants.ROOT_URL + "/user/forgot-password";
    GlobalConstants.AUDITORIUM_URL = GlobalConstants.ROOT_URL + "/auditorium";
    GlobalConstants.GET_ALL_AUDITORIUMS_URL = GlobalConstants.ROOT_URL + "/auditorium/all";
    GlobalConstants.ADD_AUDITORIUM_URL = GlobalConstants.ROOT_URL + "/auditorium/add";
    GlobalConstants.UPDATE_AUDITORIUM_URL = GlobalConstants.ROOT_URL + "/auditorium/update";
    GlobalConstants.DELETE_AUDITORIUM_URL = GlobalConstants.ROOT_URL + "/auditorium/delete";
    GlobalConstants.MOVIE_URL = GlobalConstants.ROOT_URL + "/movie";
    GlobalConstants.NOW_PLAYING_AND_UP_COMING_MOVIES_URL = GlobalConstants.MOVIE_URL + "/now-playing-up-coming";
    GlobalConstants.NOW_PLAYING_MOVIES_URL = GlobalConstants.MOVIE_URL + "/now-playing";
    GlobalConstants.UP_COMING_MOVIES_URL = GlobalConstants.MOVIE_URL + "/up-coming";
    GlobalConstants.NOT_PLAYING_MOVIES_URL = GlobalConstants.MOVIE_URL + "/not-playing";
    GlobalConstants.GET_ALL_MOVIES_URL = GlobalConstants.ROOT_URL + "/movie/all";
    GlobalConstants.ADD_MOVIE_URL = GlobalConstants.ROOT_URL + "/movie/add";
    GlobalConstants.UPDATE_MOVIE_URL = GlobalConstants.ROOT_URL + "/movie/update";
    GlobalConstants.DELETE_MOVIE_URL = GlobalConstants.ROOT_URL + "/movie/delete";
    GlobalConstants.SHOW_URL = GlobalConstants.ROOT_URL + "/show";
    GlobalConstants.MOVIESHOWS_URL = GlobalConstants.ROOT_URL + "/movie-show";
    GlobalConstants.NOW_PLAYING_AND_UP_COMING_MOVIE_SHOWS_URL = GlobalConstants.ROOT_URL + "/movie-show/now-playing-up-coming";
    GlobalConstants.NOW_PLAYING_MOVIE_SHOWS_URL = GlobalConstants.MOVIESHOWS_URL + "/now-playing";
    GlobalConstants.UP_COMING_MOVIE_SHOWS_URL = GlobalConstants.MOVIESHOWS_URL + "/up-coming";
    GlobalConstants.NOT_PLAYING_MOVIE_SHOWS_URL = GlobalConstants.MOVIESHOWS_URL + "/not-playing";
    GlobalConstants.BOOKING_URL = GlobalConstants.ROOT_URL + "/booking";
    return GlobalConstants;
}());
exports.GlobalConstants = GlobalConstants;
