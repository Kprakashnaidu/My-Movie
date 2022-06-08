"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomePageComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var util_1 = require("src/app/classes/util/util");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(_appService, _activeRoute, _alertService, _userService) {
        this._appService = _appService;
        this._activeRoute = _activeRoute;
        this._alertService = _alertService;
        this._userService = _userService;
        this.carousel = new rxjs_1.BehaviorSubject(this.movies);
        this.carousel$ = this.carousel.asObservable();
        this.nowPlaying = new rxjs_1.BehaviorSubject(this.movies);
        this.nowPlaying$ = this.nowPlaying.asObservable();
        this.upComing = new rxjs_1.BehaviorSubject(this.movies);
        this.upComing$ = this.upComing.asObservable();
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activeRoute.queryParams
            .subscribe(function (param) {
            if (param.login)
                _this._alertService.postionAlert('Login Success');
            else if (param['logged-in'])
                _this._alertService.postionAlert('You are already logged in', 'OK', 'danger-alert');
            else if (param['un-authorized'])
                _this._alertService.postionAlert('You are Un-Authorized', 'OK', 'danger-alert');
            else if (param['payment'] == 'false')
                _this._alertService.postionAlert('Payment failed', 'OK', 'danger-alert');
            else if (param['booking'] == 'false')
                _this._alertService.postionAlert('Booking failed', 'OK', 'danger-alert');
        });
        console.log(this._userService.getUser());
        this._appService.getFewNowPlayingMovies().subscribe(function (movies) { return _this.nowPlaying.next(movies); });
        this._appService.getFewUpComingMovies().subscribe(function (movies) { return _this.upComing.next(movies); });
        this._appService.getAllNowPlayingAndUpComingMovies().subscribe(function (movies) { return _this.carousel.next(movies); });
    };
    HomePageComponent.prototype.formatRelease = function (release) {
        if (new Date(release) > new Date())
            return 'Releasing on ' + util_1.Util.formatDate(release);
        return 'Now Playing';
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
        })
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
